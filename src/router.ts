import React, { useCallback, useEffect, useState } from "react";

// Each page's URL. Pages still navigate by key (e.g. setCurrentPage("team")).
export const pagePaths: Record<string, string> = {
  home: "/",
  about: "/about",
  initiatives: "/initiatives",
  team: "/team",
  applications: "/applications",
  contact: "/contact",
};

const pageTitles: Record<string, string> = {
  home: "EEVM | Emory Entrepreneurship & Venture Management",
  about: "About | EEVM",
  initiatives: "Initiatives | EEVM",
  team: "Team | EEVM",
  applications: "Apply | EEVM",
  contact: "Contact | EEVM",
};

const pageFromPath = (path: string) => {
  const clean = path.replace(/\/+$/, "") || "/";
  return Object.keys(pagePaths).find(key => pagePaths[key] === clean) ?? "home";
};

export function usePageRouter() {
  const [page, setPage] = useState(() => pageFromPath(window.location.pathname));

  const navigate = useCallback((next: string) => {
    const path = pagePaths[next] ?? "/";
    if (window.location.pathname !== path) window.history.pushState({}, "", path + window.location.search);
    setPage(pageFromPath(path));
    window.scrollTo({ top: 0 });
  }, []);

  // Back/forward buttons
  useEffect(() => {
    const onPop = () => { setPage(pageFromPath(window.location.pathname)); window.scrollTo({ top: 0 }); };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  useEffect(() => { document.title = pageTitles[page] ?? pageTitles.home; }, [page]);

  return [page, navigate] as const;
}

// Let cmd/ctrl-click open a new tab; otherwise navigate in place
export const linkClick = (navigate: (page: string) => void, page: string) => (e: React.MouseEvent) => {
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
  e.preventDefault();
  navigate(page);
};
