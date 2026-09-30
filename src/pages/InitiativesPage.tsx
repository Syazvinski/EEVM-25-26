import React from "react";
import { ArrowUpRight } from "lucide-react";
import { PageHeader, Reveal, SectionHeading, SponsorMarquee } from "../components/ui";
import { unitsData } from "../data/teamData";

interface InitiativesPageProps {
  setCurrentPage: (page: string) => void;
}

const hackatlStats = [
  { value: "48", label: "Hours" },
  { value: "200+", label: "Participants" },
  { value: "$13K", label: "Prize pool" },
];

const pastEvents = [
  { year: "2025", theme: "AI & Innovation", logo: "/hack-logos/hack_logo_2025-h192.webp", description: "Exploring artificial intelligence and emerging technologies to solve real-world problems." },
  { year: "2024", theme: "Sustainability", logo: "/hack-logos/hack_24.webp", description: "Developing solutions for environmental challenges and sustainable business practices." },
  { year: "2023", theme: "FinTech", logo: "/hack-logos/hack_23.webp", description: "Innovation in financial technology and digital payment solutions." },
  { year: "2022", theme: "HealthTech", logo: "/hack-logos/hack_22.webp", description: "Healthcare technology solutions to improve patient outcomes and accessibility." },
  { year: "2021", theme: "EdTech", logo: "/hack-logos/hack_21.webp", description: "Educational technology innovations for remote and hybrid learning environments." },
  { year: "2020", theme: "Social Impact", logo: "/hack-logos/hack_20.webp", description: "Technology solutions addressing social issues and community challenges." },
];

const excelleratorStats = [
  { value: "25+", label: "Startups incubated" },
  { value: "$2M+", label: "Funding raised" },
  { value: "60%", label: "Success rate" },
];

const excelleratorDescription = unitsData.find(u => u.id === "excellerator")?.description;
const givc = unitsData.find(u => u.id === "givc");

const StatRow: React.FC<{ stats: { value: string; label: string }[]; inverted?: boolean }> = ({ stats, inverted }) => (
  <div className={`grid grid-cols-3 gap-px rounded-3xl overflow-hidden ${inverted ? "bg-white/10" : "bg-[var(--line)] border border-[var(--line)]"}`}>
    {stats.map(s => (
      <div key={s.label} className={`p-5 sm:p-7 ${inverted ? "bg-[var(--panel)]" : "bg-[var(--surface)]"}`}>
        <div className="display font-bold text-3xl sm:text-5xl">{s.value}</div>
        <div className={`mt-1 text-sm sm:text-base ${inverted ? "opacity-60" : "muted"}`}>{s.label}</div>
      </div>
    ))}
  </div>
);

const InitiativesPage: React.FC<InitiativesPageProps> = () => (
  <div>
    <PageHeader
      eyebrow="Initiatives"
      title={<>Our <span className="serif text-[var(--accent)]">initiatives.</span></>}
      subtitle="The flagship programs driving innovation and entrepreneurship at Emory"
    />

    {/* HackATL */}
    <section className="wrap pb-24 sm:pb-32">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-end mb-10">
        <Reveal>
          <img
            src="/hack-logos/hack_logo_2025-h96.webp"
            srcSet="/hack-logos/hack_logo_2025-h96.webp 1x, /hack-logos/hack_logo_2025-h192.webp 2x"
            alt="HackATL logo"
            className="h-20 w-auto mb-8"
          />
          <p className="eyebrow mb-3">Flagship initiative</p>
          <h2 className="display font-bold text-5xl sm:text-7xl leading-[0.95]">HackATL</h2>
        </Reveal>
        <Reveal delay={150}>
          <p className="muted text-lg sm:text-xl leading-relaxed mb-8">
            Our flagship 48-hour hackathon brings together students from across the nation to develop
            innovative solutions to real-world problems. Participants form teams, build prototypes,
            and pitch their ideas to a panel of industry experts.
          </p>
          <a href="https://www.hackatl.org" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Register for HackATL 2026 <ArrowUpRight size={18} />
          </a>
        </Reveal>
      </div>
      <Reveal className="relative rounded-[28px] overflow-hidden h-[320px] sm:h-[480px] mb-4">
        <img src="/initiatives/hack_winner-w1600.webp" alt="HackATL winners on stage" className="w-full h-full object-cover" style={{ objectPosition: "center 30%" }} />
      </Reveal>
      <Reveal delay={100}>
        <StatRow stats={hackatlStats} />
      </Reveal>
    </section>

    {/* Partners */}
    <section className="py-24 sm:py-32 border-t border-[var(--line)]">
      <div className="wrap">
        <SectionHeading title={<>Previous <span className="serif">partners.</span></>} />
      </div>
      <SponsorMarquee />
    </section>

    {/* HackATL history */}
    <section className="wrap py-24 sm:py-32 border-t border-[var(--line)]">
      <SectionHeading eyebrow="HackATL through the years" title={<>A history of <span className="serif">building.</span></>} />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {pastEvents.map((e, i) => (
          <Reveal key={e.year} delay={(i % 3) * 100} className="card p-7 flex flex-col">
            <div className="h-24 mb-8 flex items-center">
              <img src={e.logo} alt={`HackATL ${e.year} logo`} className="max-h-24 max-w-[70%] w-auto object-contain" loading="lazy" />
            </div>
            <div className="flex items-baseline justify-between gap-4 mb-3">
              <h3 className="display text-2xl font-bold">HackATL {e.year}</h3>
              <span className="text-sm font-semibold text-[var(--accent)]">{e.theme}</span>
            </div>
            <p className="muted leading-relaxed">{e.description}</p>
          </Reveal>
        ))}
      </div>
    </section>

    {/* Excellerator */}
    <section className="px-4 sm:px-8 pb-24">
      <Reveal className="max-w-7xl mx-auto rounded-[32px] bg-[var(--panel)] text-[var(--panel-ink)] p-6 sm:p-14 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <div className="inline-flex rounded-2xl bg-white px-5 py-4 mb-8">
            <img src="/logos/excellerator-logo-h96.webp" srcSet="/logos/excellerator-logo-h96.webp 1x, /logos/excellerator-logo-h192.webp 2x" alt="Excellerator logo" className="h-10 w-auto" />
          </div>
          <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[var(--accent-bright)] mb-3">Flagship initiative</p>
          <h2 className="display font-bold text-5xl sm:text-6xl leading-[0.95] mb-6">Excellerator</h2>
          <p className="text-lg leading-relaxed opacity-70">{excelleratorDescription}</p>
        </div>
        <div>
          <img src="/initiatives/excellerator_panel-w1600.webp" alt="Excellerator speaker panel" className="w-full aspect-[16/10] object-cover rounded-[24px] mb-4" style={{ objectPosition: "center 80%" }} loading="lazy" />
          <StatRow stats={excelleratorStats} inverted />
        </div>
      </Reveal>
    </section>

    {/* Girls into VC */}
    {givc && (
      <section className="wrap pb-24 sm:pb-32">
        <Reveal className="card p-6 sm:p-14 grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <img
              src="/logos/givc-logo-h96.webp"
              srcSet="/logos/givc-logo-h96.webp 1x, /logos/givc-logo-h192.webp 2x"
              alt="Girls into VC logo"
              className="h-12 sm:h-14 w-auto mb-8"
            />
            <p className="eyebrow mb-3">Initiative</p>
            <h2 className="display font-bold text-5xl sm:text-6xl leading-[0.95]">Girls into <span className="serif text-[var(--accent)]">VC.</span></h2>
          </div>
          <p className="muted text-lg sm:text-xl leading-relaxed">{givc.description}</p>
        </Reveal>
      </section>
    )}
  </div>
);

export default InitiativesPage;
