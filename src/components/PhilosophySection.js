import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaRecycle, FaHeart } from 'react-icons/fa';

const cards = [
  {
    icon: <FaLeaf />,
    title: 'Clean Ingredients',
    desc: 'We use only skin-safe, gentle ingredients backed by science and nature.',
  },
  {
    icon: <FaHeart />,
    title: 'Cruelty Free',
    desc: 'Our products are never tested on animals — and never will be.',
  },
  {
    icon: <FaRecycle />,
    title: 'Eco-Friendly',
    desc: 'Sustainable packaging to protect both your skin and the planet.',
  }
];

const PhilosophySection = () => {
  return (
    <section className="bg-[#EBFCFF] dark:bg-[#0F214D] py-24 px-4 sm:px-6 md:px-12 lg:px-20 transition-colors duration-500">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F214D] dark:text-[#EBFCFF] mb-16">
          Our Philosophy
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-white dark:bg-[#1B2B50] p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#AAF1FF] to-[#0B5FB0] flex items-center justify-center text-white text-2xl shadow-md mb-6">
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#0F214D] dark:text-[#EBFCFF] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-[#0F214D]/80 dark:text-gray-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
