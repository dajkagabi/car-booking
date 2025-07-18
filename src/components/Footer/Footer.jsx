import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import logo from '/src/assets/lgs.png'; 

const Footer = () => {
  return (
    <footer className="bg-[#005660] text-white py-6 text-sm">
      <div className="max-w-7xl mx-auto px-6">
    
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo + Leírás + Social */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <img src={logo} alt="AutoDrive Logo" className="w-10 h-10 mr-2" />
              <h2 className="text-xl font-bold">AutoDrive</h2>
            </div>
            <p className="text-sm mb-4">AutoDrive offers premium car selection with exceptional service. Find your perfect vehicle with our expert guidance.</p>
            <div className="flex space-x-4 text-white">
              <a href="#" className="hover:text-blue-500"><FacebookIcon fontSize="small" /></a>
              <a href="#" className="hover:text-sky-400"><TwitterIcon fontSize="small" /></a>
              <a href="#" className="hover:text-pink-500"><InstagramIcon fontSize="small" /></a>
              <a href="#" className="hover:text-red-500"><YouTubeIcon fontSize="small" /></a>
            </div>
          </div>

      
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-300">About Us</a></li>
              <li><a href="#" className="hover:text-gray-300">Careers</a></li>
              <li><a href="#" className="hover:text-gray-300">Blog</a></li>
              <li><a href="#" className="hover:text-gray-300">Press</a></li>
            </ul>
          </div>

     
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-300">Car Sales</a></li>
              <li><a href="#" className="hover:text-gray-300">Financing</a></li>
              <li><a href="#" className="hover:text-gray-300">Trade-In</a></li>
              <li><a href="#" className="hover:text-gray-300">Leasing</a></li>
            </ul>
          </div>

        
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-300">FAQ</a></li>
              <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
              <li><a href="#" className="hover:text-gray-300">Terms of Service</a></li>
              <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
            </ul>
          </div>

        
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <form className="space-y-3 text-sm">
              <input type="text" placeholder="Your Name" className="w-full p-2 bg-gray-800 rounded" />
              <input type="email" placeholder="Your Email" className="w-full p-2 bg-gray-800 rounded" />
              <textarea placeholder="Your Message" rows="3" className="w-full p-2 bg-gray-800 rounded" />
              <button type="submit" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded">Send Message</button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-6 text-sm flex flex-wrap justify-between items-center">
          <p>© 2025 AutoDrive. All rights reserved.</p>
          <div className="space-x-4">
            <a href="#" className="hover:text-gray-300">Terms</a>
            <a href="#" className="hover:text-gray-300">Privacy</a>
            <a href="#" className="hover:text-gray-300">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
