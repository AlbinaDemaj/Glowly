import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com'; // Ensure you've installed emailjs-com

const initialProducts = [
  { id: '1', name: 'Gentle Cleanser', step: 'Cleanser' },
  { id: '2', name: 'Soothing Toner', step: 'Toner' },
  { id: '3', name: 'Hydrating Serum', step: 'Serum' },
  { id: '4', name: 'Daily Moisturizer', step: 'Moisturizer' },
  { id: '5', name: 'SPF 50 Sunscreen', step: 'SPF' },
  { id: '6', name: 'Night Repair Cream', step: 'Night Cream' },
  { id: '7', name: 'Eye Cream', step: 'Eye Cream' },
  { id: '8', name: 'Exfoliating Toner', step: 'Exfoliant' },
  { id: '9', name: 'Brightening Serum', step: 'Brightening' },
  { id: '10', name: 'Sleeping Mask', step: 'Mask' },
];

const RoutineBuilder = () => {
  const [routineType, setRoutineType] = useState('morning');
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(`routine_${routineType}`)) || [];
    setSelectedProducts(saved);
  }, [routineType]);

  useEffect(() => {
    localStorage.setItem(`routine_${routineType}`, JSON.stringify(selectedProducts));
  }, [selectedProducts, routineType]);

  const handleToggle = (product) => {
    const exists = selectedProducts.find((p) => p.id === product.id);
    if (exists) {
      setSelectedProducts(selectedProducts.filter((p) => p.id !== product.id));
    } else {
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  const clearRoutine = () => {
    setSelectedProducts([]);
    localStorage.removeItem(`routine_${routineType}`);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const routineList = selectedProducts.map((p) => `${p.step}: ${p.name}`).join("\n");

    emailjs.send(
      'your_service_id',
      'your_template_id',
      {
        to_email: email,
        message: routineList,
        routine_type: routineType,
      },
      'your_user_id_or_public_key'
    ).then(() => {
      alert('Routine sent successfully!');
      setEmail('');
    }).catch((error) => {
      console.error('Email send error:', error);
      alert('Something went wrong!');
    });
  };

  return (
    <section className="bg-gradient-to-b from-[#EBFCFF] to-white dark:from-[#0F214D] dark:to-[#142447] py-20 px-6 md:px-20 min-h-screen">
      <h2 className="text-4xl font-bold text-center text-[#0F214D] dark:text-[#EBFCFF] mb-10">
        Build Your {routineType === 'morning' ? 'Morning' : 'Night'} Skincare Routine 🧴
      </h2>

      <div className="flex justify-center gap-4 mb-10">
        {['morning', 'night'].map((type) => (
          <button
            key={type}
            onClick={() => setRoutineType(type)}
            className={`px-6 py-2 rounded-full font-semibold transition duration-300 shadow-sm ${
              routineType === type
                ? 'bg-[#0B5FB0] text-white'
                : 'bg-white dark:bg-[#1B2B50] text-[#0F214D] dark:text-white border border-gray-300'
            }`}
          >
            {type === 'morning' ? '🌞 Morning' : '🌙 Night'}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white/70 dark:bg-[#1B2B50]/60 p-6 rounded-2xl shadow">
          <h3 className="text-xl font-semibold text-[#0F214D] dark:text-white mb-4">Select Products</h3>
          {initialProducts.map((product) => (
            <label key={product.id} className="flex items-center gap-3 mb-3">
              <input
                type="checkbox"
                checked={selectedProducts.some((p) => p.id === product.id)}
                onChange={() => handleToggle(product)}
                className="accent-[#0B5FB0]"
              />
              <span className="text-[#0F214D] dark:text-white">
                <strong>{product.step}</strong>: {product.name}
              </span>
            </label>
          ))}
        </div>

        <div className="bg-white/70 dark:bg-[#1B2B50]/60 p-6 rounded-2xl shadow">
          <h3 className="text-xl font-semibold text-[#0F214D] dark:text-white mb-4">Your Routine ({selectedProducts.length})</h3>
          {selectedProducts.length === 0 ? (
            <p className="text-sm text-gray-400 dark:text-gray-500 italic">No products selected yet.</p>
          ) : (
            <ul className="list-disc ml-4 text-[#0F214D] dark:text-white">
              {selectedProducts.map((product) => (
                <li key={product.id} className="mb-2">
                  <strong>{product.step}</strong>: {product.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <form onSubmit={sendEmail} className="mt-10 max-w-lg mx-auto text-center">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-full border border-gray-300 dark:border-gray-600 dark:bg-[#1B2B50] dark:text-white mb-4"
        />
        <button
          type="submit"
          className="bg-[#0B5FB0] hover:bg-[#2BA3EC] text-white px-6 py-3 rounded-full font-semibold"
        >
          Send Routine to Email
        </button>
      </form>

      <div className="mt-6 text-center">
        <button
          onClick={clearRoutine}
          className="bg-red-100 text-red-700 hover:bg-red-200 px-6 py-3 rounded-full font-semibold transition"
        >
          Clear Routine
        </button>
      </div>
    </section>
  );
};

export default RoutineBuilder;
