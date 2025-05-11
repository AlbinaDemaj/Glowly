import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('theme') === 'dark' || document.documentElement.classList.contains('dark')
  );
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Cart', path: '/cart' },
    { name: 'Routine', path: '/routine' },
  ];

  const toggleDarkMode = () => {
    const isDark = !isDarkMode;
    setIsDarkMode(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', isDark);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <nav className="bg-[#EBFCFF] dark:bg-[#0F214D] border-b border-[#AAF1FF] dark:border-[#2BA3EC] sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-4 flex justify-between items-center">

      <Link
  to="/"
  className="text-2xl sm:text-3xl font-bold tracking-tight font-serif bg-gradient-to-r from-[#0B5FB0] to-[#2BA3EC] dark:from-[#AAF1FF] dark:to-[#5FD0FF] bg-clip-text text-transparent hover:from-white hover:to-white dark:hover:from-white dark:hover:to-white transition duration-300 ease-in-out"
>
  Glowing.
</Link>


        {/* Hamburger for small screens */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-[#0F214D] dark:text-white"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Nav Links (Desktop & Tablet) */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6 text-base font-medium">
            {navItems.map((item, i) => (
              <li key={i}>
                <Link
                  to={item.path}
                  className={`transition duration-200 pb-1 ${
                    location.pathname === item.path
                      ? 'text-[#0B5FB0] dark:text-[#AAF1FF] border-b-2 border-[#0B5FB0] dark:border-[#AAF1FF]'
                      : 'text-[#0F214D] dark:text-[#EBFCFF] hover:text-[#2BA3EC]'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="flex items-center gap-2 px-5 py-2 rounded-full border border-[#0B5FB0] dark:border-[#AAF1FF] text-[#0B5FB0] dark:text-[#AAF1FF] bg-white dark:bg-[#1B2B50] hover:bg-[#0B5FB0]/10 dark:hover:bg-[#AAF1FF]/10 shadow-sm transition"
          >
            {isDarkMode ? (
              <>
                <FaSun className="text-yellow-400" />
                Light
              </>
            ) : (
              <>
                <FaMoon className="text-blue-500" />
                Dark
              </>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-6">
          <ul className="flex flex-col gap-4 text-base font-medium">
            {navItems.map((item, i) => (
              <li key={i}>
                <Link
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={`block transition ${
                    location.pathname === item.path
                      ? 'text-[#0B5FB0] dark:text-[#AAF1FF]'
                      : 'text-[#0F214D] dark:text-white hover:text-[#2BA3EC]'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <button
                onClick={() => {
                  toggleDarkMode();
                  setMenuOpen(false);
                }}
                className="w-full flex items-center gap-2 justify-center px-5 py-2 rounded-full border border-[#0B5FB0] dark:border-[#AAF1FF] text-[#0B5FB0] dark:text-[#AAF1FF] bg-white dark:bg-[#1B2B50] hover:bg-[#0B5FB0]/10 dark:hover:bg-[#AAF1FF]/10 transition"
              >
                {isDarkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-blue-500" />}
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
