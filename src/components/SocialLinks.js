// src/components/SocialLinks.js
import React from 'react';

function SocialLinks() {
  return (
    <div className="mt-4 flex space-x-4">
      <a href="https://www.linkedin.com/in/vasifvahidov/" target="_blank" rel="noopener noreferrer" className="text-blue-500" title="LinkedIn">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="https://github.com/vasifvahidov" target="_blank" rel="noopener noreferrer" className="text-gray-800" title="GitHub">
        <i className="fab fa-github"></i>
      </a>
      <a href="https://www.instagram.com/w00tech/" target="_blank" rel="noopener noreferrer" className="text-pink-500" title="Instagram">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://www.researchgate.net/profile/Vasif-Vahidov" target="_blank" rel="noopener noreferrer" className="text-green-500" title="ResearchGate">
        <i className="fas fa-book"></i>
      </a>
    </div>
  );
}

export default SocialLinks;
