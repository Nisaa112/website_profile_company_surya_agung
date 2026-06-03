import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-black/20 backdrop-blur-sm text-white py-4 px-10 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <img src="/logo-satek.png" alt="Satek Logo" className="h-10" />
      </div>
      
      <ul className="hidden md:flex gap-8 font-medium">
        <li><Link to="/" className="text-primary border-b-2 border-primary">Home</Link></li>
        <li><Link to="/about" className="hover:text-primary transition">About Us</Link></li>
        <li><Link to="/products" className="hover:text-primary transition">Products</Link></li>
        <li><Link to="/projects" className="hover:text-primary transition">Projects</Link></li>
        <li><Link to="/contact" className="hover:text-primary transition">Contact</Link></li>
      </ul>

      <button className="bg-primary hover:bg-opacity-90 px-6 py-2 rounded text-white font-bold transition">
        KONSULTASI
      </button>
    </nav>
  );
};

export default Navbar;