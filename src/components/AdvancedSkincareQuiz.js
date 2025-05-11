import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AdvancedSkincareQuiz = () => {
  const [formData, setFormData] = useState({
    skinType: '',
    concerns: '',
    routineLevel: '',
    preference: '',
    sensitivity: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [response, setResponse] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    setResponse("Loading your personalized skincare plan...");

    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const products = await res.json();

      const plan = `
Hey! Based on what you told me:

🧴 Skin Type: ${formData.skinType}
🌿 Concerns: ${formData.concerns}
🔄 Routine: ${formData.routineLevel}
🌱 Preference: ${formData.preference}
⚠️ Sensitivities: ${formData.sensitivity}

✨ Here's your simple plan:
1. Use "${products[0].title}" to cleanse daily.
2. Apply "${products[1].title}" to treat your concern.
3. Finish with "${products[2].title}" for moisture.

Note: These are demo products — imagine them as custom picks just for your skin 💖
      `;

      setResponse(plan);
    } catch (error) {
      console.error("Error fetching demo plan:", error);
      setResponse("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="bg-[#EBFCFF] dark:bg-[#0F214D] py-24 px-6 md:px-20 transition-colors duration-500">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-[#0F214D] dark:text-[#EBFCFF] mb-10 text-center">
          Personalized Skincare Quiz (AI-powered)
        </h2>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Skin Type */}
            <div>
              <label className="block text-[#0F214D] dark:text-[#EBFCFF] font-medium mb-1">
                What is your skin type?
              </label>
              <select
                name="skinType"
                value={formData.skinType}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-500 bg-white dark:bg-[#1B2B50] text-[#0F214D] dark:text-white"
              >
                <option value="">Select...</option>
                <option value="Dry">Dry</option>
                <option value="Oily">Oily</option>
                <option value="Combination">Combination</option>
                <option value="Sensitive">Sensitive</option>
              </select>
            </div>

            {/* Concerns */}
            <div>
              <label className="block text-[#0F214D] dark:text-[#EBFCFF] font-medium mb-1">
                What are your top skin concerns?
              </label>
              <input
                type="text"
                name="concerns"
                value={formData.concerns}
                onChange={handleChange}
                placeholder="e.g. acne, dryness, dark spots"
                required
                className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-500 bg-white dark:bg-[#1B2B50] text-[#0F214D] dark:text-white"
              />
            </div>

            {/* Routine Level */}
            <div>
              <label className="block text-[#0F214D] dark:text-[#EBFCFF] font-medium mb-1">
                What kind of routine do you prefer?
              </label>
              <select
                name="routineLevel"
                value={formData.routineLevel}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-500 bg-white dark:bg-[#1B2B50] text-[#0F214D] dark:text-white"
              >
                <option value="">Select...</option>
                <option value="Minimalist (2-3 steps)">Minimalist (2–3 steps)</option>
                <option value="Standard (4-5 steps)">Standard (4–5 steps)</option>
                <option value="Full (6+ steps)">Full (6+ steps)</option>
              </select>
            </div>

            {/* Preference */}
            <div>
              <label className="block text-[#0F214D] dark:text-[#EBFCFF] font-medium mb-1">
                Do you prefer natural or science-based ingredients?
              </label>
              <select
                name="preference"
                value={formData.preference}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-500 bg-white dark:bg-[#1B2B50] text-[#0F214D] dark:text-white"
              >
                <option value="">Select...</option>
                <option value="Natural">Natural</option>
                <option value="Science-based">Science-based</option>
                <option value="No preference">No preference</option>
              </select>
            </div>

            {/* Sensitivity */}
            <div>
              <label className="block text-[#0F214D] dark:text-[#EBFCFF] font-medium mb-1">
                Are there any ingredients you’re sensitive to?
              </label>
              <input
                type="text"
                name="sensitivity"
                value={formData.sensitivity}
                onChange={handleChange}
                placeholder="e.g. fragrance, alcohol, parabens"
                className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-500 bg-white dark:bg-[#1B2B50] text-[#0F214D] dark:text-white"
              />
            </div>

            <button
              type="submit"
              className="bg-[#0B5FB0] hover:bg-[#2BA3EC] text-white font-semibold px-6 py-3 rounded-md w-full transition"
            >
              Get My AI-Powered Plan
            </button>
          </form>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white dark:bg-[#1B2B50] p-6 rounded-xl shadow-md text-left"
          >
            <h3 className="text-xl font-semibold text-[#0F214D] dark:text-[#EBFCFF] mb-4">Your Personalized Plan</h3>
            <p className="text-[#0F214D]/80 dark:text-[#D9F3FF] whitespace-pre-line leading-relaxed">
              {response}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default AdvancedSkincareQuiz;
