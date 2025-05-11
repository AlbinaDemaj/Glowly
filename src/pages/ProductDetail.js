import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products.json';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <p className="p-8 text-red-600">Product not found.</p>;

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-10">
        <img src={product.image} alt={product.name} className="w-full md:w-1/2 rounded" />
        <div>
          <h2 className="text-3xl font-bold text-pink-600">{product.name}</h2>
          <p className="mt-2 text-gray-700">{product.description}</p>
          <p className="mt-4 font-semibold text-lg">${product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="mt-4 bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
