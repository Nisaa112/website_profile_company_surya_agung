import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/layout/Footer';

export default function App() {
  return (
    <Router>
      <main className="overflow-x-hidden bg-black text-white flex flex-col min-h-screen">
        <Navbar />
        
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        
        <Footer />
      </main>
    </Router>
  );
}