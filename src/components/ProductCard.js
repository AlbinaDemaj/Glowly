import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="border border-gray-200 dark:border-gray-600 rounded-lg shadow-md hover:shadow-lg transition-all p-4 bg-white dark:bg-[#1B2B50]">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded hover:scale-105 transition-transform duration-300"
        />
      </Link>

      <h3 className="text-xl font-semibold mt-4 text-gray-800 dark:text-white">
        <Link
          to={`/product/${product.id}`}
          className="hover:text-pink-500 dark:hover:text-pink-400"
        >
          {product.name}
        </Link>
      </h3>

      <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
        {product.description}
      </p>

      <div className="mt-4 flex justify-between items-center">
        <span className="text-pink-600 dark:text-pink-400 font-bold">
          ${product.price}
        </span>
        <button
          onClick={() => addToCart(product)}
          className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-1 rounded text-sm transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

