import React from "react";
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
    <div className="site min-h-screen">
      <Header 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
      />
      <main>
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default EEVMWebsite;
