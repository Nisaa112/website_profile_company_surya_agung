import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
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
      className={`fixed top-0 left-0 z-50 w-full flex items-center justify-between px-10 py-4 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0B0F14]/80 backdrop-blur-md shadow-sm border-b border-gray-800' 
          : 'bg-[#0B0F14] border-b border-transparent' 
      }`}
    >
     
      <div className="flex items-center cursor-pointer ml-9">
        <img
          src="/assets/logo.png"
          alt="Satek Logo"
          className="h-20 object-contain"
        />
      </div>

      <ul className="flex items-center space-x-10">
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

      <div>
        <button className="bg-[#38B39C] hover:bg-[#2d917e] text-white text-xs font-bold tracking-wide py-2.5 px-10 rounded-sm transition-colors duration-200">
          KONSULTASI
        </button>
      </div>

    </nav>
  );
};

export default Navbar;