import React, { useState } from 'react';
import products from '../data/products.json';
import { useCart } from '../context/CartContext';

const types = ['all', 'dry', 'oily', 'sensitive', 'combination'];
const bgColors = {
  dry: 'bg-[#FFF3E6]',
  oily: 'bg-[#E6FAF5]',
  sensitive: 'bg-[#FDEDF1]',
  combination: 'bg-[#F0F4FF]',
  default: 'bg-[#F9FBFD]'
};

const ITEMS_PER_PAGE = 9;

const SkinTypeSelector = () => {
  const [selectedType, setSelectedType] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const { addToCart } = useCart();

  const filteredProducts =
    selectedType === 'all'
      ? products
      : products.filter((p) => p.skinType === selectedType);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const changeType = (type) => {
    setSelectedType(type);
    setCurrentPage(1); // reset page when filter changes
  };

  return (
    <section className="bg-white dark:bg-[#0F214D] py-24 px-4 sm:px-6 md:px-12 lg:px-20 transition-colors duration-500">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F214D] dark:text-[#EBFCFF] mb-14">
          Find Products for Your Skin Type
        </h2>

        {/* Filters */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => changeType(type)}
              className={`px-4 py-2 rounded-full border text-sm font-semibold transition duration-300 ring-offset-2 ring-[#0B5FB0] focus:outline-none focus:ring-2 ${
                selectedType === type
                  ? 'bg-[#0B5FB0] text-white shadow-md'
                  : 'border-gray-300 dark:border-gray-500 text-[#0F214D] dark:text-white hover:border-[#0B5FB0]'
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {paginatedProducts.map((product) => {
            const bgColor = bgColors[product.skinType] || bgColors.default;

            return (
              <div
                key={product.id}
                className={`${bgColor} dark:bg-[#1B2B50] rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-5 text-left group`}
              >
                <div className="overflow-hidden rounded-xl mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-xl transform group-hover:scale-105 transition duration-500"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#0F214D] dark:text-white mb-1">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  {product.description}
                </p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-[#0B5FB0] dark:text-[#AAF1FF] font-bold text-base">
                    ${product.price}
                  </span>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-[#0B5FB0] hover:bg-[#2BA3EC] text-white text-sm font-medium px-4 py-2 rounded-full shadow-sm transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex flex-wrap justify-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-9 h-9 rounded-full text-sm font-semibold border transition ${
                  currentPage === i + 1
                    ? 'bg-[#0B5FB0] text-white'
                    : 'border-gray-300 dark:border-gray-500 text-[#0F214D] dark:text-white hover:border-[#0B5FB0]'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SkinTypeSelector;
