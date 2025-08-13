import React from 'react';
import { Heart, Mail, Linkedin, Github, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              HARIKARAN G
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Data Scientist passionate about solving real-world problems with AI and ML. 
              Transforming data into actionable insights across industries.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:harikarangnanasundaram@gmail.com"
                className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/in/harikaran-g" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="tel:+916369768183"
                className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors duration-300"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase());
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>AI/ML Model Development</li>
              <li>Computer Vision Solutions</li>
              
              <li>Forecasting</li>
              <li>AI-Driven Analytics</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Harikaran G. All rights reserved.
          </p>
          <div className="flex items-center text-gray-400 text-sm">
            <span>Designed & developed by Harikaran G</span>
            <Heart className="w-4 h-4 mx-2 text-red-500" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
