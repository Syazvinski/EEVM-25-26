import React, { useState, useEffect } from "react";
import { Award, TrendingUp, Building, Users } from "lucide-react";
import { useScrollAnimation, useStaggeredScrollAnimation } from "../hooks/useScrollAnimation";

interface HomePageProps {
  setCurrentPage: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  const [stats, setStats] = useState({
    divisions: 0,
    initiatives: 0,
    hackathonHours: 0,
    studentsReached: 0,
  });

  // Scroll animations
  const statsAnimation = useStaggeredScrollAnimation(4, 150);
  const initiativesAnimation = useStaggeredScrollAnimation(3, 200);
  const heroAnimation = useScrollAnimation({ delay: 300 });

  // Animation for counting numbers up
  useEffect(() => {
    const targets = {
      divisions: 5,
      initiatives: 3,
      hackathonHours: 48,
      studentsReached: 200,
    };

    const duration = 2000; // 2 seconds
    const frameRate = 60;
    const totalFrames = duration / (1000 / frameRate);

    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setStats({
        divisions: Math.round(targets.divisions * easeOut),
        initiatives: Math.round(targets.initiatives * easeOut),
        hackathonHours: Math.round(targets.hackathonHours * easeOut),
        studentsReached: Math.round(targets.studentsReached * easeOut),
      });

      if (frame >= totalFrames) {
        setStats(targets);
        clearInterval(timer);
      }
    }, 1000 / frameRate);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* Hero Section with background image placeholder */}
      <section 
        className="relative bg-gradient-to-r from-[#3CB5C4] to-[#01FDC0] text-white py-24"
        style={{
          backgroundImage: "url('/homepage/eevm_group.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 80%",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
        
        <div 
          ref={heroAnimation.elementRef}
          className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${
            heroAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-white bg-opacity-10 rounded-lg p-2 inline-block mb-6">
            {/* EEVM Partial Logo */}
            <img 
              src="/logos/eevm_partial.png" 
              alt="EEVM Logo" 
              className="h-16 w-auto mx-auto"
            />
          </div>
          {/* FEEDBACK: Make "Emory Entrepreneurship & Venture Management" one line */}
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 whitespace-nowrap">
            Emory Entrepreneurship & Venture Management
          </h1>
          {/* FEEDBACK: Differentiate font sizes and make "Join Emory..." marginally bigger */}
          <p className="text-lg lg:text-xl mb-4 max-w-4xl mx-auto italic">
            Connecting students with the platform, resources, and network to explore the venture ecosystem
          </p>
          <p className="text-xl lg:text-2xl mb-12 max-w-3xl mx-auto font-semibold">
            Join Emory's premier entrepreneurship organization
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => setCurrentPage("about")}
              className="bg-white text-[#3CB5C4] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-200"
            >
              Learn More About EEVM
            </button>
            <button
              onClick={() => setCurrentPage("applications")}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#3CB5C4] hover:scale-105 transition-all duration-200"
            >
              Apply Now
            </button>
          </div>
        </div>
      </section>

      {/* FEEDBACK: Move stats above main initiatives and make them bigger circles with count-up animation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={statsAnimation.elementRef} className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: stats.divisions, label: "Active Divisions" },
              { value: stats.initiatives, label: "Major Initiatives" },
              { value: stats.hackathonHours, label: "Hour Hackathon" },
              { value: `${stats.studentsReached}+`, label: "Students Reached" }
            ].map((stat, index) => (
              <div 
                key={index}
                className={`flex flex-col items-center transition-all duration-600 ${
                  statsAnimation.visibleItems[index] 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="w-32 h-32 bg-[#3CB5C4] text-white rounded-full flex items-center justify-center mb-4 hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl font-bold">{stat.value}</span>
                </div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Initiatives - FEEDBACK: Remove circles and allow natural logo display */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Main Initiatives
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three flagship programs that define EEVM's impact on the
              entrepreneurship ecosystem
            </p>
          </div>

          {/* FEEDBACK: Make them horizontal/side by side and remove background circles */}
          <div ref={initiativesAnimation.elementRef} className="grid lg:grid-cols-3 gap-12">
            {[
              {
                logo: "/hack-logos/hack_logo_2025.png",
                alt: "HackATL Logo",
                title: "HackATL",
                description: "A 48h hackathon and pitching competition that allows students to develop their ideas into running startups in collaboration with like-minded students across the nation."
              },
              {
                logo: "/logos/ignite_logo.png",
                alt: "IGNITE Logo", 
                title: "IGNITE",
                description: "An entrepreneurship educational program & community that provides Emory students the knowledge, tools, and relationships to explore the entrepreneurial world."
              },
              {
                logo: "/logos/excellerator-logo.png",
                alt: "Excellerator Logo",
                title: "Excellerator", 
                description: "A startup incubator to help take student-led early stage startups off the ground with support on Customer Discovery, MVP development, Pitching, and more."
              }
            ].map((initiative, index) => (
              <div 
                key={index}
                className={`text-center bg-white p-8 rounded-lg shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 ${
                  initiativesAnimation.visibleItems[index] 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
              >
                <div className="h-28 mx-auto mb-6 flex items-center justify-center">
                  {/* Initiative Logo - Natural display without circle background */}
                  <img src={initiative.logo} alt={initiative.alt} className="h-24 w-auto hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{initiative.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {initiative.description}
                </p>
                <button
                  onClick={() => setCurrentPage("initiatives")}
                  className="text-[#3CB5C4] font-semibold hover:text-[#01FDC0] hover:scale-105 transition-all duration-200"
                >
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 