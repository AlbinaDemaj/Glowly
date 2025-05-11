import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

const FavoriteProducts = () => {
  const { addToCart } = useCart();

  const favorites = [
    {
      id: 1,
      name: "Gentle Cleanser",
      price: 14.99,
      image: "https://images.pexels.com/photos/24602079/pexels-photo-24602079/free-photo-of-milky-jelly-cleanser-in-droplets.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      description: "Removes dirt & refreshes skin.",
    },
    {
      id: 2,
      name: "Hydrating Serum",
      price: 19.99,
      image: "https://images.pexels.com/photos/20523085/pexels-photo-20523085/free-photo-of-skincare-products-lying-on-a-glass-plate.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      description: "Deep hydration with hyaluronic acid.",
    },
    {
      id: 3,
      name: "Daily Moisturizer",
      price: 12.5,
      image: "https://images.pexels.com/photos/24602068/pexels-photo-24602068/free-photo-of-skin-care-product-photography-with-water.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      description: "Smooth, non-greasy and natural glow.",
    },
    {
      id: 4,
      name: "Face Toner",
      price: 10.0,
      image: "https://tse3.mm.bing.net/th?id=OIP.rFqpA65o6bbIFDEPoqa1sQHaHa&pid=Api",
      description: "Balances skin pH and preps for moisture.",
    }
  ];

  return (
    <section className="bg-[#EBFCFF] dark:bg-[#0F214D] py-24 px-4 sm:px-6 md:px-20 transition-colors duration-500">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F214D] dark:text-[#EBFCFF] mb-14">
          Customer Favorites
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {favorites.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-[#1B2B50] rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-5 text-left group relative"
            >
              

              {/* Image */}
              <div className="overflow-hidden rounded-xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-xl transform group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Text */}
              <h3 className="text-lg sm:text-xl font-semibold text-[#0F214D] dark:text-[#EBFCFF] mt-4">
                {product.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                {product.description}
              </p>

              {/* Bottom */}
              <div className="flex justify-between items-center mt-4">
                <span className="text-[#0B5FB0] dark:text-[#AAF1FF] font-bold text-sm sm:text-base">
                  ${product.price}
                </span>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-[#0B5FB0] hover:bg-[#2BA3EC] text-white px-4 py-1 text-sm rounded-full shadow transition"
                >
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <Link
          to="/shop"
          className="inline-block text-[#0B5FB0] dark:text-[#AAF1FF] font-semibold hover:underline transition text-sm"
        >
          View All Products →
        </Link>
      </div>
    </section>
  );
};

export default FavoriteProducts;
