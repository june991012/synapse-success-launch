
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="/" className="text-xl font-bold text-primary flex items-center">
              <span className="text-2xl mr-1">⚡</span>
              Synapse
            </a>
            <p className="text-sm text-gray-500 mt-2">
              CSM 인텔리전스 플랫폼
            </p>
          </div>
          
          <div className="text-sm text-gray-500">
            &copy; {currentYear} Synapse. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
