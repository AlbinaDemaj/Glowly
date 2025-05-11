import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLeaf, FaFlask, FaSmile } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-tr from-[#EBFCFF] via-[#AAF1FF] to-[#EFEDCE] dark:from-[#0F214D] dark:via-[#0B5FB0] dark:to-[#2BA3EC] py-28 px-4 sm:px-6 md:px-16 lg:px-28 xl:px-40 py-52 transition-colors duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 max-w-7xl mx-auto">

        {/* Teksti në të majtë */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 text-center lg:text-left"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#0F214D] dark:text-white leading-tight">
            Feel the <span className="text-[#0B5FB0] dark:text-[#AAF1FF]">Glow</span><br className="hidden sm:block" />
            in Every Drop
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#0F214D] dark:text-[#D9F3FF] max-w-xl mx-auto lg:mx-0 opacity-80">
            Clean, effective skincare designed for real results. Discover a ritual that brings beauty and balance — inside and out.
          </p>

          <div>
            <Link
              to="/shop"
              className="inline-block bg-[#0B5FB0] hover:bg-[#2BA3EC] text-white font-semibold text-md px-8 py-4 rounded-full shadow-md transition duration-300"
            >
              Explore Products
            </Link>
          </div>
        </motion.div>

        {/* Ikonat në të djathtë */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 text-center sm:text-left"
        >
          <div className="flex items-center gap-4 bg-white dark:bg-[#1B2B50] p-4 rounded-xl shadow-md">
            <FaLeaf className="text-[#0B5FB0] text-3xl" />
            <div>
              <p className="font-semibold text-[#0F214D] dark:text-white">Plant-Based</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">Nature meets science</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white dark:bg-[#1B2B50] p-4 rounded-xl shadow-md">
            <FaFlask className="text-[#0B5FB0] text-3xl" />
            <div>
              <p className="font-semibold text-[#0F214D] dark:text-white">Clinically Tested</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">For every skin type</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white dark:bg-[#1B2B50] p-4 rounded-xl shadow-md">
            <FaSmile className="text-[#0B5FB0] text-3xl" />
            <div>
              <p className="font-semibold text-[#0F214D] dark:text-white">100% Happiness</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">Satisfaction guaranteed</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
