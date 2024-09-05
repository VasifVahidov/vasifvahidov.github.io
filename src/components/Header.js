// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import pic from '../assets/images/pic.jpeg';
import SocialLinks from './SocialLinks';

function Header() {
  return (
    <header className="bg-gray-800 text-white p-8">
      <div className="flex items-center space-x-6">
        <img src={pic} alt="Profile Picture" className="w-24 h-24 rounded-full" />
        <div>
          <h1 className="text-4xl font-bold">Vasif Vahidov</h1>
          <p className="text-xl">Software Engineer</p>
          <p className="mt-2">
            📧 vasif [dot] vahidov [at] gmail [dot] com<br />
            📍 Bavaria, Germany
          </p>
          <SocialLinks />
        </div>
      </div>
    </header>
  );
}

export default Header;
