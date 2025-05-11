import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const total = cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  return (
    <section className="bg-gradient-to-b from-[#EBFCFF] to-white dark:from-[#0F214D] dark:to-[#142447] py-20 px-6 md:px-20 min-h-screen transition-colors duration-500">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-[#0F214D] dark:text-[#EBFCFF] text-center mb-10">
          Your Skincare Cart 🛒
        </h2>

        {cartItems.length === 0 ? (
          <div className="text-center text-[#0F214D] dark:text-white">
            <p className="text-lg mb-4">Your cart is currently empty.</p>
            <Link
              to="/shop"
              className="inline-block bg-[#0B5FB0] hover:bg-[#2BA3EC] text-white px-6 py-2 rounded-full font-medium transition"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <>
            <div className="space-y-6 mb-10">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-6 bg-white dark:bg-[#1B2B50] p-4 rounded-2xl shadow-sm"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-xl"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-[#0F214D] dark:text-white">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-300">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 font-medium"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="text-right">
              <p className="text-xl font-bold text-[#0F214D] dark:text-[#EBFCFF] mb-6">
                Total: ${total}
              </p>
              <div className="flex flex-col sm:flex-row justify-end gap-4">
                <button
                  onClick={clearCart}
                  className="bg-red-100 hover:bg-red-200 text-red-600 px-6 py-2 rounded-full font-medium transition"
                >
                  Clear Cart
                </button>
                <button
                  className="bg-[#0B5FB0] hover:bg-[#2BA3EC] text-white px-6 py-2 rounded-full font-semibold transition"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default CartPage;
