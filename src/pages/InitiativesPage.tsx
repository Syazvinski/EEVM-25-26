import React from "react";
import { useScrollAnimation, useStaggeredScrollAnimation } from "../hooks/useScrollAnimation";

interface InitiativesPageProps {
  setCurrentPage: (page: string) => void;
}

const InitiativesPage: React.FC<InitiativesPageProps> = ({ setCurrentPage }) => {

  // Animations
  const headerAnimation = useScrollAnimation({ delay: 200 });
  const hackatlAnimation = useScrollAnimation({ delay: 400 });
  const sponsorsAnimation = useScrollAnimation({ threshold: 0.2 });
  const eventsAnimation = useStaggeredScrollAnimation(6, 200);
  const igniteSectionAnimation = useScrollAnimation({ threshold: 0.3 });
  const excelleratorAnimation = useScrollAnimation({ threshold: 0.3 });

  // Dynamic sponsors list from the sponsors folder
  const sponsors = [
    { name: "Accenture", logo: "/sponsors/accenture_logo.webp" },
    { name: "AWS", logo: "/sponsors/aws_logo.webp" },
    { name: "BECU", logo: "/sponsors/becu_logo.webp" },
    { name: "City of Atlanta", logo: "/sponsors/city_of_atlanta_logo.webp" },
    { name: "Coca Cola", logo: "/sponsors/coca_cola_logo.webp" },
    { name: "Emory CEI", logo: "/sponsors/emory_cei_logo.webp" },
    { name: "Georgia Pacific", logo: "/sponsors/georgia_pacific_logo.webp" },
    { name: "GitHub", logo: "/sponsors/github_logo.webp" },
    { name: "Goizueta Business School", logo: "/sponsors/goizueta_business_school_logo.webp" },
    { name: "Goizueta CEI", logo: "/sponsors/goizueta_cei_logo.webp" },
    { name: "Google", logo: "/sponsors/google_logo.webp" },
    { name: "Home Depot", logo: "/sponsors/home_depot_logo.webp" },
    { name: "IBM", logo: "/sponsors/ibm_logo.webp" },
    { name: "Insomnia Cookies", logo: "/sponsors/insomnia_cookies_logo.webp" },
    { name: "Invesco", logo: "/sponsors/invesco_logo.webp" },
    { name: "Lyft", logo: "/sponsors/lyft_logo.webp" },
    { name: "Meta", logo: "/sponsors/meta_logo.webp" },
    { name: "Microsoft", logo: "/sponsors/microsoft_logo.webp" },
    { name: "Porsche", logo: "/sponsors/porsche_logo.webp" },
    { name: "ProductATL", logo: "/sponsors/productatl_logo.webp" },
    { name: "Red Bull", logo: "/sponsors/red_bull_logo.webp" },
    { name: "Stripe", logo: "/sponsors/stripe_logo.webp" },
    { name: "Synovus", logo: "/sponsors/synovus_logo.webp" },
    { name: "TAG", logo: "/sponsors/tag_logo.webp" },
  ];

  // Past HackATL years listed inline in the render below

  // Removed unused stat and card visibility animations to satisfy strict linting

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
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Initiatives</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three flagship programs driving innovation and entrepreneurship at Emory
          </p>
        </div>

        {/* HackATL Featured Section */}
        <section 
          ref={hackatlAnimation.elementRef}
          className={`mb-20 transition-all duration-700 ${
            hackatlAnimation.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300 p-8 lg:p-12">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Left Column: Description */}
              <div className="lg:col-span-2 pr-8">
                <div className="flex items-center mb-6">
                  <img 
                    src="/hack-logos/hack_logo_2025-h80.webp"
                    srcSet="/hack-logos/hack_logo_2025-h80.webp 1x, /hack-logos/hack_logo_2025-h160.webp 2x, /hack-logos/hack_logo_2025-h240.webp 3x"
                    alt="HackATL Logo" 
                    className="h-20 w-auto mr-6 hover:scale-110 transition-transform duration-300" 
                  />
                  <h2 className="text-5xl font-bold text-gray-900">HackATL</h2>
                </div>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Our flagship 48-hour hackathon brings together students from across the nation to develop 
                  innovative solutions to real-world problems. Participants form teams, build prototypes, 
                  and pitch their ideas to a panel of industry experts.
                </p>
                <button
                  onClick={() => setCurrentPage("applications")}
                  className="bg-[#3CB5C4] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#01FDC0] hover:scale-105 transition-all duration-300"
                >
                  Register for HackATL 2025
                </button>
              </div>

              {/* Right Column: Stats */}
              <div className="lg:col-span-1 space-y-6 text-center lg:text-left">
                <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
                  <div className="text-5xl font-extrabold text-[#3CB5C4]">48</div>
                  <div className="text-lg text-gray-600 font-medium">Hours</div>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
                  <div className="text-5xl font-extrabold text-[#3CB5C4]">200+</div>
                  <div className="text-lg text-gray-600 font-medium">Participants</div>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
                  <div className="text-5xl font-extrabold text-[#3CB5C4]">$13K</div>
                  <div className="text-lg text-gray-600 font-medium">Prize Pool</div>
                </div>
              </div>
            </div>
            {/* Bottom Row: Image */}
            <div className="mt-12 relative overflow-hidden rounded-lg shadow-lg" style={{height: '400px'}}>
              <img 
                src="/initiatives/hack_winner.webp" 
                alt="HackATL participants working" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                style={{ objectPosition: 'center 30%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-40"></div>
            </div>
          </div>
        </section>

        {/* Sponsors Section */}
        <section className="mb-20">
          <div 
            ref={sponsorsAnimation.elementRef}
            className={`text-center mb-12 transition-all duration-700 ${
              sponsorsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Sponsors</h2>
            <p className="text-lg text-gray-600 mb-8">Industry leaders supporting innovation</p>
            
            {/* Sponsors Carousel */}
            <div className="relative overflow-hidden bg-white rounded-lg shadow-sm py-8">
              <div 
                className="flex space-x-8 animate-scroll-left"
                style={{
                  animation: 'scroll-left 30s linear infinite',
                  width: `${sponsors.length * 200}px`
                }}
              >
                {sponsors.map((sponsor, index) => (
                  <div
                    key={index} 
                    className="flex-shrink-0 w-40 h-20 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                  >
                    <img 
                      src={sponsor.logo} 
                      alt={`${sponsor.name} Logo`}
                      className="max-w-full max-h-full object-contain transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">HackATL Through the Years</h2>
            <p className="text-lg text-gray-600">A history of innovation and competition</p>
          </div>
          
          <div ref={eventsAnimation.elementRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { year: "2025", theme: "AI & Innovation", logo: "/hack-logos/hack_logo_2025.webp", description: "Exploring artificial intelligence and emerging technologies to solve real-world problems." },
              { year: "2024", theme: "Sustainability", logo: "/hack-logos/hack_24.webp", description: "Developing solutions for environmental challenges and sustainable business practices." },
              { year: "2023", theme: "FinTech", logo: "/hack-logos/hack_23.webp", description: "Innovation in financial technology and digital payment solutions." },
              { year: "2022", theme: "HealthTech", logo: "/hack-logos/hack_22.webp", description: "Healthcare technology solutions to improve patient outcomes and accessibility." },
              { year: "2021", theme: "EdTech", logo: "/hack-logos/hack_21.webp", description: "Educational technology innovations for remote and hybrid learning environments." },
              { year: "2020", theme: "Social Impact", logo: "/hack-logos/hack_20.webp", description: "Technology solutions addressing social issues and community challenges." }
            ].map((event, index) => (
              <div 
                key={event.year}
                className={`bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center hover:shadow-lg hover:scale-105 transition-all duration-500 ${
                  eventsAnimation.visibleItems[index] 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
              >
                <div className="mb-4 flex justify-center">
                  <img 
                    src={event.logo} 
                    alt={`HackATL ${event.year} Logo`} 
                    className="h-20 w-auto hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">HackATL {event.year}</h3>
                <p className="text-[#3CB5C4] font-semibold mb-3">{event.theme}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* IGNITE Section */}
        <section 
          ref={igniteSectionAnimation.elementRef}
          className={`mb-20 transition-all duration-700 ${
            igniteSectionAnimation.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}
        >
          <div className="bg-white p-12 rounded-lg shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center justify-center mb-6 h-40">
                  <img 
                    src="/logos/ignite_logo-h128.webp"
                    srcSet="/logos/ignite_logo-h128.webp 1x, /logos/ignite_logo-h256.webp 2x"
                    alt="IGNITE Logo" 
                    className="h-32 w-auto hover:scale-110 transition-transform duration-300" 
                  />
                </div>
              </div>
              <div className="bg-[#3CB5C4] p-8 rounded-lg text-white text-center hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-4">Program Highlights</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Monthly Workshops</span>
                    <span className="font-bold">8+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Industry Speakers</span>
                    <span className="font-bold">15+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Student Participants</span>
                    <span className="font-bold">100+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Excellerator Section */}
        <section 
          ref={excelleratorAnimation.elementRef}
          className={`mb-20 transition-all duration-700 ${
            excelleratorAnimation.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}
        >
          <div className="bg-white p-12 rounded-lg shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="bg-[#3CB5C4] p-8 rounded-lg text-white text-center order-2 lg:order-1 hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-4">Startup Support</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Startups Incubated</span>
                    <span className="font-bold">25+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Funding Raised</span>
                    <span className="font-bold">$2M+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Success Rate</span>
                    <span className="font-bold">60%</span>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center justify-center mb-6 h-40">
                  <img 
                    src="/logos/excellerator-logo-h128.webp"
                    srcSet="/logos/excellerator-logo-h128.webp 1x, /logos/excellerator-logo-h256.webp 2x"
                    alt="Excellerator Logo" 
                    className="h-32 w-auto rounded hover:scale-110 transition-transform duration-300" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* Custom CSS for smooth scrolling animation */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes scroll-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll-left {
            animation: scroll-left 30s linear infinite;
          }
        `
      }} />
    </div>
  );
};

export default InitiativesPage; 
