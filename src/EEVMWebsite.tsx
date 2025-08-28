import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import InitiativesPage from "./pages/InitiativesPage";
import TeamPage from "./pages/TeamPage";
import ApplicationsPage from "./pages/ApplicationsPage";
import ContactPage from "./pages/ContactPage";

const EEVMWebsite: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>("home");

  // Track SPA "page" changes with Vercel Analytics if available
  useEffect(() => {
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
    <div className="min-h-screen bg-gray-50">
      <Header 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
      />
      <main className="transition-all duration-500 ease-in-out">
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default EEVMWebsite;
