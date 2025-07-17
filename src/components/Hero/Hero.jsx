import React from 'react';
import img from '../../assets/img.jpg'; 

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${img})` }} 
    >
    
      <div className="absolute inset-0 bg-black opacity-50"></div> 
      
     
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
      
        <p className="text-sm uppercase tracking-widest bg-black bg-opacity-70 inline-block px-3 py-1 mb-4 rounded-full">
          Premium Selection
        </p>
        
        
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
          Find Your Perfect Drive
        </h1>
        
      
        <p className="text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed">
          Discover our handpicked selection of luxury, sports, and electric
          vehicles. Experience the thrill of driving excellence with AutoDrive.
        </p>
        
        
        <button className="bg-white text-black font-semibold py-3 px-8 rounded-full hover:bg-gray-200 transition duration-300">
          Explore Cars
        </button>
      </div>
    </section>
  );
};

export default HeroSection;