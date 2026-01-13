import React from 'react';
import { Compass, Zap, GraduationCap, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="w-full overflow-x-hidden">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen pt-20 flex flex-col">
        {/* Glow BG */}
        <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] rounded-full bg-indigo-900/20 blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-grow py-12">
          
          {/* Left: Content */}
          <div className="flex flex-col items-start z-10 text-center lg:text-left">
            <span className="bg-brand-accent/15 text-brand-accent border border-brand-accent/30 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-6 inline-block">
              New Batches 2025
            </span>
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Empowering the Next Generation to <br className="hidden lg:block"/> Learn, Grow & Lead
            </h1>
            
            {/* HIGHLIGHTED NEXTGEN ONLY HERE */}
            <p className="text-lg text-white/70 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              <span className="text-brand-accent font-bold">NextGen</span> Skill EduHub offers career counselling, skill development, communication training, and study materials for students and professionals in Bangalore.
            </p>

            <div className="flex flex-col gap-4 w-full sm:w-auto">
              <Link to="/contact" className="bg-brand-accent text-center text-brand-dark px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:-translate-y-1 transition-all">
                Get Counselling
              </Link>
              
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative hidden lg:flex justify-center items-center h-full">
            <div className="absolute w-[450px] h-[450px] border border-white/10 rounded-full z-0"></div>
            
            {/* Glass Card */}
            <div className="relative z-10 w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl animate-float">
              <h3 className="text-xl font-bold mb-6">Student Growth Metric</h3>
              
              {[
                { label: "Communication", val: "92%" },
                { label: "Technical", val: "88%" },
                { label: "Leadership", val: "95%" }
              ].map((stat, idx) => (
                <div key={idx} className="mb-6">
                  <div className="flex justify-between text-sm text-white/70 mb-2">
                    <span>{stat.label}</span>
                    <span>{stat.val}</span>
                  </div>
                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-accent rounded-full" style={{ width: stat.val }}></div>
                  </div>
                </div>
              ))}
              
              <div className="text-xs text-brand-accent mt-4">Based on 500+ student reviews</div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="w-full bg-black/20 border-t border-white/10 py-8">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
              {[
                { num: "12k+", label: "Students Guided" },
                { num: "50+", label: "Expert Mentors" },
                { num: "98%", label: "Success Rate" }
              ].map((item, idx) => (
                <div key={idx}>
                  <span className="block text-3xl font-bold">{item.num}</span>
                  <span className="text-xs uppercase tracking-widest text-white/60">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

     {/* ================= IDENTITY SECTION ================= */}
      <section className="py-24 bg-brand-light relative overflow-hidden">
        
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
            
            {/* RIGHT SIDE (Text) */}
            <div className="flex-1">
              <span className="text-brand-accent font-bold tracking-widest uppercase text-sm mb-4 block">
                Who We Are
              </span>
              <h2 className="text-5xl font-extrabold text-brand-dark mb-6 leading-tight">
                Not just a platform. <br/> An <span className="text-brand-accent">Ecosystem.</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                NextGen Skill EduHub bridges the gap between traditional education and industry demands. We don't just teach; we align your skills, academics, and career path into one seamless journey.
              </p>

              <div className="space-y-8">
                {[
                  { 
                    icon: Compass, 
                    title: "Career Counselling", 
                    text: "Data-driven guidance to find your ideal professional path." 
                  },
                  { 
                    icon: Zap, 
                    title: "Integrated Ecosystem", 
                    text: "Connecting skills, academics, and guidance seamlessly." 
                  },
                  { 
                    icon: GraduationCap, 
                    title: "Academic & Skills", 
                    text: "Mastering foundations while building future-ready expertise." 
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-5 group">
                    <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-brand-accent group-hover:text-brand-dark transition-all duration-300 shrink-0 text-brand-accent">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-brand-dark mb-1 group-hover:text-brand-accent transition-colors">{item.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10">
                <Link 
                  to="/about" 
                  className="flex items-center gap-2 text-brand-dark font-bold hover:gap-4 transition-all"
                >
                  Read Our Full Story <ArrowRight size={18} className="text-brand-accent" />
                </Link>
              </div>
            </div>

            {/* LEFT SIDE (Image) */}
            <div className="flex-1 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/50 rounded-full blur-3xl -z-10"></div>
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/50">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80" 
                  alt="Students discussing" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[radial-gradient(#E4B023_20%,transparent_20%)] [background-size:10px_10px] opacity-40"></div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= PILLARS SECTION ================= */}
      <section className="py-24 bg-[#12103a] relative overflow-hidden">
        
        <div className="absolute inset-0 w-full h-full bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10 items-center">
          
          <div className="text-left"> 
            <span className="text-brand-accent font-bold text-sm uppercase tracking-[0.2em] border-b-2 border-brand-accent/30 pb-2 mb-6 inline-block">
              Core Verticals
            </span>
            <h2 className="text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.1]">
              Our Three <br /> Pillars
            </h2>
            <p className="text-blue-100/60 text-lg leading-relaxed max-w-md">
              The foundation of our integrated ecosystem designed for student success.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {[
              { 
                num: "01", 
                title: "Career Compass", 
                text: "Helping students, parents, institutions, and professionals make informed, future-proof career decisions using data and expert counselling."
              },
              { 
                num: "02", 
                title: "Edu Supplements", 
                text: "Access high-quality learning resources: question papers, answer keys, self-evaluations, explainer content, and digital study packs." 
              },
              { 
                num: "03", 
                title: "NextGen Skill", 
                text: "A practical model designed to build employability from the ground up, bridging the gap between degrees and careers.", 
                tag: "Hire – Train – Deploy – Retain" 
              }
            ].map((pillar, idx) => (
              <div 
                key={idx} 
                className="group relative flex flex-col md:flex-row gap-6 p-8 rounded-2xl border border-white/5 bg-[#1a184a]/50 backdrop-blur-sm transition-all duration-300 hover:bg-[#1e1c52] hover:border-brand-accent/30 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] hover:-translate-y-1"
              >
                <div className="absolute left-0 top-6 bottom-6 w-1 bg-brand-accent rounded-r-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                <div className="flex-shrink-0">
                  <span className="text-4xl font-extrabold font-sans text-white/10 transition-colors duration-300 group-hover:text-brand-accent">
                    {pillar.num}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-blue-100/60 text-sm leading-relaxed mb-4 group-hover:text-blue-100/80 transition-colors">
                    {pillar.text}
                  </p>
                  
                  {pillar.tag && (
                    <span className="inline-block text-[11px] font-bold text-brand-accent bg-brand-accent/10 border border-brand-accent/20 px-3 py-1.5 rounded-full uppercase tracking-wide group-hover:bg-brand-accent group-hover:text-[#12103a] transition-all duration-300">
                      {pillar.tag}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= ZIG ZAG SECTION ================= */}
      <section className="py-24 bg-white text-brand-dark relative overflow-hidden">
        
        <div className="absolute inset-0 w-full h-full bg-[radial-gradient(#e5e7eb_2px,transparent_2px)] [background-size:50px_50px] opacity-100 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/80 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-accent/10 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl font-extrabold mb-4">Why Choose NextGen?</h2>
            <p className="text-gray-500 text-lg">We combine human expertise with technology to deliver results.</p>
          </div>

          <div className="space-y-24">
            {[
              { 
                img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80", 
                stat: "Expert", desc: "Backed by industry leaders.", label: "Foundation", title: "Expertise & Adaptability", 
                text: "We provide a solid foundation for growth, ensuring that every student gets advice rooted in real-world experience.",
                points: ["Backed by experienced counsellors", "Frameworks for all age groups"]
              },
              { 
                img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80", 
                stat: "360°", desc: "The complete success loop.", label: "Methodology", title: "The Perfect Blend", 
                text: "Most platforms stop at advice. We go further by integrating the three critical components of success.",
                points: ["Guidance + Tools + Execution", "Integrated practical application"],
                reverse: true 
              },
              { 
                img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80", 
                stat: "100%", desc: "Transparent progress tracking.", label: "Results", title: "Outcomes That Matter", 
                text: "We bridge the gap between learning skills and getting hired. You will always know where you stand.",
                points: ["Transparent outcomes", "Strong placement ecosystem"]
              }
            ].map((item, idx) => (
              <div key={idx} className={`flex flex-col ${item.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center group`}>
                
                <div className="flex-1 relative w-full h-[400px]">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-accent/20 rounded-full blur-2xl -z-10 group-hover:bg-brand-accent/30 transition-colors duration-500"></div>
                  
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover rounded-3xl shadow-lg group-hover:scale-[1.02] transition-transform duration-500 brightness-95 group-hover:brightness-100" />
                  
                  <div className={`absolute bottom-8 ${item.reverse ? '-right-8' : '-left-8'} bg-white/80 backdrop-blur-md border border-white/90 p-5 rounded-2xl shadow-xl max-w-[240px] animate-float hidden md:block group-hover:shadow-2xl transition-all`}>
                    <div className="text-3xl font-extrabold text-brand-dark mb-1">{item.stat}</div>
                    <div className="text-sm text-gray-600 leading-tight">{item.desc}</div>
                  </div>
                </div>

                <div className="flex-1">
                  <span className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4 block">{item.label}</span>
                  <h3 className="text-3xl font-extrabold mb-6">{item.title}</h3>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">{item.text}</p>
                  <div className="space-y-3">
                    {item.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-3 font-semibold text-brand-dark">
                        <span className="w-6 h-6 rounded-full bg-brand-accent/20 text-brand-accent flex items-center justify-center text-xs shadow-sm">✓</span>
                        {pt}
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;