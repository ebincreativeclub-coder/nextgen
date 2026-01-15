import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Eye, 
  Rocket, 
  Building2, 
  GraduationCap, 
  Briefcase, 
  Zap, 
  CheckCircle2, 
  Map, 
  Target,
  Users
} from 'lucide-react';

const About = () => {
  return (
    <div className="w-full overflow-x-hidden pt-20">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80" 
            alt="Team Collaboration" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0f0e2b]/80 mix-blend-multiply"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="text-brand-accent font-bold tracking-[0.2em] uppercase text-sm mb-4 block animate-fadeIn">
            Who We Are
          </span>
          <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-6">
            About Us
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-light">
            Driving clarity, competence, and confidence for the next generation.
          </p>
        </div>
      </section>

      {/* ================= VISION & MISSION ================= */}
      <section className="py-24 bg-[#12103a] relative">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Vision Card */}
          <div className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-colors group">
            <div className="w-14 h-14 bg-brand-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-accent group-hover:text-[#12103a] transition-all duration-300">
              <Eye className="w-8 h-8 text-brand-accent group-hover:text-[#12103a]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-blue-100/70 leading-relaxed text-lg">
              To equip learners with clarity, competence, and confidence — enabling them to thrive in academics, careers, and real life.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-colors group">
            <div className="w-14 h-14 bg-brand-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-accent group-hover:text-[#12103a] transition-all duration-300">
              <Rocket className="w-8 h-8 text-brand-accent group-hover:text-[#12103a]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-blue-100/70 leading-relaxed text-lg">
              To bridge the gap between education and industry, combining the right guidance with practical skills and measurable growth.
            </p>
          </div>

        </div>
      </section>

      {/* ================= LEADERSHIP ================= */}
      <section className="py-24 bg-white text-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-[radial-gradient(#e5e7eb_2px,transparent_2px)] [background-size:30px_30px] opacity-60 pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Leadership Team</h2>
            <p className="text-gray-500">Jointly building a new-age learning ecosystem.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Vamshi Chenna", role: "Founder & Principal Consultant" },
              { name: "Divya Reddy", role: "Director, Operations" },
              { name: "Sneha Bhagavat", role: "Director, Finance & Accounting" }
            ].map((leader, idx) => (
              <div key={idx} className="group bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl group-hover:bg-brand-accent group-hover:text-white transition-colors text-gray-400">
                  <Users className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold mb-2">{leader.name}</h3>
                <p className="text-brand-accent font-semibold text-sm uppercase tracking-wide mb-4">{leader.role}</p>
                <div className="w-10 h-1 bg-gray-300 mx-auto rounded-full group-hover:w-full group-hover:bg-brand-accent transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CAREER COMPASS ================= */}
      <section className="py-24 bg-brand-dark relative">
        <div className="container mx-auto px-6">
          <div className="mb-16 ">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white mt-2 ">Career Compass</h2>
            <p className="text-white/60 mt-4 max-w-2xl">
              Comprehensive guidance solutions tailored for every stage of the journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column A: Institutions */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all group">
              <Building2 className="w-12 h-12 text-brand-accent mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-white mb-6">For Institutions</h3>
              <ul className="space-y-4">
                {['Career counselling drives', 'Stream selection guidance', 'Career readiness workshops', 'Parent orientation sessions', 'Profiling & awareness programs'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-blue-100/70">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-accent flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column B: Students */}
            <div className="bg-brand-accent/10 border border-brand-accent/20 rounded-2xl p-8 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-brand-accent"></div>
              <GraduationCap className="w-12 h-12 text-brand-accent mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-white mb-6">Students & Parents</h3>
              <ul className="space-y-4">
                {['Direction based on aptitude', 'Course & college selection', 'Long-term roadmap creation', 'Psychometric guidance'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-accent flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column C: Professionals */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all group">
              <Briefcase className="w-12 h-12 text-brand-accent mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-white mb-6">Working Professionals</h3>
              <ul className="space-y-4">
                {['Mid-career shift guidance', 'Resume building & interview prep', 'Upskilling pathways'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-blue-100/70">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-accent flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Approach Bar */}
          <div className="mt-16 pt-10 border-t border-white/10">
            <h4 className="text-white font-bold mb-8 text-center uppercase tracking-widest text-sm">Our Approach</h4>
            <div className="flex flex-wrap justify-center gap-4 md:gap-10">
              {['Understand Individual', 'Assess Strengths', 'Map Opportunities', 'Create Roadmap', 'Ongoing Mentoring'].map((step, idx) => (
                <div key={idx} className="flex items-center gap-2 text-blue-100/60 font-medium">
                  <div className="w-8 h-8 rounded-full border border-brand-accent text-brand-accent flex items-center justify-center text-xs">
                    {idx === 0 ? <Users size={14} /> : 
                     idx === 1 ? <Target size={14} /> : 
                     idx === 2 ? <Map size={14} /> : 
                     idx + 1}
                  </div>
                  {step}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ================= EDU SUPPLEMENTS (Cleaned Up) ================= */}
      <section className="py-24 bg-gray-50 text-brand-dark">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT SIDE */}
          <div>
            <h2 className="text-4xl font-extrabold mt-2 mb-6">Edu Supplements</h2>
            <p className="text-lg text-gray-600 mb-8">
              High-impact, easy-to-understand academic resources designed to reduce pressure and build clarity.
            </p>

            {/* Interactive White Box */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 mb-8 transition-all duration-300 hover:shadow-2xl hover:border-brand-accent/20 hover:-translate-y-1 group">
              <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                <div className="p-2 bg-brand-accent/10 rounded-lg group-hover:bg-brand-accent group-hover:text-brand-dark transition-colors duration-300">
                  <Zap className="text-brand-accent fill-current group-hover:text-brand-dark transition-colors" size={20} />
                </div>
                What We Provide
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Question banks', 'Sample papers', 'Self-evaluation sheets', 'Concept explainers', 'Worksheets & Boosters', 'Online POS System'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-700 hover:text-brand-dark transition-colors duration-200 cursor-default group/item">
                    <CheckCircle2 size={18} className="text-green-500 group-hover/item:scale-125 transition-transform duration-200" /> 
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE (Main Card Only) */}
          <div className="relative group">
            {/* Main Dark Card (Background layer removed) */}
            <div className="relative bg-brand-dark text-white p-10 rounded-3xl shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
              <h3 className="text-2xl font-bold mb-8 text-brand-accent flex items-center gap-2">
                Why It Works
              </h3>
              
              <ul className="space-y-6">
                {[
                  { title: "Reduces Exam Pressure", desc: "Structured resources make preparation predictable." },
                  { title: "Builds Conceptual Clarity", desc: "Moving beyond rote memorization to true understanding." },
                  { title: "Improves Self-Awareness", desc: "Self-evaluation tools help students know where they stand." },
                  { title: "Encourages Consistency", desc: "Regular practice materials foster discipline." }
                ].map((reason, idx) => (
                  <li key={idx} className="flex gap-4 group/list hover:translate-x-2 transition-transform duration-300">
                    {/* Animated Number Circle */}
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-sm shrink-0 text-brand-accent transition-all duration-300 group-hover/list:bg-brand-accent group-hover/list:text-brand-dark group-hover/list:scale-110">
                        {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-bold group-hover/list:text-brand-accent transition-colors duration-300">{reason.title}</h4>
                      <p className="text-sm text-white/60">{reason.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>
     <section className="py-20 bg-brand-accent text-brand-dark text-center relative z-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Ready to find your direction?</h2>
          
          {/* UPDATED BUTTON */}
          <Link 
            to="/contact" 
            className="inline-block bg-brand-dark text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-white/20"
          >
            Book a Counselling Session
          </Link>
          
        </div>
      </section>

    </div>
  );
};

export default About;