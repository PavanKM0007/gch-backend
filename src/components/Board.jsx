import React, { useState, useEffect, useRef } from 'react';
import { Users, Award, Linkedin, Mail, GraduationCap, Briefcase, Star, CheckCircle, Globe } from 'lucide-react';

const Board = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [activeAdvisor, setActiveAdvisor] = useState(0);
  const [hoveredAdvisor, setHoveredAdvisor] = useState(null);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);

  const advisoryBoard = [
    {
      name: "",
      position: "",
      expertise: "",
      experience: "",
      education: "",
      currentRole: "",
      image: "/board/anil.jpg",
      bio: "",
      achievements: ["Published 50+ Research Papers", "Policy Advisor to Government", "International Recognition"],
      linkedin: "",
      email: ""
    },

  ];

  const expertiseAreas = [
    { name: "Policy & Governance", count: 1, color: "from-purple-500 to-purple-600" },
    { name: "Technology Innovation", count: 1, color: "from-blue-500 to-blue-600" },
    { name: "Business Strategy", count: 1, color: "from-green-500 to-green-600" },
    { name: "Environmental Impact", count: 1, color: "from-orange-500 to-orange-600" },
    { name: "Financial Planning", count: 1, color: "from-red-500 to-red-600" },
    { name: "Research & Development", count: 1, color: "from-indigo-500 to-indigo-600" }
  ];

  useEffect(() => {
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeaderVisible(true);
          headerObserver.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (headerRef.current) headerObserver.observe(headerRef.current);
    return () => headerObserver.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAdvisor(prev => (prev + 1) % advisoryBoard.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [advisoryBoard.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50">
      {}
      <section ref={headerRef} className="pt-20 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`
            text-center transition-all duration-1000
            ${isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Advisory Board
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Industry leaders and experts guiding our sustainable energy vision
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <div className="flex items-center space-x-2 bg-green-100 text-green-600 rounded-full px-4 py-2">
                <Award className="w-4 h-4" />
                <span className="font-medium text-sm">Industry Leaders</span>
              </div>
              <div className="flex items-center space-x-2 bg-orange-100 text-orange-600 rounded-full px-4 py-2">
                <Globe className="w-4 h-4" />
                <span className="font-medium text-sm">Global Expertise</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section ref={sectionRef} className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {}
          <div className="flex justify-center mb-8 md:mb-12 lg:mb-16">
            <div className="w-full max-w-sm mx-4 md:mx-0">
            {advisoryBoard.map((advisor, index) => (
              <div
                key={index}
                className={`
                  relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-1000 ease-out overflow-hidden
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                  ${activeAdvisor === index ? 'scale-105 shadow-2xl' : 'hover:scale-105'}
                  ${hoveredAdvisor === index ? 'ring-4 ring-green-200' : ''}
                `}
                style={{ transitionDelay: `${index * 200}ms` }}
                onMouseEnter={() => {
                  setHoveredAdvisor(index);
                  setActiveAdvisor(index);
                }}
                onMouseLeave={() => setHoveredAdvisor(null)}
              >
                {}
                <div className="relative h-64 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <Users className="w-16 h-16 text-gray-400" />
                  <div className="absolute top-4 right-4">
                    <div className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      {advisor.experience}
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      {advisor.position.split(' - ')[0]}
                    </div>
                  </div>
                </div>

                {}
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">{advisor.name}</h3>
                  <p className="text-green-600 font-semibold mb-1 text-sm md:text-base">{advisor.position}</p>
                  <p className="text-gray-600 text-xs md:text-sm mb-2">{advisor.expertise}</p>
                  <p className="text-gray-500 text-xs mb-3 md:mb-4">{advisor.currentRole}</p>
                  
                  <p className="text-gray-700 text-xs md:text-sm mb-3 md:mb-4 leading-relaxed">
                    {advisor.bio}
                  </p>

                  {}
                  <div className="flex items-center space-x-2 md:space-x-4 mb-3 md:mb-4 text-xs text-gray-600">
                    <div className="flex items-center space-x-1">
                      <GraduationCap className="w-3 h-3" />
                      <span className="text-xs">{advisor.education}</span>
                    </div>
                  </div>

                  {}
                  <div className="mb-3 md:mb-4">
                    <h4 className="text-xs md:text-sm font-semibold text-gray-800 mb-2">Key Achievements:</h4>
                    <div className="space-y-1">
                      {advisor.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-center space-x-2 text-xs text-gray-600">
                          <Star className="w-3 h-3 text-yellow-500 flex-shrink-0" />
                          <span className="text-xs">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {}
                  <div className="flex space-x-2 md:space-x-3">
                    <a
                      href={advisor.linkedin}
                      className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={`mailto:${advisor.email}`}
                      className="flex items-center justify-center w-8 h-8 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>

          {}
          {}

        </div>
      </section>

      {}
    </div>
  );
};

export default Board;
