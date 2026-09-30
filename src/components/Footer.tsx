import React from "react";
import { Instagram, Linkedin, Mail } from "lucide-react";
import { linkClick, pagePaths } from "../router";

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

const navigation = [
  { name: "Home", key: "home" },
  { name: "About Us", key: "about" },
  { name: "Initiatives", key: "initiatives" },
  { name: "Our Team", key: "team" },
  { name: "Applications", key: "applications" },
  { name: "Contact", key: "contact" },
];

const socials = [
  { label: "EEVM Instagram", href: "https://www.instagram.com/emoryevm/", icon: Instagram },
  { label: "EEVM LinkedIn", href: "https://www.linkedin.com/company/emory-entrepreneurship-&-venture-management/posts/?feedView=all", icon: Linkedin },
  { label: "Email EEVM", href: "mailto:contact@eevm.org", icon: Mail },
];

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => (
  <footer className="bg-[var(--panel)] text-[var(--panel-ink)] border-t border-[var(--line)]">
    <div className="wrap py-16">
      <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <img
            src="/logos/eevm_full-h40.webp"
            srcSet="/logos/eevm_full-h40.webp 1x, /logos/eevm_full-h80.webp 2x"
            alt="EEVM"
            className="h-10 w-auto brightness-0 invert mb-6"
          />
          <p className="display text-2xl font-semibold leading-snug max-w-md">
            Connecting students with the platform, resources, and network to explore the venture ecosystem.
          </p>
          <div className="flex gap-3 mt-8">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold tracking-[0.14em] uppercase opacity-50 mb-5">Quick links</h3>
          <div className="space-y-3">
            {navigation.map(item => (
              <a key={item.key} href={pagePaths[item.key]} onClick={linkClick(setCurrentPage, item.key)} className="block opacity-80 hover:opacity-100 transition-opacity">
                {item.name}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold tracking-[0.14em] uppercase opacity-50 mb-5">Our initiatives</h3>
          <div className="space-y-3 opacity-80">
            <p>HackATL</p>
            <p>Excellerator</p>
            <p>Girls into VC</p>
            <p>Venture Studio</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 mt-14 pt-8 text-sm opacity-50">
        &copy; {new Date().getFullYear()} Emory Entrepreneurship &amp; Venture Management. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
