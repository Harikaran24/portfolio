import React from 'react';
import { Download, Mail, Github, Linkedin, Phone } from 'lucide-react';

interface HeroProps {
  nameScrollProgress?: number;
}

const Hero: React.FC<HeroProps> = ({ nameScrollProgress = 0 }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-10">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="mb-2 flex justify-center mt-6">
            <div className="relative group">
              {/* Animated Gradient Ring */}
              <div className="absolute inset-0 z-0 rounded-full animate-gradient-spin bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-cyan-600"></div>
              <div className="relative w-44 h-44 rounded-full p-1 bg-white shadow-xl ring-4 ring-transparent transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_0_40px_12px_rgba(0,186,255,0.28)] dark:group-hover:shadow-[0_0_40px_12px_rgba(34,211,238,0.32)]">
                <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                 <img 
                    src={`${import.meta.env.BASE_URL}profile.jpg`} 
                    alt="HARIKARAN G" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Name and Title */}
          <h1
            id="hero-name-anim"
            className="text-5xl md:text-7xl font-bold mb-4 transition-all duration-500"
            style={{
              transform: `scale(${1 - 0.4 * nameScrollProgress}) translateY(-${nameScrollProgress * 40}px)` ,
              opacity: 1 - nameScrollProgress,
              willChange: 'transform, opacity',
              pointerEvents: nameScrollProgress >= 0.98 ? 'none' : undefined,
            }}
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              HARIKARAN G
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
            Data Scientist | AI/ML Engineer
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-4 max-w-3xl mx-auto leading-relaxed">
            "Solving real-world problems with intelligent automation."
          </p>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-4xl mx-auto leading-relaxed">
            Experienced Data Scientist with expertise in AI, ML, and Computer Vision. 
            Specialized in building end-to-end pipelines and deploying solutions across 
            energy, healthcare, and manufacturing domains.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="mailto:harikarangnanasundaram@gmail.com"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <Mail className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </a>
            <a 
              href="https://linkedin.com/in/harikaran-g" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <Linkedin className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </a>
            <a 
              href="tel:+916369768183" 
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <Phone className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
