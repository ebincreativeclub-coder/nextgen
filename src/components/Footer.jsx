import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/nextgenlogo.png'; // Ensure path matches your folder structure

const Footer = () => {
  return (
    <footer className="bg-[#0f0e2b] text-white pt-20 relative overflow-hidden z-50">
      
      {/* --- Floating CTA Bar --- */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 mb-20">
        <div className="bg-[#1a184a] border border-white/10 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between shadow-2xl gap-6 text-center md:text-left">
          <div>
            <h3 className="text-3xl font-extrabold mb-2">Ready to shape your future?</h3>
            <p className="text-white/70">Join the ecosystem designed for the next generation of leaders.</p>
          </div>
          
          <Link 
            to="/contact" 
            className="inline-block bg-brand-accent text-[#0f0e2b] px-8 py-3.5 rounded-full font-bold hover:bg-white hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(228,176,35,0.3)] transition-all whitespace-nowrap cursor-pointer"
          >
            Get Started Now
          </Link>
        </div>
      </div>

      {/* Main Grid */}
      <div className="container mx-auto px-6 pb-12 relative z-10 border-b border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Col */}
          <div className="space-y-6">
            {/* Logo Image */}
            <Link to="/" className="inline-block">
              <img 
                src={logo} 
                alt="NextGen Skill EduHub" 
                className="h-12 w-auto object-contain" 
              />
            </Link>

            <p className="text-white/60 leading-relaxed max-w-xs">
              Building career-ready, confident, and capable individuals through a seamless blend of guidance, academics, and skills.
            </p>
            
            {/* Social Icons (Lucide) */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-accent hover:text-brand-dark hover:-translate-y-1 transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-accent hover:text-brand-dark hover:-translate-y-1 transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-accent hover:text-brand-dark hover:-translate-y-1 transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-accent hover:text-brand-dark hover:-translate-y-1 transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-white/60">
              {['About Us', 'Career Compass', 'Edu Supplements', 'NextGen Skills'].map(link => (
                <li key={link}><Link to="#" className="hover:text-brand-accent hover:pl-1 transition-all">{link}</Link></li>
              ))}
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="text-lg font-bold mb-6">Support</h4>
            <ul className="space-y-3 text-white/60">
              {['Student Login', 'Parent Portal', 'Privacy Policy', 'Terms & Conditions'].map(link => (
                <li key={link}><Link to="#" className="hover:text-brand-accent hover:pl-1 transition-all">{link}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-white/60">
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-brand-accent shrink-0 mt-1" />
                <span>mail@nextgenedu.in</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-brand-accent shrink-0 mt-1" />
                <span>+91 77959 80263</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-brand-accent shrink-0 mt-1" />
                <span>Bangalore, India</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="text-center text-white/40 text-sm mt-8">
          © 2025 NextGen Skill EduHub. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;