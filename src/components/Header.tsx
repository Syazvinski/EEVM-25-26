import React, { useState } from "react";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Home', key: 'home' },
    { name: 'About', key: 'about' },
    { name: 'Initiatives', key: 'initiatives' },
    { name: 'Team', key: 'team' },
    { name: 'Applications', key: 'applications' },
    { name: 'Contact', key: 'contact' }
  ];

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group transition-transform duration-300 hover:scale-105"
            onClick={() => handleNavigation('home')}
          >
            <img 
              src="/logos/eevm_full.webp" 
              alt="EEVM Logo" 
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavigation(item.key)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                  currentPage === item.key
                    ? 'text-[#3CB5C4] bg-[#3CB5C4] bg-opacity-10 shadow-sm'
                    : 'text-gray-700 hover:text-[#3CB5C4] hover:bg-gray-50'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:text-[#3CB5C4] hover:bg-gray-50 transition-all duration-300 hover:scale-110"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-80 opacity-100 transform translate-y-0' 
            : 'max-h-0 opacity-0 transform -translate-y-4'
        } overflow-hidden`}>
          <nav className="py-4 space-y-2 border-t border-gray-200">
            {navigationItems.map((item, index) => (
              <button
                key={item.key}
                onClick={() => handleNavigation(item.key)}
                className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-102 hover:translate-x-2 ${
                  currentPage === item.key
                    ? 'text-[#3CB5C4] bg-[#3CB5C4] bg-opacity-10 shadow-sm'
                    : 'text-gray-700 hover:text-[#3CB5C4] hover:bg-gray-50'
                }`}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 100}ms` : '0ms'
                }}
              >
                {item.name}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 