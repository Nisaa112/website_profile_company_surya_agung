import React, { useEffect, useRef, useState } from 'react';
import { Settings, Cpu, Wrench, RefreshCw, MessageSquare } from 'lucide-react';

const ScrollReveal = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, { threshold: 0.1 });

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {children}
    </div>
  );
};

const Home = () => {
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    setHeroVisible(true);
  }, []);

  const services = [
    { icon: <Settings />, title: "Pembuatan Mesin Custom", desc: "Mesin dibuat sesuai kebutuhan proses produksi Anda." },
    { icon: <Cpu />, title: "Perakitan Mesin Industri", desc: "Perakitan mesin berkualitas dengan presisi tinggi." },
    { icon: <Wrench />, title: "Maintenance & Perbaikan", desc: "Layanan perawatan dan perbaikan mesin industri." },
    { icon: <RefreshCw />, title: "Modifikasi & Upgrade", desc: "Tingkatkan performa mesin sesuai kebutuhan terbaru." },
    { icon: <MessageSquare />, title: "Konsultasi Engineering", desc: "Konsultasi oleh tim berpengalaman." },
  ];

  const products = [
    { name: 'Blade', image: '/assets/blade.jpeg' },
    { name: 'Roller Tronmel', image: '/assets/roller.jpeg' },
    { name: 'Special Bolt', image: '/assets/bolt.jpeg' },
    { name: 'Gear', image: '/assets/gear.jpeg' },
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      
      {/* HERO SECTION */}
      <section className="relative w-full min-h-screen bg-[url('/assets/hero.png')] bg-cover bg-center flex flex-col justify-between">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1015]/95 via-[#0d1015]/60 to-transparent pointer-events-none"></div>

        <div className={`relative z-10 max-w-3xl text-white px-6 sm:px-10 lg:px-16 flex-1 flex flex-col justify-center pt-24 transition-all duration-1000 transform ${
          heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="w-24 h-1.5 bg-[#38B39C] mb-6 mt-10 rounded-full"></div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold leading-[1.1] mb-7 tracking-tight">
            SOLUSI MESIN <br className="hidden sm:block" /> INDUSTRI BERKUALITAS
          </h1>

          <p className="text-gray-200 mb-10 text-base sm:text-lg leading-relaxed max-w-xl">
            Surya Agung menyediakan layanan pembuatan dan pengembangan mesin sesuai kebutuhan industri Anda dengan kualitas terbaik dan harga kompetitif.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#38B39C] hover:bg-[#2d917e] hover:-translate-y-0.5 active:scale-95 shadow-md hover:shadow-lg px-8 py-3.5 rounded-sm font-bold text-xs tracking-wider transition-all duration-200">
              KONSULTASI SEKARANG
            </button>
            <button className="border border-white hover:bg-white hover:text-black hover:-translate-y-0.5 active:scale-95 px-8 py-3.5 rounded-sm font-bold text-xs tracking-wider transition-all duration-200">
              LIHAT PRODUK
            </button>
          </div>
        </div>

        <div className="relative z-20 w-full bg-[#0B0F14]/40 border-t border-gray-800/50 py-8 px-6 sm:px-10 backdrop-blur-md">
          <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 justify-between items-center">
            
            {/* 1. Engineering Solution */}
            <div className="flex items-center gap-4 w-full justify-start">
              <div className="text-[#38B39C] flex-shrink-0">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3"/><ellipse cx="12" cy="12" rx="9" ry="3" transform="rotate(45 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3" transform="rotate(-45 12 12)"/>
                </svg>
              </div>
              <span className="text-white text-xs sm:text-sm font-medium leading-snug">Engineering <br /> Solution</span>
            </div>

            {/* 2. Custom Machine */}
            <div className="flex items-center gap-4 w-full justify-start">
              <div className="text-[#38B39C] flex-shrink-0">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                </svg>
              </div>
              <span className="text-white text-xs sm:text-sm font-medium leading-snug">Custom <br /> Machine</span>
            </div>

            {/* 3. Industrial Support */}
            <div className="flex items-center gap-4 w-full justify-start">
              <div className="text-[#38B39C] flex-shrink-0">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="17" cy="7" r="3"/><circle cx="7" cy="17" r="3"/><circle cx="17" cy="17" r="3"/><path d="M17 10v4"/><path d="M9.5 14.5l5-5"/>
                </svg>
              </div>
              <span className="text-white text-xs sm:text-sm font-medium leading-snug">Industrial <br /> Support</span>
            </div>

            {/* 4. High Quality Manufacturing */}
            <div className="flex items-center gap-4 w-full justify-start">
              <div className="text-[#38B39C] flex-shrink-0">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="6" width="18" height="12" rx="2"/><path d="M7 10v4" /><path d="M7 12h3" /><path d="M10 10v4" /><path d="M14 10v4c0 1.5 2 1.5 2 1.5s2 0 2-1.5v-4c0-1.5-2-1.5-2-1.5s-2 0-2 1.5z" /><path d="M16 13l1.5 2" />
                </svg>
              </div>
              <span className="text-white text-xs sm:text-sm font-medium leading-snug">High Quality <br /> Manufacturing</span>
            </div>

          </div>
        </div>
      </section>
      
      {/* ABOUT BRIEF */}
      <ScrollReveal>
        <section className="w-full bg-[#F8FAFC] py-20 md:py-28 px-6 sm:px-10 lg:px-16"> 
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <span className="text-gray-800 font-bold text-sm uppercase tracking-widest mb-4">
                Tentang Kami
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0B0F14] leading-[1.2] mb-6">
                Solusi Mesin untuk Meningkatkan Produktivitas Industri Anda
              </h2>
              <p className="text-gray-500 text-base sm:text-[17px] leading-relaxed mb-8 lg:pr-10">
                Surya Agung adalah perusahaan yang bergerak di bidang manufaktur dan pengembangan mesin industri. Kami siap memberikan solusi mesin yang efisien, tahan lama, dan sesuai dengan kebutuhan industri Anda.
              </p>
              <button className="bg-[#38B39C] hover:bg-[#2d917e] hover:-translate-y-0.5 active:scale-95 shadow-md hover:shadow-lg text-white px-8 py-3.5 rounded-sm font-bold uppercase text-xs tracking-wider transition-all duration-300">
                SELENGKAPNYA
              </button>
            </div>

            <div className="w-full">
              <img 
                src="/assets/workshop.png" 
                alt="Pekerja Workshop Surya Agung" 
                className="w-full h-auto object-cover rounded-xl shadow-sm border border-gray-100"
              />
            </div>

          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="bg-white py-20 px-6 sm:px-10 lg:px-16 text-center">
          <h2 className="text-3xl font-extrabold mb-16 uppercase tracking-tight text-[#0B0F14]">Layanan Kami</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {services.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white p-8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_30px_rgba(56,179,156,0.12)] hover:border-[#38B39C]/30 hover:-translate-y-2 transition-all duration-300 group border border-gray-100 cursor-pointer"
              >
                <div className="text-[#38B39C] mb-4 flex justify-center group-hover:scale-110 transition duration-300">{item.icon}</div>
                <h4 className="font-bold text-sm mb-2 text-[#0B0F14]">{item.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20 px-6 sm:px-10 lg:px-16 text-center bg-white">
          <h2 className="text-3xl font-extrabold mb-12 uppercase text-[#0B0F14]">Produk Unggulan</h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto mb-12">
            {products.map((item, i) => (
              <div key={i} className="group flex flex-col items-start text-left rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-md border border-gray-100 cursor-pointer bg-white transition-all duration-300">

                <div className="relative w-full h-48 sm:h-56 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
                </div>
          
                <div className="bg-white px-4 sm:px-6 pb-6 pt-2 relative z-10 flex-grow">
                  <h4 className="text-[#0B0F14] font-bold text-base sm:text-lg group-hover:text-[#38B39C] transition-colors duration-200">{item.name}</h4>
                </div>

              </div>
            ))}
          </div>
          
          <button className="bg-[#38B39C] hover:bg-[#2d917e] hover:-translate-y-0.5 active:scale-95 text-white px-8 py-3.5 rounded-sm font-bold uppercase text-sm transition-all duration-300 shadow-md shadow-[#38B39C]/20">
            LIHAT SEMUA PRODUK
          </button>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="px-6 sm:px-10 py-20 bg-white">
          <div className="max-w-7xl mx-auto bg-gradient-to-r from-[#0d1015] to-[#121820] rounded-2xl p-8 sm:p-12 flex flex-col lg:flex-row justify-between items-center text-white border border-gray-800 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#38B39C]/10 rounded-full blur-3xl"></div>
    
            <div className="text-center lg:text-left mb-6 lg:mb-0 relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3">Butuh Mesin Sesuai Kebutuhan Industri Anda?</h2>
              <p className="text-gray-400 text-sm sm:text-base max-w-2xl">Hubungi kami sekarang untuk konsultasi gratis dan dapatkan solusi mesin terbaik dengan efisiensi tinggi untuk bisnis Anda.</p>
            </div>
            
            <button className="bg-[#38B39C] hover:bg-[#2d917e] hover:-translate-y-0.5 active:scale-95 px-10 py-4 rounded-sm font-bold tracking-wider relative z-10 transition-all duration-300 whitespace-nowrap text-sm">
              HUBUNGI KAMI
            </button>
          </div>
        </section>
      </ScrollReveal>
      
    </div>
  );
};

export default Home;