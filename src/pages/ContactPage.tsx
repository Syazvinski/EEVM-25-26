import React from "react";
import { Mail, MapPin, Clock, Instagram, Globe, ArrowUpRight } from "lucide-react";
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
    { icon: Clock, label: "Office hours", value: <>Monday – Friday<br />9:00 AM – 5:00 PM EST</> },
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
            <div className="absolute -right-24 -bottom-24 w-80 h-80 rounded-full bg-[var(--accent-bright)] opacity-15 blur-3xl" />
            <h2 className="display font-bold text-4xl mb-6 relative">Quick response</h2>
            <p className="text-lg leading-relaxed opacity-70 mb-10 relative">
              We typically respond to all inquiries within 24-48 hours during business days.
              For urgent matters or application deadlines, please mention it in your subject line.
            </p>
            <div className="rounded-2xl border border-white/15 p-6 relative">
              <h3 className="font-semibold mb-3">Best times to reach us</h3>
              <ul className="space-y-2 opacity-70">
                <li>Weekdays: 10 AM – 4 PM</li>
                <li>Application periods: Same day response</li>
                <li>General inquiries: 1-2 business days</li>
              </ul>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default ContactPage;
