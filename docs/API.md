Login Link API

- Endpoint: GET/POST `/api/login-link`
- Purpose: Return a custom, user-specific login link for the caller to present to the user.

Query parameters (GET) or JSON body (POST):
- `userId` (string, optional): Preferred user identifier.
- `email` (string, optional): Alternative identifier if `userId` not available.
- `redirect` (string, optional): Relative or absolute path to return to after login.

Responses:
- 200 OK:
  { "link": "https://<login-base>?userId=1234&redirect=/dashboard", "expiresIn": 300, "message": "Provide this link to the user to complete login." }

- 400 Bad Request:
  { "error": "bad_request", "message": "Missing required parameter: userId or email.", "example": { ... } }

- 500 Internal Error:
  { "error": "internal_error", "message": "..." }

Configuration:
- Set env var `LOGIN_PORTAL_BASE` in Vercel (Project Settings → Environment Variables) to your login portal base, e.g. `https://accounts.example.com/login`.

Unauthorized Error Contract (for your APIs)

When your API detects an unauthenticated user, return a 401 payload that instructs the bot to call the login-link endpoint for that user:

Status: 401 Unauthorized
Body:
{
  "error": "unauthorized",
  "message": "Authentication required.",
  "bot_instructions": "Call the login-link endpoint to obtain the user-specific login URL.",
  "endpoint": "/api/login-link",
  "method": "GET",
  "params": { "userId": "<known-user-id-or-empty>", "redirect": "/" }
}

Notes:
- If you don’t have a `userId`, the bot should attempt `email` if available, otherwise omit and handle 400.
- The bot must open or display the `link` from the 200 response to the user.

Examples

curl (GET):
curl "https://<your-vercel-domain>/api/login-link?userId=1234&redirect=/dashboard"

curl (POST):
curl -X POST "https://<your-vercel-domain>/api/login-link" \
  -H "Content-Type: application/json" \
  -d '{"userId":"1234","redirect":"/dashboard"}'

