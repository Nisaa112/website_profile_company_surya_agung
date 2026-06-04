import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0B0F14] pt-20 pb-8 px-6 md:px-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">
          
          <div>
            <img 
              src="/assets/logo2.png" 
              alt="Satek Surya Agung Teknik" 
              className="h-16 md:h-21 object-contain mb-6" 
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-8 pr-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </p>

            <div className="flex items-center gap-5">
              
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>

            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Navigasi</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Products', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-[#38B39C] text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Layanan</h4>
            <ul className="space-y-4">
              {[
                'Pembuatan Mesin Custom', 
                'Perakitan Mesin Industri', 
                'Maintenance & Perbaikan', 
                'Modifikasi Mesin', 
                'Konsultasi Engineering'
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-[#38B39C] text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Kontak</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <MapPin size={20} className="text-[#38B39C] flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={20} className="text-[#38B39C] flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  +62 8123 4567 891
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={20} className="text-[#38B39C] flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  suryaagung@gmail.com
                </span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2026 Surya Agung. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;