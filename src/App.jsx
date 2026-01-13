import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

// --- TEMPORARY COMPONENT ---
// This prevents blank screens for pages you haven't built yet
const ComingSoon = ({ title }) => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
    <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
    <p className="text-white/60">We are currently building this page. Check back later!</p>
  </div>
);

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />

      <main className="flex-grow">
        <Routes>
          {/* Main Home Route */}
          <Route path="/" element={<Home />} />
          
          {/* Also handle /home just in case */}
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;