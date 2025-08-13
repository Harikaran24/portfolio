import React, { useState, useRef, useEffect } from 'react';
import { ExternalLink, Github, Zap, TrendingUp, Eye, Cpu, Bot, Car, Factory, Heart, X } from 'lucide-react';

const embryoDetails = {
  title: 'Embryo Quality Prediction Using AI',
  problem: 'In fertility treatments like IVF, selecting the best quality embryo is critical to success. Traditionally, this decision heavily relies on manual assessment by embryologists, which can be subjective and inconsistent. This often results in suboptimal embryo selection, lowering the success rate of IVF treatments.',
  solution: [
    'I developed an AI-powered system that uses deep learning to predict embryo quality from medical images. This project leveraged:',
    'DenseNet for robust feature extraction and classification of embryo quality.',
    'Grad-CAM & LIME (Explainable AI techniques) to visualize which parts of the image influenced the model’s prediction, ensuring transparency for medical experts.',
    'The end-to-end solution covers:',
    'Data preprocessing & augmentation to handle limited medical datasets.',
    'Training & evaluation of the DenseNet model to achieve high accuracy.',
    'Integration of XAI methods to provide heatmaps and insights to embryologists, helping build trust in AI decisions.'
  ],
  techStack: [
    'Python, Pandas, NumPy for data handling',
    'TensorFlow / Keras for deep learning',
    'Grad-CAM, LIME for explainability',
    'Flask / Streamlit for building an interactive demo for clinicians'
  ],
  impact: [
    'Improved embryo selection decisions, increasing the IVF success rate by enabling data-driven embryo grading.',
    'Provided enhanced transparency, helping embryologists understand why the AI recommended a particular embryo, fostering trust and aiding informed treatment planning.'
  ],
  highlights: [
    'Developed as part of my role focusing on healthcare AI applications.',
    'The solution is designed to be easily adaptable to other medical imaging classification problems.'
  ]
};

const potholeDetails = {
  title: 'Advanced Pothole Detection & Repair Estimation',
  problem: 'Manual road inspections are time-consuming, often inconsistent, and delay maintenance work. This leads to safety hazards, inefficient repair scheduling, and unnecessary costs.',
  solution: [
    'I developed an automated computer vision system to detect potholes, measure their severity, and estimate repair needs, helping municipal bodies and contractors optimize road maintenance.',
    'Key features:',
    'Used YOLOv8 for real-time pothole detection with high precision.',
    'Implemented DeepLabV3+ for semantic segmentation to accurately outline pothole areas and estimate dimensions.',
    'Generated severity metrics and repair priority scores to support data-driven maintenance planning.'
  ],
  techStack: [
    'Python, OpenCV for image processing',
    'YOLOv8, DeepLabV3+ for object detection & segmentation',
    'Pandas, NumPy for data handling',
    'Visual dashboards with Matplotlib, Seaborn to display analysis results'
  ],
  impact: [
    'Achieved 93% detection accuracy, ensuring reliable pothole identification.',
    'Reduced manual assessment time by 70%, enabling faster maintenance decisions.',
    'Helped optimize repair budgets by 25% through targeted, data-driven scheduling.'
  ],
  highlights: [
    'Published this work in the International Journal of Innovative Science and Research Technology, demonstrating its technical merit and practical value.',
    'Designed the pipeline to be easily extendable for other infrastructure inspection tasks.'
  ]
};

const audioDenoisingDetails = {
  title: 'AI-Powered Audio Denoising and Transcription System',
  problem: 'Railway officials faced challenges in monitoring locomotive pilot communications due to loud engine noise and language barriers, making real-time safety oversight difficult and error-prone.',
  solution: [
    'I developed an AI-powered audio processing pipeline to denoise, transcribe, and translate locomotive pilot communications.',
    'Highlights of the solution:',
    'Used FFmpeg and SpeexDSP for audio preprocessing, including noise reduction, mono conversion, and volume normalization.',
    'Applied AI-based vocal separation (Spleeter/Demucs) to isolate speech from background noise.',
    'Implemented PyDub for audio segmentation, improving transcription efficiency.',
    'Integrated Google Gemini 2.0 Flash for multilingual, high-accuracy speech-to-text with speaker diarization, timestamps, and summaries.',
    'Deployed on AWS S3 for automated, scalable audio processing and secure storage.'
  ],
  techStack: [
    'Python, FFmpeg, SpeexDSP for audio preprocessing',
    'Spleeter/Demucs for AI-based vocal separation',
    'PyDub for segmentation and chunking',
    'Google Gemini 2.0 Flash for transcription and translation',
    'AWS S3 for storage and pipeline automation'
  ],
  impact: [
    'Significantly improved transcription accuracy in high-noise environments.',
    'Enabled real-time monitoring and automated compliance reporting for railway officials.',
    'Enhanced communication clarity for locomotive pilots, improving safety.'
  ],
  highlights: [
    'Scalable architecture to handle audio files up to 5GB and 6 hours in duration.',
    'Supports multi-language processing for diverse operational environments.',
    'Can be adapted to other industries requiring high-accuracy transcription in noisy conditions.'
  ]
};


const salesCallDetails = {
  title: 'AI-Driven Sales Call Insight & Performance Evaluation',
  problem: 'Sales teams often struggle to manually review calls, missing out on key cues about customer interest and rep performance. This leads to gaps in feedback, inconsistent lead qualification, and lost opportunities.',
  solution: [
    'I built an NLP-based analytics platform that automatically processes and analyzes sales call recordings to extract actionable insights.',
    'Key capabilities include:',
    'Transcription: Used OpenAI’s Whisper model to transcribe sales calls with high accuracy.',
    'Voice Feature Analysis: Leveraged Librosa for extracting tone, pitch, and speaking rate to assess engagement and trust signals.',
    'NLP Insights: Applied text analytics to detect buyer interest, red flags, and conversation sentiment.',
    'Summarization & Scoring: Auto-generated call summaries and performance scores to streamline feedback and coaching.'
  ],
  techStack: [
    'OpenAI Whisper for transcription',
    'Librosa for speech signal features',
    'NLTK / SpaCy for NLP processing',
    'Streamlit / Flask for building interactive dashboards'
  ],
  impact: [
    'Automated insight extraction reduced manual call review time.',
    'Improved sales rep feedback loops and enhanced coaching.',
    'Boosted lead qualification accuracy, ensuring better follow-ups and higher conversion potential.'
  ],
  highlights: [
    'Designed to be extendable for customer support and post-sale calls.',
    'Incorporates customizable rule-based checks to flag specific phrases or compliance issues.'
  ]
};

const solarStringDetails = {
  title: 'Solar String Data Text Extraction',
  problem: 'Managing solar panel operations requires regular logging of string-level data such as voltages and currents. Traditionally, this involves manual reading and data entry from printed labels or monitoring screens—leading to errors, delays, and inefficiencies.',
  solution: [
    'I developed an OCR-powered tool to automate the extraction and digitization of solar panel string data.',
    'Highlights of the solution:',
    'Used PaddleOCR and Tesseract to recognize printed and digital string data directly from images or snapshots of monitoring systems.',
    'Integrated preprocessing with OpenCV (e.g., thresholding, noise removal) to improve text clarity and boost OCR accuracy.',
    'Output structured data ready for direct ingestion into asset management systems or Excel sheets, reducing manual intervention.'
  ],
  techStack: [
    'Python, OpenCV for image handling',
    'PaddleOCR, Tesseract for robust multi-language text extraction',
    'Pandas for organizing and exporting data to CSV/Excel',
    'Configurable pipeline to adapt to different camera qualities and label styles'
  ],
  impact: [
    'Achieved 30% improvement in data accuracy by reducing manual transcription errors.',
    'Cut data processing times, enabling quicker decision-making and reporting.',
    'Streamlined the overall solar panel data management process, ensuring better reliability for maintenance planning.'
  ],
  highlights: [
    'Designed to scale across different solar installations, supporting diverse label fonts and layouts.',
    'Can be extended to other industrial applications requiring automated data logging from images.'
  ]
};

const cxoChatbotDetails = {
  title: 'CXO AI Business Intelligence Chatbot',
  problem: 'Executives faced delays in retrieving insights from large CSV datasets, relying on manual analysis that slowed decision-making and reduced efficiency.',
  solution: [
    'I developed a conversational AI chatbot to query large CSV files, generate dynamic visualizations, and deliver actionable insights instantly.',
    'Highlights of the solution:',
    'Integrated Gemini 2.0 Flash, GPT-4, DeepSeek R1, and CSV Agent for natural language to data querying.',
    'Used PandasAI for conversational data analysis and chart generation.',
    'Implemented LangChain with FAISS for fast, context-aware retrieval from enterprise data.',
    'Delivered results in user-friendly formats including tables, summaries, and dashboards.'
  ],
  techStack: [
    'Python, PandasAI for conversational analytics',
    'Google Generative AI (Gemini 2.0), GPT-4, DeepSeek R1',
    'LangChain, FAISS for retrieval-augmented generation',
    'CSV Agent for structured data handling and querying'
  ],
  impact: [
    'Transformed static CSV files into interactive, actionable intelligence.',
    'Reduced manual reporting effort and significantly cut decision-making time.',
    'Enabled CXOs to make faster, data-driven decisions without SQL knowledge.'
  ],
  highlights: [
    'Supports dynamic chart and dashboard generation within the chatbot interface.',
    'Role-based access control for secure enterprise data access.',
    'Adaptable to multiple industries handling large structured datasets.'
  ]
};


const bottleQualityDetails = {
  title: 'Bottle Quality Detection System',
  problem: 'Manual inspection of bottles on manufacturing lines is slow, inconsistent, and prone to human error. This often leads to defective products reaching customers, causing reputational damage and increased waste.',
  solution: [
    'I developed a vision-based automated inspection system to identify defects in bottles directly on the production line.',
    'Key components:',
    'Trained a YOLOv11 object detection model to recognize defects such as cracks, deformations, or improper sealing.',
    'Used Roboflow for annotation, data augmentation, and managing the dataset pipeline.',
    'Integrated the model into an automation workflow for real-time defect detection, triggering rejection mechanisms to remove faulty bottles instantly.'
  ],
  techStack: [
    'Python, OpenCV for preprocessing and integration',
    'YOLOv11 for advanced object detection',
    'Roboflow for dataset management and augmentation',
    'Streamlit / Flask for quick testing dashboards'
  ],
  impact: [
    'Significantly reduced manufacturing defects and waste by catching problems early.',
    'Enhanced overall production efficiency by automating quality control, allowing human operators to focus on more critical tasks.'
  ],
  highlights: [
    'Designed to be easily adaptable for inspecting other container types like jars or cans.',
    'Published related research in IJISRT, demonstrating scalable, AI-driven quality control in manufacturing.'
  ]
};

const solarAnomalyDetails = {
  title: 'Solar Power Anomaly Detection & Optimization',
  problem: 'Solar power plants face challenges in predicting power output and detecting system faults. Traditional rule-based monitoring often misses subtle anomalies, leading to unexpected failures, reduced efficiency, and increased maintenance costs.',
  solution: [
    'I developed a machine learning solution to detect anomalies in solar power generation and optimize forecasting for proactive maintenance.',
    'Key aspects include:',
    'Time-Series Forecasting: Used LSTM networks to predict expected power generation based on historical and environmental data (like temperature and irradiance).',
    'Anomaly Detection: Implemented Isolation Forest to flag deviations from normal patterns, indicating possible equipment faults or inefficiencies.',
    'Visual Inspection: Integrated YOLOv7 for detecting visible anomalies on solar panels (like cracks or dirt) from drone-captured images.'
  ],
  techStack: [
    'Python, Pandas, NumPy for data preprocessing',
    'TensorFlow / Keras for LSTM modeling',
    'Scikit-Learn for Isolation Forest',
    'YOLOv7, OpenCV for visual anomaly detection',
    'Matplotlib, Seaborn for dashboards'
  ],
  impact: [
    'Improved fault detection and energy forecasting accuracy, enabling proactive maintenance.',
    'Helped reduce unplanned downtime, optimize cleaning schedules, and achieve cost savings for solar plant operations.'
  ],
  highlights: [
    'Designed the pipeline to be easily extended for other renewable sources like wind.',
    'Capable of integrating real-time sensor feeds for continuous monitoring.'
  ]
};

const Projects: React.FC = () => {
  const [openModal, setOpenModal] = useState<null | number>(null);
  const [morphingCard, setMorphingCard] = useState<null | number>(null);
  const [isClosing, setIsClosing] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

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
      title: "AI-Powered Audio Denoising & Transcription System",
      category: "Generative AI",
      icon: TrendingUp,
      description: "End-to-end AI pipeline for denoising, transcribing, and translating locomotive pilot communications in noisy environments.",
      image: "https://images.unsplash.com/photo-1519669417670-68775a50919e?w=600&h=400&fit=crop",
      tags: ["FFmpeg", "SpeexDSP", "Spleeter", "Gemini 2.0 Flash"],
      impact: "Improved transcription in noisy environments and enabled real-time safety monitoring.",
      gradient: "from-purple-500 to-indigo-500"
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
      title: "CXO AI Business Intelligence Chatbot",
      category: "Generative AI",
      icon: Bot,
      description: "Conversational AI chatbot that queries large CSV datasets, generates visualizations, and delivers actionable insights instantly for faster decision-making.",
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&h=400&fit=crop",
      tags: ["Gemini 2.0", "GPT-4", "LangChain", "PandasAI", "FAISS"],
      impact: "Turned static CSVs into actionable intelligence.\nCut decision-making time and reduced manual reporting effort.",
      gradient: "from-purple-500 to-pink-500"
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

  // Handle modal opening with morphing animation
  const handleOpenModal = (index: number) => {
      setMorphingCard(index);
      // Start morphing animation
      setTimeout(() => {
        setOpenModal(index);
        setMorphingCard(null);
      }, 200);
  };

  // Handle modal closing with smooth animation
  const handleCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setOpenModal(null);
      setIsClosing(false);
    }, 300);
  };

  // Parallax effect for modal content
  useEffect(() => {
    const handleScroll = () => {
      if (modalRef.current && openModal !== null) {
        const scrolled = modalRef.current.scrollTop;
        const parallaxElements = modalRef.current.querySelectorAll('.parallax');
        parallaxElements.forEach((el, index) => {
          const speed = 0.3 + (index * 0.05);
          (el as HTMLElement).style.transform = `translateY(${scrolled * speed}px)`;
        });
      }
    };

    const modalElement = modalRef.current;
    if (modalElement) {
      modalElement.addEventListener('scroll', handleScroll);
      return () => modalElement.removeEventListener('scroll', handleScroll);
    }
  }, [openModal]);

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
              ref={(el) => (cardRefs.current[index] = el)}
              className={`group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in cursor-pointer flex flex-col min-h-[400px] ${
                morphingCard === index ? 'scale-105 z-50 shadow-2xl' : ''
              }`}
              style={{ 
                animationDelay: `${index * 100}ms`,
                transform: morphingCard === index ? 'scale(1.05) translateY(-10px)' : '',
                zIndex: morphingCard === index ? 50 : 1
              }}
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
                    style={{minHeight: '2.5em'}}>
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
                  <button 
                    className="mt-1 w-full flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-sm"
                    onClick={() => handleOpenModal(index)}
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Project
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Modal with Animations */}
        {openModal !== null && (
          <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-md backdrop-saturate-150 transition-all duration-300 ${
            isClosing ? 'animate-fade-out' : 'animate-fade-in'
          }`}>
            <div 
              ref={modalRef}
              className={`relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-4xl w-full mx-4 p-0 flex flex-col transition-all duration-300 ${
                isClosing ? 'animate-scale-out' : 'animate-scale-in'
              }`}
              style={{ 
                maxHeight: '90vh', 
                height: '90vh'
              }}
            >
              <button 
                className="absolute top-4 right-4 text-gray-500 hover:text-red-500 z-10 transition-colors duration-200" 
                onClick={handleCloseModal}
              >
                <X className="w-6 h-6" />
              </button>
              
              {/* Project Image with Parallax and Title Overlay */}
              <div className="flex-shrink-0 basis-[40%] h-[40%] w-full relative overflow-hidden">
                <img 
                  src={projects[openModal].image} 
                  alt={
                    openModal === 0 ? embryoDetails.title :
                    openModal === 1 ? potholeDetails.title :
                    openModal === 2 ? audioDenoisingDetails.title :
                    openModal === 3 ? salesCallDetails.title :
                    openModal === 4 ? solarStringDetails.title :
                    openModal === 5 ? cxoChatbotDetails.title :
                    openModal === 6 ? bottleQualityDetails.title :
                    solarAnomalyDetails.title
                  }
                  className="w-full h-full object-cover rounded-t-2xl parallax"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent parallax"></div>
                <div className="absolute bottom-0 left-0 w-full px-8 pb-6 pt-4 flex items-end">
                  <h2 className="text-3xl font-bold text-white drop-shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent parallax">
                    {
                      openModal === 0 ? embryoDetails.title :
                      openModal === 1 ? potholeDetails.title :
                      openModal === 2 ? audioDenoisingDetails.title :
                      openModal === 3 ? salesCallDetails.title :
                      openModal === 4 ? solarStringDetails.title :
                      openModal === 5 ? cxoChatbotDetails.title :
                      openModal === 6 ? bottleQualityDetails.title :
                      solarAnomalyDetails.title
                    }
                  </h2>
                </div>
              </div>
              
              <div className="p-8 basis-[65%] flex-grow overflow-y-auto">
                <div className="mb-8 space-y-6">
                  <div className="parallax">
                    <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Problem</h3>
                    <p className="text-gray-800 dark:text-gray-200 mb-6 text-base leading-relaxed">
                      {
                        openModal === 0 ? embryoDetails.problem :
                        openModal === 1 ? potholeDetails.problem :
                        openModal === 2 ? audioDenoisingDetails.problem :
                        openModal === 3 ? salesCallDetails.problem :
                        openModal === 4 ? solarStringDetails.problem :
                        openModal === 5 ? cxoChatbotDetails.problem :
                        openModal === 6 ? bottleQualityDetails.problem :
                        solarAnomalyDetails.problem
                      }
                    </p>
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-700 my-6"></div>
                  <div className="parallax">
                    <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Solution</h3>
                    <ul className="list-disc pl-6 text-gray-800 dark:text-gray-200 mb-6 space-y-2 text-base leading-relaxed">
                      {
                        (openModal === 0 ? embryoDetails.solution :
                        openModal === 1 ? potholeDetails.solution :
                        openModal === 2 ? audioDenoisingDetails.solution :
                        openModal === 3 ? salesCallDetails.solution :
                        openModal === 4 ? solarStringDetails.solution :
                        openModal === 5 ? cxoChatbotDetails.solution :
                        openModal === 6 ? bottleQualityDetails.solution :
                        solarAnomalyDetails.solution).map((item, i) => <li key={i}>{item}</li>)
                      }
                    </ul>
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-700 my-6"></div>
                  <div className="parallax">
                    <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Tech Stack</h3>
                    <ul className="list-disc pl-6 text-gray-800 dark:text-gray-200 mb-6 space-y-2 text-base leading-relaxed">
                      {
                        (openModal === 0 ? embryoDetails.techStack :
                        openModal === 1 ? potholeDetails.techStack :
                        openModal === 2 ? audioDenoisingDetails.techStack :
                        openModal === 3 ? salesCallDetails.techStack :
                        openModal === 4 ? solarStringDetails.techStack :
                        openModal === 5 ? cxoChatbotDetails.techStack :
                        openModal === 6 ? bottleQualityDetails.techStack :
                        solarAnomalyDetails.techStack).map((item, i) => <li key={i}>{item}</li>)
                      }
                    </ul>
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-700 my-6"></div>
                  <div className="parallax">
                    <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Impact</h3>
                    <ul className="list-disc pl-6 text-gray-800 dark:text-gray-200 mb-6 space-y-2 text-base leading-relaxed">
                      {
                        (openModal === 0 ? embryoDetails.impact :
                        openModal === 1 ? potholeDetails.impact :
                        openModal === 2 ? audioDenoisingDetails.impact :
                        openModal === 3 ? salesCallDetails.impact :
                        openModal === 4 ? solarStringDetails.impact :
                        openModal === 5 ? cxoChatbotDetails.impact :
                        openModal === 6 ? bottleQualityDetails.impact :
                        solarAnomalyDetails.impact).map((item, i) => <li key={i}>{item}</li>)
                      }
                    </ul>
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-700 my-6"></div>
                  <div className="parallax">
                    <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Additional Highlights</h3>
                    <ul className="list-disc pl-6 text-gray-800 dark:text-gray-200 mb-2 space-y-2 text-base leading-relaxed">
                      {
                        (openModal === 0 ? embryoDetails.highlights :
                        openModal === 1 ? potholeDetails.highlights :
                        openModal === 2 ? audioDenoisingDetails.highlights :
                        openModal === 3 ? salesCallDetails.highlights :
                        openModal === 4 ? solarStringDetails.highlights :
                        openModal === 5 ? cxoChatbotDetails.highlights :
                        openModal === 6 ? bottleQualityDetails.highlights :
                        solarAnomalyDetails.highlights).map((item, i) => <li key={i}>{item}</li>)
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes modalSlideIn {
            from {
              opacity: 0;
              transform: scale(0.9) translateY(30px);
            }
            to {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }
          
          @keyframes modalSlideOut {
            from {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
            to {
              opacity: 0;
              transform: scale(0.9) translateY(30px);
            }
          }
          
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          
          @keyframes fadeOut {
            from {
              opacity: 1;
            }
            to {
              opacity: 0;
            }
          }
          
          .animate-fade-in {
            animation: fadeIn 0.3s ease-out;
          }
          
          .animate-fade-out {
            animation: fadeOut 0.3s ease-out;
          }
          
          .animate-scale-in {
            animation: modalSlideIn 0.4s ease-out;
          }
          
          .animate-scale-out {
            animation: modalSlideOut 0.3s ease-out;
          }
          
          .parallax {
            transition: transform 0.1s ease-out;
            will-change: transform;
          }
        `
      }} />
    </section>
  );
};

export default Projects;