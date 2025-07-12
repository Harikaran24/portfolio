import React from 'react';
import { BookOpen } from 'lucide-react';

const publications = [
  {
    title: 'Advanced Potholes Detection and Repair Recommendation System using Computer Vision Techniques.',
    journal: 'IJISRT',
    year: 2025,
    description: 'Published in the International Journal of Innovative Science and Research Technology. This work presents a computer vision-based system for automated pothole detection and repair recommendation, improving road safety and maintenance efficiency.',
    link: 'https://www.ijisrt.com/advanced-pothole-detection-and-repair-recommendation-system-using-computer-vision-techniques',
  },
  {
    title: 'AI-Driven Automated Quality Inspection for Beverage Bottles.',
    journal: 'IJISRT',
    year: 2025,
    description: 'Published in the International Journal of Innovative Science and Research Technology. This paper introduces an AI-powered inspection system for beverage bottles, enhancing quality control and reducing defects in manufacturing.',
    link: 'https://www.ijisrt.com/aidriven-automated-quality-inspection-for-beverage-bottles-leveraging-object-detection-models-for-enhanced-supply-chain-efficiency',
  },
];

const Publications: React.FC = () => {
  return (
    <section id="publications" className="py-20 bg-[#f7fafd] dark:bg-[#0d1321]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Publications</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-10"></div>
        <div className="grid md:grid-cols-2 gap-8 justify-center">
          {publications.map((pub, idx) => (
            <div
              key={idx}
              className="group relative bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden min-h-[180px] max-w-xl mx-auto flex flex-col justify-center"
            >
              <div className="flex items-center mb-2">
                <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-4">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <span className="font-semibold text-xl text-gray-800 dark:text-white flex-1">{pub.title}</span>
              </div>
              <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-xs font-semibold mb-2 w-fit">{pub.journal} {pub.year}</span>
              {/* Hidden content, shown on hover */}
              <div className="absolute inset-0 bg-white/95 dark:bg-gray-900/95 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-8 rounded-2xl text-center z-10">
                <p className="text-gray-700 dark:text-gray-200 mb-4 text-base">{pub.description}</p>
                <a href={pub.link} className="text-blue-600 underline font-semibold" target="_blank" rel="noopener noreferrer">View Publication</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications; 