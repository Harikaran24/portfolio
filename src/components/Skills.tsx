import React from 'react';
import { Code, Database, Brain, Eye, MessageSquare, Cloud, BarChart3, Users } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: Code,
      skills: ["Python", "SQL"],
      gradient: "from-blue-600 to-purple-600"
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "PostgreSQL", "MongoDB"],
      gradient: "from-purple-600 to-pink-600"
    },
    {
      title: "Data Visualization",
      icon: BarChart3,
      skills: ["Power BI", "Matplotlib", "Seaborn"],
      gradient: "from-green-600 to-teal-600"
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Leadership", "Problem-Solving", "Time Management", "Communication Skills"],
      gradient: "from-teal-600 to-cyan-600"
    },

    {
      title: "ML & Data Science",
      icon: Brain,
      skills: ["Scikit-Learn", "Data Preprocessing", "EDA", "Supervised Learning", "Unsupervised Learning"],
      gradient: "from-pink-600 to-red-600"
    },


    {
      title: "Deployment",
      icon: Cloud,
      skills: ["Flask", "Streamlit", "ReactJs", "FastAPI", "AWS EC2/S3"],
      gradient: "from-yellow-600 to-green-600"
    },

    {
      title: "LLM/NLP",
      icon: MessageSquare,
      skills: ["NLP", "LangChain", "RAG", "Text Classification", "Prompt Engineering"],
      gradient: "from-orange-600 to-yellow-600"
    },
    {
      title: "Computer Vision",
      icon: Eye,
      skills: ["YOLO", "OpenCV", "Roboflow", "PaddleOCR", "XAI", "Explainable AI (XAI)"],
      gradient: "from-red-600 to-orange-600"
    }

  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="group bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 shadow-lg transition-all duration-300 flex flex-col h-full min-h-[370px] hover:scale-105 hover:shadow-2xl hover:z-10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-center mb-6">
                <div className={`inline-flex p-4 bg-gradient-to-r ${category.gradient} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-3 flex-1">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
                  >
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {skill}
                    </span>
                    <div className={`w-2 h-2 bg-gradient-to-r ${category.gradient} rounded-full`}></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
