import React, { useState } from 'react';
import { ExternalLink, Github, Zap, TrendingUp, Eye, Cpu, Bot, Car, Factory, Heart } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Embryo Quality Prediction Using AI",
      category: "Healthcare AI",
      icon: Heart,
      description: "AI-powered system to assess embryo quality for IVF, helping embryologists make informed decisions and improve treatment outcomes.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      tags: ["DenseNet", "Grad-CAM", "LIME"],
      impact: "Increased IVF success rate through better embryo selection.\nEnhanced transparency with explainable AI techniques.",
      gradient: "from-pink-500 to-red-500"
    },
    {
      title: "Advanced Pothole Detection & Repair Estimation",
      category: "Computer Vision",
      icon: Car,
      description: "Automated computer vision solution for detecting potholes and estimating repair needs, streamlining road maintenance operations.",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop",
      tags: ["YOLOv8", "DeepLabV3+", "Computer Vision"],
      impact: "93% detection accuracy, optimized repairs by 25%.\nReduced assessment time and improved resource allocation.",
      gradient: "from-gray-600 to-blue-600"
    },
    {
      title: "AI-Driven Sales Call Insight & Performance Evaluation",
      category: "NLP & Analytics",
      icon: Bot,
      description: "NLP-based platform that analyzes sales calls to extract actionable insights, enhance feedback, and boost sales team performance.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
      tags: ["OpenAI Whisper", "NLP", "Librosa"],
      impact: "Automated insight extraction and improved rep feedback.\nEnhanced lead qualification accuracy for sales teams.",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      title: "Solar String Data Text Extraction",
      category: "Computer Vision",
      icon: Zap,
      description: "OCR tool for extracting and digitizing solar panel string data, reducing manual entry and improving data reliability.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      tags: ["PaddleOCR", "Tesseract", "OCR"],
      impact: "30% increase in data accuracy, reduced processing delays.\nStreamlined solar panel data management.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      title: "Bottle Quality Detection System",
      category: "Manufacturing",
      icon: Factory,
      description: "Vision-based inspection system for identifying defects in bottles, ensuring high product quality in manufacturing lines.",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=400&fit=crop",
      tags: ["YOLOv11", "Roboflow", "Automation"],
      impact: "Reduced manufacturing defects and waste significantly.\nImproved overall production efficiency.",
      gradient: "from-green-500 to-blue-500"
    },
    {
      title: "Solar Power Anomaly Detection & Optimization",
      category: "Machine Learning",
      icon: TrendingUp,
      description: "Machine learning solution for detecting anomalies and optimizing solar power generation, enabling proactive maintenance.",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&h=400&fit=crop",
      tags: ["YOLOv7", "LSTM", "Isolation Forest"],
      impact: "Improved energy forecasting and fault detection accuracy.\nEnabled proactive maintenance and cost savings.",
      gradient: "from-blue-500 to-green-500"
    }
  ];

  // Utility function to check if title is single line (short)
  function isSingleLineTitle(title) {
    return title.length < 32; // Adjust threshold as needed
  }

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 mt-6 max-w-3xl mx-auto">
            Innovative AI/ML solutions deployed across various industries, creating measurable impact and driving efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in cursor-pointer flex flex-col min-h-[400px]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                <div className="absolute top-4 left-4">
                  <div className={`p-2 bg-gradient-to-r ${project.gradient} rounded-lg`}>
                    <project.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 px-3 py-1 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300">
                  {project.category}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-4 flex flex-col h-full flex-1 gap-2">
                <div className="flex flex-col items-center text-center">
                  <h3
                    className={`text-lg font-bold text-gray-800 dark:text-white w-full text-center ${isSingleLineTitle(project.title) ? 'mb-4' : 'mb-2'}`}
                    style={{minHeight: '2.5em'}}
                  >
                    {project.title}
                  </h3>
                </div>
                <div className="flex flex-col items-center text-center">
                  <p className="text-gray-600 dark:text-gray-300 mb-2 leading-relaxed text-sm w-full" style={{whiteSpace: 'pre-line'}}>
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="flex flex-wrap gap-2 justify-center w-full mb-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className={`p-2 w-full bg-gradient-to-r ${project.gradient} bg-opacity-10 rounded-lg mb-2`}>
                    <div className="flex items-center text-xs font-semibold">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      Impact
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-300 mt-0.5" style={{whiteSpace: 'pre-line'}}>
                      {project.impact}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center text-center flex-1 justify-end">
                  <button className="mt-1 w-full flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-sm">
                    <ExternalLink className="w-4 h-4" />
                    View Project
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;