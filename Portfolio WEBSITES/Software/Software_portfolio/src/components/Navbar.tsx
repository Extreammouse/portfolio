import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code, Brain, Briefcase, GraduationCap, Mail } from 'lucide-react';

const Navbar = () => {
  const links = [
    { href: '#', text: 'Home', icon: Code },
    { href: '#projects', text: 'Projects', icon: Brain },
    { href: '#experience', text: 'Experience', icon: Briefcase },
    { href: '#education', text: 'Education', icon: GraduationCap },
    { href: '#contact', text: 'Contact', icon: Mail },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed w-full bg-gray-800/80 backdrop-blur-sm shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="relative group flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Icon size={20} />
                  <span>{link.text}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;