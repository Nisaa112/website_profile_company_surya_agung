import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8 px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <img src="/logo-satek.png" alt="Logo" className="h-12 mb-4" />
          <p className="text-gray-400 text-sm">Surya Agung adalah perusahaan manufaktur dan pengembangan mesin industri yang efisien dan tahan lama.</p>
          <div className="flex gap-4 mt-4 text-primary">
             <Facebook size={20} /> <Instagram size={20} /> <Twitter size={20} />
          </div>
        </div>
        
        <div>
          <h4 className="font-bold mb-4">Navigasi</h4>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li>Home</li><li>About Us</li><li>Products</li><li>Projects</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Layanan</h4>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li>Pembuatan Mesin Custom</li><li>Perakitan Mesin</li><li>Maintenance</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Kontak</h4>
          <ul className="text-gray-400 space-y-3 text-sm">
            <li className="flex gap-2"><MapPin size={18} className="text-primary" /> Jalan Aria Cikondang, Cianjur</li>
            <li className="flex gap-2"><Phone size={18} className="text-primary" /> +62 8123 4567 891</li>
            <li className="flex gap-2"><Mail size={18} className="text-primary" /> suryaagung@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-xs">
        © 2026 Surya Agung. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;