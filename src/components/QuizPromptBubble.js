import React, { useState, useEffect } from 'react';
import { FaRegCommentDots } from 'react-icons/fa';
import AdvancedSkincareQuiz from './AdvancedSkincareQuiz';

const QuizPromptBubble = () => {
  const [visible, setVisible] = useState(true);
  const [openQuiz, setOpenQuiz] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible && !openQuiz) return null;

  return (
    <>
      {/* Flluska që shfaqet fillimisht */}
      {!openQuiz && (
        <div className="hidden sm:block fixed bottom-6 right-6 z-50">
          <div
            onClick={() => setOpenQuiz(true)}
            className="cursor-pointer bg-[#0B5FB0] text-white px-5 py-4 rounded-2xl shadow-lg max-w-xs flex items-start gap-3 animate-bounce hover:shadow-xl transition"
          >
            <FaRegCommentDots className="text-2xl mt-1" />
            <div>
              <p className="text-sm">Want to find the perfect skincare products?</p>
              <span className="underline text-sm font-medium hover:text-[#AAF1FF] transition">
                Take our mini quiz →
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Modal Quiz */}
      {openQuiz && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#1B2B50] max-w-3xl w-full rounded-2xl shadow-lg p-6 relative overflow-y-auto max-h-[90vh] transition-colors duration-300">
            <button
              onClick={() => setOpenQuiz(false)}
              className="absolute top-3 right-4 text-2xl font-bold text-[#0F214D] dark:text-[#EBFCFF] hover:text-[#2BA3EC]"
            >
              &times;
            </button>
            <AdvancedSkincareQuiz />
          </div>
        </div>
      )}
    </>
  );
};

export default QuizPromptBubble;
