import React from "react";
import { Award, TrendingUp, Building, Users } from "lucide-react";
import { useScrollAnimation, useStaggeredScrollAnimation } from "../hooks/useScrollAnimation";

interface AboutPageProps {
  setCurrentPage: (page: string) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ setCurrentPage }) => {
  // Animations
  const headerAnimation = useScrollAnimation({ delay: 200 });
  const missionAnimation = useScrollAnimation({ delay: 400 });
  const visionAnimation = useScrollAnimation({ delay: 600 });
  const valuesAnimation = useStaggeredScrollAnimation(4, 200);
  const excellenceAnimation = useScrollAnimation({ threshold: 0.3 });
  const ctaAnimation = useScrollAnimation({ threshold: 0.2 });

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
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About EEVM</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we're shaping the future of entrepreneurship at Emory University
          </p>
        </div>

        {/* Founding Story Section */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div 
              ref={excellenceAnimation.elementRef}
              className={`text-center lg:text-left transition-all duration-700 ${
                excellenceAnimation.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
            >
              <div className="inline-block relative hover:scale-105 transition-transform duration-300 mx-auto lg:mx-0">
                <div className="w-56 h-56 bg-[#3CB5C4] rounded-full flex flex-col items-center justify-center shadow-2xl border-4 border-white">
                  <div className="text-5xl font-bold text-white mb-3">13</div>
                  <div className="text-xl text-white text-center leading-tight font-semibold">Years of<br />Excellence</div>
                </div>
              </div>
            </div>
            <div 
              className={`transition-all duration-700 delay-200 ${
                excellenceAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Founded in 2012</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                EEVM has been at the forefront of entrepreneurship education at Emory for over a decade, 
                continually evolving to meet the needs of aspiring entrepreneurs. We connect students with 
                the platform, resources, and network to explore the venture ecosystem.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div 
            ref={missionAnimation.elementRef}
            className={`bg-white p-10 rounded-xl shadow-lg transition-all duration-700 ${
              missionAnimation.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              We seek to provide our members with opportunities to explore
              career paths, connect with peers, and network with professionals
              in the entrepreneurship, venture capital, and business strategy areas.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Through our comprehensive programming, we bridge the gap between
              academic learning and real-world business experience, preparing
              students for successful careers in the venture ecosystem.
            </p>
          </div>
          <div 
            ref={visionAnimation.elementRef}
            className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-700 ${
              visionAnimation.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <img 
              src="/about/mission.JPG" 
              alt="EEVM Team Mission" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
              style={{ objectPosition: 'center 70%', minHeight: '400px' }}
            />
          </div>
        </div>

        {/* Core Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-lg text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div ref={valuesAnimation.elementRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <TrendingUp size={48} className="text-[#3CB5C4]" />,
                title: "Innovation",
                description: "We embrace creativity and encourage bold thinking to drive meaningful change."
              },
              {
                icon: <Users size={48} className="text-[#3CB5C4]" />,
                title: "Community",
                description: "We build strong relationships and foster collaboration among entrepreneurs."
              },
              {
                icon: <Award size={48} className="text-[#3CB5C4]" />,
                title: "Excellence", 
                description: "We strive for the highest standards in everything we do and deliver."
              },
              {
                icon: <Building size={48} className="text-[#3CB5C4]" />,
                title: "Impact",
                description: "We focus on creating tangible value for our members and the broader community."
              }
            ].map((value, index) => (
              <div 
                key={index}
                className={`bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center hover:shadow-xl hover:scale-105 transition-all duration-500 ${
                  valuesAnimation.visibleItems[index] 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
              >
                <div className="mb-6 flex justify-center hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <div 
          ref={ctaAnimation.elementRef}
          className={`bg-white p-12 rounded-lg shadow-sm border border-gray-200 text-center hover:shadow-lg transition-all duration-500 ${
            ctaAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Ready to Join Our Mission?</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you're an aspiring entrepreneur or simply curious about the startup world, 
            EEVM offers opportunities for everyone to get involved and make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => setCurrentPage("applications")}
              className="bg-[#3CB5C4] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#01FDC0] hover:scale-105 transition-all duration-300"
            >
              Apply to Join
            </button>
            <button
              onClick={() => setCurrentPage("initiatives")}
              className="border-2 border-[#3CB5C4] text-[#3CB5C4] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#3CB5C4] hover:text-white hover:scale-105 transition-all duration-300"
            >
              Explore Our Work
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage; 