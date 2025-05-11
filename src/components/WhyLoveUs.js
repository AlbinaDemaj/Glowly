import React from 'react';
import { FaLeaf, FaFlask, FaSmile } from 'react-icons/fa';

const features = [
  {
    icon: <FaLeaf />,
    title: 'Plant-Based Goodness',
    desc: 'Gentle, natural ingredients crafted to nurture and refresh your skin without compromise.',
    bg: 'bg-[#EBFCFF] dark:bg-[#1D3557]',
  },
  {
    icon: <FaFlask />,
    title: 'Clinically Tested',
    desc: 'Every formula is tested by dermatologists for safety and effectiveness on sensitive skin.',
    bg: 'bg-[#EFEDCE] dark:bg-[#2B3C4F]',
  },
  {
    icon: <FaSmile />,
    title: 'Glow Guarantee',
    desc: 'Love your skin or get your money back within 30 days. No stress, just glow.',
    bg: 'bg-[#AAF1FF] dark:bg-[#234E70]',
  },
];

const WhyLoveUs = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-white dark:bg-[#0F214D] transition-colors duration-500">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-[#0F214D] dark:text-[#EBFCFF] mb-16">
          Why You'll Love Shopping With Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {features.map((item, i) => (
            <div
              key={i}
              className={`rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${item.bg}`}
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white dark:bg-[#0F214D] shadow-inner mx-auto mb-5 text-3xl text-[#0B5FB0] dark:text-[#AAF1FF]">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0F214D] dark:text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyLoveUs;
