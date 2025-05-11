import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SubscribeSection = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === '') return;

    const savedEmails = JSON.parse(localStorage.getItem('subscribers') || '[]');
    savedEmails.push(email);
    localStorage.setItem('subscribers', JSON.stringify(savedEmails));

    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="bg-gradient-to-tr from-[#EBFCFF] via-[#EAF7F9] to-[#EFEDCE] dark:from-[#0F214D] dark:via-[#193465] dark:to-[#132B4C] py-28 px-6 md:px-20 transition-colors duration-500">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold text-[#0F214D] dark:text-white mb-4"
        >
          Join the Glow Gang 💌
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-[#0F214D] dark:text-[#D9F3FF] opacity-80 text-base md:text-lg mb-8"
        >
          Subscribe and enjoy 10% off your first order + skincare tips in your inbox.
        </motion.p>

        {!submitted ? (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full sm:w-80 px-5 py-3 rounded-full border border-gray-300 dark:border-[#2C4A75] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0B5FB0] dark:bg-[#1B2B50] dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition"
            />
            <button
              type="submit"
              className="bg-[#0B5FB0] hover:bg-[#2BA3EC] text-white px-6 py-3 rounded-full font-semibold shadow-lg transition duration-300"
            >
              Subscribe
            </button>
          </motion.form>
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-green-600 dark:text-green-400 font-semibold text-lg mt-4"
          >
            Thank you for subscribing! 🥰
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default SubscribeSection;
