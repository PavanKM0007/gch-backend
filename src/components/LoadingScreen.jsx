import React from 'react';
import { Leaf, Droplets, Sun, Zap, Sparkles } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <div className="loading-screen fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-blue-50 overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-green-300 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="text-center relative z-10">
        {/* Main animation container */}
        <div className="relative mb-8">
          <div className="relative w-40 h-40 mx-auto">
            {/* Outer energy ring */}
            <div className="absolute inset-0 border-4 border-transparent rounded-full animate-spin" 
                 style={{ 
                   borderTopColor: '#22c55e', 
                   borderRightColor: '#3b82f6',
                   borderBottomColor: '#f59e0b',
                   borderLeftColor: '#ef4444',
                   animationDuration: '2.5s'
                 }}></div>
            
            {/* Inner pulsing ring */}
            <div className="absolute inset-2 border-2 border-green-300 rounded-full animate-ping opacity-75"></div>
            
            {/* Center logo with glow effect */}
            <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center shadow-2xl animate-pulse">
              <div className="relative">
                <span className="text-3xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-green-600 bg-clip-text text-transparent animate-pulse">
                  GCH
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-400 rounded-full blur-sm opacity-30 animate-ping"></div>
              </div>
            </div>

            {/* Orbiting icons - smooth rotation */}
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '4s' }}>
              {/* Leaf - top (0°) */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-xl">
                    <Leaf className="w-5 h-5 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-green-400 rounded-full blur-md opacity-50 animate-ping"></div>
                </div>
              </div>
              
              {/* Droplets - bottom left (120°) */}
              <div className="absolute" style={{ 
                top: 'calc(50% + 50px)', 
                left: 'calc(50% - 55px)', 
                transform: 'translate(-50%, -50%)' 
              }}>
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-xl">
                    <Droplets className="w-5 h-5 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-blue-400 rounded-full blur-md opacity-50 animate-ping"></div>
                </div>
              </div>
              
              {/* Sun - bottom right (240°) */}
              <div className="absolute" style={{ 
                top: 'calc(50% + 50px)', 
                left: 'calc(50% + 55px)', 
                transform: 'translate(-50%, -50%)' 
              }}>
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-xl">
                    <Sun className="w-5 h-5 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-yellow-400 rounded-full blur-md opacity-50 animate-ping"></div>
                </div>
              </div>
            </div>

            {/* Energy sparks */}
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '1.5s', animationDirection: 'reverse' }}>
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-ping"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `translate(-50%, -50%) rotate(${i * 60}deg) translateY(-50px)`,
                    animationDelay: `${i * 0.2}s`,
                    animationDuration: '1s'
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced text and progress */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-800 animate-pulse">
            <span className="bg-gradient-to-r from-green-600 via-blue-600 to-green-600 bg-clip-text text-transparent">
              GreenCarbonHub
            </span>
          </h2>
          <p className="text-lg text-gray-600 animate-pulse">
            Building a sustainable future...
          </p>
          
          {/* Professional progress bar */}
          <div className="w-80 h-2 bg-gray-200 rounded-full overflow-hidden mx-auto relative shadow-inner">
            <div className="h-full bg-gradient-to-r from-green-500 via-blue-500 to-green-500 rounded-full animate-pulse relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-60 animate-ping"></div>
              <div className="absolute top-0 left-0 h-full w-4 bg-white rounded-full animate-bounce shadow-lg"></div>
              <div className="absolute top-0 right-0 h-full w-4 bg-yellow-400 rounded-full animate-pulse"></div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-ping"></div>
          </div>

          {/* Loading dots */}
          <div className="flex justify-center space-x-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 bg-green-500 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;