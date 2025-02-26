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

// This array can be expanded with more projects
const projects: Project[] = [
  {
    id: 1,
    title: "Co-Founder & Technical Lead, QuickSend_AI",
    description: "Designed and launched a full-stack AI-powered personalized email platform for job seekers, optimizing recruiter outreach by utilizing a Python backend with Flask API and a Flutter-based frontend. Custom email solution improved response rates by 40%. Deployed scalable cloud-native architecture with Docker and GCP, maintaining response times under 100ms.",
    image: quicksend,
    tags: ["Python", "Flask", "GCP", "Firebase", "React", "TypeScript", "AI", "Grafana", "HashicorpVault", "GitAction", "Prometheus", "Docker"]
  },
  {
    id: 2,
    title: "Log Analysis and Automatic Mailing",
    description: "Created a Python and Bash solution to detect specific keywords in logs and automatically email alerts. Saved 2-3 hours of daily monitoring time, providing early insights for quick actions.",
    image:analysislogs,
    tags: ["Bash", "Python", "Log analysis"]
  },
  {
    id: 3,
    title: "Streamlit Application for Server Monitoring",
    description: "Built a Python Streamlit application to monitor critical processes like Jenkins and Bitbucket using API keys. Designed an interactive dashboard that reduced manual effort in morning monitoring and eliminated dependency on email.",
    image:streamlit,
    tags: ["Data Analysis", "Python", "Visualization", "Bash", "Monitoring"]
  },
  {
    id: 4,
    title: "Jira Ticket Report Automation",
    description: "Automated daily Jira ticket reporting using Python and Jira Query Language (JQL). Consolidated reports were delivered via email, improving task visibility and streamlining team communication.",
    image:jira,
    tags: ["Jira", "Python", "Automation", "Bash"]
  },
  {
    id: 5,
    title: "ELK Setup with Custom Python Agent",
    description: "Set up ELK (Elastic, Logstash, Kibana) using Docker Compose and developed a custom Python agent to send logs and PDFs for Kibana visualization. Configured Grok patterns and dashboards for efficient data.",
    image:elk,
    tags: ["Data Analysis", "Python", "ELK", "Docker", "Kubernetes"]
  },
  {
    id: 6,
    title: "Auto-Deployment of Trading Bots",
    description: "Automated the deployment process of trading algorithms from QA to production with checks and approvals using Python, Ansible, and Bash. Reduced deployment time from 4 hours to 1 minute, significantly improving operational efficiency.",
    image:deploy      ,
    tags: ["Ansible", "Python", "Bash"]
  },
  {
    id: 7,
    title: "Ansible Script for Application Installation",
    description: "Created an Ansible script to install applications on Windows and Linux servers in parallel. Deployed software like Notepad on Windows and Python on Linux, enhancing installation efficiency across multiple servers.",
    image:ansible     ,
    tags: ["Ansible", "Linux", "Windows", "Chocolatey"]
  },
  {
    id: 9,
    title: "MongoDB and Kafka Deployment",
    description: "Automated deployment of standalone Kafka and MongoDB setups (with or without authentication) on production servers using Bash and Ansible. Streamlined deployment processes to save time and reduce manual errors.",
    image:kafka       ,
    tags: ["MongoDB", "Python", "Kafka", "Bash"]
  },
  {
    id: 10,
    title: "MongoDB Backup and Restore",
    description: "Developed a Bash script for automated backup and restoration of multiple MongoDB databases and collections, improving data reliability and minimizing manual intervention.",
    image:mongodb     ,
    tags: ["Bash", "Jenkins", "MongoDB", "Jira"]
  },
  {
    id: 11,
    title: "Automated Access Control in Jenkins",
    description: "Created a Groovy script to manage user access controls in Jenkins, enabling secure and automated access management. Simplified permission granting and user role maintenance.",
    image:jenkins     ,
    tags: ["Groovy", "Jenkins"]
  },
  {
    id: 12,
    title: "BSE & NSE IPO Scraper",
    description: "Built a Python web scraper to extract specific IPO information from BSE and NSE websites for traders. Automated data retrieval facilitated timely and accurate trading decisions.",
    image:webscraper2 ,
    tags: ["Selenium", "Python", "BeautifulSoup"]
  },
  {
    id: 13,
    title: "ISL NSE Scraper",
    description: "Developed a Python script to automate the download of daily CSV data files for trade analysis, ensuring quick access to critical trading data and improving analytical capabilities.",
    image:webscraper1 ,
    tags: ["Selenium", "Bash"]
  },
  {
    id: 14,
    title: "Algorithmic Trading Bot Development",
    description: "Designed and developed an algorithmic trading bot in MQL4 for automated trading. Implemented data-driven decision-making algorithms to optimize trade execution based on backtested financial data, enhancing market responsiveness.",
    image:bot         ,
    tags: ["Data Analysis", "MQL4", "Python"]
  },
  {
    id: 15,
    title: "CLI Tool for Docker Build & Push",
    description: "Built a CLI tool using Cobra in Go for Docker build and push operations, alongside creating a CLI tool for container advanced Bash commands.",
    image:cli         ,
    tags: ["Go", "Golang", "Bash", "Docker", "Python(Click)"]
  },
  {
    id: 16,
    title: "Jar Replacement Automation",
    description: "Developed a Bash script integrated with Jira to automate the replacement of critical .jar files, including backup and version updates. Automated approval checks reduced manual errors and cut replacement time from 3–4 hours to 1 minute, ensuring robust version control and system reliability.",
    image: logAnalysis,
    tags: ["Bash", "Python", "Jira"]  },
  {
    id: 17,
    title: "3D Printing",
    description: "6-years experience in 3D printing and modeling objects.",
    image: printer,
    tags: ["3D Printing", "Lua", "Marlin", "G-code", "ANSYS", "TinkerCAD", "Fusion360", "Maya", "AutoCAD"]
  },
  {
    id: 18,
    title: "Medical Risk Assessment System (Diabetes Prediction)",
    description: "Created machine learning system for early diabetes risk prediction based on patient health data. Utilized Python, Decision Trees, Random Forest, and Flask for web interface, integrating lab reports and vital signs with HIPAA-compliant data handling and displayed over Grafana.",
    image: medicine3,
    tags: ["Machine Learning", "Python", "Grafana", "HIPAA", "Healthcare Data"]
  },
  {
    id: 20,
    title: "Bionic Leg Prosthetic Project",
    description: "Designed adaptive prosthetic control system for improved mobility and gait stability for a dog. Implemented using Python, Arduino, IMU sensors, and machine learning algorithms for real-time joint angle prediction and feedback control.",
    image: medicine4,
    tags: ["3D Printing", "C++", "RPi/Arduino", "Joints", "Materials"]
  },
  {
    id: 21,
    title: "Medical IoT Vulnerability Scanner",
    description: "Developed security assessment tool for hospital networks to identify vulnerabilities in medical devices like MRI machines and infusion pumps. Implemented using Python, Nmap, React, and CVE databases with automated PDF reporting, reducing audit time by 35% while meeting HIPAA requirements.",
    image: medicine2,
    tags: ["Data Analysis", "Python", "React", "HIPAA"]
  },
  {
    id: 22,
    title: "Fake News Detector",
    description: "Given data algorithm detects if the news is fake or not using ML and NLP.",
    image: fakenews,
    tags: ["Machine Learning", "Python", "Natural Language Processing"]
  },
  {
    id: 23,
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