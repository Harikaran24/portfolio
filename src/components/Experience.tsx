
import React from 'react';
import { Briefcase, MapPin, Calendar, TrendingUp } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Associate Data Scientist",
      company: "AiSPRY",
      location: "Chennai, India",
      period: "Aug 2024 – Present",
      description: "Leading AI/ML solution development and deployment across multiple industries",
      achievements: [
        "Developed and deployed deep learning models for computer vision applications",
        "Created end-to-end AI pipelines for energy, healthcare, and manufacturing sectors",
        "Integrated ML models for automation with measurable real-world impact",
        "Collaborated with cross-functional teams to deliver production-ready solutions"
      ],
      gradient: "from-blue-600 to-purple-600"
    },
    {
      title: "Process Associate → Team Leader",
      company: "Datamark",
      location: "Chennai, India",
      period: "Aug 2022 – Jun 2023",
      description: "Promoted to leadership role focusing on billing quality and process optimization",
      achievements: [
        "Managed invoice processing for U.S. logistics clients",
        "Promoted to Team Leader within 3 months",
        "Improved billing quality processes and team efficiency",
        "Led a team of 8 associates in high-volume data processing"
      ],
      gradient: "from-purple-600 to-cyan-600"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full hidden lg:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative animate-fade-in ${index % 2 === 0 ? 'lg:pr-1/2' : 'lg:pl-1/2 lg:ml-auto'}`}>
                {/* Timeline Dot */}
                <div className={`absolute hidden lg:block w-4 h-4 bg-gradient-to-r ${exp.gradient} rounded-full top-8 ${
                  index % 2 === 0 ? 'right-0 transform translate-x-1/2' : 'left-0 transform -translate-x-1/2'
                }`}></div>

                {/* Experience Card */}
                <div className={`bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'
                }`}>
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      <div className={`p-3 bg-gradient-to-r ${exp.gradient} rounded-full mr-4`}>
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    <div className="text-right text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center mb-1">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center text-gray-700 dark:text-gray-300 font-semibold mb-3">
                      <TrendingUp className="w-5 h-5 mr-2 text-green-500" />
                      Key Achievements
                    </div>
                    {exp.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-start">
                        <div className={`w-2 h-2 bg-gradient-to-r ${exp.gradient} rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {achievement}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
