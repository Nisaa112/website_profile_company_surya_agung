import React, { useEffect, useRef, useState } from 'react';
import { Eye, Network, Wrench, Settings, Lightbulb, Atom } from 'lucide-react';

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

const About = () => {
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    setHeaderVisible(true);
  }, []);

  const values = [
    { 
      icon: <Wrench size={28} className="text-[#38B39C]" />, 
      title: "Integritas", 
      desc: "Perakitan mesin berkualitas dengan presisi tinggi." 
    },
    { 
      icon: <Settings size={28} className="text-[#38B39C]" />, 
      title: "Presisi", 
      desc: "Layanan perawatan dan perbaikan mesin industri." 
    },
    { 
      icon: <Lightbulb size={28} className="text-[#38B39C]" />, 
      title: "Inovasi", 
      desc: "Tingkatkan performa mesin sesuai kebutuhan terbaru." 
    },
    { 
      icon: <Atom size={28} className="text-[#38B39C]" />, 
      title: "Kualitas", 
      desc: "Konsultasi oleh tim berpengalaman." 
    },
  ];

  const workshopImages = [
    { name: 'Blade', image: '/assets/blade.jpeg' },
    { name: 'Roller Tronmel', image: '/assets/roller.jpeg' },
    { name: 'Special Bolt', image: '/assets/bolt.jpeg' },
    { name: 'Gear', image: '/assets/gear.jpeg' },
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      
      <section className="relative h-[350px] bg-[url('/assets/hero.png')] bg-cover bg-center flex flex-col justify-center items-center text-center px-6 sm:px-10 pt-24">
        <div className="absolute inset-0 bg-[#0d1015]/80"></div>
        
        <div className={`relative z-10 text-white transition-all duration-1000 transform ${
          headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-3">Tentang kami</h1>
          <p className="text-gray-400 text-sm font-medium">
            <span className="hover:text-[#38B39C] cursor-pointer transition-colors">Home</span> &gt; <span className="text-[#38B39C]">About Us</span>
          </p>
        </div>
      </section>

      <ScrollReveal>
        <section className="py-20 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center bg-white">

          <div className="overflow-hidden rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 w-full">
            <img 
              src="/assets/about.jpeg" 
              alt="Pekerja Surya Agung" 
              className="w-full h-80 sm:h-[380px] object-cover" 
            />
          </div>

          <div className="flex flex-col justify-center text-center lg:text-left items-center lg:items-start">
            <h2 className="text-3xl font-extrabold text-[#0B0F14] mb-6">Tentang Surya Agung</h2>
            <p className="text-gray-500 text-sm sm:text-[16px] leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-gray-500 text-sm sm:text-[16px] leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="w-full bg-[#F8FAFC] py-20 px-6 sm:px-10 lg:px-16 border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            
            <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.03)] p-6 sm:p-10 md:p-14 mb-20">

              <h2 className="text-3xl font-extrabold text-center text-[#0B0F14] mb-12">Visi & Misi</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 border-b border-gray-100 pb-16">

                <div className="border border-gray-100 rounded-2xl p-6 sm:p-8 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col items-start text-left hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gray-50 rounded-xl text-[#0B0F14]">
                      <Eye size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-[#0B0F14]">Visi</h3>
                  </div>
                  <p className="text-gray-500 text-sm sm:text-[15px] leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>

                <div className="border border-gray-100 rounded-2xl p-6 sm:p-8 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col items-start text-left hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gray-50 rounded-xl text-[#0B0F14]">
                      <Network size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-[#0B0F14]">Misi</h3>
                  </div>
                  <ul className="list-disc list-outside pl-5 space-y-3 text-gray-500 text-xs sm:text-[14px] leading-relaxed">
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                    <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                  </ul>
                </div>

              </div>

              <h2 className="text-2xl font-extrabold text-center text-[#0B0F14] mt-16 mb-12 uppercase tracking-wide">
                Nilai Kami
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((val, idx) => (
                  <div 
                    key={idx} 
                    className="bg-white p-6 rounded-xl border border-gray-100 shadow-[0_4px_15px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_25px_rgba(56,179,156,0.1)] hover:border-[#38B39C]/30 hover:-translate-y-1.5 transition-all duration-300 text-center flex flex-col items-center cursor-pointer"
                  >
                    <div className="mb-4 p-3 bg-[#38B39C]/5 rounded-full transition-transform duration-300 group-hover:scale-110">
                      {val.icon}
                    </div>
                    <h4 className="font-bold text-base mb-2 text-[#0B0F14]">{val.title}</h4>
                    <p className="text-gray-400 text-xs leading-relaxed">{val.desc}</p>
                  </div>
                ))}
              </div>

            </div>

            <div className="w-full">
              <h2 className="text-2xl font-extrabold text-center text-[#0B0F14] mb-12 uppercase tracking-wide">
                Workshop Kami
              </h2>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {workshopImages.map((img, idx) => (
                  <div 
                    key={idx} 
                    className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 bg-white h-48 sm:h-64 cursor-pointer"
                  >
                    <img 
                      src={img.image} 
                      alt={img.name} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>
      </ScrollReveal>

    </div>
  );
};

export default About;