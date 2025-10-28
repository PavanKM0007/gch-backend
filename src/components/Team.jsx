import React, { useState, useEffect, useRef } from 'react';
import { Users, Award, Linkedin, Mail, Phone, MapPin, Star, CheckCircle } from 'lucide-react';

const Team = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [activeMember, setActiveMember] = useState(0);
  const [hoveredMember, setHoveredMember] = useState(null);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);

  const teamMembers = [
    {
      name: "",
      position: "",
      department: "",
      experience: "",
      image: "/team/rajesh.jpg",
      bio: "",
      skills: ["Strategic Planning", "Leadership", "Innovation"],
      linkedin: "",
      email: ""
    },
  ];

  const departments = [
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
      setActiveMember(prev => (prev + 1) % teamMembers.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [teamMembers.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50">
      <section ref={headerRef} className="pt-20 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`
            text-center transition-all duration-1000
            ${isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Our Team
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Meet the passionate experts driving sustainable innovation
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <div className="flex items-center space-x-2 bg-green-100 text-green-600 rounded-full px-4 py-2">
                <Users className="w-4 h-4" />
                <span className="font-medium text-sm">Expert Team</span>
              </div>
              <div className="flex items-center space-x-2 bg-orange-100 text-orange-600 rounded-full px-4 py-2">
                <Award className="w-4 h-4" />
                <span className="font-medium text-sm">Industry Leaders</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={sectionRef} className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex justify-center mb-8 md:mb-12 lg:mb-16">
            <div className="w-full max-w-sm mx-4 md:mx-0">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`
                  relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-1000 ease-out overflow-hidden
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                  ${activeMember === index ? 'scale-105 shadow-2xl' : 'hover:scale-105'}
                  ${hoveredMember === index ? 'ring-4 ring-green-200' : ''}
                `}
                style={{ transitionDelay: `${index * 200}ms` }}
                onMouseEnter={() => {
                  setHoveredMember(index);
                  setActiveMember(index);
                }}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <div className="relative h-64 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <Users className="w-16 h-16 text-gray-400" />
                  <div className="absolute top-4 right-4">
                    <div className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      {member.experience}
                    </div>
                  </div>
                </div>

                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-green-600 font-semibold mb-1 text-sm md:text-base">{member.position}</p>
                  <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4">{member.department}</p>
                  
                  <p className="text-gray-700 text-xs md:text-sm mb-3 md:mb-4 leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-4">
                    {member.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                  </div>

                  <div className="flex space-x-2 md:space-x-3">
                    <a
                      href={member.linkedin}
                      className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
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

        </div>
      </section>

      {}
      {}
    </div>
  );
};

export default Team;
