import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const CTASection = () => {
  return (
    <section className="bg-gradient-to-tr from-[#EBFCFF] via-[#AAF1FF] to-[#EFEDCE] dark:from-[#0F214D] dark:via-[#0B5FB0] dark:to-[#2BA3EC] py-32 px-6 md:px-20 transition-colors duration-500">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <div className="flex justify-center items-center gap-3 text-[#0B5FB0] dark:text-[#AAF1FF] text-3xl">
          <FaStar />
          <FaStar />
          <FaStar />
        </div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F214D] dark:text-[#EBFCFF]">
          Ready to Glow?
        </h2>

        <p className="text-[#0F214D] dark:text-[#D9F3FF] text-lg max-w-2xl mx-auto opacity-80">
          Discover skincare that works — clean, gentle, and made for your glow goals. Start your journey today!
        </p>

        <Link
          to="/shop"
          className="inline-block bg-[#0B5FB0] hover:bg-[#2BA3EC] text-white px-10 py-4 rounded-full text-lg font-semibold shadow-md transition"
        >
          Explore Shop
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
