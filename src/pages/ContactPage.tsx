import React from "react";
import { Mail, MapPin, Instagram, Linkedin, Globe, ArrowUpRight } from "lucide-react";
import { PageHeader, Reveal } from "../components/ui";

interface ContactPageProps {
  setCurrentPage: (page: string) => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ setCurrentPage }) => {
  const steps = [
    { title: "Reach Out", description: "Send us an email with your questions or interest in joining EEVM", icon: Mail, action: "Email us", href: "mailto:contact@eevm.org" },
    { title: "Connect", description: "Follow our social media for updates on events and application deadlines", icon: Instagram, action: "Follow us", href: "https://www.instagram.com/emoryevm/" },
    { title: "Apply", description: "Submit your application when applications open each semester", icon: Globe, action: "Learn more", onClick: () => setCurrentPage("applications") },
  ];

  const details = [
    { icon: Mail, label: "Email", value: <a href="mailto:contact@eevm.org" className="text-[var(--accent)] hover:underline">contact@eevm.org</a> },
    { icon: MapPin, label: "Location", value: <>Emory University<br />Atlanta, GA</> },
  ];

  return (
    <div>
      <PageHeader
        eyebrow="Contact"
        title={<>Get in <span className="serif text-[var(--accent)]">touch.</span></>}
        subtitle="Ready to join the EEVM community? Here's how to connect with us"
      />

      {/* Steps */}
      <section className="wrap pb-24 sm:pb-32">
        <div className="grid md:grid-cols-3 gap-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const actionClass = "btn btn-ghost btn-sm mt-auto self-start";
            return (
              <Reveal key={step.title} delay={i * 100} className="card p-8 flex flex-col min-h-[300px]">
                <div className="flex items-center justify-between mb-10">
                  <span className="display text-5xl font-bold text-[var(--accent)]">0{i + 1}</span>
                  <span className="w-11 h-11 rounded-full bg-[var(--line)] flex items-center justify-center"><Icon size={20} /></span>
                </div>
                <h3 className="display text-3xl font-bold mb-3">{step.title}</h3>
                <p className="muted leading-relaxed mb-8">{step.description}</p>
                {step.href ? (
                  <a
                    href={step.href}
                    className={actionClass}
                    {...(step.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {step.action} <ArrowUpRight size={16} />
                  </a>
                ) : (
                  <button onClick={step.onClick} className={actionClass}>{step.action} <ArrowUpRight size={16} /></button>
                )}
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Details */}
      <section className="px-4 sm:px-8 pb-24">
        <Reveal className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-4">
          <div className="card p-8 sm:p-12">
            <h2 className="display font-bold text-4xl mb-10">Contact information</h2>
            <dl className="space-y-8">
              {details.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex gap-5">
                  <span className="w-11 h-11 shrink-0 rounded-full bg-[var(--line)] flex items-center justify-center"><Icon size={19} className="text-[var(--accent)]" /></span>
                  <div>
                    <dt className="font-semibold mb-1">{label}</dt>
                    <dd className="muted leading-relaxed">{value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
          <div className="rounded-[24px] bg-[var(--panel)] text-[var(--panel-ink)] p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute -right-32 -bottom-32 w-[30rem] h-[30rem] pointer-events-none bg-[radial-gradient(circle,rgba(1,253,192,0.16),transparent_60%)]" />
            <h2 className="display font-bold text-4xl mb-6 relative">Stay in the loop</h2>
            <p className="text-lg leading-relaxed opacity-70 mb-10 relative">
              Email is the best way to reach us. For event updates and application dates, follow EEVM on Instagram and LinkedIn.
            </p>
            <div className="flex flex-wrap gap-3 relative">
              <a href="https://www.instagram.com/emoryevm/" target="_blank" rel="noopener noreferrer" className="btn border border-white/20 hover:bg-white/10">
                <Instagram size={18} /> Instagram
              </a>
              <a href="https://www.linkedin.com/company/emory-entrepreneurship-&-venture-management/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="btn border border-white/20 hover:bg-white/10">
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default ContactPage;
