import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-[#EBFCFF] via-white to-[#EFEDCE] dark:from-[#0F214D] dark:via-[#132B4C] dark:to-[#1B2B50] py-16 px-4 sm:px-6 md:px-12 lg:px-20 text-[#0F214D] dark:text-white transition-colors duration-500">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-sm">

        {/* Logo & Description */}
        <div>
          <h3 className="text-2xl font-bold mb-3 text-[#0B5FB0] dark:text-[#AAF1FF]">GlowSkin</h3>
          <p className="text-[#0F214D]/70 dark:text-gray-300">
            Your go-to destination for clean, gentle, and glow-boosting skincare.
          </p>
        </div>

        {/* Shop Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Shop</h4>
          <ul className="space-y-2">
            <li><Link to="/shop" className="hover:underline">All Products</Link></li>
            <li><Link to="/quiz" className="hover:underline">Skincare Quiz</Link></li>
            <li><Link to="/routines" className="hover:underline">Routine Builder</Link></li>
          </ul>
        </div>

        {/* Info Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Info</h4>
          <ul className="space-y-2">
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/blog" className="hover:underline">Blog</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
          <div className="flex gap-4 mt-2">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#0B5FB0] dark:hover:text-[#AAF1FF]"><FaFacebookF size={18} /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#0B5FB0] dark:hover:text-[#AAF1FF]"><FaInstagram size={18} /></a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="hover:text-[#0B5FB0] dark:hover:text-[#AAF1FF]"><FaTiktok size={18} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-12 text-center text-xs text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} GlowSkin. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
