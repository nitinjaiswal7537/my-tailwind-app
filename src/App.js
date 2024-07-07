import React, { useState } from 'react';
import Topsection from './topsection';
import MiddleSection from './middleSection';
import Bottom from './bottom';
import Footer from './footer';
import { IoMoon, IoSunny, IoMenu, IoClose } from "react-icons/io5";
import logo from './Logo.png';

function App() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={dark ? "dark" : ""}>
      <nav className="w-full flex items-center justify-between py-4 bg-white dark:bg-gray-900">
        <div className="lg:hidden flex items-center ml-4">
          <button onClick={toggleMenu} className="text-gray-800 dark:text-white">
            {menuOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
          </button>
        </div>
        <div className="hidden lg:flex items-center ml-4">
          <img src={logo} alt="Logo" className="h-10 w-30 mr-3" />
        </div>
        <div className={`flex-1 justify-center lg:flex ${menuOpen ? 'flex' : 'hidden'} flex-col lg:flex-row lg:items-center`}>
          <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0  md:space-x-8 lg:space-x-14">
            <li className="lg:hidden flex items-center justify-center">
              <img src={logo} alt="Logo" className="h-10 w-30" />
            </li>
            <li><a href="#" className="text-gray-800 dark:text-white hover:bg-[#4CAF50] hover:text-white px-2 md:px-3 lg:px-4 py-2 rounded">Home</a></li>
            <li><a href="#" className="text-gray-800 dark:text-white hover:bg-[#4CAF50] hover:text-white px-2 md:px-3 lg:px-4 py-2 rounded">Service</a></li>
            <li><a href="#" className="text-gray-800 dark:text-white hover:bg-[#4CAF50] hover:text-white px-2 md:px-3 lg:px-4 py-2 rounded">Feature</a></li>
            <li><a href="#" className="text-gray-800 dark:text-white hover:bg-[#4CAF50] hover:text-white px-2 md:px-3 lg:px-4 py-2 rounded">Product</a></li>
            <li><a href="#" className="text-gray-800 dark:text-white hover:bg-[#4CAF50] hover:text-white px-2 md:px-3 lg:px-4 py-2 rounded">Testimonial</a></li>
            <li><a href="#" className="text-gray-800 dark:text-white hover:bg-[#4CAF50] hover:text-white px-2 md:px-3 lg:px-4 py-2 rounded">FAQ</a></li>
          </ul>
        </div>
        <div className="mr-4 flex items-center space-x-4">
          <button onClick={darkModeHandler}>
            {dark ? <IoSunny className="text-yellow-500" /> : <IoMoon className="text-gray-800" />}
          </button>
          <a href="#" className="text-gray-800 dark:text-white hover:bg-[#4CAF50] hover:text-white px-2 md:px-3 lg:px-4 py-2 rounded">
            Login
          </a>
          <a href="#" className="text-gray-800 dark:text-white hover:bg-[#4CAF50] hover:text-white px-2 md:px-3 lg:px-4 py-2 rounded">
            Sign Up
          </a>
        </div>
      </nav>

      <div className="dark:bg-blue-900">
        <Topsection />
        <MiddleSection />
        <Bottom />
        <Footer />
      </div>
    </div>
  );
}

export default App;
