import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Download } from 'lucide-react';

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

// Convert Google Drive link to direct download link
const getDirectDownloadLink = (driveLink: string) => {
  // For files with format: https://drive.google.com/file/d/FILE_ID/view or /edit
  const match = driveLink.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (match && match[1]) {
    return `https://drive.google.com/uc?export=download&id=${match[1]}`;
  }
  // For files with format: https://drive.google.com/open?id=FILE_ID
  const idMatch = driveLink.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (idMatch && idMatch[1]) {
    return `https://drive.google.com/uc?export=download&id=${idMatch[1]}`;
  }
  // Return original link if format is not recognized
  return driveLink;
};

const Contact = () => {
  // Your Google Drive resume link - just update this URL to update your resume across the site
  const resumeDriveLink = "https://drive.google.com/file/d/1aR7Ng8bH7F4bCOlkaxPIirf57h8TsTk8/view?usp=sharing";
  
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
              link={getDirectDownloadLink(resumeDriveLink)}
              color="bg-gradient-to-r from-purple-500 to-purple-600"
            />
          </div>
          
          {/* Map Column */}
          <div className="lg:col-span-2">
            <div className="rounded-xl overflow-hidden relative h-96 flex items-center justify-center">
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