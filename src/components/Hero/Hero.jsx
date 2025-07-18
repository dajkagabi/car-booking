import React from "react";
import img from "../../assets/hero.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-screen bg-center bg-cover flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="relative z-10 max-w-4xl text-center px-4">
        <p className="inline-block bg-black bg-opacity-70 text-xs uppercase tracking-wide px-4 py-1 rounded-full mb-4">
          Premium Selection
        </p>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
          Find Your Perfect Drive
        </h1>

        <p className="text-base md:text-lg lg:text-xl mb-8 text-white/90">
          Discover our handpicked selection of luxury, sports, and electric
          vehicles. Experience the thrill of driving excellence with AutoDrive.
        </p>

        <Link
          to="/cars"
          className="inline-block bg-white text-black font-semibold px-8 py-3 rounded-full hover:bg-gray-200 transition duration-300"
        >
          Explore Cars
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
