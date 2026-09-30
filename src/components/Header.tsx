import React, { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { linkClick, pagePaths } from "../router";

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const navigationItems = [
  { name: "Home", key: "home" },
  { name: "About", key: "about" },
  { name: "Initiatives", key: "initiatives" },
  { name: "Team", key: "team" },
  { name: "Applications", key: "applications" },
  { name: "Contact", key: "contact" },
];

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--bg)_85%,transparent)] backdrop-blur-md">
      <div className="wrap h-[var(--header-h)] flex items-center justify-between">
        <a href="/" onClick={linkClick(handleNavigation, "home")} aria-label="EEVM home" className="shrink-0">
          <img
            src="/logos/eevm_full-h48.webp"
            srcSet="/logos/eevm_full-h48.webp 1x, /logos/eevm_full-h96.webp 2x"
            alt="EEVM"
            className="h-8 sm:h-10 w-auto"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {navigationItems.map(item => (
            <a
              key={item.key}
              href={pagePaths[item.key]}
              onClick={linkClick(handleNavigation, item.key)}
              aria-current={currentPage === item.key ? "page" : undefined}
              className={`relative px-4 py-2 rounded-full text-[15px] font-medium transition-colors ${
                currentPage === item.key ? "text-[var(--ink)] bg-[var(--line)]" : "muted hover:text-[var(--ink)]"
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-flex">
            <button className="btn btn-primary btn-sm" onClick={() => handleNavigation("applications")}>
              Apply <ArrowRight size={16} />
            </button>
          </span>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="lg:hidden p-2 rounded-full hover:bg-[var(--line)] transition-colors"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <nav className="wrap pb-6 pt-2 flex flex-col">
          {navigationItems.map(item => (
            <a
              key={item.key}
              href={pagePaths[item.key]}
              onClick={linkClick(handleNavigation, item.key)}
              aria-current={currentPage === item.key ? "page" : undefined}
              className={`py-3 display text-2xl font-semibold border-b border-[var(--line)] ${currentPage === item.key ? "" : "muted"}`}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
