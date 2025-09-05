// Vercel Serverless Function: Returns a per-user login link
// Deploy on Vercel so bots/clients can fetch: GET /api/login-link?userId=...&redirect=...
// Optionally POST { userId, email, redirect } as JSON

export default async function handler(req: any, res: any) {
  // Basic CORS for bots and browser clients
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  try {
    const method = (req.method || "GET").toUpperCase();
    const query = req.query || {};
    let userId = query.userId as string | undefined;
    let email = query.email as string | undefined;
    let redirect = query.redirect as string | undefined;

    if (method === "POST") {
      try {
        const body = req.body ?? (await parseJsonBody(req));
        userId = body?.userId ?? userId;
        email = body?.email ?? email;
        redirect = body?.redirect ?? redirect;
      } catch {
        // Ignore parse errors; we'll validate below
      }
    }

    if (!userId && !email) {
      return res.status(400).json({
        error: "bad_request",
        message: "Missing required parameter: userId or email.",
        example: {
          get: "/api/login-link?userId=1234&redirect=/dashboard",
          post: {
            url: "/api/login-link",
            body: { userId: "1234", redirect: "/dashboard" },
          },
        },
      });
    }

    // Base login portal URL. Configure in Vercel Project Settings → Environment Variables.
    const base = process.env.LOGIN_PORTAL_BASE?.trim() || "https://example.com/login";

    // Prefer userId; fall back to email
    const idParam = userId ? `userId=${encodeURIComponent(userId)}` : `email=${encodeURIComponent(email as string)}`;
    const redirectParam = redirect ? `&redirect=${encodeURIComponent(redirect)}` : "";
    const link = `${base}?${idParam}${redirectParam}`;

    return res.status(200).json({
      link,
      expiresIn: 300,
      message: "Provide this link to the user to complete login.",
    });
  } catch (err: any) {
    return res.status(500).json({ error: "internal_error", message: err?.message || "Unexpected error" });
  }
}

async function parseJsonBody(req: any): Promise<any> {
  return new Promise((resolve, reject) => {
    let data = "";
    req.on("data", (chunk: any) => (data += chunk));
    req.on("end", () => {
      try {
        resolve(data ? JSON.parse(data) : {});
      } catch (e) {
        reject(e);
      }
    });
    req.on("error", reject);
  });
}

