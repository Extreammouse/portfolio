import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Brain, Code, Microscope, FlaskRound as Flask, Dna, Battery as Bacteria,
  Binary, Database, Server, Cpu, Globe, Cloud, Laptop, Monitor, Network,
  Smartphone, Tablet, Wifi, TestTube2
} from 'lucide-react';
import Projects from './Projects';
import Experience from './Experience';
import Education from './Education';
import Contact from './Contact';

const FloatingIcon = ({ 
  icon: Icon, 
  style, 
  className
}: { 
  icon: any;
  style: React.CSSProperties;
  className: string;
}) => {
  const yOffset = Math.floor(Math.random() * 60) + 20; // 20-80px
  const xOffset = Math.floor(Math.random() * 40) - 20; // -20 to 20px
  const duration = Math.floor(Math.random() * 5) + 8; // 8-13 seconds
  const delay = Math.random() * 2; // 0-2 second delay
  const iconSize = Math.floor(Math.random() * 20) + 24; // 24-44px
  
  return (
    <motion.div
      className={`absolute ${className}`}
      style={style}
      animate={{
        y: [0, -yOffset, 0],
        x: [0, xOffset, 0],
        rotate: [0, Math.random() > 0.5 ? 15 : -15, 0],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    >
      <Icon size={iconSize} />
    </motion.div>
  );
};

const BackgroundIcons = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const icons = [
    Brain, Code, Microscope, Flask, Dna, Bacteria,
    Binary, Database, Server, Cpu, Globe, Cloud, Code,
    Laptop, Network, Smartphone, Tablet, Wifi, TestTube2,
  ];

  const colors = [
    'text-purple-500',
    'text-blue-500',
    'text-green-500',
    'text-pink-500',
    'text-yellow-500',
    'text-red-500',
    'text-indigo-500',
    'text-cyan-500',
    'text-emerald-500',
  ];

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-70 z-0">
      {icons.map((icon, index) => {
        let top, left;
        const quadrant = index % 4;
        
        // Top-left quadrant
        if (quadrant === 0) {
          top = Math.floor(Math.random() * 30) + 5;  // 5-35% from top
          left = Math.floor(Math.random() * 30) + 5; // 5-35% from left
        } 
        // Top-right quadrant
        else if (quadrant === 1) {
          top = Math.floor(Math.random() * 30) + 5;  // 5-35% from top
          left = Math.floor(Math.random() * 30) + 65; // 65-95% from left
        }
        // Bottom-left quadrant
        else if (quadrant === 2) {
          top = Math.floor(Math.random() * 30) + 65;  // 65-95% from top
          left = Math.floor(Math.random() * 30) + 5; // 5-35% from left
        }
        // Bottom-right quadrant
        else {
          top = Math.floor(Math.random() * 30) + 65;  // 65-95% from top
          left = Math.floor(Math.random() * 30) + 65; // 65-95% from left
        }
        
        return (
          <FloatingIcon
            key={index}
            icon={icon}
            style={{ 
              top: `${top}%`, 
              left: `${left}%`,
              opacity: 0.8,
            }}
            className={colors[index % colors.length]}
          />
        );
      })}
    </div>
  );
};

const Home = () => {
  return (
    <div className="relative">
      <BackgroundIcons />

      <div className="relative">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center pt-16 px-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center space-x-4 mb-8"
          >
            <Brain className="w-16 h-16 text-purple-500" />
            <Code className="w-16 h-16 text-blue-500" />
            <Microscope className="w-16 h-16 text-green-500" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-500 to-green-400 text-transparent bg-clip-text"
          >
            Ehu Shubham Kishore Shaw
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-3xl font-semibold mb-4 text-gray-300"
          >
            Biomedical Engineer & Software Developer
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto text-center"
          >
            Hi, I'm a biomedical engineer and software developer working where code meets cure. Bridging the gap between medical science and technology through innovative solutions
            and software development.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center space-x-4"
          >
            <a
              href="https://github.com/Extreammouse"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full transition-colors duration-200"
            >
              GitHub
            </a>
            <a
              href="http://www.linkedin.com/in/shubhamshaw"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-full transition-colors duration-200"
            >
              LinkedIn
            </a>
          </motion.div>
        </section>

        {/* Reduced spacing between sections */}
        <section id="projects" className="py-8">
          <Projects />
        </section>

        <section id="experience" className="py-8">
          <Experience />
        </section>

        <section id="education" className="py-8">
          <Education />
        </section>

        <section id="contact" className="py-8">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default Home;