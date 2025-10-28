import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const InstallationServices = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  const services = [
    {
      id: 1,
      title: 'Residential',
      link: '/residential',
      image: '/residential_image.jpg',
      icon: (
        <svg className="w-6 h-6 text-green-600 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
        </svg>
      )
    },
    {
      id: 2,
      title: 'Housing Society',
      link: '/housing-society',
      image: 'housing_image.jpg',
      icon: (
        <svg className="w-6 h-6 text-green-600 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
          <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"/>
          <path fillRule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd"/>
        </svg>
      )
    },
    {
      id: 3,
      title: 'Industrial/Commercial',
      link: '/industrial-commercial',
      image: '/industrial_image.jpg',
      icon: (
        <svg className="w-6 h-6 text-green-600 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
          <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/>
        </svg>
      )
    }
  ];

  return (
    <div ref={sectionRef} className="bg-gray-50 py-8 md:py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 text-center mb-8 md:mb-12">
          INSTALLATION SERVICES
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`service-card group bg-white rounded-lg shadow-lg hover:shadow-2xl flex flex-col w-full max-w-sm lg:max-w-none ${isVisible ? 'animate' : ''}`}
              style={{ 
                width: '100%',
                maxWidth: '340px',
                height: '580px'
              }}
            >
              <div className="relative w-full h-80 md:h-80 lg:h-80">
                <img 
                  src={service.image}
                  alt={`${service.title} Solar Installation`}
                  className="w-full h-full object-cover rounded-t-lg"
                />
                <div 
                  className="service-icon-bounce absolute left-1/2 transform -translate-x-1/2 bg-white group-hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-colors duration-300 z-10 w-20 h-20 -bottom-10"
                >
                  {service.icon}
                </div>
              </div>
              <div className="p-4 md:p-6 relative flex-grow flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 text-center mb-4 md:mb-6">
                  {service.title}
                </h3>
                <div className="text-center">
                  <Link 
                    to={service.link}
                    className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 md:py-3 px-6 md:px-8 rounded-full transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
                  >
                    Click Here
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstallationServices;