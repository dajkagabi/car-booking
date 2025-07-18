import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import HistoryIcon from '@mui/icons-material/History';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import tesla from "../../assets/tesla.png";
import ranger from "../../assets/rangers.png";
import porsche from "../../assets/porsche.png";
import aboutBackground from '../../assets/img.jpg';

const About = () => {
  const { scrollYProgress } = useScroll();

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <div className="relative h-[400px] md:h-[600px] overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${aboutBackground})`,
            y: backgroundY,
          }}
        />
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-white text-center px-4">
          <div className="max-w-2xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-wider mb-2 text-[#009689]">
              WHO WE ARE
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Driving Passion, Delivering Excellence
            </h1>
            <p className="text-xl">
              Your journey to the perfect car starts here.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-16">
          <div className="md:w-1/2 text-center md:text-left">
            <HistoryIcon style={{ fontSize: 60, color: '#009689' }} className="mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Founded on a deep-rooted passion for automotive excellence,
              our journey began with a simple idea: to create a curated space
              where discerning enthusiasts can find exceptional vehicles.
              From humble beginnings, we have grown into a trusted name,
              built on a foundation of integrity, expertise, and a genuine love for cars.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={tesla}
              alt="Our Story"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12 mb-16">
          <div className="md:w-1/2 text-center md:text-left">
            <StarBorderRoundedIcon style={{ fontSize: 60, color: '#009689' }} className="mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              We stand for unparalleled quality, transparent dealings, and a customer-centric approach.
              Every vehicle in our collection undergoes rigorous inspection, ensuring
              it meets our high standards. We believe in building lasting relationships,
              driven by trust and mutual respect. Your satisfaction is our highest priority.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={porsche}
              alt="Our Values"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <DirectionsCarIcon style={{ fontSize: 60, color: '#009689' }} className="mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Commitment</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our commitment extends beyond just selling cars. We're here to guide you
              through every step of the process, offering expert advice and personalized service.
              Whether you're looking for an everyday drive, a high-performance machine,
              or a timeless collector's piece, we are dedicated to helping you find the perfect match.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={ranger}
              alt="Our Commitment"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-6">Ready to find your dream car?</p>
          <a
            href="/cars"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#009689] hover:bg-[#00796B] transition duration-300 ease-in-out"
          >
            Explore Our Cars
            <DirectionsCarIcon className="ml-3 -mr-1 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;