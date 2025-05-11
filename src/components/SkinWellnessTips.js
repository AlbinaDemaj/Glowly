import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const blogTips = [
  {
    id: 1,
    title: "5 Mistakes You're Making in Your Skincare Routine",
    excerpt:
      "Are you cleansing too much? Skipping SPF? Discover the top 5 common skincare mistakes and how to fix them for healthier skin.",
    link: "/blog/5-mistakes",
  },
  {
    id: 2,
    title: "How to Layer Skincare Products Properly",
    excerpt:
      "Confused about what comes first — serum or moisturizer? This guide walks you through the correct layering technique.",
    link: "/blog/layering-guide",
  },
  {
    id: 3,
    title: "Morning vs Night Routine: What’s the Difference?",
    excerpt:
      "Your skin has different needs throughout the day. Learn what to use in the morning vs at night for maximum results.",
    link: "/blog/morning-vs-night",
  },
];

const SkinWellnessTips = () => {
  return (
    <section className="bg-gradient-to-br from-[#EBFCFF] via-[#AAF1FF] to-[#EFEDCE] dark:from-[#0F214D] dark:via-[#0B5FB0] dark:to-[#2BA3EC] py-24 px-4 sm:px-6 md:px-12 lg:px-20 transition-colors duration-500">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F214D] dark:text-white mb-14"
        >
          Skin Wellness Tips
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 text-left">
          {blogTips.map((tip, i) => (
            <motion.div
              key={tip.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="bg-white dark:bg-[#1B2B50] rounded-xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-[#0F214D] dark:text-[#AAF1FF] mb-3 leading-snug">
                {tip.title}
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-5 leading-relaxed">
                {tip.excerpt}
              </p>
              <Link
                to={tip.link}
                className="inline-block text-[#0B5FB0] dark:text-[#AAF1FF] text-sm font-medium hover:underline"
              >
                Read more →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkinWellnessTips;
