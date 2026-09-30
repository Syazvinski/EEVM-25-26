import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useScrollProgress } from "../hooks/useScrollProgress";
import { leadershipTeam, unitsData } from "../data/teamData";
import "./home.css";

interface HomePageProps {
  setCurrentPage: (page: string) => void;
}

const sponsors = [
  ["Accenture", "accenture_logo"], ["AWS", "aws_logo"], ["BECU", "becu_logo"], ["City of Atlanta", "city_of_atlanta_logo"],
  ["Coca-Cola", "coca_cola_logo"], ["Emory CEI", "emory_cei_logo"], ["Georgia-Pacific", "georgia_pacific_logo"], ["GitHub", "github_logo"],
  ["Goizueta Business School", "goizueta_business_school_logo"], ["Goizueta CEI", "goizueta_cei_logo"], ["Google", "google_logo"], ["The Home Depot", "home_depot_logo"],
  ["IBM", "ibm_logo"], ["Insomnia Cookies", "insomnia_cookies_logo"], ["Invesco", "invesco_logo"], ["Lyft", "lyft_logo"],
  ["Meta", "meta_logo"], ["Microsoft", "microsoft_logo"], ["Porsche", "porsche_logo"], ["ProductATL", "productatl_logo"],
  ["Red Bull", "red_bull_logo"], ["Stripe", "stripe_logo"], ["Synovus", "synovus_logo"], ["TAG", "tag_logo"],
].map(([name, file]) => ({ name, logo: `/sponsors/${file}.webp` }));

const chapters = [
  {
    step: "Join", tag: "Six divisions",
    title: "Find your team.",
    body: "Members join one of six divisions: Girls into VC, Corporate Partnerships, Operations & Strategy, Marketing, Software & Systems, and Finance.",
    image: "/about/directors-w1600.webp", page: "team",
  },
  {
    step: "Build", tag: "HackATL",
    title: "Build something real in 48 hours.",
    body: "HackATL is Atlanta's premier hackathon and pitch competition, where students from across the country turn ideas into running startups in a single weekend.",
    image: "/hack_atl-w1600.webp", page: "initiatives",
  },
  {
    step: "Launch", tag: "Excellerator",
    title: "Take it from idea to company.",
    body: "Excellerator incubates student-led startups with hands-on support in customer discovery, MVP development, pitching, and business strategy.",
    image: "/initiatives/accelerator_program_inititive_image.webp", page: "initiatives",
  },
];

const statement =
  "We run HackATL, a 48-hour hackathon and pitch competition, and Excellerator, an incubator for student-led startups, alongside six divisions including Girls into VC.";

const people = [
  ...leadershipTeam.map(m => ({ ...m, role: m.title })),
  ...unitsData.flatMap(u => u.directors.map(m => ({ ...m, role: u.name }))),
].filter(m => m.imagePath);

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  // PREVIEW ONLY: lets reviewers compare light and dark. Remove before shipping.
  const [theme, setTheme] = useState<"light" | "dark">(
    () => (new URLSearchParams(window.location.search).get("theme") === "dark" ? "dark" : "light"),
  );
  const [chapter, setChapter] = useState(0);

  const heroRef = useScrollProgress<HTMLElement>("pin");
  const heroCopyRef = useRef<HTMLDivElement>(null);

  // The photo card sits just below the hero text, so track the text's real height.
  useEffect(() => {
    const copy = heroCopyRef.current, hero = heroRef.current;
    if (!copy || !hero) return;
    const observer = new ResizeObserver(() => hero.style.setProperty("--copy-px", `${copy.offsetHeight}px`));
    observer.observe(copy);
    return () => observer.disconnect();
  }, [heroRef]);
  const statementRef = useScrollProgress<HTMLElement>("view");
  const chaptersRef = useScrollProgress<HTMLElement>("pin", p => setChapter(Math.min(chapters.length - 1, Math.floor(p * chapters.length))));
  const teamRef = useScrollProgress<HTMLDivElement>("view");

  const go = (page: string) => { setCurrentPage(page); window.scrollTo({ top: 0 }); };
  const words = statement.split(" ");
  const stats = [
    { value: unitsData.filter(u => u.type === "Division").length, label: "Divisions" },
    { value: unitsData.filter(u => u.type === "Initiative").length, label: "Flagship initiatives" },
    { value: 48, label: "Hour hackathon" },
    { value: sponsors.length, label: "Previous partners" },
  ];

  return (
    <div className="home2" data-theme={theme}>
      {/* Hero */}
      <section ref={heroRef} className="hero">
        <div className="hero-sticky">
          <div ref={heroCopyRef} className="hero-copy max-w-7xl mx-auto px-4 sm:px-8 lg:px-14 pb-8">
            <p className="eyebrow mb-4">Emory Entrepreneurship &amp; Venture Management</p>
            <h1 className="display font-bold text-[clamp(2.4rem,min(6.5vw,10vh),6rem)] leading-[0.95]">
              Where Emory builds <span className="serif text-[var(--accent)] whitespace-nowrap">what's next.</span>
            </h1>
            <div className="mt-5 flex flex-col items-start gap-6">
              <p className="muted text-base sm:text-lg max-w-xl md:max-w-none">
                Connecting students with the platform, resources, and network to explore the venture ecosystem.
              </p>
              <div className="flex gap-3 shrink-0">
                <button className="btn btn-primary" onClick={() => go("applications")}>Apply <ArrowRight size={18} /></button>
                <button className="btn btn-ghost" onClick={() => go("about")}>About us</button>
              </div>
            </div>
          </div>
          <div className="hero-media">
            <img
              src="/homepage/eevm_group-w1920.webp"
              srcSet="/homepage/eevm_group-w960.webp 960w, /homepage/eevm_group-w1280.webp 1280w, /homepage/eevm_group-w1920.webp 1920w, /homepage/eevm_group-w2560.webp 2560w"
              sizes="100vw"
              alt="EEVM members"
              loading="eager"
            />
            <div className="hero-overlay max-w-7xl mx-auto px-4 sm:px-8 lg:px-14 pb-10 sm:pb-14">
              <p className="display font-semibold text-[clamp(1.6rem,4vw,3.25rem)] leading-tight max-w-3xl">
                Six divisions. Two flagship initiatives. <span className="serif">One community of builders.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statement */}
      <section ref={statementRef} className="max-w-5xl mx-auto px-4 sm:px-8 py-28 sm:py-40">
        <p className="eyebrow mb-8">About EEVM</p>
        <p className="display font-semibold text-[clamp(1.75rem,4vw,3.25rem)] leading-[1.15]" style={{ "--n": words.length } as React.CSSProperties}>
          {words.map((w, i) => (
            <span key={i} className="reveal-word" style={{ "--i": i } as React.CSSProperties}>{w} </span>
          ))}
        </p>
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--line)] rounded-3xl overflow-hidden border border-[var(--line)]">
          {stats.map(s => (
            <div key={s.label} className="bg-[var(--bg)] p-6 sm:p-8">
              <div className="display font-bold text-5xl sm:text-6xl">{s.value}</div>
              <div className="muted mt-2 text-sm sm:text-base">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Chapters: pinned on desktop */}
      <section ref={chaptersRef} className="chapters hidden lg:block">
        <div className="chapters-sticky max-w-7xl mx-auto px-14 py-10 grid grid-cols-[1fr_1.15fr] gap-16 items-center">
          <div className="flex gap-10">
            <div className="relative w-[2px] rounded-full bg-[var(--line)] shrink-0">
              <div className="chapter-progress absolute inset-0" />
            </div>
            <div>
              <p className="eyebrow mb-6">What we do</p>
              <div className="flex gap-6 mb-10">
                {chapters.map((c, i) => (
                  <span key={c.step} className={`display text-lg font-semibold transition-colors duration-300 ${i === chapter ? "" : "opacity-30"}`}>
                    0{i + 1} {c.step}
                  </span>
                ))}
              </div>
              <div key={chapter} className="chapter-text">
                <p className="muted text-sm font-medium mb-3">{chapters[chapter].tag}</p>
                <h2 className="display font-bold text-6xl leading-[1.02] mb-6">{chapters[chapter].title}</h2>
                <p className="muted text-lg leading-relaxed max-w-md mb-8">{chapters[chapter].body}</p>
                <button className="btn btn-ghost" onClick={() => go(chapters[chapter].page)}>Learn more <ArrowUpRight size={18} /></button>
              </div>
            </div>
          </div>
          <div className="relative h-[72%] rounded-[28px] overflow-hidden">
            {chapters.map((c, i) => (
              <img key={c.step} src={c.image} alt="" className={`chapter-img ${i === chapter ? "is-active" : ""}`} />
            ))}
          </div>
        </div>
      </section>

      {/* Chapters: stacked on mobile */}
      <section className="lg:hidden px-4 sm:px-8 pb-24 space-y-16">
        <p className="eyebrow">What we do</p>
        {chapters.map((c, i) => (
          <div key={c.step}>
            <img src={c.image} alt="" className="w-full aspect-[4/3] object-cover rounded-3xl mb-6" />
            <p className="display font-semibold text-sm mb-2"><span className="text-[var(--accent)]">0{i + 1}</span> {c.step} · <span className="muted">{c.tag}</span></p>
            <h2 className="display font-bold text-4xl leading-tight mb-3">{c.title}</h2>
            <p className="muted leading-relaxed">{c.body}</p>
          </div>
        ))}
      </section>

      {/* Sponsors */}
      <section className="py-24 sm:py-32 border-t border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-14 mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="display font-bold text-4xl sm:text-5xl">Previous <span className="serif">partners.</span></h2>
          </div>
        </div>
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
      </section>

      {/* Team */}
      <section className="py-24 sm:py-32 border-t border-[var(--line)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-14 mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <p className="eyebrow mb-4">Fall 2026 leadership</p>
            <h2 className="display font-bold text-4xl sm:text-5xl">The people <span className="serif">behind it.</span></h2>
          </div>
          <button className="btn btn-ghost self-start sm:self-auto" onClick={() => go("team")}>Meet the full team <ArrowRight size={18} /></button>
        </div>
        <div ref={teamRef} className="team-strip space-y-8">
          {[people.slice(0, Math.ceil(people.length / 2)), people.slice(Math.ceil(people.length / 2))].map((row, r) => (
            <div key={r} className={`team-track ${r ? "reverse" : ""}`}>
              {row.map(p => (
                <figure key={p.name} className="team-card">
                  <img src={p.imagePath} alt={p.name} />
                  <figcaption className="mt-3">
                    <div className="font-semibold">{p.name}</div>
                    <div className="muted text-sm">{p.role}</div>
                  </figcaption>
                </figure>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Call to action */}
      <section className="px-4 sm:px-8 pb-24">
        <div className="max-w-7xl mx-auto rounded-[32px] bg-[var(--panel)] text-[var(--panel-ink)] px-6 sm:px-14 py-16 sm:py-24 relative overflow-hidden">
          <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-[var(--accent-bright)] opacity-20 blur-3xl" />
          <h2 className="display font-bold text-[clamp(2.25rem,6vw,5rem)] leading-[0.98] max-w-3xl relative">
            Your idea deserves <span className="serif text-[var(--accent-bright)] whitespace-nowrap">a team.</span>
          </h2>
          <p className="mt-6 text-lg opacity-70 max-w-xl relative">Join EEVM and build alongside Emory's most ambitious students.</p>
          <div className="mt-10 flex flex-wrap gap-3 relative">
            <button className="btn bg-[var(--panel-ink)] text-[var(--panel)]" onClick={() => go("applications")}>Apply to EEVM <ArrowRight size={18} /></button>
            <button className="btn border border-white/20" onClick={() => go("contact")}>Get in touch</button>
          </div>
        </div>
      </section>

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

export default HomePage;
