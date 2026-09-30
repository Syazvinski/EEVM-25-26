import React, { useEffect, useRef, useState } from "react";
import { sponsors } from "../data/sponsors";

// Fades its children up the first time they scroll into view.
export const Reveal: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ children, className = "", delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setInView(true); observer.disconnect(); }
    }, { threshold: 0.15 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${inView ? "is-in" : ""} ${className}`} style={{ "--delay": `${delay}ms` } as React.CSSProperties}>
      {children}
    </div>
  );
};

export const PageHeader: React.FC<{ eyebrow: string; title: React.ReactNode; subtitle?: React.ReactNode; children?: React.ReactNode; compact?: boolean }> = ({ eyebrow, title, subtitle, children, compact }) => (
  <header className={`wrap ${compact ? "pt-12 sm:pt-16 pb-10 sm:pb-12" : "pt-16 sm:pt-24 pb-14 sm:pb-20"}`}>
    <Reveal>
      <p className="eyebrow mb-5">{eyebrow}</p>
      <h1 className="display font-bold text-[clamp(2.75rem,7vw,6rem)] leading-[0.95] max-w-5xl">{title}</h1>
      {subtitle && <p className="muted text-lg sm:text-xl leading-relaxed max-w-2xl mt-6">{subtitle}</p>}
      {children && <div className="mt-8">{children}</div>}
    </Reveal>
  </header>
);

export const SectionHeading: React.FC<{ eyebrow?: string; title: React.ReactNode; subtitle?: React.ReactNode; action?: React.ReactNode }> = ({ eyebrow, title, subtitle, action }) => (
  <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-12">
    <div>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="display font-bold text-4xl sm:text-5xl leading-[1.05]">{title}</h2>
      {subtitle && <p className="muted text-lg mt-4 max-w-2xl">{subtitle}</p>}
    </div>
    {action}
  </div>
);

export const CtaPanel: React.FC<{ title: React.ReactNode; text: React.ReactNode; children: React.ReactNode }> = ({ title, text, children }) => (
  <section className="px-4 sm:px-8 pb-24">
    <Reveal className="max-w-7xl mx-auto rounded-[32px] bg-[var(--panel)] text-[var(--panel-ink)] px-6 sm:px-14 py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-[var(--accent-bright)] opacity-20 blur-3xl" />
      <h2 className="display font-bold text-[clamp(2.25rem,6vw,5rem)] leading-[0.98] max-w-3xl relative">{title}</h2>
      <p className="mt-6 text-lg opacity-70 max-w-xl relative">{text}</p>
      <div className="mt-10 flex flex-wrap gap-3 relative">{children}</div>
    </Reveal>
  </section>
);

// Buttons styled for the dark CTA panel
export const panelPrimary = "btn bg-[var(--panel-ink)] text-[var(--panel)]";
export const panelGhost = "btn border border-white/20";

export const SponsorMarquee: React.FC = () => (
  <div className="space-y-4">
    {[sponsors.slice(0, 12), sponsors.slice(12)].map((row, r) => (
      <div key={r} className="marquee">
        <div className={`marquee-track ${r ? "reverse" : ""}`}>
          {[...row, ...row].map((s, i) => (
            <div key={i} className="logo-chip" aria-hidden={i >= row.length}>
              <img src={s.logo} alt={s.name} />
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

// Headshot, or the person's initials when there's no photo
export const Avatar: React.FC<{ name: string; src: string; className: string }> = ({ name, src, className }) => {
  const [failed, setFailed] = useState(false);
  if (src && !failed) return <img src={src} alt={name} className={`${className} object-cover`} onError={() => setFailed(true)} />;
  return (
    <div className={`${className} bg-[var(--accent)] text-white flex items-center justify-center display font-bold text-2xl`}>
      {name.split(" ").map(n => n[0]).join("")}
    </div>
  );
};
