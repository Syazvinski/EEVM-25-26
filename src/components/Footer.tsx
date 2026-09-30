import React from "react";
import { Instagram, Linkedin, Mail } from "lucide-react";

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const navigation = [
    { name: "Home", key: "home" },
    { name: "About Us", key: "about" },
    { name: "Initiatives", key: "initiatives" },
    { name: "Our Team", key: "team" },
    { name: "Applications", key: "applications" },
    { name: "Contact", key: "contact" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/logos/eevm_full-h40.webp"
                srcSet="/logos/eevm_full-h40.webp 1x, /logos/eevm_full-h80.webp 2x"
                alt="EEVM Logo" 
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-white mb-6 max-w-md">
              Connecting students with the platform, resources, and network to
              explore the venture ecosystem.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/emoryevm/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="EEVM Instagram"
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center"
              >
                <Instagram size={16} className="text-white" />
              </a>
              <a
                href="https://www.linkedin.com/company/emory-entrepreneurship-&-venture-management/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="EEVM LinkedIn"
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center"
              >
                <Linkedin size={16} className="text-white" />
              </a>
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                <Mail size={16} className="text-white" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <div className="space-y-2 text-sm">
              {navigation.map((item) => (
                <button
                  key={item.key}
                  onClick={() => setCurrentPage(item.key)}
                  className="block text-gray-200 hover:text-white transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Our Initiatives</h3>
            <div className="space-y-2 text-sm text-gray-200">
              <p>HackATL</p>
              <p>Excellerator</p>
              <p>Venture Studio</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; 2026 Emory Entrepreneurship & Venture Management. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
