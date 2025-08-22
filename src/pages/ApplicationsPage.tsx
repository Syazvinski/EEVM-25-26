import React from "react";
import { Calendar, ArrowRight, Clock, Users, FileText, CheckCircle } from "lucide-react";
import { useScrollAnimation, useStaggeredScrollAnimation } from "../hooks/useScrollAnimation";

interface ApplicationsPageProps {
  setCurrentPage: (page: string) => void;
}

const ApplicationsPage: React.FC<ApplicationsPageProps> = ({ setCurrentPage }) => {
  // Animations
  const headerAnimation = useScrollAnimation({ delay: 200 });
  const heroAnimation = useScrollAnimation({ delay: 400 });
  const timelineAnimation = useStaggeredScrollAnimation(4, 300);
  const qualificationsAnimation = useStaggeredScrollAnimation(2, 400);
  const ctaAnimation = useScrollAnimation({ threshold: 0.3 });

  const timelineSteps = [
    {
      date: "Sep 15",
      title: "Applications Open",
      description: "Submit your application and resume through our online portal.",
      icon: <FileText size={24} className="text-white" />
    },
    {
      date: "Oct 1", 
      title: "Application Deadline",
      description: "Final day to submit applications. Late entries will not be accepted.",
      icon: <Clock size={24} className="text-white" />
    },
    {
      date: "Oct 8",
      title: "Interview Invitations",
      description: "Selected candidates will be contacted to schedule an interview.",
      icon: <Users size={24} className="text-white" />
    },
    {
      date: "Oct 15",
      title: "Final Decisions",
      description: "Acceptance notifications will be sent out to successful applicants.",
      icon: <CheckCircle size={24} className="text-white" />
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
            backgroundImage: "url('/applications/applications_banner.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-40 hover:opacity-30 transition-opacity duration-300"></div>
          
          <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-4">
            <h2 className="text-4xl font-bold mb-6">Ready to Make Your Mark?</h2>
            <p className="text-xl mb-8 max-w-2xl">
              We're looking for passionate students to join our team and drive innovation in the entrepreneurship ecosystem.
            </p>
            <a 
              href="#application-form"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#3CB5C4] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#01FDC0] hover:scale-105 transition-all duration-300 inline-flex items-center"
            >
              Start Your Application <ArrowRight size={20} className="ml-2" />
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
                  <div className="w-16 h-16 bg-[#3CB5C4] rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-white shadow-lg hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
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
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Applications for Fall 2025</h3>
          <p className="text-lg text-gray-600 mb-6">
            Applications will open on September 15th. Follow us on social media for updates and announcements.
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