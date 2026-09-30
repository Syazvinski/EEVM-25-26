import React, { useRef, useState } from "react";
import { ArrowRight, Plus } from "lucide-react";
import { Unit, leadershipTeam, unitsData } from "../data/teamData";
import { Avatar, CtaPanel, PageHeader, Reveal, SectionHeading, panelPrimary } from "../components/ui";

interface TeamPageProps {
  setCurrentPage: (page: string) => void;
}

const UnitCard: React.FC<{ unit: Unit; isSelected: boolean; onClick: () => void }> = ({ unit, isSelected, onClick }) => (
  <button
    onClick={onClick}
    aria-expanded={isSelected}
    className={`card p-6 text-left w-full h-full flex flex-col transition-all duration-300 hover:-translate-y-1 ${isSelected ? "ring-2 ring-[var(--accent)]" : ""}`}
  >
    <div className="flex items-start justify-between gap-4 mb-6">
      <div>
        <p className="text-xs font-semibold tracking-[0.14em] uppercase muted mb-1">{unit.type}</p>
        <h3 className="display text-2xl font-bold">{unit.name}</h3>
      </div>
      <span className={`w-9 h-9 shrink-0 rounded-full border border-[var(--line)] flex items-center justify-center transition-transform duration-300 ${isSelected ? "rotate-45" : ""}`}>
        <Plus size={16} />
      </span>
    </div>
    <div className="grid grid-cols-2 gap-3 mt-auto">
      {unit.directors.map(d => (
        <div key={d.name}>
          <Avatar name={d.name} src={d.imagePath} className="w-full aspect-square rounded-2xl" />
          <p className="font-semibold text-sm mt-2 leading-tight">{d.name}</p>
        </div>
      ))}
    </div>
    <p className="muted text-sm mt-5">{unit.associates.length} team members</p>
  </button>
);

const UnitDetails: React.FC<{ unit: Unit }> = ({ unit }) => (
  <div key={unit.id} className="card p-6 sm:p-12 reveal is-in">
    <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16">
      <div>
        <p className="eyebrow mb-3">{unit.type}</p>
        <h3 className="display font-bold text-4xl sm:text-5xl mb-6">{unit.name}</h3>
        <p className="muted text-lg leading-relaxed">{unit.description}</p>
        {unit.skills && unit.skills.length > 0 && (
          <div className="mt-8">
            <p className="font-semibold mb-3">Key skills &amp; focus areas</p>
            <div className="flex flex-wrap gap-2">
              {unit.skills.map(skill => <span key={skill} className="chip">{skill}</span>)}
            </div>
          </div>
        )}
      </div>
      <div className="space-y-10">
        {unit.directors.length > 0 && (
          <div>
            <p className="font-semibold mb-4">Leadership team</p>
            <div className="grid grid-cols-2 gap-4">
              {unit.directors.map(d => (
                <div key={d.name}>
                  <Avatar name={d.name} src={d.imagePath} className="w-full aspect-[4/5] rounded-2xl" />
                  <p className="font-semibold mt-3">{d.name}</p>
                  <p className="muted text-sm">{d.title}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        {unit.associates.length > 0 && (
          <div>
            <p className="font-semibold mb-4">Team members</p>
            <div className="flex flex-wrap gap-2">
              {unit.associates.map(a => <span key={a.name} className="chip text-[var(--ink)]">{a.name}</span>)}
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
);

const TeamPage: React.FC<TeamPageProps> = ({ setCurrentPage }) => {
  const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  const handleUnitClick = (unit: Unit) => {
    const closing = selectedUnit?.id === unit.id;
    setSelectedUnit(closing ? null : unit);
    if (!closing) setTimeout(() => detailsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
  };

  const divisions = unitsData.filter(u => u.type === "Division").length;
  const initiatives = unitsData.filter(u => u.type === "Initiative").length;

  return (
    <div>
      <PageHeader
        eyebrow="Fall 2026"
        title={<>Our <span className="serif text-[var(--accent)]">team.</span></>}
        subtitle="Meet the passionate individuals driving entrepreneurship innovation at Emory University"
      />

      {/* Executive leadership */}
      <section className="wrap pb-24 sm:pb-32">
        <SectionHeading eyebrow="Executive leadership" title={<>Leading <span className="serif">EEVM.</span></>} />
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
          {leadershipTeam.map((m, i) => (
            <Reveal key={m.name} delay={i * 100}>
              <Avatar name={m.name} src={m.imagePath} className="w-full aspect-[4/5] rounded-[24px]" />
              <h3 className="display text-2xl font-bold mt-5">{m.name}</h3>
              <p className="text-[var(--accent)] font-medium">{m.title}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Divisions & initiatives */}
      <section className="wrap pb-24 sm:pb-32 border-t border-[var(--line)] pt-24 sm:pt-32">
        <SectionHeading
          eyebrow="Divisions & initiatives"
          title={<>{divisions} divisions. <span className="serif">{initiatives} initiatives.</span></>}
          subtitle="Select any team to see what they do and who's on it."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {unitsData.map((unit, i) => (
            <Reveal key={unit.id} delay={(i % 4) * 80} className="h-full">
              <UnitCard unit={unit} isSelected={selectedUnit?.id === unit.id} onClick={() => handleUnitClick(unit)} />
            </Reveal>
          ))}
        </div>
        <div ref={detailsRef} className="scroll-mt-[calc(var(--header-h)+24px)] mt-6">
          {selectedUnit && <UnitDetails unit={selectedUnit} />}
        </div>
      </section>

      <CtaPanel
        title={<>Ready to join <span className="serif text-[var(--accent-bright)] whitespace-nowrap">our team?</span></>}
        text="We're always looking for passionate students who want to make a difference in the entrepreneurship community at Emory."
      >
        <button className={panelPrimary} onClick={() => setCurrentPage("applications")}>Apply to join EEVM <ArrowRight size={18} /></button>
      </CtaPanel>
    </div>
  );
};

export default TeamPage;
