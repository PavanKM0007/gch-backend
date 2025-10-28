import React from 'react';
import { Users, Target, Eye, Award, Shield, CheckCircle } from 'lucide-react';

const AboutUs = () => {
  const leadershipTeam = [
    {
      id: 1,
      name: 'Civil Servant Leader',
      position: 'Founder & CEO',
      experience: '23+ Years Experience',
      specialization: 'Power Management, Waste Management',
      image: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    }
  ];

  const certifications = [
    { id: 1, name: 'ISO 9001:2015', description: 'Quality Management System' },
    { id: 2, name: 'ISO 14001:2015', description: 'Environmental Management' },
    { id: 3, name: 'OHSAS 18001', description: 'Occupational Health & Safety' },
    { id: 4, name: 'Solar Installation Certified', description: 'Renewable Energy Solutions' }
  ];

  const values = [
    { id: 1, icon: <Target className="w-8 h-8" />, title: 'Mission', description: 'To provide comprehensive Net-Zero solutions that help organizations and individuals reduce their carbon footprint while achieving economic benefits.' },
    { id: 2, icon: <Eye className="w-8 h-8" />, title: 'Vision', description: 'To be India\'s leading provider of sustainable energy and waste management solutions, contributing to a greener and more sustainable future.' },
    { id: 3, icon: <Shield className="w-8 h-8" />, title: 'Values', description: 'Integrity, Innovation, Sustainability, and Excellence in delivering environmental solutions that make a real difference.' }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative">
        <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[469px]">
          <img 
            src="https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"//images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
            alt="About Green Carbon Hub"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4 sm:px-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">About Green Carbon Hub</h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
                Leading the transformation towards Net-Zero solutions with 23+ years of expertise 
                in power management, solid waste management, and liquid waste management.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="flex flex-col sm:flex-row items-center sm:items-start p-4 sm:p-6 bg-white shadow-lg rounded-lg w-full">
              <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
                </div>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2">Certified Engineers</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Our certified engineers are dedicated to delivering high-quality solar solutions that meet your energy needs.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start p-4 sm:p-6 bg-white shadow-lg rounded-lg w-full">
              <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                  </svg>
                </div>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2">24/7 Customer Support</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Our customer support team is available around the clock to assist with any questions or concerns you may have.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start p-4 sm:p-6 bg-white shadow-lg rounded-lg w-full sm:col-span-2 lg:col-span-1">
              <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-600 rounded-full"></div>
                </div>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2">Affordable Solar Solutions</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  We offer cost-effective solar energy systems to help you reduce your energy bills and contribute to a greener environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative lg:pr-40">
                <img 
                  src="https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"//images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
                  alt="Solar Engineer"
                  className="rounded-lg shadow-lg w-full max-w-md h-auto mx-auto lg:mx-0"
                />
                
                <div className="hidden lg:block absolute top-6 -right-12 lg:right-24 w-32 h-32">
                  <img 
                    src="/about-text.png" 
                    alt="text"
                    className="tp-rotate-infinite w-full h-full object-contain"
                  />
                  
                  <img 
                    src="/about-text-shape.png" 
                    alt="thumb"
                    className="position-middle object-contain w-9 h-9"
                  />
                </div>
                
                <div className="hidden lg:block absolute bottom-6 right-6 rounded-lg overflow-hidden shadow-lg w-80 h-80">
                  <img 
                    src="https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
                    alt="Solar Installation Team"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
              <div>
                <h3 className="text-green-600 font-semibold text-xs sm:text-sm uppercase tracking-wide mb-2 sm:mb-3">
                  About Green Carbon Hub
                </h3>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
                  Transforming the World with Sustainable Solar Solutions
                </h2>
              </div>
              
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
                At Green Carbon Hub, we are committed to creating a sustainable future through innovative 
                renewable energy solutions. Our mission is to harness the power of solar energy to create 
                a cleaner, greener planet for generations to come.
              </p>

              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base text-gray-700">Leading the transition to solar energy solutions</span>
                </div>
                
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base text-gray-700">Making renewable energy accessible for all</span>
                </div>
                
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base text-gray-700">Committed to innovation and sustainable solutions</span>
                </div>
              </div>

              <div className="pt-2 sm:pt-4">
                <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-lg transition-colors duration-300 text-sm sm:text-base">
                  Learn More About Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 sm:mb-4">Why Choose GreenCarbonHub?</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600">Accelerate your Net Zero journey with GreenCarbonHub!</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer w-full">
              <div className="p-4 sm:p-5">
                <div className="text-center mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 transition-all duration-300 hover:bg-green-600 hover:scale-110">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 transition-colors duration-300 hover:text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2 sm:mb-3">Standardized, High-Quality Service</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Consistent, standardized scopes of work ensured by rigorously vetted partners for high-quality and sustainable impact.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer w-full">
              <div className="p-4 sm:p-5">
                <div className="text-center mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 transition-all duration-300 hover:bg-green-600 hover:scale-110">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 transition-colors duration-300 hover:text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2 sm:mb-3">Industry-Leading Affordability</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    GCH offers competitive pricing for Net-Zero services, ensuring cost-effective sustainable change for all.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer w-full">
              <div className="p-4 sm:p-5">
                <div className="text-center mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 transition-all duration-300 hover:bg-green-600 hover:scale-110">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 transition-colors duration-300 hover:text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1h-4a1 1 0 01-1-1V8z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2 sm:mb-3">All-in-One Net-Zero Solutions Hub</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    From solar installations to waste management, GCH covers all your Net-Zero needs under one roof.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer w-full">
              <div className="p-4 sm:p-5">
                <div className="text-center mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 transition-all duration-300 hover:bg-green-600 hover:scale-110">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 transition-colors duration-300 hover:text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2 sm:mb-3">100% Quality Assurance</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Expert teams and a satisfaction guarantee ensure effective and seamless transitions to Net Zero.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h3 className="text-green-600 font-semibold text-sm sm:text-base lg:text-lg mb-2">OUR 4 WORKING STEPS</h3>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">Our Proven Process</h2>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div className="text-center relative">
                <div className="relative mb-4 sm:mb-6">
                  <div className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 mx-auto rounded-full overflow-hidden shadow-lg border-4 border-green-100 relative transition-all duration-300 hover:border-green-500 hover:border-8">
                    <img 
                      src="https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
                      alt="Initial Consultation"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 w-12 h-12 sm:w-15 sm:h-15 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-sm sm:text-base lg:text-lg font-bold text-gray-800">01</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">Initial Consultation</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  We start by understanding your energy needs and evaluating your location to determine the best solar solution for you.
                </p>
                
                <div className="hidden lg:block absolute top-16 left-full transform translate-x-4">
                  <svg className="w-8 h-8 text-gray-300 transition-colors duration-300 hover:text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </div>
              </div>

              <div className="text-center relative">
                <div className="relative mb-4 sm:mb-6">
                  <div className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 mx-auto rounded-full overflow-hidden shadow-lg border-4 border-green-100 relative transition-all duration-300 hover:border-green-500 hover:border-8">
                    <img 
                      src="https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
                      alt="System Design"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 w-12 h-12 sm:w-15 sm:h-15 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-sm sm:text-base lg:text-lg font-bold text-gray-800">02</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">System Design</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Our team of experts designs a customized solar energy system that maximizes efficiency and savings based on your needs.
                </p>
                
                <div className="hidden lg:block absolute top-16 left-full transform translate-x-4">
                  <svg className="w-8 h-8 text-gray-300 transition-colors duration-300 hover:text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </div>
              </div>

              <div className="text-center relative">
                <div className="relative mb-4 sm:mb-6">
                  <div className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 mx-auto rounded-full overflow-hidden shadow-lg border-4 border-green-100 relative transition-all duration-300 hover:border-green-500 hover:border-8">
                    <img 
                      src="https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
                      alt="Install & Activate"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 w-12 h-12 sm:w-15 sm:h-15 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-sm sm:text-base lg:text-lg font-bold text-gray-800">03</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">Install & Activate</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Our professional team installs the solar panels and system components efficiently, ensuring everything is up and running smoothly.
                </p>
                
                <div className="hidden lg:block absolute top-16 left-full transform translate-x-4">
                  <svg className="w-8 h-8 text-gray-300 transition-colors duration-300 hover:text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </div>
              </div>

              <div className="text-center relative">
                <div className="relative mb-4 sm:mb-6">
                  <div className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 mx-auto rounded-full overflow-hidden shadow-lg border-4 border-green-100 relative transition-all duration-300 hover:border-green-500 hover:border-8">
                    <img 
                      src="https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
                      alt="System Monitoring"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 w-12 h-12 sm:w-15 sm:h-15 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-sm sm:text-base lg:text-lg font-bold text-gray-800">04</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">System Monitoring</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  We provide ongoing monitoring to ensure optimal system performance, identifying any issues before they arise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">Who We Are</h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                <p>
                  GreenCarbonHub is promoted by a Civil Servant with 23 years of experience in administration, 
                  specializing in power management, solid waste management, and liquid waste management.
                </p>
                <p>
                  With a team of experienced subject experts, GreenCarbonHub offers complete Net-Zero solutions 
                  under one roof. We combine administrative expertise with technical excellence to deliver 
                  sustainable solutions that make a real impact.
                </p>
                <p>
                  Our commitment to environmental sustainability and our deep understanding of both public 
                  sector challenges and private sector efficiency makes us uniquely positioned to help 
                  organizations achieve their sustainability goals.
                </p>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <img 
                src="https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
                alt="Green Carbon Hub Team"
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="absolute inset-0 bg-green-600 bg-opacity-20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 sm:mb-4">Our Foundation</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600">Building a sustainable future through innovation and expertise</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {values.map((value) => (
              <div key={value.id} className="text-center p-6 sm:p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-green-600 mb-3 sm:mb-4 flex justify-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">{value.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 sm:mb-4">Leadership Team</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600">Experienced professionals driving sustainable solutions</p>
          </div>
          
            <div className="flex justify-center">
              <div className="w-full max-w-xs sm:max-w-xs lg:max-w-xs">
                {leadershipTeam.map((member) => (
                  <div key={member.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="relative">
                      <img 
                        src={member.image}
                        alt={member.name}
                        className="w-full h-32 sm:h-40 lg:h-44 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                    <div className="p-6 sm:p-8 lg:p-10">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">{member.name}</h3>
                      <p className="text-green-600 font-semibold mb-3 sm:mb-4 text-sm sm:text-base lg:text-lg">{member.position}</p>
                      <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base lg:text-lg">{member.experience}</p>
                      <p className="text-xs sm:text-sm lg:text-base text-gray-500 leading-relaxed">{member.specialization}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 sm:mb-4">Certifications & Standards</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600">Quality and compliance at the highest level</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {certifications.map((cert) => (
              <div key={cert.id} className="bg-green-50 border border-green-200 rounded-lg p-4 sm:p-6 text-center hover:shadow-md transition-shadow">
                <div className="text-green-600 mb-3 sm:mb-4 flex justify-center">
                  <Award className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2">{cert.name}</h3>
                <p className="text-xs sm:text-sm text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">Why Choose Green Carbon Hub?</h2>
            <p className="text-base sm:text-lg lg:text-xl text-green-100">The advantages that set us apart</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Users className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">23+ Years Experience</h3>
              <p className="text-sm sm:text-base text-green-100">Decades of expertise in administration and environmental management</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Complete Solutions</h3>
              <p className="text-sm sm:text-base text-green-100">End-to-end Net-Zero solutions under one roof</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Award className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Certified Excellence</h3>
              <p className="text-sm sm:text-base text-green-100">ISO certified processes and quality standards</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Shield className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Trusted Partner</h3>
              <p className="text-sm sm:text-base text-green-100">Reliable solutions backed by civil service expertise</p>
            </div>
          </div>
        </div>
      </section>
      
      <style>{`
        @keyframes rotateInfinite {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .tp-rotate-infinite {
          animation: rotateInfinite 10s linear infinite;
        }
        
        .tp-about-icon-space {
          border-radius: 50%;
          padding: 10px;
          background-color: white;
          box-shadow: 0 20px 30px 0 rgba(3, 4, 28, 0.1);
        }
        
        .position-middle {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
};
0
export default AboutUs;