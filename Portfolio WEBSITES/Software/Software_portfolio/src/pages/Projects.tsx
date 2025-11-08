import React from 'react';
import { motion } from 'framer-motion';
import android from './images/androidstudios.jpg';
import ansible from './images/ansible.jpg';
import cli from './images/cli_tools.jpg';
import medicine2 from './images/datascanmedecine.jpg';
import deploy from './images/deployment.jpg';
import medicine3 from './images/diseaseprediction.jpg';
import elk from './images/ELK.jpg';
import fakenews from './images/flkenews.jpg';
import logAnalysis from './images/jar-automation.png';
import jenkins from './images/jenkins.png';
import jira from './images/jira.png';
import kafka from './images/kafka.png';
import analysislogs from './images/loganalysis.jpg';
import mongodb from './images/mongodb.png';
import medicine4 from './images/medicine4.jpg';
import streamlit from './images/streamlit.jpg';
import bot from './images/tradebot.jpg';
import webscraper1 from './images/webscraper_iisl.png';
import webscraper2 from './images/webscraper.jpg';
import quicksend from './images/Quicksend.png';
import printer from './images/3dprint.jpg';
import metacampus from './images/metacampus.png';
import grpc from './images/GRPC.png';
import mac from './images/MAC.png';
import aws from './images/AWS.png';
import rev from './images/REVIU.png';
import rtt from './images/RTT.png';


// Define TypeScript interface for project objects
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

// Define props interface for ProjectCard component
interface ProjectCardProps {
  project: Project;
  index: number;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Co-Founder & Technical Lead, QuickSend_AI",
    description: "Designed and launched a full-stack AI-powered personalized email platform for job seekers, optimizing recruiter outreach by utilizing a Python backend with Flask for API and a React frontend. Custom email solution improved response rates by 40%. Deployed scalable cloud-native architecture with Docker and GCP, maintaining response times under 100ms.",
    image: quicksend,
    tags: ["Python", "Flask", "GCP", "Firebase", "React", "TypeScript", "AI", "Grafana", "HashicorpVault", "GitAction", "Prometheus", "Docker", "paypalAPI"]
  },
  {
    id: 2,
    title : "Meta-Campus",
    description: "Developed a comprehensive web platform for universities to access Records of students while transferring documents & sharing ona. blockchain network accross universities via blockchain.",
    image: metacampus,
    tags: ["React", "Node.js", "Smartcontract", "MongoDB", "Blockchain(Algorand)"]
  },
  {
    id: 3,
    title: "GRPC (server & Client)",
    description: "Created simple gRPC script in .proto and created server and client setup in Python and C++ to send data over network to client over server between client <-> python & c code on a FPGA.",
    image: grpc,
    tags: ["Python", "C++", "gRPC", "FPGA"]
  },
  {
    id: 6,
    title: "Context-Aware Screen Automation Utility for macOS",
    description: "Engineered a context-aware macOS utility that uses AI in real-time screen analysis to Generate professional messaging and email responses based on screen content via a simple hotkey using your favorite AI.",
    image: mac,
    tags: ["Agentica-AI", "AppleScript", "macOS", "Automation", "Python", "Swift"]
  },
  {
    id: 5,
    title: "Recrute-me",
    description : "Built a high-performance modern full stack web application utilizing React for the user interface, served via Amazon S3. Created a resilient, serverless backend using TypeScript and AWS Lambda used services like API Gateway and managed persistent application data within Amazon RDS.",
    image: aws,
    tags: ["React", "TypeScript", "AWS Lambda", "Amazon S3", "Amazon RDS" ]
  },
  {
    id: 7,
    title: "Real-Time Translator (RTT)",
    description: "Addressed multilingual communication gaps for travelers . Tasked to develop offline-capable instant translation app . Developed in \textbf{Swift} leveraging Apple speech APIs + custom ML models . Delivered translations in $<$0.5s with 90\%+ accuracy across 5 languages .",
    image: rtt,
    tags:["Swift", "iOS", "Machine Learning", "NLP"]
  },
  {
    id: 4,
    title : "REVIU - Research paper review using blockchain",
    description: "Developed a decentralized platform for secure and transparent research paper reviews using blockchain technology. Implemented smart contracts to manage submissions, reviews, and rewards through on chain rewarding, ensuring data integrity and incentivizing quality feedback for unbiased reviews.",
    image: rev,
    tags: ["React", "python", "Smartcontract", "MongoDB", "Blockchain(Ethereum)"]
  },
  {
    id: 8,
    title: "Log Analysis and Automatic Mailing",
    description: "Created a Python and Bash solution to detect specific keywords in logs and automatically email alerts. Saved 2-3 hours of daily monitoring time, providing early insights for quick actions.",
    image:analysislogs,
    tags: ["Bash", "Python", "Log analysis"]
  },
  {
    id: 9,
    title: "Streamlit Application for Server Monitoring",
    description: "Built a Python Streamlit application to monitor critical processes like Jenkins and Bitbucket using API keys. Designed an interactive dashboard that reduced manual effort in morning monitoring and eliminated dependency on email.",
    image:streamlit,
    tags: ["Data Analysis", "Python", "Visualization", "Bash", "Monitoring"]
  },
  {
    id: 10,
    title: "Jira Ticket Report Automation",
    description: "Automated daily Jira ticket reporting using Python and Jira Query Language (JQL). Consolidated reports were delivered via email, improving task visibility and streamlining team communication.",
    image:jira,
    tags: ["Jira", "Python", "Automation", "Bash"]
  },
  {
    id: 11,
    title: "ELK Setup with Custom Python Agent",
    description: "Set up ELK (Elastic, Logstash, Kibana) using Docker Compose and developed a custom Python agent to send logs and PDFs for Kibana visualization. Configured Grok patterns and dashboards for efficient data.",
    image:elk,
    tags: ["Data Analysis", "Python", "ELK", "Docker", "Kubernetes"]
  },
  {
    id: 12,
    title: "Auto-Deployment of Trading Bots",
    description: "Automated the deployment process of trading algorithms from QA to production with checks and approvals using Python, Ansible, and Bash. Reduced deployment time from 4 hours to 1 minute, significantly improving operational efficiency.",
    image:deploy      ,
    tags: ["Ansible", "Python", "Bash"]
  },
  {
    id: 13,
    title: "Ansible Script for Application Installation",
    description: "Created an Ansible script to install applications on Windows and Linux servers in parallel. Deployed software like Notepad on Windows and Python on Linux, enhancing installation efficiency across multiple servers.",
    image:ansible     ,
    tags: ["Ansible", "Linux", "Windows", "Chocolatey"]
  },
  {
    id: 14,
    title: "MongoDB and Kafka Deployment",
    description: "Automated deployment of standalone Kafka and MongoDB setups (with or without authentication) on production servers using Bash and Ansible. Streamlined deployment processes to save time and reduce manual errors.",
    image:kafka       ,
    tags: ["MongoDB", "Python", "Kafka", "Bash"]
  },
  {
    id: 15,
    title: "MongoDB Backup and Restore",
    description: "Developed a Bash script for automated backup and restoration of multiple MongoDB databases and collections, improving data reliability and minimizing manual intervention.",
    image:mongodb     ,
    tags: ["Bash", "Jenkins", "MongoDB", "Jira"]
  },
  {
    id: 16,
    title: "Automated Access Control in Jenkins",
    description: "Created a Groovy script to manage user access controls in Jenkins, enabling secure and automated access management. Simplified permission granting and user role maintenance.",
    image:jenkins     ,
    tags: ["Groovy", "Jenkins"]
  },
  {
    id: 17,
    title: "BSE & NSE IPO Scraper",
    description: "Built a Python web scraper to extract specific IPO information from BSE and NSE websites for traders. Automated data retrieval facilitated timely and accurate trading decisions.",
    image:webscraper2 ,
    tags: ["Selenium", "Python", "BeautifulSoup"]
  },
  {
    id: 18,
    title: "ISL NSE Scraper",
    description: "Developed a Python script to automate the download of daily CSV data files for trade analysis, ensuring quick access to critical trading data and improving analytical capabilities.",
    image:webscraper1 ,
    tags: ["Selenium", "Bash"]
  },
  {
    id: 19,
    title: "Algorithmic Trading Bot Development",
    description: "Designed and developed an algorithmic trading bot in MQL4 for automated trading. Implemented data-driven decision-making algorithms to optimize trade execution based on backtested financial data, enhancing market responsiveness.",
    image:bot         ,
    tags: ["Data Analysis", "MQL4", "Python"]
  },
  {
    id: 20,
    title: "CLI Tool for Docker Build & Push",
    description: "Built a CLI tool using Cobra in Go for Docker build and push operations, alongside creating a CLI tool for container advanced Bash commands.",
    image:cli         ,
    tags: ["Go", "Golang", "Bash", "Docker", "Python(Click)"]
  },
  {
    id: 21,
    title: "Jar Replacement Automation",
    description: "Developed a Bash script integrated with Jira to automate the replacement of critical .jar files, including backup and version updates. Automated approval checks reduced manual errors and cut replacement time from 3–4 hours to 1 minute, ensuring robust version control and system reliability.",
    image: logAnalysis,
    tags: ["Bash", "Python", "Jira"]  },
  {
    id: 22,
    title: "3D Printing",
    description: "6-years+ experience in 3D printing and modeling objects.",
    image: printer,
    tags: ["3D Printing", "Lua", "Marlin", "G-code", "ANSYS", "TinkerCAD", "Fusion360", "Maya", "AutoCAD"]
  },
  {
    id: 23,
    title: "Medical Risk Assessment System (Diabetes Prediction)",
    description: "Created machine learning system for early diabetes risk prediction based on patient health data. Utilized Python, Decision Trees, Random Forest, and Flask for web interface, integrating lab reports and vital signs with HIPAA-compliant data handling and displayed over Grafana.",
    image: medicine3,
    tags: ["Machine Learning", "Python", "Grafana", "HIPAA", "Healthcare Data"]
  },
  {
    id: 24,
    title: "Bionic Leg Prosthetic Project",
    description: "Designed adaptive prosthetic control system for improved mobility and gait stability for a dog. Implemented using Python, Arduino, IMU sensors, and machine learning algorithms for real-time joint angle prediction and feedback control.",
    image: medicine4,
    tags: ["3D Printing", "C++", "RPi/Arduino", "Joints", "Materials"]
  },
  {
    id: 25,
    title: "Medical IoT Vulnerability Scanner",
    description: "Developed security assessment tool for hospital networks to identify vulnerabilities in medical devices like MRI machines and infusion pumps. Implemented using Python, Nmap, React, and CVE databases with automated PDF reporting, reducing audit time by 35% while meeting HIPAA requirements.",
    image: medicine2,
    tags: ["Data Analysis", "Python", "React", "HIPAA"]
  },
  {
    id: 26,
    title: "Fake News Detector",
    description: "Given data algorithm detects if the news is fake or not using ML and NLP.",
    image: fakenews,
    tags: ["Machine Learning", "Python", "Natural Language Processing"]
  },
  {
    id: 27,
    title: "Android Studios - Face Detection Using MLKit",
    description: "Developed an Android app to detect face contour and segments with face detection using MLKit in Android Studio.",
    image: android,
    tags: ["Machine Learning", "Kotlin", "Android Studio"]
  }

];

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 w-full`}
    >
      <motion.div
        initial={isEven ? { x: -100, opacity: 0 } : { x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
        className="w-full md:w-1/2 h-auto overflow-hidden rounded-lg aspect-video"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-contain transform hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
      </motion.div>

      <motion.div
        initial={isEven ? { x: 100, opacity: 0 } : { x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full md:w-1/2 space-y-4"
      >
        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
          {project.title}
        </h3>
        <p className="text-gray-400">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-400 rounded-full text-sm hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text"
      >
        Featured Projects
      </motion.h2>

      <div className="space-y-24">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;