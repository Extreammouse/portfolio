import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, FileText, Download, X, Link as LinkIcon } from 'lucide-react';

import { XIcon as LucideIcon } from 'lucide-react';

interface ContactCardProps {
  icon: typeof LucideIcon;
  title: string;
  value: string;
  link?: string;
  color: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ icon: Icon, title, value, link, color }) => {
  return (
    <div className="bg-black/20 backdrop-filter backdrop-blur-md rounded-xl p-4 border border-gray-700/50 hover:border-gray-500/50 transition-all duration-300 flex items-center">
      <div className={`${color} w-10 h-10 rounded-lg flex items-center justify-center mr-4 shadow-lg`}>
        <Icon className="text-white" size={18} />
      </div>
      <div className="flex-1">
        <h3 className="text-gray-400 text-xs font-medium uppercase tracking-wide">{title}</h3>
        {link ? (
          <a 
            href={link} 
            target={link.startsWith('http') ? '_blank' : undefined}
            rel={link.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="text-white hover:text-blue-400 transition-colors duration-300 font-medium"
          >
            {value}
          </a>
        ) : (
          <p className="text-white font-medium">{value}</p>
        )}
      </div>
    </div>
  );
};

const ResumeSection = () => {
  const [driveLink, setDriveLink] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (driveLink && driveLink.includes('drive.google.com')) {
      setSubmitted(true);
    } else {
      alert('Please enter a valid Google Drive link');
    }
  };
  
  const resetLink = () => {
    setDriveLink('');
    setSubmitted(false);
  };
  
  // Convert Google Drive link to direct download link
  const getDirectDownloadLink = (driveLink: string) => {
    // For files with format: https://drive.google.com/file/d/FILE_ID/view
    if (driveLink.includes('/file/d/')) {
      const fileId = driveLink.split('/file/d/')[1].split('/')[0];
      return `https://drive.google.com/uc?export=download&id=${fileId}`;
    }
    // For files with format: https://drive.google.com/open?id=FILE_ID
    else if (driveLink.includes('?id=')) {
      const fileId = driveLink.split('?id=')[1].split('&')[0];
      return `https://drive.google.com/uc?export=download&id=${fileId}`;
    }
    // Return original link if format is not recognized
    return driveLink;
  };
  
  return (
    <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 backdrop-filter backdrop-blur-md border border-indigo-500/30 rounded-xl p-6">
      <h2 className="text-xl font-bold text-white mb-4 flex items-center">
        <FileText className="mr-2 text-indigo-400" size={20} />
        Resume
      </h2>
      
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div className="bg-black/30 rounded-xl p-4 border border-gray-700/50">
            <label className="block text-sm text-white mb-2">Add your Google Drive resume link:</label>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="url"
                value={driveLink}
                onChange={(e) => setDriveLink(e.target.value)}
                placeholder="https://drive.google.com/file/d/..."
                className="flex-1 px-4 py-2 rounded-lg bg-black/40 border border-gray-700 text-white text-sm focus:outline-none focus:border-indigo-500"
                required
              />
              <button 
                type="submit"
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-medium transition-all duration-300"
              >
                Save Link
              </button>
            </div>
            <p className="mt-2 text-xs text-gray-400">Your Google Drive document must be accessible to anyone with the link</p>
          </div>
        </form>
      ) : (
        <div className="bg-green-900/20 rounded-xl p-4 border border-green-500/30">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <LinkIcon className="text-green-400 mr-2" size={16} />
              <span className="text-white font-medium">Resume Link Added</span>
            </div>
            <button 
              onClick={resetLink}
              className="p-1.5 bg-black/20 hover:bg-black/40 rounded-lg transition-colors duration-300"
            >
              <X size={14} className="text-white" />
            </button>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <a 
              href={driveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white text-sm font-medium transition-all duration-300 flex items-center"
            >
              <LinkIcon size={14} className="mr-2" />
              View Resume
            </a>
            <a 
              href={getDirectDownloadLink(driveLink)} 
              download="resume"
              className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-white text-sm font-medium transition-all duration-300 flex items-center"
            >
              <Download size={14} className="mr-2" />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Get In Touch
            </span>
          </h1>
          <p className="text-gray-400 max-w-lg mx-auto">
            Feel free to contact me for any work or suggestions below
          </p>
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Column */}
          <div className="lg:col-span-1 space-y-4">
            <ContactCard 
              icon={Mail} 
              title="Email" 
              value="ehushubham@gmail.com" 
              link="mailto:ehushubham@gmail.com"
              color="bg-gradient-to-r from-blue-500 to-blue-600"
            />
            
            <ContactCard 
              icon={Phone} 
              title="Phone" 
              value="+1 (774) 418-9894" 
              link="tel:+17744189894"
              color="bg-gradient-to-r from-green-500 to-green-600"
            />
            
            <ContactCard 
              icon={MapPin} 
              title="Location" 
              value="Worchester, MA, USA" 
              color="bg-gradient-to-r from-orange-500 to-orange-600"
            />
            
            <ContactCard 
              icon={Github} 
              title="GitHub" 
              value="github.com/Extreammouse" 
              link="https://github.com/Extreammouse"
              color="bg-gradient-to-r from-gray-600 to-gray-700"
            />
            
            <ContactCard 
              icon={Linkedin} 
              title="LinkedIn" 
              value="linkedin.com/in/shubhamshaw" 
              link="http://www.linkedin.com/in/shubhamshaw"
              color="bg-gradient-to-r from-blue-600 to-blue-700"
            />
            
            <ContactCard 
              icon={Download} 
              title="Resume" 
              value="Download Resume" 
              link="https://drive.google.com/file/d/1Jg0NwKNeLCC_YL789J4lsouLBbIMGiqK/view?usp=sharing"
              color="bg-gradient-to-r from-purple-500 to-purple-600"
            />
          </div>
          
          {/* Resume and Map Column */}
          <div className="lg:col-span-2" id="resume-section">
            <ResumeSection />
            
            <div className="mt-6 rounded-xl overflow-hidden relative h-64 flex items-center justify-center">
              <div className="absolute inset-0 bg-black/40 backdrop-filter backdrop-blur-sm z-10"></div>
              <img 
                src="/api/placeholder/800/400" 
                alt="Map" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="relative z-20 text-center p-6">
                <h3 className="text-xl font-bold text-white mb-4">Let's Connect</h3>
                <p className="text-gray-200 mb-4">Find me on social media or send me a message for future collaboration or full-time/Internship opportunities</p>
                <div className="flex justify-center space-x-4">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;