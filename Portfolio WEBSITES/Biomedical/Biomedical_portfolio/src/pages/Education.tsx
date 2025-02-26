import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award } from 'lucide-react';

const BlurredBackground = () => {
  // Create different sized and colored blurred circles
  const circles = [
    { size: "w-64 h-64", color: "bg-blue-500", top: "10%", left: "5%", opacity: "opacity-10" },
    { size: "w-96 h-96", color: "bg-purple-600", top: "70%", left: "80%", opacity: "opacity-10" },
    { size: "w-80 h-80", color: "bg-indigo-600", top: "40%", left: "90%", opacity: "opacity-10" },
    { size: "w-72 h-72", color: "bg-cyan-500", top: "80%", left: "10%", opacity: "opacity-10" },
    { size: "w-56 h-56", color: "bg-blue-600", top: "30%", left: "30%", opacity: "opacity-10" },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-5]">
      {circles.map((circle, index) => (
        <div
          key={index}
          className={`absolute rounded-full ${circle.size} ${circle.color} ${circle.opacity} blur-3xl`}
          style={{
            top: circle.top,
            left: circle.left,
          }}
        />
      ))}
    </div>
  );
};

const Education = () => {
  return (
    <div className="min-h-screen pt-16 bg-gray-900/95">
      <BlurredBackground />
      
      <div className="max-w-7xl mx-auto px-4 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16 text-white"
        >
          Education
        </motion.h2>

        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-8 shadow-xl border border-gray-700/50"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white">Master of Science in Computer Science</h3>
                <p className="text-xl text-blue-400">Worcester Polytechnic Institute</p>
              </div>
              <div className="flex items-center text-gray-300">
                <Calendar size={16} className="mr-2" />
                2024 - 2026
              </div>
            </div>
            <div className="space-y-2 text-gray-300">
              <p>Coursework: Big-Data Management, Machine Learning, Knowledge discovery and data mining, Algorithms, NLP, Mobile and ubiquitous, Foundation of computer science</p>
              <p>GPA: 4.0/4.0</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-8 shadow-xl border border-gray-700/50"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white">Bachelor of Science in Biomedical engineering</h3>
                <p className="text-xl text-blue-400">SVKM's Dwarkadas J. Sanghvi College of Engineering</p>
              </div>
              <div className="flex items-center text-gray-300">
                <Calendar size={16} className="mr-2" />
                2019 - 2022
              </div>
            </div>
            <div className="space-y-2 text-gray-300">
              <p> Coursework: Medical Imaging I & II, Biomedical Monitoring Equipment, Life Saving and Surgical Equipment, Diagnostic and
                  Therapeutic Instruments, Digital Image Processing, Digital Signal Processing, Healthcare Database Management, Biomaterials, Prosthetics and Orthotics, Nuclear
                  Medicine, Biomedical Microsystems, Basics of human physiology, Microcontroller and Microprocesser, Electrical network analysis system, Linear integrated circuits, OOPS, Electic circuit design, Principle of digital electronics.</p>
              <p>SGPA : 8.22/10</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-8 shadow-xl border border-gray-700/50"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white">Diploma in Electronics and Telecommunication</h3>
                <p className="text-xl text-blue-400">Thakur Polytechnic</p>
              </div>
              <div className="flex items-center text-gray-300">
                <Calendar size={16} className="mr-2" />
                2017 - 2019
              </div>
            </div>
            <div className="space-y-2 text-gray-300">
              <p>• Percentage : 80/100</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Education;