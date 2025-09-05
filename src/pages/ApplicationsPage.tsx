import React from "react";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation, useStaggeredScrollAnimation } from "../hooks/useScrollAnimation";

interface ApplicationsPageProps {
  setCurrentPage: (page: string) => void;
}

const ApplicationsPage: React.FC<ApplicationsPageProps> = ({ setCurrentPage }) => {
  // Animations
  const headerAnimation = useScrollAnimation({ delay: 200 });
  const heroAnimation = useScrollAnimation({ delay: 400 });
  const timelineAnimation = useStaggeredScrollAnimation(9, 300);
  const qualificationsAnimation = useStaggeredScrollAnimation(2, 400);
  const ctaAnimation = useScrollAnimation({ threshold: 0.3 });

  const timelineSteps = [
    {
      date: "Sep 3",
      title: "Student Involvement Fair",
      description: "8–10 PM · McDonough Field",
    },
    {
      date: "Sep 3",
      title: "Applications Open",
      description: "Submit your application and resume through our online portal.",
    },
    {
      date: "Sep 8",
      title: "EEVM Info Session",
      description: "5:30–6:30 PM · GBS 334",
    },
    {
      date: "Sep 12",
      title: "Donuts & Directors Chat",
      description: "2–4 PM · GBS outside Costa Coffee",
    },
    {
      date: "Sep 14",
      title: "Application Closes",
      description: "Deadline: 11:59 PM EST",
    },
    {
      date: "Sep 17",
      title: "Interview Decision Notification",
      description: "Invitations sent to selected applicants.",
    },
    {
      date: "Sep 20",
      title: "Interviews",
      description: "Interview blocks throughout the day.",
    },
    {
      date: "Sep 21",
      title: "Interviews",
      description: "Second day of interviews.",
    },
    {
      date: "Sep 22",
      title: "Final Decision Notification",
      description: "Final outcomes released.",
    }
  ];

  return (
    <div className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div 
          ref={headerAnimation.elementRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Apply to EEVM</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our Executive Board and make a meaningful impact on the entrepreneurship community at Emory
          </p>
        </div>

        {/* Hero Section */}
        <div 
          ref={heroAnimation.elementRef}
          className={`h-96 rounded-lg mb-16 relative overflow-hidden transition-all duration-700 hover:scale-105 ${
            heroAnimation.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{
            backgroundImage: "url('/applications/ready_mark.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gray-800 opacity-40 hover:opacity-30 transition-opacity duration-300"></div>
          
          <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-4">
            <h2 className="text-4xl font-bold mb-6">Ready to Make Your Mark?</h2>
            <p className="text-xl mb-8 max-w-2xl">
              We're looking for passionate students to join our team and drive innovation in the entrepreneurship ecosystem.
            </p>
            <a 
              href="https://forms.gle/PDm3MW6sGr8YcWZKA"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#3CB5C4] text-white px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center hover:bg-[#01FDC0] hover:scale-105 transition-all duration-300"
              title="Apply via Google Form"
            >
              Apply Now <ArrowRight size={20} className="ml-2" />
            </a>
          </div>
        </div>

        {/* Application Timeline */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Application Timeline</h2>
            <p className="text-lg text-gray-600">Key dates for the Executive Board application process</p>
          </div>

          <div ref={timelineAnimation.elementRef} className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {timelineSteps.map((step, index) => (
                <div 
                  key={index} 
                  className={`bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center hover:shadow-xl hover:scale-105 transition-all duration-500 ${
                    timelineAnimation.visibleItems[index] 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-12'
                  }`}
                >
                  <div className="text-2xl font-bold text-[#3CB5C4] mb-2">{step.date}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We're Looking For */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What We're Looking For</h2>
          </div>
          
          <div ref={qualificationsAnimation.elementRef} className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Leadership & Initiative",
                points: [
                  "Demonstrated leadership experience in academic, professional, or extracurricular settings",
                  "Proactive mindset with ability to take initiative and drive projects forward",
                  "Strong communication and interpersonal skills"
                ]
              },
              {
                title: "Passion & Commitment", 
                points: [
                  "Genuine interest in entrepreneurship, innovation, and venture development",
                  "Ability to commit time and energy to EEVM activities and responsibilities",
                  "Collaborative team player who thrives in a dynamic environment"
                ]
              }
            ].map((section, index) => (
              <div 
                key={index}
                className={`bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-500 ${
                  qualificationsAnimation.visibleItems[index] 
                    ? 'opacity-100 translate-x-0' 
                    : `opacity-0 ${index === 0 ? '-translate-x-8' : 'translate-x-8'}`
                }`}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h3>
                <ul className="space-y-3 text-gray-600">
                  {section.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-[#3CB5C4] rounded-full mt-2 mr-3 flex-shrink-0 hover:scale-150 transition-transform duration-300"></div>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Application Status */}
        <div 
          ref={ctaAnimation.elementRef}
          className={`bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center hover:shadow-lg transition-all duration-500 ${
            ctaAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Fall Recruitment Timeline</h3>
          <p className="text-lg text-gray-600 mb-6">
            Applications open Sep 3 and close Sep 14. Interviews run Sep 20–21.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setCurrentPage("contact")}
              className="bg-[#3CB5C4] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#01FDC0] hover:scale-105 transition-all duration-300"
            >
              Get Notified
            </button>
            <button
              onClick={() => setCurrentPage("team")}
              className="border-2 border-[#3CB5C4] text-[#3CB5C4] px-6 py-3 rounded-lg font-semibold hover:bg-[#3CB5C4] hover:text-white hover:scale-105 transition-all duration-300"
            >
              Meet Our Team
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ApplicationsPage; 
