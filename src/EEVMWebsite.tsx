import React, { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import InitiativesPage from "./pages/InitiativesPage";
import TeamPage from "./pages/TeamPage";
import ApplicationsPage from "./pages/ApplicationsPage";
import ContactPage from "./pages/ContactPage";
import "./styles/site.css";

const EEVMWebsite: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>("home");
  // PREVIEW ONLY: lets reviewers compare light and dark. Remove before shipping.
  const [theme, setTheme] = useState<"light" | "dark">(
    () => (new URLSearchParams(window.location.search).get("theme") === "dark" ? "dark" : "light"),
  );

  // Each "page" starts at the top
  useEffect(() => { window.scrollTo({ top: 0 }); }, [currentPage]);

  // Track SPA "page" changes with Vercel Analytics if available (skip initial to avoid double-counting with component)
  const didMount = useRef(false);
  useEffect(() => {
    if (!didMount.current) { didMount.current = true; return; }
    try {
      const w = window as any;
      const va = w && (w.va?.track ? (args: any, data?: any) => w.va.track(args, data) : w.va);
      if (typeof va === 'function') {
        va('page', { page: currentPage });
      }
    } catch {
      // ignore if analytics script is blocked or not loaded
    }
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage setCurrentPage={setCurrentPage} />;
      case "about":
        return <AboutPage setCurrentPage={setCurrentPage} />;
      case "initiatives":
        return <InitiativesPage setCurrentPage={setCurrentPage} />;
      case "team":
        return <TeamPage setCurrentPage={setCurrentPage} />;
      case "applications":
        return <ApplicationsPage setCurrentPage={setCurrentPage} />;
      case "contact":
        return <ContactPage setCurrentPage={setCurrentPage} />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="site min-h-screen" data-theme={theme}>
      <Header 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
      />
      <main>
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />

      {/* PREVIEW ONLY: theme switch */}
      <div className="fixed bottom-4 left-4 z-50 flex items-center gap-1 rounded-full bg-black/80 p-1 text-xs text-white shadow-lg backdrop-blur">
        <span className="px-2 opacity-60">Preview</span>
        {(["light", "dark"] as const).map(t => (
          <button key={t} onClick={() => setTheme(t)} className={`rounded-full px-3 py-1.5 capitalize ${theme === t ? "bg-white text-black" : ""}`}>{t}</button>
        ))}
      </div>
    </div>
  );
};

export default EEVMWebsite;
