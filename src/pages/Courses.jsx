import React from 'react';
import { 
  MessageCircle, Video, BookOpen, Briefcase, 
  Search, UserCheck, Zap, Rocket, RefreshCcw, ArrowRight, CheckCircle2, 
  GraduationCap, FileText, Users, 
  BrainCircuit, Target, LineChart,
  Building2, ShoppingBag, Megaphone, Settings, Headset, Truck, Factory
} from 'lucide-react';

const Courses = () => {

  // DATA: Industries with Image Backgrounds
  const industriesTop = [
    { 
      name: "Corporate", 
      icon: Building2, 
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80" 
    },
    { 
      name: "Retail & E-comm", 
      icon: ShoppingBag, 
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80" 
    },
    { 
      name: "Sales & Marketing", 
      icon: Megaphone, 
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=600&q=80" 
    },
    { 
      name: "Operations", 
      icon: Settings, 
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80" 
    },
    { 
      name: "Customer Support", 
      icon: Headset, 
      image: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=600&q=80" 
    },
  ];

  const industriesBottom = [
    { 
      name: "Logistics", 
      icon: Truck, 
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80" 
    },
    { 
      name: "Education", 
      icon: GraduationCap, 
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80" 
    },
    { 
      name: "BFSI", 
      icon: LineChart, 
      image: "https://images.unsplash.com/photo-1611974765270-ca1258634369?auto=format&fit=crop&w=600&q=80" 
    },
    { 
      name: "Tech & IT", 
      icon: BrainCircuit, 
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80" 
    },
    { 
      name: "Manufacturing", 
      icon: Factory, 
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80" 
    },
  ];

  return (
    <div className="w-full overflow-x-hidden pt-20">
      
      {/* ================= HERO SECTION (EXACT REPLICA OF ABOUT US) ================= */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80" 
            alt="Professional Learning Environment" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0f0e2b]/80 mix-blend-multiply"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="text-brand-accent font-bold tracking-[0.2em] uppercase text-sm mb-4 block animate-fadeIn">
            Upskill & Upgrade
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
             Programs Designed for <br/> <span className="text-white/95">Real Impact.</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
            From mastering communication for business leaders to career readiness for the next generation.
          </p>
        </div>
      </section>

      {/* ================= FEATURE: UNIFIED DASHBOARD ================= */}
      <section className="py-24 bg-gray-50 relative">
        <div className="container mx-auto px-6">
          
          <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-200 mx-auto max-w-6xl">
            
            {/* PART 1: COMMUNICATION MASTERY */}
            <div className="bg-[#12103a] p-8 md:p-16 relative overflow-hidden text-white">
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-wider mb-6">
                    <MessageCircle size={14} /> Premier Adult Program
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
                    Communication <br/> <span className="text-brand-accent">Mastery.</span>
                  </h2>
                  <p className="text-blue-100/70 text-lg mb-8 leading-relaxed max-w-md">
                    A premium ecosystem for business owners & professionals. We strip away the theory and focus on high-stakes, practical English usage.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-brand-accent flex items-center justify-center text-brand-dark">
                      <Video size={20} />
                    </div>
                    <div>
                      <span className="block text-xs text-white/50 font-bold uppercase tracking-wider">Schedule</span>
                      <span className="font-bold">Mon / Wed / Fri (Live)</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {["Grammar Essentials", "Speaking Drills", "Writing Labs", "Assignments", "Feedback Loops", "Live Testing"].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 text-blue-50/90 text-sm font-medium">
                          <CheckCircle2 size={16} className="text-brand-accent shrink-0" /> {item}
                        </div>
                      ))}
                   </div>
                   
                   <a 
                     href="/contact" 
                     className="mt-8 w-full py-3.5 rounded-xl bg-white text-[#12103a] font-bold hover:bg-brand-accent transition-colors flex items-center justify-center gap-2 text-sm uppercase tracking-wide cursor-pointer"
                   >
                     Begin Your Journey <ArrowRight size={16} />
                   </a>
                </div>
              </div>
            </div>

            {/* PART 2: SPECIALIZED TRACKS */}
            <div className="grid grid-cols-1 lg:grid-cols-2">
              
              {/* LEFT: STUDENT PROGRAMS */}
              <div className="p-10 md:p-14 border-b lg:border-b-0 lg:border-r border-gray-100 hover:bg-blue-50/20 transition-colors duration-500 group">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                     <h3 className="text-2xl font-bold text-gray-900">Student Programs</h3>
                     <p className="text-sm text-gray-500 font-medium">Academic Excellence Track</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="mt-1 text-blue-500"><BrainCircuit size={20} /></div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">Academic Skill Boosters</h4>
                      <p className="text-gray-500 text-sm leading-relaxed mt-1">
                        Targeted modules to enhance memory retention, focus, and cognitive processing speed for complex subjects.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="mt-1 text-blue-500"><LineChart size={20} /></div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">Exam Prep Camps</h4>
                      <p className="text-gray-500 text-sm leading-relaxed mt-1">
                        Intensive camps focused on time management, anxiety reduction, and answering strategies for high-pressure exams.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="mt-1 text-blue-500"><Target size={20} /></div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">Study Strategy Workshops</h4>
                      <p className="text-gray-500 text-sm leading-relaxed mt-1">
                        Customized roadmaps for effective note-taking, revision planning, and self-assessment techniques.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT: CAREER READINESS */}
              <div className="p-10 md:p-14 hover:bg-amber-50/20 transition-colors duration-500 group">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 group-hover:scale-110 transition-transform duration-300">
                    <Briefcase size={24} />
                  </div>
                  <div>
                     <h3 className="text-2xl font-bold text-gray-900">Career Readiness</h3>
                     <p className="text-sm text-gray-500 font-medium">Corporate Launchpad</p>
                  </div>
                </div>

                 <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="mt-1 text-amber-600"><FileText size={20} /></div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">Resume & LinkedIn Optimization</h4>
                      <p className="text-gray-500 text-sm leading-relaxed mt-1">
                        Crafting ATS-friendly resumes and building a powerful personal brand on LinkedIn to attract recruiters.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="mt-1 text-amber-600"><Users size={20} /></div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">Mock Interviews</h4>
                      <p className="text-gray-500 text-sm leading-relaxed mt-1">
                        Real-world simulations with HR experts to polish body language, confidence, and answer structuring.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="mt-1 text-amber-600"><Briefcase size={20} /></div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">Industry Exposure Sessions</h4>
                      <p className="text-gray-500 text-sm leading-relaxed mt-1">
                        Direct interaction with corporate leaders and industry insiders to understand market expectations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ================= THE 4x2x1 MODEL ================= */}
      <section className="py-24 bg-[#0f0e2b] text-white relative overflow-hidden">
        
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          
          <div className="text-center mb-16">
            <span className="text-brand-accent font-bold tracking-widest uppercase text-sm mb-4 block">Our Process</span>
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-6">The 4×2×1 Model</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
              A rigorous filtering and training ecosystem. We start broad, filter deep, and train hard to ensure only the best talent reaches you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 max-w-6xl mx-auto">
            
            {/* 1. SOURCING */}
            <div className="lg:col-span-6 bg-[#1a184a]/50 border border-white/10 rounded-[2rem] p-8 md:p-10 hover:bg-[#1a184a] transition-all duration-300 group">
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <Search size={28} />
                </div>
                <span className="text-5xl font-extrabold text-white/5 group-hover:text-white/10 transition-colors">01</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">Sourcing 4×</h3>
              <p className="text-white/60 leading-relaxed">
                We don't just wait for applications. We actively source <span className="text-white font-bold">four times</span> the required candidates through our structured, multi-channel screening process.
              </p>
            </div>

            {/* 2. HIRING */}
            <div className="lg:col-span-6 bg-[#1a184a]/50 border border-white/10 rounded-[2rem] p-8 md:p-10 hover:bg-[#1a184a] transition-all duration-300 group">
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                  <UserCheck size={28} />
                </div>
                <span className="text-5xl font-extrabold text-white/5 group-hover:text-white/10 transition-colors">02</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">Hiring 2×</h3>
              <p className="text-white/60 leading-relaxed">
                We select the <span className="text-white font-bold">top 40% matching talent</span>. Selection isn't just about skills; it's about consistent performance indicators and attitude.
              </p>
            </div>

            {/* 3. TRAINING */}
            <div className="lg:col-span-12 bg-gradient-to-br from-[#1a184a] to-[#12103a] border border-brand-accent/20 rounded-[2rem] p-8 md:p-12 relative overflow-hidden group shadow-2xl hover:shadow-[inset_0_0_40px_-10px_rgba(228,176,35,0.15)] hover:from-[#1e1c52] hover:to-[#161445] transition-all duration-500">
              <div className="relative z-10 flex flex-col md:flex-row gap-10 items-start md:items-center">
                <div className="md:w-1/3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-bold uppercase tracking-wider mb-4 border border-brand-accent/20">
                    The Core Phase
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-6xl font-extrabold text-white">03</div>
                    <div className="h-12 w-[1px] bg-white/10"></div>
                    <h3 className="text-3xl font-bold text-white">Training</h3>
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    This is where the transformation happens. We provide job-specific development across five critical pillars.
                  </p>
                </div>
                <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                  {[
                    "Communication Mastery",
                    "Professional Behaviour",
                    "Technical Skills",
                    "Problem Solving",
                    "Client Handling"
                  ].map((skill, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5 hover:border-brand-accent/30 transition-colors">
                      <Zap size={18} className="text-brand-accent shrink-0" />
                      <span className="text-white font-medium text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 4. DEPLOYMENT */}
            <div className="lg:col-span-6 bg-[#1a184a]/50 border border-white/10 rounded-[2rem] p-8 md:p-10 hover:bg-[#1a184a] transition-all duration-300 group">
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform">
                  <Rocket size={28} />
                </div>
                <span className="text-5xl font-extrabold text-white/5 group-hover:text-white/10 transition-colors">04</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-green-400 transition-colors">Deployment</h3>
              <p className="text-white/60 leading-relaxed">
                The launchpad. We handle placement assistance, client interviews, and provide full <span className="text-white font-bold">onboarding support</span> to ensure a smooth transition.
              </p>
            </div>

            {/* 5. RETAIN & REVIEW */}
            <div className="lg:col-span-6 bg-[#1a184a]/50 border border-white/10 rounded-[2rem] p-8 md:p-10 hover:bg-[#1a184a] transition-all duration-300 group">
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 rounded-2xl bg-pink-500/10 flex items-center justify-center text-pink-400 group-hover:scale-110 transition-transform">
                  <RefreshCcw size={28} />
                </div>
                <span className="text-5xl font-extrabold text-white/5 group-hover:text-white/10 transition-colors">05</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-pink-400 transition-colors">Retain & Review</h3>
              <p className="text-white/60 leading-relaxed">
                Our job isn't done at placement. We offer performance monitoring during probation and <span className="text-white font-bold">corrective reskilling</span> if gaps appear.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= INDUSTRIES SERVED (WITH BACKGROUND IMAGES) ================= */}
      <section className="py-24 bg-white relative overflow-hidden">
        
        {/* CSS for Infinite Scroll */}
        <style>{`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scroll-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-scroll-left {
            animation: scroll-left 40s linear infinite;
          }
          .animate-scroll-right {
            animation: scroll-right 40s linear infinite;
          }
          .pause-on-hover:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="container mx-auto px-6 text-center mb-16 relative z-10">
          <span className="text-brand-accent font-bold tracking-widest uppercase text-sm mb-4 block">Our Expertise</span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-brand-dark">Industries We Serve</h2>
        </div>

        {/* Gradient Fade Overlays to hide edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <div className="flex flex-col gap-8">
          
          {/* Row 1: Moving Left */}
          <div className="flex overflow-hidden">
            <div className="flex gap-6 animate-scroll-left pause-on-hover w-max px-3">
              {[...industriesTop, ...industriesTop].map((item, idx) => (
                <div key={idx} className="w-80 h-48 relative rounded-2xl overflow-hidden shadow-lg shadow-gray-200/50 hover:-translate-y-1 transition-all duration-300 group shrink-0">
                   {/* Background Image */}
                   <img 
                      src={item.image} 
                      alt={item.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                   />
                   
                   {/* Dark Gradient Overlay for readability */}
                   <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 group-hover:via-black/60 transition-colors"></div>

                   {/* Content */}
                   <div className="inset-0 flex flex-col items-center justify-center p-4 relative z-10">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 mb-3 group-hover:scale-110 transition-transform">
                        <item.icon size={24} />
                      </div>
                      <span className="font-bold text-white text-lg tracking-wide">{item.name}</span>
                   </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Moving Right */}
          <div className="flex overflow-hidden">
            <div className="flex gap-6 animate-scroll-right pause-on-hover w-max px-3">
              {[...industriesBottom, ...industriesBottom].map((item, idx) => (
                <div key={idx} className="w-80 h-48 relative rounded-2xl overflow-hidden shadow-lg shadow-gray-200/50 hover:-translate-y-1 transition-all duration-300 group shrink-0">
                   {/* Background Image */}
                   <img 
                      src={item.image} 
                      alt={item.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                   />
                   
                   {/* Dark Gradient Overlay for readability */}
                   <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 group-hover:via-black/60 transition-colors"></div>

                   {/* Content */}
                   <div className="inset-0 flex flex-col items-center justify-center p-4 relative z-10">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 mb-3 group-hover:scale-110 transition-transform">
                        <item.icon size={24} />
                      </div>
                      <span className="font-bold text-white text-lg tracking-wide">{item.name}</span>
                   </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
      
    </div>
  );
};

export default Courses;