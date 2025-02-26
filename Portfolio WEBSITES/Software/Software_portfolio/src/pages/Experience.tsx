import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    "id": 1,
    "role": "DevOps Engineer",
    "company": "Edelweiss",
    "duration": "2022 - 2024",
    "location": "Mumbai, India",
    "description": "• Implemented enterprise CI/CD pipelines with Jenkins, reducing deployment times by 90%. • Built automated infrastructure using Python and Ansible, reducing deployment time from 4 hours to 1 minute. • Deployed Docker/Kubernetes containerization solutions and multiple ELK stacks for efficient workload scaling. • Automated MongoDB and Kafka cluster setup using Bash/Ansible, reducing setup time by 80%.    • Developed custom ELK stack with Python logging agent for real-time monitoring and analytics. • Automated Java artifact deployment with Jira integration, achieving zero-downtime deployments. • Created configurable data pipeline processing financial instruments daily with 99.9% accuracy, enabling real-time trading decisions."
  },
  {
    id: 2,
    role: "Biomedical Engineer Intern",
    company: "Kokilaben Dhirubhai Ambani Hospital",
    duration: "June 2021 – July 2021",
    location: "Mumbai, India",
    description: "• Led maintenance of critical ICU/OR equipment (ventilators, X-ray machines, ECG systems). • performed real-time troubleshooting of surgical robots during procedures • implemented predictive maintenance protocols that reduced device downtime • Collaborated with surgical teams on prosthetics optimization ."
  },
  {
    id: 3,
    role: "Biomedical Engineer Intern",
    company: "BSES MG Hospital",
    duration: "Jan 2020 – Feb 2020",
    location: "Mumbai, India",
    description: "Con• Calibrated laser systems, robotic surgical equipment, and cell culture monitoring equipment per ISO 13485 standards • Tracked medical device inventory & schedule maintenance with vendors"
  }
];

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

const Experience = () => {
  return (
    <div className="min-h-screen pt-16 bg-gray-900/95">
      <BlurredBackground />
      
      <div className="max-w-7xl mx-auto px-4 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16 text-white"
        >
          Professional Experience
        </motion.h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-8 shadow-xl border border-gray-700/50"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                  <p className="text-xl text-blue-400">{exp.company}</p>
                </div>
                <div className="flex flex-col md:items-end mt-2 md:mt-0">
                  <div className="flex items-center text-gray-300">
                    <Calendar size={16} className="mr-2" />
                    {exp.duration}
                  </div>
                  <div className="flex items-center text-gray-300 mt-1">
                    <MapPin size={16} className="mr-2" />
                    {exp.location}
                  </div>
                </div>
              </div>
              <p className="text-gray-300">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;