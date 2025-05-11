import React, { useState } from 'react';
import products from '../data/products.json';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';
import { FaSearch } from 'react-icons/fa';

const types = ['all', 'dry', 'oily', 'sensitive', 'combination'];

const ShopPage = () => {
  const [selectedType, setSelectedType] = useState('all');
  const [sortOrder, setSortOrder] = useState('default');
  const [searchTerm, setSearchTerm] = useState('');
  const { addToCart } = useCart();

  let filteredProducts =
    selectedType === 'all'
      ? products
      : products.filter((p) => p.skinType === selectedType);

  if (searchTerm) {
    filteredProducts = filteredProducts.filter((p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  if (sortOrder === 'asc') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === 'desc') {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <>
      <section className="bg-gradient-to-b from-[#EBFCFF] to-white dark:from-[#0F214D] dark:to-[#142447] py-20 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#0F214D] dark:text-[#EBFCFF] mb-3">
              Shop All Skincare
            </h1>
            <p className="text-[#0F214D] dark:text-gray-300 opacity-80">
              Browse our bestselling skincare made for your unique glow.
            </p>
          </div>

          {/* Toolbar */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-14">
            <div className="flex flex-wrap gap-3">
              {types.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 rounded-full border text-sm font-medium transition duration-300 shadow-sm ${
                    selectedType === type
                      ? 'bg-[#0B5FB0] text-white'
                      : 'border-gray-300 dark:border-gray-500 text-[#0F214D] dark:text-white hover:border-[#0B5FB0]'
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
              {/* Search Input */}
              <div className="relative w-full sm:w-64">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 pl-10 rounded-full border border-gray-300 dark:border-gray-600 dark:bg-[#1B2B50] dark:text-white placeholder-gray-500 dark:placeholder-gray-400 shadow-sm"
                />
                <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
              </div>

              {/* Sorting */}
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 dark:bg-[#1B2B50] dark:text-white shadow-sm"
              >
                <option value="default">Sort by</option>
                <option value="asc">Price: Low to High</option>
                <option value="desc">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white dark:bg-[#1B2B50] rounded-3xl shadow-lg hover:shadow-xl transition p-6 group"
              >
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-52 object-cover rounded-xl transform group-hover:scale-105 transition duration-500"
                  />
                </div>
                <h3 className="text-lg font-semibold text-[#0F214D] dark:text-white mt-4">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  {product.description}
                </p>
                <div className="flex justify-between items-center mt-6">
                  <span className="text-[#0B5FB0] dark:text-[#AAF1FF] font-bold text-md">
                    ${product.price}
                  </span>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-[#0B5FB0] hover:bg-[#2BA3EC] text-white px-5 py-2 text-sm rounded-full font-medium shadow-md transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ShopPage;
