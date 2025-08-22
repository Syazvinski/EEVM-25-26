import React from "react";
import { Mail, MapPin, Clock, Phone, Instagram, Linkedin, Globe } from "lucide-react";
import { useScrollAnimation, useStaggeredScrollAnimation } from "../hooks/useScrollAnimation";

interface ContactPageProps {
  setCurrentPage: (page: string) => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ setCurrentPage }) => {
  // Animations
  const headerAnimation = useScrollAnimation({ delay: 200 });
  const stepsAnimation = useStaggeredScrollAnimation(3, 300);
  const detailsAnimation = useScrollAnimation({ threshold: 0.3 });
  const socialAnimation = useStaggeredScrollAnimation(2, 150);

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
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to join the EEVM community? Here's how to connect with us
          </p>
        </div>

        {/* Contact Steps - Horizontal 1,2,3 format as requested */}
        <section className="mb-20">
          <div 
            ref={stepsAnimation.elementRef}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                number: "1",
                title: "Reach Out",
                description: "Send us an email with your questions or interest in joining EEVM",
                icon: <Mail size={32} className="text-white" />,
                action: "Email Us",
                link: "mailto:contact@eevm.org"
              },
              {
                number: "2", 
                title: "Connect",
                description: "Follow our social media for updates on events and application deadlines",
                icon: <Instagram size={32} className="text-white" />,
                action: "Follow Us",
                link: "https://instagram.com/eevm"
              },
              {
                number: "3",
                title: "Apply",
                description: "Submit your application when applications open each semester",
                icon: <Globe size={32} className="text-white" />,
                action: "Learn More",
                onClick: () => setCurrentPage("applications")
              }
            ].map((step, index) => (
              <div 
                key={index}
                className={`bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center hover:shadow-xl hover:scale-105 transition-all duration-500 ${
                  stepsAnimation.visibleItems[index] 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-[#3CB5C4] rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>
                {step.link ? (
                  <a 
                    href={step.link}
                    target={step.link.startsWith('mailto:') ? '_self' : '_blank'}
                    rel={step.link.startsWith('mailto:') ? '' : 'noopener noreferrer'}
                    className="bg-[#3CB5C4] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#01FDC0] hover:scale-105 transition-all duration-300 inline-block"
                  >
                    {step.action}
                  </a>
                ) : (
                  <button
                    onClick={step.onClick}
                    className="bg-[#3CB5C4] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#01FDC0] hover:scale-105 transition-all duration-300"
                  >
                    {step.action}
                  </button>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Contact Details */}
        <section 
          ref={detailsAnimation.elementRef}
          className={`mb-16 transition-all duration-700 ${
            detailsAnimation.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="bg-white p-12 rounded-lg shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start hover:scale-105 transition-transform duration-300">
                    <Mail size={24} className="text-[#3CB5C4] mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <a href="mailto:contact@eevm.org" className="text-[#3CB5C4] hover:text-[#01FDC0] transition-colors">
                        contact@eevm.org
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start hover:scale-105 transition-transform duration-300">
                    <MapPin size={24} className="text-[#3CB5C4] mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Location</h3>
                      <p className="text-gray-600">Emory University<br />Atlanta, GA</p>
                    </div>
                  </div>
                  <div className="flex items-start hover:scale-105 transition-transform duration-300">
                    <Clock size={24} className="text-[#3CB5C4] mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Office Hours</h3>
                      <p className="text-gray-600">Monday - Friday<br />9:00 AM - 5:00 PM EST</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#3CB5C4] p-8 rounded-lg text-white">
                <h3 className="text-2xl font-bold mb-4">Quick Response</h3>
                <p className="mb-6 leading-relaxed">
                  We typically respond to all inquiries within 24-48 hours during business days. 
                  For urgent matters or application deadlines, please mention it in your subject line.
                </p>
                <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Best Times to Reach Us:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Weekdays: 10 AM - 4 PM</li>
                    <li>• Application periods: Same day response</li>
                    <li>• General inquiries: 1-2 business days</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default ContactPage; 