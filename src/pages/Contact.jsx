import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  ArrowRight,
  Linkedin,
  Instagram,
  Facebook,
  Globe,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  // State for errors
  const [errors, setErrors] = useState({});

  // State for submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  // Validation Logic
  const validateForm = () => {
    let newErrors = {};
    let isValid = true;

    // First Name Validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
      isValid = false;
    }

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }

    // Phone Validation (10-15 digits allowed)
    const phoneRegex = /^[0-9+\s-]{10,15}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
      isValid = false;
    }

    // Message Validation
    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // 1️⃣ Send email to admin
      await emailjs.send(
        "service_do0kjw9",
        "template_jm5ms1d", 
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        "Fi3c79UACQuEr526S",
      );

      // 2️⃣ Send confirmation email to user
      await emailjs.send(
        "service_do0kjw9",
        "template_ik57d2r", 
        {
          first_name: formData.firstName,
          email: formData.email,
          subject: formData.subject,
        },
        "Fi3c79UACQuEr526S",
      );

      setIsSuccess(true);

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "General Inquiry",
        message: "",
      });

      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Something went wrong. Please try again.");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="w-full overflow-x-hidden pt-20">
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&w=1600&q=80"
            alt="Contact Support Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0f0e2b]/80 mix-blend-multiply"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="text-brand-accent font-bold tracking-[0.2em] uppercase text-sm mb-4 block animate-fadeIn">
            Connect With Us
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            Your Next Big Leap <br />{" "}
            <span className="text-white/95">Starts With a Hello.</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
            Expert guidance for students, professionals, and institutions ready
            to redefine their potential.
          </p>
        </div>
      </section>

      {/* ================= MAIN FORM SECTION ================= */}
      <section className="pt-16 pb-8 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-gray-100 mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* LEFT: INFO & CONTEXT */}
              <div className="lg:col-span-2 bg-[#12103a] p-10 md:p-16 text-white relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-[80px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] pointer-events-none"></div>

                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
                    Send us a <br />
                    <span className="text-brand-accent">Message.</span>
                  </h2>
                  <p className="text-blue-100/70 mb-12 leading-relaxed text-lg">
                    Whether you are a student looking for clarity, a
                    professional seeking growth, or an institution planning a
                    partnership—we'd love to hear from you.
                  </p>

                  <div className="space-y-8">
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                        <Clock size={20} className="text-brand-accent" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">Response Time</h4>
                        <p className="text-white/60">Usually within 24 hours</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                        <MessageSquare
                          size={20}
                          className="text-brand-accent"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">Live Support</h4>
                        <p className="text-white/60">
                          Available 9 AM - 6 PM IST
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-12 mt-12 border-t border-white/10 relative z-10">
                  <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-brand-accent">
                    Connect With Us
                  </h4>
                  <div className="flex gap-4">
                    {[Linkedin, Instagram, Facebook, Globe].map((Icon, i) => (
                      <a
                        key={i}
                        href="#"
                        className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-accent hover:text-[#12103a] transition-all duration-300"
                      >
                        <Icon size={22} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT: THE FORM */}
              <div className="lg:col-span-3 p-10 md:p-16 bg-white relative">
                {/* Success Overlay */}
                {isSuccess && (
                  <div className="absolute inset-0 bg-white/90 backdrop-blur-sm z-50 flex flex-col items-center justify-center text-center p-8 animate-fadeIn">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-3xl font-extrabold text-gray-900 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-500 max-w-md">
                      Thank you for contacting us. Our team will get back to you
                      within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="mt-8 px-8 py-3 bg-brand-dark text-white rounded-xl font-bold hover:bg-brand-accent hover:text-brand-dark transition-all"
                    >
                      Send Another
                    </button>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 ml-1">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="John"
                        className={`w-full px-5 py-4 rounded-xl bg-gray-50 border focus:bg-white focus:ring-4 outline-none transition-all font-medium text-gray-900 ${errors.firstName ? "border-red-500 focus:ring-red-100" : "border-gray-200 focus:border-brand-accent focus:ring-brand-accent/10"}`}
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-xs ml-1 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.firstName}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 ml-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Doe"
                        className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-accent focus:bg-white focus:ring-4 focus:ring-brand-accent/10 outline-none transition-all font-medium text-gray-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 ml-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={`w-full px-5 py-4 rounded-xl bg-gray-50 border focus:bg-white focus:ring-4 outline-none transition-all font-medium text-gray-900 ${errors.email ? "border-red-500 focus:ring-red-100" : "border-gray-200 focus:border-brand-accent focus:ring-brand-accent/10"}`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs ml-1 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.email}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 ml-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 987..."
                        className={`w-full px-5 py-4 rounded-xl bg-gray-50 border focus:bg-white focus:ring-4 outline-none transition-all font-medium text-gray-900 ${errors.phone ? "border-red-500 focus:ring-red-100" : "border-gray-200 focus:border-brand-accent focus:ring-brand-accent/10"}`}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs ml-1 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">
                      I'm interested in...
                    </label>
                    <div className="relative">
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-accent focus:bg-white focus:ring-4 focus:ring-brand-accent/10 outline-none transition-all appearance-none font-medium text-gray-900"
                      >
                        <option>General Inquiry</option>
                        <option>Communication Mastery Program</option>
                        <option>Student Career Guidance</option>
                        <option>Institutional Partnership</option>
                        <option>Corporate Training</option>
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                        <ArrowRight size={18} className="rotate-90" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      placeholder="Tell us more about your requirements..."
                      className={`w-full px-5 py-4 rounded-xl bg-gray-50 border focus:bg-white focus:ring-4 outline-none transition-all font-medium resize-none text-gray-900 ${errors.message ? "border-red-500 focus:ring-red-100" : "border-gray-200 focus:border-brand-accent focus:ring-brand-accent/10"}`}
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-xs ml-1 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    disabled={isSubmitting}
                    className="w-full py-4 bg-brand-dark text-white font-bold text-lg rounded-xl hover:bg-brand-accent hover:text-brand-dark transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    {!isSubmitting && <Send size={20} />}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT CARDS ================= */}
      <section className="pt-8 pb-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Visit */}
            <div className="bg-white p-10 rounded-[2rem] shadow-lg border border-gray-100 group hover:-translate-y-2 transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-sm">
                <MapPin size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Visit HQ
              </h3>
              <p className="text-gray-500 leading-relaxed text-lg">
                Bangalore, India.
              </p>
            </div>

            {/* Card 2: Email */}
            <div className="bg-white p-10 rounded-[2rem] shadow-lg border border-gray-100 group hover:-translate-y-2 transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-brand-accent/10 rounded-2xl flex items-center justify-center text-brand-dark mx-auto mb-6 group-hover:bg-brand-accent transition-colors shadow-sm">
                <Mail size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Email Us
              </h3>
              <p className="text-gray-500 leading-relaxed mb-4 text-lg">
                For general inquiries.
              </p>
              <a
                href="mailto:mail@nextgenedu.in"
                className="text-brand-accent font-bold text-lg hover:underline decoration-2 underline-offset-4"
              >
                mail@nextgenedu.in
              </a>
            </div>

            {/* Card 3: Call */}
            <div className="bg-white p-10 rounded-[2rem] shadow-lg border border-gray-100 group hover:-translate-y-2 transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 mx-auto mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors shadow-sm">
                <Phone size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-500 leading-relaxed mb-4 text-lg">
                Mon-Sat, 9am to 6pm.
              </p>
              <a
                href="tel:+917795980263"
                className="text-brand-accent font-bold text-lg hover:underline decoration-2 underline-offset-4"
              >
                +91 77959 80263
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MAP SECTION ================= */}
      <section className="h-[450px] w-full relative">
        <iframe
          title="Google Map Bangalore"
          src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Bangalore&t=&z=14&ie=UTF8&iwloc=B&output=embed"
          width="100%"
          height="100%"
          style={{
            border: 0,
            filter: "grayscale(100%) invert(90%) contrast(85%)",
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        {/* Floating Location Badge */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 flex items-center gap-6 max-w-sm w-[90%] md:w-auto animate-fadeIn">
          <div className="w-12 h-12 bg-brand-accent text-brand-dark rounded-xl flex items-center justify-center font-bold shrink-0">
            <MapPin size={24} />
          </div>
          <div>
            <h4 className="text-lg font-bold text-gray-900">NextGen Edu HQ</h4>
            <p className="text-gray-500 text-sm">Bangalore, India.</p>
          </div>

          <a
            href="https://www.google.com/maps/dir//Bangalore,India"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto bg-brand-accent text-brand-dark p-3 rounded-full hover:bg-brand-dark hover:text-white transition-colors flex items-center justify-center shadow-md"
            title="Get Directions"
          >
            <ArrowRight size={22} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
