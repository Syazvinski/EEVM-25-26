import React from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { CtaPanel, PageHeader, Reveal, SectionHeading, panelGhost, panelPrimary } from "../components/ui";

interface ApplicationsPageProps {
  setCurrentPage: (page: string) => void;
}

const APPLY_URL = "https://forms.gle/PDm3MW6sGr8YcWZKA";

const timelineSteps = [
  { date: "Sep 3", title: "Student Involvement Fair", description: "8–10 PM · McDonough Field" },
  { date: "Sep 3", title: "Applications Open", description: "Submit your application and resume through our online portal." },
  { date: "Sep 8", title: "EEVM Info Session", description: "5:30–6:30 PM · GBS 334" },
  { date: "Sep 12", title: "Donuts & Directors Chat", description: "2–4 PM · GBS outside Costa Coffee" },
  { date: "Sep 14", title: "Application Closes", description: "Deadline: 11:59 PM EST" },
  { date: "Sep 17", title: "Interview Decision Notification", description: "Invitations sent to selected applicants." },
  { date: "Sep 20", title: "Interviews", description: "Interview blocks throughout the day." },
  { date: "Sep 21", title: "Interviews", description: "Second day of interviews." },
  { date: "Sep 22", title: "Final Decision Notification", description: "Final outcomes released." },
];

const qualifications = [
  {
    title: "Leadership & Initiative",
    points: [
      "Demonstrated leadership experience in academic, professional, or extracurricular settings",
      "Proactive mindset with ability to take initiative and drive projects forward",
      "Strong communication and interpersonal skills",
    ],
  },
  {
    title: "Passion & Commitment",
    points: [
      "Genuine interest in entrepreneurship, innovation, and venture development",
      "Ability to commit time and energy to EEVM activities and responsibilities",
      "Collaborative team player who thrives in a dynamic environment",
    ],
  },
];

// Countdown to application close (Sep 14, 11:59 PM ET)
function useCountdown() {
  const [timeLeft, setTimeLeft] = React.useState({ days: 0, hours: 0, minutes: 0, seconds: 0, over: false });

  React.useEffect(() => {
    // Sep is month index 8; 11:59 PM ET is 03:59 UTC next day during DST (UTC-4)
    const target = new Date(Date.UTC(new Date().getFullYear(), 8, 15, 3, 59, 0));
    const tick = () => {
      const diff = target.getTime() - Date.now();
      if (diff <= 0) { setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, over: true }); return; }
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
        over: false,
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return timeLeft;
}

const pad = (n: number) => String(n).padStart(2, "0");

const ApplicationsPage: React.FC<ApplicationsPageProps> = ({ setCurrentPage }) => {
  const timeLeft = useCountdown();

  return (
    <div>
      <PageHeader
        eyebrow="Applications"
        title={<>Apply to <span className="serif text-[var(--accent)]">EEVM.</span></>}
        subtitle="Join our Executive Board and make a meaningful impact on the entrepreneurship community at Emory"
      >
        <div className="flex flex-wrap items-center gap-3">
          <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Apply now <ArrowUpRight size={18} />
          </a>
          <span className="chip">
            {timeLeft.over ? (
              "Applications are closed"
            ) : (
              <>Closes in <span className="ml-2 font-mono font-semibold text-[var(--ink)]">{pad(timeLeft.days)}d {pad(timeLeft.hours)}h {pad(timeLeft.minutes)}m {pad(timeLeft.seconds)}s</span></>
            )}
          </span>
        </div>
      </PageHeader>

      {/* Timeline */}
      <section className="wrap pb-24 sm:pb-32">
        <SectionHeading
          eyebrow="Application timeline"
          title={<>Key <span className="serif">dates.</span></>}
          subtitle="Key dates for the Executive Board application process"
        />
        <ol className="border-t border-[var(--line)]">
          {timelineSteps.map((step, i) => (
            <li key={i}>
              <Reveal className="grid grid-cols-[5.5rem_1fr] sm:grid-cols-[10rem_1fr_1.2fr] gap-x-6 gap-y-1 py-6 border-b border-[var(--line)] items-baseline">
                <span className="display text-xl sm:text-2xl font-bold text-[var(--accent)]">{step.date}</span>
                <span className="display text-xl sm:text-2xl font-semibold">{step.title}</span>
                <span className="muted col-start-2 sm:col-start-auto">{step.description}</span>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      {/* What we're looking for */}
      <section className="wrap pb-24 sm:pb-32">
        <SectionHeading eyebrow="What we're looking for" title={<>Who thrives <span className="serif">at EEVM.</span></>} />
        <div className="grid md:grid-cols-2 gap-4">
          {qualifications.map((q, i) => (
            <Reveal key={q.title} delay={i * 100} className="card p-8 sm:p-10">
              <h3 className="display text-3xl font-bold mb-6">{q.title}</h3>
              <ul className="space-y-4">
                {q.points.map(point => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-1 w-5 h-5 shrink-0 rounded-full bg-[var(--accent)] text-white flex items-center justify-center"><Check size={12} strokeWidth={3} /></span>
                    <span className="muted leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaPanel
        title={<>Fall recruitment <span className="serif text-[var(--accent-bright)] whitespace-nowrap">timeline.</span></>}
        text="Applications open Sep 3 and close Sep 14. Interviews run Sep 20–21."
      >
        <button className={panelPrimary} onClick={() => setCurrentPage("contact")}>Get notified</button>
        <button className={panelGhost} onClick={() => setCurrentPage("team")}>Meet our team</button>
      </CtaPanel>
    </div>
  );
};

export default ApplicationsPage;
