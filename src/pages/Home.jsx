import { Settings, Cpu, Wrench, RefreshCw, MessageSquare } from 'lucide-react';

const Home = () => {
  const services = [
    { icon: <Settings />, title: "Pembuatan Mesin Custom", desc: "Mesin dibuat sesuai kebutuhan proses produksi Anda." },
    { icon: <Cpu />, title: "Perakitan Mesin Industri", desc: "Perakitan mesin berkualitas dengan presisi tinggi." },
    { icon: <Wrench />, title: "Maintenance & Perbaikan", desc: "Layanan perawatan dan perbaikan mesin industri." },
    { icon: <RefreshCw />, title: "Modifikasi & Upgrade", desc: "Tingkatkan performa mesin sesuai kebutuhan terbaru." },
    { icon: <MessageSquare />, title: "Konsultasi Engineering", desc: "Konsultasi oleh tim berpengalaman." },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative h-screen bg-[url('/assets/hero.png')] bg-cover bg-center flex items-center px-10">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-2xl text-white">
          <div className="w-16 h-1 bg-primary mb-4"></div>
          <h1 className="text-5xl font-extrabold leading-tight mb-4 uppercase">
            Solusi Mesin <br /> Industri Berkualitas
          </h1>
          <p className="text-gray-200 mb-8">Surya Agung menyediakan layanan pembuatan dan pengembangan mesin sesuai kebutuhan industri Anda dengan kualitas terbaik.</p>
          <div className="flex gap-4">
            <button className="bg-primary px-8 py-3 rounded font-bold">KONSULTASI SEKARANG</button>
            <button className="border border-white px-8 py-3 rounded font-bold hover:bg-white hover:text-black transition">LIHAT PRODUK</button>
          </div>
        </div>
      </section>

      {/* ABOUT BRIEF */}
      <section className="py-20 px-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-primary font-bold text-sm uppercase tracking-widest">Tentang Kami</span>
          <h2 className="text-3xl font-bold mt-2 mb-6">Solusi Mesin untuk Meningkatkan Produktivitas Industri Anda</h2>
          <p className="text-gray-600 mb-8">Surya Agung adalah perusahaan yang bergerak di bidang manufaktur dan pengembangan mesin industri. Kami siap memberikan solusi mesin yang efisien dan tahan lama.</p>
          <button className="bg-primary text-white px-6 py-2 rounded font-bold uppercase text-sm">Selengkapnya</button>
        </div>
        <div className="rounded-lg overflow-hidden shadow-2xl">
          <img src="/about-img.jpg" alt="Workshop" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* LAYANAN KAMI */}
      <section className="bg-gray-50 py-20 px-10 text-center">
        <h2 className="text-3xl font-bold mb-12 uppercase tracking-tight">Layanan Kami</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {services.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition group">
              <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition">{item.icon}</div>
              <h4 className="font-bold text-sm mb-2">{item.title}</h4>
              <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUK UNGGULAN */}
      <section className="py-20 px-10 text-center">
        <h2 className="text-3xl font-bold mb-12 uppercase">Produk Unggulan</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          {['Blade', 'Roller Tronmel', 'Special Bolt', 'Gear'].map((name, i) => (
            <div key={i} className="group relative rounded-xl overflow-hidden shadow-md">
              <img src={`/product-${i+1}.jpg`} alt={name} className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <h4 className="text-white font-bold">{name}</h4>
              </div>
            </div>
          ))}
        </div>
        <button className="bg-primary text-white px-8 py-2 rounded font-bold uppercase text-sm">Lihat Semua Produk</button>
      </section>

      {/* CTA BANNER */}
      <section className="px-10 mb-20">
        <div className="max-w-7xl mx-auto bg-secondary rounded-2xl p-12 flex flex-col md:flex-row justify-between items-center text-white">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Butuh Mesin Sesuai Kebutuhan Industri Anda?</h2>
            <p className="text-gray-400">Hubungi kami sekarang untuk konsultasi gratis dan dapatkan solusi terbaik untuk bisnis Anda.</p>
          </div>
          <button className="bg-primary px-10 py-3 rounded-lg font-bold">HUBUNGI KAMI</button>
        </div>
      </section>
    </div>
  );
};

export default Home;