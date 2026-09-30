import React from "react";
import { Award, TrendingUp, Building, Users, ArrowRight } from "lucide-react";
import { CtaPanel, PageHeader, Reveal, SectionHeading, panelGhost, panelPrimary } from "../components/ui";

interface AboutPageProps {
  setCurrentPage: (page: string) => void;
}

const FOUNDED = 2012;

const values = [
  { icon: TrendingUp, title: "Innovation", description: "We embrace creativity and encourage bold thinking to drive meaningful change." },
  { icon: Users, title: "Community", description: "We build strong relationships and foster collaboration among entrepreneurs." },
  { icon: Award, title: "Excellence", description: "We strive for the highest standards in everything we do and deliver." },
  { icon: Building, title: "Impact", description: "We focus on creating tangible value for our members and the broader community." },
];

const AboutPage: React.FC<AboutPageProps> = ({ setCurrentPage }) => {
  const years = new Date().getFullYear() - FOUNDED;

  return (
    <div>
      <PageHeader
        eyebrow="About"
        title={<>About <span className="serif text-[var(--accent)]">EEVM.</span></>}
        subtitle="Discover how we're shaping the future of entrepreneurship at Emory University"
      />

      {/* Founding story */}
      <section className="wrap pb-24 sm:pb-32">
        <div className="grid lg:grid-cols-[auto_1fr] gap-10 lg:gap-20 items-center border-t border-[var(--line)] pt-14">
          <Reveal>
            <div className="display font-bold text-[clamp(7rem,18vw,14rem)] leading-[0.8] text-[var(--accent)]">{years}</div>
            <div className="display text-2xl font-semibold mt-4">Years of excellence</div>
          </Reveal>
          <Reveal delay={150}>
            <h2 className="display font-bold text-4xl sm:text-5xl mb-6">Founded in {FOUNDED}</h2>
            <p className="muted text-lg sm:text-xl leading-relaxed max-w-2xl">
              EEVM has been at the forefront of entrepreneurship education at Emory for over a decade,
              continually evolving to meet the needs of aspiring entrepreneurs. We connect students with
              the platform, resources, and network to explore the venture ecosystem.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission */}
      <section className="wrap pb-24 sm:pb-32">
        <div className="grid lg:grid-cols-2 gap-6">
          <Reveal className="card p-8 sm:p-12 flex flex-col justify-center">
            <p className="eyebrow mb-4">Our mission</p>
            <h2 className="display font-bold text-4xl sm:text-5xl mb-8">Bridging the classroom and <span className="serif">the real world.</span></h2>
            <p className="muted text-lg leading-relaxed mb-5">
              We seek to provide our members with opportunities to explore
              career paths, connect with peers, and network with professionals
              in the entrepreneurship, venture capital, and business strategy areas.
            </p>
            <p className="muted text-lg leading-relaxed">
              Through our comprehensive programming, we bridge the gap between
              academic learning and real-world business experience, preparing
              students for successful careers in the venture ecosystem.
            </p>
          </Reveal>
          <Reveal delay={150} className="rounded-[24px] overflow-hidden min-h-[360px]">
            <img src="/about/mission.webp" alt="EEVM event" className="w-full h-full object-cover" style={{ objectPosition: "center 70%" }} />
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="wrap pb-24 sm:pb-32">
        <SectionHeading eyebrow="Core values" title={<>What guides <span className="serif">everything we do.</span></>} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map(({ icon: Icon, title, description }, i) => (
            <Reveal key={title} delay={i * 100} className="card p-8">
              <div className="w-12 h-12 rounded-2xl bg-[var(--line)] flex items-center justify-center mb-10">
                <Icon size={22} className="text-[var(--accent)]" />
              </div>
              <h3 className="display text-2xl font-bold mb-3">{title}</h3>
              <p className="muted leading-relaxed">{description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaPanel
        title={<>Ready to join <span className="serif text-[var(--accent-bright)] whitespace-nowrap">our mission?</span></>}
        text="Whether you're an aspiring entrepreneur or simply curious about the startup world, EEVM offers opportunities for everyone to get involved and make a difference."
      >
        <button className={panelPrimary} onClick={() => setCurrentPage("applications")}>Apply to join <ArrowRight size={18} /></button>
        <button className={panelGhost} onClick={() => setCurrentPage("initiatives")}>Explore our work</button>
      </CtaPanel>
    </div>
  );
};

export default AboutPage;
