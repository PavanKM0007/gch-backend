import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Users, TrendingDown, Home, CheckCircle, Settings } from 'lucide-react';

const GCHBenefits = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const benefits = [
    { id: 1, icon: <DollarSign />, title: 'Easy Finance Options' },
    { id: 2, icon: <Users />, title: 'Free Consultancy' },
    { id: 3, icon: <TrendingDown />, title: 'Lowest Industry Prices' },
    { id: 4, icon: <Home />, title: 'Transparent & Haggle-free purchase' },
    { id: 5, icon: <CheckCircle />, title: 'Standardised scope of work' },
    { id: 6, icon: <Settings />, title: 'Choice of Branded Components' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-gray-800 text-center mb-5 font-bold"
          style={{ fontSize: '35.2px' }}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Why Should You Choose GCH for Your Rooftop Solar Power Project?
        </motion.h2>

        <motion.p
          className="text-left mx-auto mb-12"
          style={{
            fontSize: '17.6px',
            lineHeight: '1.6',
            color: '#555555',
            fontFamily: 'Inter, sans-serif',
            margin: '0px 0px 24px',
            width: '1200px'
          }}
          initial={{ opacity: 0, x: 30 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <span className="font-bold text-gray-800">GreenCarbonHub</span> is promoted by a Civil Servant with
          23 years of experience in administration, particularly in power management, solid waste management,
          and liquid waste management. Supported by a team of experienced experts, GreenCarbonHub offers all
          Net-Zero solutions under one roof. If you are looking for the best rooftop solar company in Hyderabad,
          we are just a few miles away. Here are the reasons to choose us:
        </motion.p>

        {}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              className="benefit-card w-full max-w-sm"
              style={{
                cursor: 'pointer',
                position: 'relative',
                minHeight: '150px'
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{
                duration: 0.8,
                delay: 0.5 + index * 0.2,
                ease: "easeOut"
              }}
              whileHover={{
                y: -15,
                scale: 1.03,
                boxShadow: "0 25px 50px -12px rgba(34, 197, 94, 0.4), 0 0 0 2px rgba(34, 197, 94, 0.3)",
                backgroundColor: "#f0fdf4",
                border: "2px solid rgba(34, 197, 94, 0.5)",
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="benefit-icon"
                style={{
                  color: '#059669',
                  marginBottom: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                whileHover={{
                  scale: 1.2,
                  color: '#10b981',
                  transition: { duration: 0.3 }
                }}
              >
                {React.cloneElement(benefit.icon, { 
                  className: 'w-12 h-12'
                })}
              </motion.div>
              <motion.h3 
                className="benefit-text"
                style={{
                  color: '#374151',
                  fontWeight: '600',
                  fontSize: '16px',
                  textAlign: 'center',
                  margin: '0',
                  lineHeight: '1.2'
                }}
                whileHover={{
                  color: '#059669',
                  fontWeight: '700',
                  scale: 1.05,
                  y: -2,
                  transition: { duration: 0.3 }
                }}
              >
                {benefit.title}
              </motion.h3>
            </motion.div>
          ))}
        </div>

        {}
        <motion.p
          className="text-left mx-auto mt-12"
          style={{
            fontSize: '17.6px',
            lineHeight: '1.6',
            color: '#555555',
            fontFamily: 'Inter, sans-serif',
            margin: '0px 0px 24px',
            width: '1200px'
          }}
          initial={{ opacity: 0, x: 30 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
        >
          <span className="font-bold text-gray-800">GreenCarbonHub</span> has a team of qualified, experienced,
          and dedicated engineers who designed and installed many residential rooftop solar power systems earlier.
          We work closely with you to identify and resolve all your residential solar energy needs. With the best
          residential rooftop solar company in Hyderabad like us, you can expect the best quality service, reliable
          products, and support 24/7. Contact Us Today!
        </motion.p>
      </div>
    </div>
  );
};

export default GCHBenefits;