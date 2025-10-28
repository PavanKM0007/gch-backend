import React, { useState, useEffect, useRef } from 'react';

const Clients = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredClient, setHoveredClient] = useState(null);
  const sectionRef = useRef(null);

  const clients = [
    {
      id: 1,
      name: "General Electric",
      image: "/ge.png",
      description: "",
      category: ""
    },
    {
      id: 2,
      name: "AP Food Processing Society", 
      image: "/ap.png",
      description: "",
      category: ""
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-green-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-green-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className={`
          text-center mb-20 transition-all duration-1000
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}>
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            Trusted Partners
          </div>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-green-600 bg-clip-text text-transparent mb-6">
            Our Valued Clients
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Partnering with industry leaders to deliver sustainable energy solutions that drive innovation and environmental responsibility
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {clients.map((client, index) => (
            <div
              key={client.id}
              className={`
                group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-700 ease-out
                hover:scale-105 hover:-translate-y-2 transform border border-gray-100
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                ${hoveredClient === client.id ? 'ring-2 ring-green-500 ring-opacity-50' : ''}
              `}
              style={{ transitionDelay: `${index * 300}ms` }}
              onMouseEnter={() => setHoveredClient(client.id)}
              onMouseLeave={() => setHoveredClient(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-50 rounded-xl flex items-center justify-center group-hover:bg-white transition-colors duration-300 shadow-sm group-hover:shadow-md">
                    <img
                      src={client.image}
                      alt={client.name}
                      className="w-16 h-16 md:w-20 md:h-20 object-contain filter group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>

                <div className="text-center">
                  <div className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full mb-4">
                    {client.category}
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 group-hover:text-green-700 transition-colors duration-300">
                    {client.name}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {client.description}
                  </p>
                </div>

                <div className="absolute top-4 right-4 w-8 h-8 bg-green-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-blue-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              </div>

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 transform -skew-x-12 translate-x-full group-hover:translate-x-[-100%] transition-transform duration-1000"></div>
            </div>
          ))}
        </div>

        <div className={`
          mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `} style={{ transitionDelay: '600ms' }}>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">50+</div>
            <div className="text-gray-600 font-medium">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">100%</div>
            <div className="text-gray-600 font-medium">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">5+</div>
            <div className="text-gray-600 font-medium">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
