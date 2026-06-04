import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', link: '/' },
    { name: 'About Us', link: '/about' },
    { name: 'Products', link: '#' },
    { name: 'Projects', link: '#' },
    { name: 'Contact', link: '#' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-10 py-3 md:py-4 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0B0F14]/80 backdrop-blur-md shadow-sm border-b border-gray-800' 
          : 'bg-[#0B0F14] border-b border-transparent' 
      }`}
    >
     
      <div className="flex items-center cursor-pointer ml-0 md:ml-9">
        <img
          src="/assets/logo.png"
          alt="Satek Logo"
          className="h-14 md:h-20 object-contain"
        />
      </div>

      <ul className="hidden md:flex items-center space-x-8 lg:space-x-10">
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link
              to={item.link}
              className={`text-sm font-medium transition-colors duration-200 ${
                location.pathname === item.link
                  ? 'text-[#38B39C]'
                  : 'text-white hover:text-[#38B39C]'
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="hidden md:block">
        <button className="bg-[#38B39C] hover:bg-[#2d917e] text-white text-xs font-bold tracking-wide py-2.5 px-10 rounded-sm transition-colors duration-200">
          KONSULTASI
        </button>
      </div>

      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <div className={`absolute top-full left-0 w-full bg-[#0B0F14] border-b border-gray-800 transition-all duration-300 md:hidden overflow-hidden ${
        isOpen ? 'max-h-screen py-6 px-6 border-t border-gray-800' : 'max-h-0'
      }`}>
        <ul className="flex flex-col space-y-4 mb-6">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.link}
                onClick={() => setIsOpen(false)}
                className={`text-sm font-medium block transition-colors duration-200 ${
                  location.pathname === item.link
                    ? 'text-[#38B39C]'
                    : 'text-white hover:text-[#38B39C]'
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <button className="w-full bg-[#38B39C] hover:bg-[#2d917e] text-white text-xs font-bold tracking-wide py-3 rounded-sm transition-colors duration-200">
          KONSULTASI
        </button>
      </div>

    </nav>
  );
};

export default Navbar;