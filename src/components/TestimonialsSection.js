import React from 'react';

const testimonials = [
  {
    name: "Elira D.",
    text: "My skin has never felt softer and looked so radiant. Absolutely obsessed!",
    image: "https://images.pexels.com/photos/6560346/pexels-photo-6560346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Arta K.",
    text: "As someone with sensitive skin, I finally found products that calm and restore.",
    image: "https://images.pexels.com/photos/7010950/pexels-photo-7010950.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    name: "Megi H.",
    text: "This brand delivers everything it promises. The glow is real.",
    image: "https://images.pexels.com/photos/6619475/pexels-photo-6619475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-32 px-6 md:px-20 bg-gradient-to-br from-[#EBFCFF] via-[#EAF7F9] to-white dark:from-[#0F214D] dark:via-[#193465] dark:to-[#142447] transition-colors duration-500">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0F214D] dark:text-[#EBFCFF] mb-20">
         Real People, Real Results
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="bg-white dark:bg-[#1B2B50] rounded-3xl p-8 shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition duration-300"
            >
              <div className="flex flex-col items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#0B5FB0] dark:border-[#AAF1FF]"
                />
                <p className="text-sm italic text-[#0F214D] dark:text-gray-200 leading-relaxed text-center">
                  “{item.text}”
                </p>
                <span className="text-sm font-medium text-[#0B5FB0] dark:text-[#AAF1FF] mt-2">
                  {item.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
