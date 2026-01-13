import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/nextgenlogo.png"; // Make sure the path matches your folder structure

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-20 bg-brand-dark/85 backdrop-blur-md border-b border-white/10 z-50 flex items-center">
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO SECTION */}
        {/* Wrapped in Link to redirect to Home on click */}
        <Link to="/" className="flex-shrink-0 cursor-pointer">
          <img 
            src={logo} 
            alt="NextGen Logo" 
            // h-10 (40px) is the standard navbar icon height. 
            // w-auto maintains the aspect ratio automatically.
            className="h-10 w-auto object-contain" 
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8">
          <li>
            <Link
              to="/"
              className="text-white/70 font-medium hover:text-brand-accent transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-white/70 font-medium hover:text-brand-accent transition-colors"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/courses"
              className="text-white/70 font-medium hover:text-brand-accent transition-colors"
            >
              Courses
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white/70 font-medium hover:text-brand-accent transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'} 
        </button>
      </div>

      {/* Mobile Menu Dropdown (Simple implementation) */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-[#0f0e2b] border-b border-white/10 p-6 md:hidden flex flex-col gap-4 shadow-xl">
           <Link to="/" onClick={() => setIsOpen(false)} className="text-white/80 hover:text-brand-accent">Home</Link>
           <Link to="/about" onClick={() => setIsOpen(false)} className="text-white/80 hover:text-brand-accent">About Us</Link>
           <Link to="/courses" onClick={() => setIsOpen(false)} className="text-white/80 hover:text-brand-accent">Courses</Link>
           <Link to="/contact" onClick={() => setIsOpen(false)} className="text-white/80 hover:text-brand-accent">Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;