import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import InitiativesPage from "./pages/InitiativesPage";
import TeamPage from "./pages/TeamPage";
import ApplicationsPage from "./pages/ApplicationsPage";
import ContactPage from "./pages/ContactPage";
import { usePageRouter } from "./router";
import "./styles/site.css";

const EEVMWebsite: React.FC = () => {
  // Each page has its own URL (/about, /team, ...). Vercel Analytics picks up the URL changes on its own.
  const [currentPage, setCurrentPage] = usePageRouter();
  // PREVIEW ONLY: lets reviewers compare light and dark. Remove before shipping.
  const [theme, setTheme] = useState<"light" | "dark">(
    () => (new URLSearchParams(window.location.search).get("theme") === "dark" ? "dark" : "light"),
  );

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
      <div className="fixed bottom-4 left-4 z-50 flex items-center gap-1 rounded-full bg-black/85 p-1 text-xs text-white shadow-lg">
        <span className="px-2 opacity-60">Preview</span>
        {(["light", "dark"] as const).map(t => (
          <button key={t} onClick={() => setTheme(t)} className={`rounded-full px-3 py-1.5 capitalize ${theme === t ? "bg-white text-black" : ""}`}>{t}</button>
        ))}
      </div>
    </div>
  );
};

export default EEVMWebsite;
