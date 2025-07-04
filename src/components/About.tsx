import React from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Passionate Data Scientist & AI Innovator
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              A Data Scientist with hands-on experience in developing and deploying AI/ML solutions 
              tailored for real-world impact. I specialize in building end-to-end pipelines, 
              anomaly detection, and explainable AI systems.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              My passion lies in data-driven innovation that improves efficiency and performance 
              across industries. I have successfully deployed AI solutions in energy, healthcare, 
              and manufacturing sectors, always focusing on creating measurable business impact.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              When I'm not diving deep into data, I enjoy exploring new AI technologies, 
              contributing to open-source projects, and mentoring aspiring data scientists.
            </p>
          </div>

          {/* Education Card */}
          <div className="animate-scale-in">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 mb-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-4">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Education</h3>
              </div>
              <div className="space-y-6">
                <div className="border-l-4 border-gradient-to-b from-blue-600 to-purple-600 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    Bachelor of Science in Mathematics
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    Dwaraka Doss Goverdhan Doss Vaishnav College
                  </p>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    Chennai, India
                  </div>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    2019 - 2022
                  </div>
                </div>
              </div>
            </div>
            {/* Certifications Card */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-4">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Certifications</h3>
              </div>
              <ul className="list-disc pl-8 text-gray-700 dark:text-gray-200 space-y-2">
                <li>Certification course in Data Science, 360DigiTMG</li>
                <li>Certificate Course in Data Science, The State University of New York</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
