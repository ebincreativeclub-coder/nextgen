import React from "react";
import { Link } from "react-router-dom";
import {
  Linkedin,
  Instagram,
  Twitter,
  Facebook,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import logo from "../assets/nextgenlogo.png";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <footer className="bg-[#0f0e2b] text-white pt-10 md:pt-20 relative overflow-hidden z-50">
      {/* --- Floating CTA Bar --- */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 mb-16">
        <div className="bg-[#1a184a] border border-white/10 rounded-2xl md:rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between shadow-2xl gap-8 text-center md:text-left">
          <div className="flex-1">
            <h3 className="text-2xl md:text-4xl font-extrabold mb-3 leading-tight">
              Ready to shape your future?
            </h3>
            <p className="text-white/70 text-sm md:text-base max-w-lg mx-auto md:mx-0">
              Join the ecosystem designed for the next generation of leaders.
            </p>
          </div>

          <Link
            to="/contact"
            className="w-full md:w-auto text-center bg-brand-accent text-[#0f0e2b] px-10 py-4 rounded-full font-bold hover:bg-white hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(228,176,35,0.3)] transition-all whitespace-nowrap"
          >
            Get Started Now
          </Link>
        </div>
      </div>

      {/* Main Grid Container */}
      <div className="container mx-auto px-6 pb-12 relative z-10">
        {/* Using a 12-column grid for precise control:
            Brand: 5 cols | Links: 3 cols | Contact: 4 cols 
        */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 text-center md:text-left">
          {/* Brand Col (Spans 5/12) */}
          <div className="flex flex-col items-center md:items-start space-y-6 md:col-span-5">
            <Link
              to="/"
              className="inline-block transition-transform hover:scale-105"
            >
              <img
                src={logo}
                alt="NextGen Skill EduHub"
                className="h-10 md:h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-white/60 leading-relaxed text-sm md:text-base max-w-sm">
              Building career-ready, confident, and capable individuals through
              a seamless blend of guidance, academics, and skills.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              {[Linkedin, Instagram, Twitter, Facebook].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-accent hover:text-[#0f0e2b] hover:-translate-y-1 transition-all border border-white/5"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links (Spans 3/12) */}
          <div className="flex flex-col items-center md:items-start md:col-span-3">
            <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-wider text-sm">
              Quick Links
            </h4>
            <ul className="space-y-4 text-white/60">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-brand-accent transition-all inline-block hover:translate-x-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact (Spans 4/12) */}
          <div className="flex flex-col items-center md:items-start md:col-span-4">
            <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-wider text-sm">
              Get in Touch
            </h4>
            <ul className="space-y-5 text-white/60">
              <li className="flex items-center md:items-start gap-4">
                <div className="p-2 rounded-lg bg-white/5 text-brand-accent">
                  <Mail size={18} />
                </div>
                <span className="text-sm md:text-base">mail@nextgenedu.in</span>
              </li>
              <li className="flex items-center md:items-start gap-4">
                <div className="p-2 rounded-lg bg-white/5 text-brand-accent">
                  <Phone size={18} />
                </div>
                <span className="text-sm md:text-base">+91 77959 80263</span>
              </li>
              <li className="flex items-center md:items-start gap-4">
                <div className="p-2 rounded-lg bg-white/5 text-brand-accent">
                  <MapPin size={18} />
                </div>
                <span className="text-sm md:text-base">Bangalore, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* --- Bottom Footer Bar --- */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <p className="text-white/40 text-xs md:text-sm order-2 md:order-1">
              © 2025 NextGen Skill EduHub. All rights reserved. <span className="ml-3 text-white hidden md:inline">|</span>
            </p>

            <div className="flex items-center gap-4 md:gap-6 order-1 md:order-2">
              <Link
                to=""
                className="text-white/40 text-xs md:text-sm hover:text-brand-accent transition-colors"
              >
                Privacy Policy
              </Link>
              <div className="w-px h-3 bg-white/10 hidden md:block" />
              <Link
                to=""
                className="text-white/40 text-xs md:text-sm hover:text-brand-accent transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
