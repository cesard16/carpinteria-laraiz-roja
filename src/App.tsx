/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Hammer, 
  MessageCircle, 
  ChevronRight, 
  Star, 
  Menu, 
  X, 
  ArrowUpRight,
  Instagram,
  Facebook,
  Linkedin,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';

// Design Recipe: Luxury / Prestige + Warm Organic
// Inspired by the minimalist, editorial style of the provided HTML

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled ? 'glass-nav py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <div className="bg-stone-900 p-1.5 rounded-sm transition-transform group-hover:rotate-12">
            <Hammer className="text-white size-5" />
          </div>
          <span className={`text-2xl font-serif font-semibold tracking-tight ${isScrolled ? 'text-stone-900' : 'text-white'}`}>
            Silva <span className="font-light italic">Woodworks</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className={`text-[13px] uppercase tracking-[0.2em] font-medium transition-all hover:opacity-60 ${
                isScrolled ? 'text-stone-900' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className={`px-6 py-2.5 rounded-full text-[13px] font-bold uppercase tracking-widest transition-all ${
              isScrolled 
                ? 'bg-stone-900 text-white hover:bg-stone-800' 
                : 'bg-white text-stone-900 hover:bg-stone-100'
            }`}
          >
            Inquire
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className={isScrolled ? 'text-stone-900' : 'text-white'} /> : <Menu className={isScrolled ? 'text-stone-900' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-stone-950 z-[60] flex flex-col p-10"
          >
            <div className="flex justify-between items-center mb-20">
              <span className="text-white font-serif text-2xl">Silva</span>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X className="text-white size-8" />
              </button>
            </div>
            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.a 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name}
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl font-serif text-white hover:italic"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
            <div className="mt-auto pt-10 border-t border-white/10 flex gap-6">
              <Instagram className="text-white/50 size-6" />
              <Facebook className="text-white/50 size-6" />
              <Linkedin className="text-white/50 size-6" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* High-resolution hero image with warm natural light */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=90&w=2400" 
          alt="Bespoke wooden interior with natural light" 
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-stone-950/40"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block text-white/80 text-[12px] uppercase tracking-[0.4em] mb-6 font-medium">
            Est. 1994 — Master Craftsmen
          </span>
          <h1 className="text-7xl md:text-[10rem] font-serif text-white leading-[0.85] mb-12 tracking-tighter text-balance font-light">
            The Art of <br />
            <span className="italic font-medium">Living Wood.</span>
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
              href="#portfolio" 
              className="bg-white text-stone-900 px-10 py-5 rounded-full font-bold uppercase tracking-widest text-[13px] hover:bg-stone-100 transition-all flex items-center gap-2"
            >
              Explore Portfolio <ChevronRight className="size-4" />
            </a>
            <a 
              href="#contact" 
              className="text-white border border-white/30 px-10 py-5 rounded-full font-bold uppercase tracking-widest text-[13px] hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              Start Your Project
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-16 bg-gradient-to-b from-white/60 to-transparent"></div>
      </motion.div>
    </section>
  );
};

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'Kitchens', 'Furniture', 'Living', 'Exteriors'];
  
  const projects = [
    { title: 'Oak Island Kitchen', category: 'Kitchens', img: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800' },
    { title: 'Walnut Library', category: 'Living', img: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=800' },
    { title: 'Cedar Decking', category: 'Exteriors', img: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&q=80&w=800' },
    { title: 'Heirloom Dining Table', category: 'Furniture', img: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&q=80&w=800' },
    { title: 'Modern Pine Shelving', category: 'Living', img: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&q=80&w=800' },
    { title: 'Artisan Entry Door', category: 'Exteriors', img: 'https://images.unsplash.com/photo-1506377247377-2a5b3b0ca7df?auto=format&fit=crop&q=80&w=800' },
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl relative">
            <div className="absolute -left-12 top-0 hidden xl:block">
              <span className="vertical-text text-[10px] uppercase tracking-[0.5em] text-stone-300">Est. 1994</span>
            </div>
            <span className="text-stone-400 text-[11px] uppercase tracking-[0.5em] mb-4 block font-semibold">Selected Works</span>
            <h2 className="text-6xl md:text-8xl font-serif tracking-tighter font-light">A Legacy in <span className="italic font-medium">Timber.</span></h2>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-4">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-[12px] uppercase tracking-widest font-bold transition-all border ${
                  activeCategory === cat 
                    ? 'bg-stone-900 text-white border-stone-900' 
                    : 'bg-transparent text-stone-400 border-stone-200 hover:border-stone-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                key={project.title}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/5] overflow-hidden rounded-sm mb-6 bg-stone-100">
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[11px] uppercase tracking-widest text-stone-400 mb-1 block">{project.category}</span>
                    <h3 className="text-xl font-serif font-bold group-hover:italic transition-all">{project.title}</h3>
                  </div>
                  <ArrowUpRight className="size-5 text-stone-300 group-hover:text-stone-900 transition-colors" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  const reviews = [
    { name: 'Eleanor Vance', role: 'Interior Designer', text: 'The precision in their joinery is unmatched. They understood the vision for the mahogany library perfectly.', stars: 5 },
    { name: 'Julian Rossi', role: 'Homeowner', text: 'Our kitchen renovation was seamless. The custom oak cabinets are the highlight of our home.', stars: 5 },
    { name: 'Marcus Thorne', role: 'Architect', text: 'Silva Woodworks brings a level of craftsmanship that is rare to find these days. Truly bespoke quality.', stars: 5 },
  ];

  return (
    <section id="reviews" className="py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-serif tracking-tighter mb-6 font-light">Client <span className="italic font-medium">Voices.</span></h2>
          <div className="w-24 h-px bg-stone-300 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {reviews.map((review, i) => (
            <motion.div 
              whileHover={{ y: -10 }}
              key={i}
              className="bg-white p-10 rounded-sm shadow-sm border border-stone-100"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(review.stars)].map((_, s) => <Star key={s} className="size-4 fill-stone-900 text-stone-900" />)}
              </div>
              <p className="text-lg text-stone-600 italic mb-8 leading-relaxed">"{review.text}"</p>
              <div>
                <h4 className="font-bold text-stone-900">{review.name}</h4>
                <span className="text-sm text-stone-400 uppercase tracking-widest">{review.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-6xl md:text-8xl font-serif tracking-tighter mb-12 font-light">Let's Craft <br /><span className="italic font-medium">Together.</span></h2>
            <p className="text-xl text-stone-400 font-light mb-16 leading-relaxed max-w-md">
              Whether it's a single heirloom piece or a full interior renovation, we're ready to bring your vision to life.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="bg-white/5 p-4 rounded-full group-hover:bg-white group-hover:text-stone-900 transition-all">
                  <Phone className="size-6" />
                </div>
                <span className="text-xl font-medium">+1 (555) 234-5678</span>
              </div>
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="bg-white/5 p-4 rounded-full group-hover:bg-white group-hover:text-stone-900 transition-all">
                  <Mail className="size-6" />
                </div>
                <span className="text-xl font-medium">studio@silvawoodworks.com</span>
              </div>
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="bg-white/5 p-4 rounded-full group-hover:bg-white group-hover:text-stone-900 transition-all">
                  <MapPin className="size-6" />
                </div>
                <span className="text-xl font-medium">128 Artisan Row, Portland, OR</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 md:p-16 rounded-sm">
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-stone-400 text-[11px] uppercase tracking-widest font-bold">First Name</label>
                  <input type="text" className="w-full border-b border-stone-200 py-3 text-stone-900 focus:outline-none focus:border-stone-900 transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-stone-400 text-[11px] uppercase tracking-widest font-bold">Last Name</label>
                  <input type="text" className="w-full border-b border-stone-200 py-3 text-stone-900 focus:outline-none focus:border-stone-900 transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-stone-400 text-[11px] uppercase tracking-widest font-bold">Email Address</label>
                <input type="email" className="w-full border-b border-stone-200 py-3 text-stone-900 focus:outline-none focus:border-stone-900 transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-stone-400 text-[11px] uppercase tracking-widest font-bold">Message</label>
                <textarea rows={4} className="w-full border-b border-stone-200 py-3 text-stone-900 focus:outline-none focus:border-stone-900 transition-colors resize-none"></textarea>
              </div>
              <button className="w-full bg-stone-900 text-white py-5 rounded-full font-bold uppercase tracking-widest text-[13px] hover:bg-stone-800 transition-all">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-stone-950 text-white py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex items-center gap-3">
          <div className="bg-white p-1.5 rounded-sm">
            <Hammer className="text-stone-950 size-5" />
          </div>
          <span className="text-2xl font-serif font-semibold">Silva</span>
        </div>
        
        <div className="flex gap-10 text-[11px] uppercase tracking-[0.3em] font-bold text-stone-500">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Pinterest</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        </div>

        <p className="text-stone-600 text-sm font-light">
          © {new Date().getFullYear()} Silva Woodworks. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => {
  return (
    <motion.a 
      href="https://wa.me/15552345678"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
    >
      <MessageCircle className="size-8" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 whitespace-nowrap font-bold uppercase tracking-widest text-[12px]">
        Chat with us
      </span>
    </motion.a>
  );
};

const Craftsmanship = () => {
  return (
    <section id="services" className="py-32 bg-stone-950 text-white overflow-hidden relative">
      <div className="absolute right-0 top-0 h-full w-1/3 bg-stone-900/50 hidden lg:block"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-stone-500 text-[11px] uppercase tracking-[0.5em] mb-6 block font-semibold">The Process</span>
            <h2 className="text-5xl md:text-7xl font-serif tracking-tighter mb-10 font-light">
              Precision <br />
              <span className="italic font-medium text-stone-400">Meets Passion.</span>
            </h2>
            <p className="text-xl text-stone-400 font-light leading-relaxed mb-12 max-w-lg">
              Every cut is calculated. Every grain is respected. Our workshop is a sanctuary where raw timber is transformed into functional art through a rigorous 12-step seasoning and joinery process.
            </p>
            
            <div className="space-y-12">
              {[
                { title: 'Sourcing', desc: 'We hand-select sustainable hardwoods from local mills, focusing on character and structural integrity.' },
                { title: 'Seasoning', desc: 'Timber is air-dried and kiln-finished to ensure stability in any environment.' },
                { title: 'Joinery', desc: 'Traditional dovetail and mortise-and-tenon joints that last for generations.' }
              ].map((step, i) => (
                <div key={i} className="flex gap-8 group">
                  <span className="text-stone-700 font-serif text-4xl group-hover:text-white transition-colors duration-500">0{i+1}</span>
                  <div>
                    <h4 className="text-xl font-serif mb-2 font-medium">{step.title}</h4>
                    <p className="text-stone-500 font-light leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[3/4] rounded-sm overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581447100595-3a8135973465?auto=format&fit=crop&q=80&w=1200" 
                alt="Workshop craftsmanship" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-stone-900 p-10 hidden md:block border border-white/5">
              <div className="flex flex-col gap-4">
                <span className="text-[10px] uppercase tracking-[0.3em] text-stone-500">Current Project</span>
                <span className="text-2xl font-serif italic">White Oak Credenza</span>
                <div className="w-20 h-px bg-stone-700"></div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-stone-500">Completion: 85%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#fcfaf7] font-sans selection:bg-stone-900 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        
        {/* Intro Section */}
        <section className="py-40 border-b border-stone-100 relative">
          <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden 2xl:block">
            <span className="vertical-text text-[10px] uppercase tracking-[0.5em] text-stone-300">Silva Woodworks — Portland, OR</span>
          </div>
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-5xl md:text-7xl font-serif tracking-tighter mb-12 leading-[1.1] font-light">
              Crafting <span className="italic font-medium text-stone-800">Timeless</span> Interiors with <br />
              Natural Light and Premium Timber.
            </h2>
            <p className="text-xl text-stone-500 font-light leading-relaxed max-w-3xl mx-auto">
              At Silva Woodworks, we believe that wood is more than just a material—it's a living history. 
              Our master carpenters blend traditional techniques with modern design to create spaces that breathe.
            </p>
          </div>
        </section>

        <Portfolio />
        <Craftsmanship />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
