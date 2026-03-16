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

// Shared Types
type Language = 'es' | 'en';

interface SectionProps {
  lang: Language;
}

const Navbar = ({ lang, setLang }: { lang: Language, setLang: (l: Language) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = {
    es: [
      { name: 'Portafolio', href: '#portfolio' },
      { name: 'Promociones', href: '#promotions' },
      { name: 'Servicios', href: '#services' },
      { name: 'Reseñas', href: '#reviews' },
      { name: 'Contacto', href: '#contact' },
    ],
    en: [
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'Promotions', href: '#promotions' },
      { name: 'Services', href: '#services' },
      { name: 'Reviews', href: '#reviews' },
      { name: 'Contact', href: '#contact' },
    ]
  };

  const currentLinks = navLinks[lang];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled ? 'glass-nav py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <div className="h-10 w-auto rounded-sm transition-transform group-hover:scale-105 overflow-hidden bg-white/10 p-1">
            <img src="https://www.carpinterialaraiz.mx/wp-content/uploads/2022/01/Mesa-de-trabajo-1-2x-8-3.png" alt="La Raíz Roja Logo" className="h-full w-full object-contain filter brightness-0 invert" />
          </div>
          <span className={`text-2xl font-serif font-semibold tracking-tight ${isScrolled ? 'text-stone-900' : 'text-white'}`}>
            La Raíz <span className="font-light text-rose-500">Roja</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {currentLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className={`text-[12px] uppercase tracking-[0.2em] font-medium transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 focus-visible:ring-offset-4 rounded-sm hover:opacity-60 ${
                isScrolled ? 'text-stone-900' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          
          <div className="flex items-center gap-2 ml-4">
            <button 
              onClick={() => setLang('es')}
              className={`text-[11px] font-bold uppercase tracking-widest transition-all ${lang === 'es' ? (isScrolled ? 'text-stone-900' : 'text-white') : 'text-stone-400 hover:text-stone-500'}`}
            >
              ES
            </button>
            <span className={isScrolled ? 'text-stone-300' : 'text-white/30'}>/</span>
            <button 
              onClick={() => setLang('en')}
              className={`text-[11px] font-bold uppercase tracking-widest transition-all ${lang === 'en' ? (isScrolled ? 'text-stone-900' : 'text-white') : 'text-stone-400 hover:text-stone-500'}`}
            >
              EN
            </button>
          </div>

          <a 
            href="#contact" 
            className={`px-6 py-2.5 rounded-full text-[12px] font-bold uppercase tracking-widest transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 focus-visible:ring-offset-2 ${
              isScrolled 
                ? 'bg-stone-900 text-white hover:bg-stone-800' 
                : 'bg-white text-stone-900 hover:bg-stone-100'
            }`}
          >
            {lang === 'es' ? 'Cotizar' : 'Inquire'}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden cursor-pointer p-2 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
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
              {currentLinks.map((link, i) => (
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
            
            <div className="mt-12 flex gap-4">
              <button 
                onClick={() => { setLang('es'); setIsMobileMenuOpen(false); }}
                className={`text-xl font-serif transition-colors ${lang === 'es' ? 'text-white' : 'text-stone-500'}`}
              >
                Español
              </button>
              <span className="text-stone-600 text-xl font-serif">/</span>
              <button 
                onClick={() => { setLang('en'); setIsMobileMenuOpen(false); }}
                className={`text-xl font-serif transition-colors ${lang === 'en' ? 'text-white' : 'text-stone-500'}`}
              >
                English
              </button>
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

const Hero = ({ lang }: SectionProps) => {
  const content = {
    es: {
      subtitle: 'Carpinteros Expertos — Monterrey, N.L.',
      title1: 'Creando',
      title2: 'tu espacio.',
      desc: 'Desde mesas de comedor artesanales hasta renovaciones completas de cocinas. Diseñamos, fabricamos e instalamos muebles a medida adaptados a tu espacio exacto y estilo de vida.',
      btn1: 'Ver Catálogo',
      btn2: 'Cotización Gratis'
    },
    en: {
      subtitle: 'Expert Carpenters — Monterrey, N.L.',
      title1: 'Creating',
      title2: 'your space.',
      desc: 'From heirloom dining tables to complete kitchen renovations. We design, build, and install custom furniture tailored to your exact space and lifestyle.',
      btn1: 'View Catalog',
      btn2: 'Get Free Quote'
    }
  };

  const t = content[lang];

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
            {t.subtitle}
          </span>
          <h1 className="text-6xl md:text-[9rem] font-serif text-white leading-[0.85] mb-8 tracking-tighter text-balance font-light">
            {t.title1} <br />
            <span className="italic font-medium text-rose-500">{t.title2}</span>
          </h1>
          <p className="text-white/80 font-light text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            {t.desc}
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
              href="#portfolio" 
              className="bg-white text-stone-900 px-10 py-5 rounded-full font-bold uppercase tracking-widest text-[13px] hover:bg-stone-100 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 flex items-center gap-2"
            >
              {t.btn1} <ChevronRight className="size-4" />
            </a>
            <a 
              href="#contact" 
              className="text-white border border-white/30 px-10 py-5 rounded-full font-bold uppercase tracking-widest text-[13px] hover:bg-white/10 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 backdrop-blur-sm"
            >
              {t.btn2}
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

const Portfolio = ({ lang }: SectionProps) => {
  const [activeCategory, setActiveCategory] = useState(lang === 'es' ? 'Todos' : 'All');
  
  const categories = {
    es: ['Todos', 'Cocinas', 'Closets', 'Comedores', 'Salas', 'Oficinas'],
    en: ['All', 'Kitchens', 'Closets', 'Dining', 'Living', 'Office']
  };
  
  const projects = {
    es: [
      { title: 'Cocina de Roble', category: 'Cocinas', img: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800' },
      { title: 'Walk-in Closet', category: 'Closets', img: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&q=80&w=800' },
      { title: 'Mesa de Comedor', category: 'Comedores', img: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&q=80&w=800' },
      { title: 'Biblioteca de Nogal', category: 'Salas', img: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=800' },
      { title: 'Escritorio Ejecutivo', category: 'Oficinas', img: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80&w=800' },
      { title: 'Repisas Modernas', category: 'Salas', img: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&q=80&w=800' },
    ],
    en: [
      { title: 'Oak Island Kitchen', category: 'Kitchens', img: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800' },
      { title: 'Walk-in Wardrobe', category: 'Closets', img: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&q=80&w=800' },
      { title: 'Heirloom Dining Table', category: 'Dining', img: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&q=80&w=800' },
      { title: 'Walnut Library', category: 'Living', img: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=800' },
      { title: 'Executive Desk', category: 'Office', img: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80&w=800' },
      { title: 'Modern Pine Shelving', category: 'Living', img: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&q=80&w=800' },
    ]
  };

  const filteredProjects = (activeCategory === 'All' || activeCategory === 'Todos')
    ? projects[lang] 
    : projects[lang].filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl relative">
            <div className="absolute -left-12 top-0 hidden xl:block">
              <span className="vertical-text text-[10px] uppercase tracking-[0.5em] text-stone-300">
                {lang === 'es' ? 'Excelencia Artesanal' : 'Handcrafted Excellence'}
              </span>
            </div>
            <span className="text-stone-400 text-[11px] uppercase tracking-[0.5em] mb-4 block font-semibold">
              {lang === 'es' ? 'Nuestro Catálogo' : 'Our Catalog'}
            </span>
            <h2 className="text-6xl md:text-8xl font-serif tracking-tighter font-light">
              {lang === 'es' ? 'A Medida.' : 'Explore Bespoke.'}
            </h2>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-4">
            {categories[lang].map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-[12px] uppercase tracking-widest font-bold transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 border ${
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
                tabIndex={0}
                className="group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-4 rounded-sm"
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

const Promotions = ({ lang }: SectionProps) => {
  const content = {
    es: {
      tag: 'Oferta por Tiempo Limitado',
      title: 'Render 3D Gratis',
      desc: 'Reserva una consulta para cocina o walk-in clóset este mes y recibe un render 3D interactivo completamente gratis (Valor de $10,000 MXN).',
      btn: 'Reclamar Oferta'
    },
    en: {
      tag: 'Limited Time Offer',
      title: 'Free Custom 3D Render',
      desc: 'Book a kitchen or walk-in closet consultation this month and receive a complimentary, photorealistic 3D render of your proposed space (A $500 value).',
      btn: 'Claim Offer'
    }
  };
  const t = content[lang];

  return (
    <section id="promotions" className="py-24 bg-stone-100 border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-white p-10 md:p-16 rounded-sm shadow-sm border border-stone-100">
          <div className="flex-1">
            <span className="inline-block bg-stone-900 text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1 mb-6 rounded-full">{t.tag}</span>
            <h2 className="text-4xl md:text-5xl font-serif tracking-tighter mb-4 font-light">{t.title}</h2>
            <p className="text-stone-500 max-w-lg mb-8 leading-relaxed">
              {t.desc}
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 border-b-2 border-stone-900 pb-1 font-bold text-[13px] uppercase tracking-widest hover:text-stone-500 hover:border-stone-500 transition-colors duration-200"
            >
              {t.btn} <ChevronRight className="size-4" />
            </a>
          </div>
          <div className="flex-1 w-full aspect-video md:aspect-[4/3] bg-stone-100 rounded-sm overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200" 
              alt="3D Kitchen Render Example" 
              className="w-full h-full object-cover" 
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Reviews = ({ lang }: SectionProps) => {
  const reviews = {
    es: [
      { name: 'Sofía Garza', role: 'Diseñadora de Interiores', text: 'La precisión en sus ensambles es inigualable. Entendieron perfectamente mi visión para la biblioteca y el acabado fue premium.', stars: 5 },
      { name: 'Alejandro Treviño', role: 'Cliente', text: 'Nuestra renovación de cocina fue rápida y sin problemas. Los gabinetes de roble son el centro de atención en los domingos familiares.', stars: 5 },
      { name: 'Valeria Elizondo', role: 'Arquitecta', text: 'La Raíz Roja aporta un nivel de artesanía que es raro de encontrar en Monterrey hoy en día. Calidad verdaderamente excepcional.', stars: 5 },
    ],
    en: [
      { name: 'Sofía Garza', role: 'Interior Designer', text: 'The precision in their joinery is unmatched. They understood perfectly my vision for the library.', stars: 5 },
      { name: 'Alejandro Treviño', role: 'Homeowner', text: 'Our kitchen renovation was flawless. The oak cabinets are the center of attention on family Sundays.', stars: 5 },
      { name: 'Valeria Elizondo', role: 'Architect', text: 'They bring a level of craftsmanship that is rare to find in Monterrey today. Truly exceptional quality.', stars: 5 },
    ]
  };

  return (
    <section id="reviews" className="py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-serif tracking-tighter mb-6 font-light">
            {lang === 'es' ? 'Nuestros' : 'Client'} <span className="italic font-medium">{lang === 'es' ? 'Clientes.' : 'Voices.'}</span>
          </h2>
          <div className="w-24 h-px bg-stone-300 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {reviews[lang].map((review, i) => (
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

const Contact = ({ lang }: SectionProps) => {
  const content = {
    es: {
      title1: 'Trabajemos',
      title2: 'Juntos.',
      desc: 'Ya sea una pieza individual o una renovación interior completa, estamos listos para hacer realidad tu visión.',
      phoneLabel: 'Llama o Escribe',
      emailLabel: 'Correo',
      areaLabel: 'Áreas de Servicio',
      areas: 'Monterrey, San Pedro, Carretera Nacional',
      form: {
        first: 'Nombre',
        last: 'Apellido',
        email: 'Correo Electrónico',
        msg: 'Mensaje',
        btn: 'Enviar Cotización'
      }
    },
    en: {
      title1: "Let's Craft",
      title2: 'Together.',
      desc: "Whether it's a single heirloom piece or a full interior renovation, we're ready to bring your vision to life.",
      phoneLabel: 'Call or Text',
      emailLabel: 'Email Us',
      areaLabel: 'Service Areas',
      areas: 'Monterrey, San Pedro, Carretera Nacional',
      form: {
        first: 'First Name',
        last: 'Last Name',
        email: 'Email Address',
        msg: 'Message',
        btn: 'Send Inquiry'
      }
    }
  };
  const t = content[lang];

  return (
    <section id="contact" className="py-32 bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-6xl md:text-8xl font-serif tracking-tighter mb-12 font-light">{t.title1} <br /><span className="italic font-medium">{t.title2}</span></h2>
            <p className="text-xl text-stone-400 font-light mb-16 leading-relaxed max-w-md">
              {t.desc}
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="bg-white/5 p-4 rounded-full group-hover:bg-white group-hover:text-stone-900 transition-all duration-200">
                  <Phone className="size-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] uppercase tracking-widest text-stone-500 font-bold mb-1">{t.phoneLabel}</span>
                  <span className="text-xl font-medium">+52 (81) 8658 8759</span>
                </div>
              </div>
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="bg-white/5 p-4 rounded-full group-hover:bg-white group-hover:text-stone-900 transition-all duration-200">
                  <Mail className="size-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] uppercase tracking-widest text-stone-500 font-bold mb-1">{t.emailLabel}</span>
                  <span className="text-xl font-medium">laraizroja@gmail.com</span>
                </div>
              </div>
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="bg-white/5 p-4 rounded-full group-hover:bg-white group-hover:text-stone-900 transition-all duration-200">
                  <MapPin className="size-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] uppercase tracking-widest text-stone-500 font-bold mb-1">{t.areaLabel}</span>
                  <span className="text-lg font-medium">{t.areas}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 md:p-16 rounded-sm">
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-stone-400 text-[11px] uppercase tracking-widest font-bold cursor-pointer">{t.form.first}</label>
                  <input id="firstName" type="text" className="w-full border-b border-stone-200 py-3 text-stone-900 focus:outline-none focus:border-stone-900 focus-visible:ring-0 transition-colors duration-200" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-stone-400 text-[11px] uppercase tracking-widest font-bold cursor-pointer">{t.form.last}</label>
                  <input id="lastName" type="text" className="w-full border-b border-stone-200 py-3 text-stone-900 focus:outline-none focus:border-stone-900 focus-visible:ring-0 transition-colors duration-200" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-stone-400 text-[11px] uppercase tracking-widest font-bold cursor-pointer">{t.form.email}</label>
                <input id="email" type="email" className="w-full border-b border-stone-200 py-3 text-stone-900 focus:outline-none focus:border-stone-900 focus-visible:ring-0 transition-colors duration-200" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-stone-400 text-[11px] uppercase tracking-widest font-bold cursor-pointer">{t.form.msg}</label>
                <textarea id="message" rows={4} className="w-full border-b border-stone-200 py-3 text-stone-900 focus:outline-none focus:border-stone-900 focus-visible:ring-0 transition-colors duration-200 resize-none"></textarea>
              </div>
              <button type="button" className="w-full bg-stone-900 text-white py-5 rounded-full font-bold uppercase tracking-widest text-[13px] hover:bg-stone-800 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-2">
                {t.form.btn}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Newsletter = ({ lang }: SectionProps) => {
  const content = {
    es: {
      tag: 'Únete a la Lista',
      title1: 'Acceso Exclusivo e ',
      title2: 'Inspiración.',
      desc: 'Suscríbete para recibir inspiración de diseño mensual, acceso anticipado a promociones exclusivas y vistazos detrás de escena de nuestras últimas creaciones a medida.',
      placeholder: 'Ingresa tu correo electrónico',
      btn: 'Suscribirse'
    },
    en: {
      tag: 'Join The Insider List',
      title1: 'Exclusive Access & ',
      title2: 'Inspiration.',
      desc: 'Subscribe to receive monthly design inspiration, early access to exclusive promotions, and behind-the-scenes looks at our latest bespoke creations.',
      placeholder: 'Enter your email address',
      btn: 'Subscribe'
    }
  };
  const t = content[lang];

  return (
    <section className="py-24 bg-stone-100 border-t border-stone-200">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <span className="text-stone-500 text-[11px] uppercase tracking-[0.5em] mb-4 block font-semibold">{t.tag}</span>
        <h2 className="text-4xl md:text-5xl font-serif tracking-tighter mb-6 font-light">{t.title1} <span className="italic font-medium">{t.title2}</span></h2>
        <p className="text-stone-500 mb-10 leading-relaxed text-lg">
          {t.desc}
        </p>
        <form className="flex flex-col sm:flex-row max-w-xl mx-auto gap-4">
          <label htmlFor="newsletter-email" className="sr-only">{t.placeholder}</label>
          <input 
            id="newsletter-email"
            type="email" 
            placeholder={t.placeholder} 
            className="flex-1 bg-white border border-stone-200 px-6 py-4 text-stone-900 rounded-sm focus:outline-none focus:border-stone-900 focus-visible:ring-0 transition-colors duration-200"
            required
          />
          <button 
            type="submit"
            className="bg-stone-900 text-white px-8 py-4 uppercase tracking-widest text-[11px] font-bold rounded-sm hover:bg-stone-800 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-2"
          >
            {t.btn}
          </button>
        </form>
      </div>
    </section>
  );
};

const Footer = ({ lang }: SectionProps) => {
  return (
    <footer className="bg-stone-950 text-white py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex items-center gap-3">
          <div className="h-8 w-auto bg-white p-1 rounded-sm">
            <img src="https://www.carpinterialaraiz.mx/wp-content/uploads/2022/01/Mesa-de-trabajo-1-2x-8-3.png" alt="La Raíz Logo" className="h-full w-full object-contain" />
          </div>
          <span className="text-2xl font-serif font-semibold">La Raíz Roja</span>
        </div>
        
        <div className="flex gap-10 text-[11px] uppercase tracking-[0.3em] font-bold text-stone-500">
          <a href="#" className="hover:text-white transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 rounded-sm">Instagram</a>
          <a href="#" className="hover:text-white transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 rounded-sm">Pinterest</a>
          <a href="#" className="hover:text-white transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 rounded-sm">LinkedIn</a>
        </div>

        <p className="text-stone-600 text-sm font-light">
          © {new Date().getFullYear()} Carpintería La Raíz Roja. {lang === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}
        </p>
      </div>
    </footer>
  );
};

const WhatsAppButton = ({ lang }: SectionProps) => {
  return (
    <motion.a 
      href="https://wa.me/528186588759"
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
        {lang === 'es' ? 'Cotizar por WhatsApp' : 'Request Custom Quote'}
      </span>
    </motion.a>
  );
};

const Craftsmanship = ({ lang }: SectionProps) => {
  const content = {
    es: {
      tag: 'El Proceso',
      title1: 'Precisión',
      title2: 'Con Pasión.',
      desc: 'Cada corte es calculado. Cada veta es respetada. Nuestro taller es un santuario donde la madera cruda se transforma en arte funcional a través de un riguroso proceso de secado y ensamblaje de 12 pasos.',
      steps: [
        { title: 'Selección', desc: 'Seleccionamos a mano maderas de origen sustentable de aserraderos locales, enfocándonos en el carácter y la integridad estructural.' },
        { title: 'Secado', desc: 'La madera es secada al aire y horneada para asegurar estabilidad en cualquier ambiente.' },
        { title: 'Ensamblaje', desc: 'Uniones tradicionales de cola de milano y caja y espiga que perduran por generaciones.' }
      ],
      projectLabel: 'Proyecto Actual',
      project: 'Credenza de Roble Blanco',
      completion: 'Avance: 85%'
    },
    en: {
      tag: 'The Process',
      title1: 'Precision',
      title2: 'Meets Passion.',
      desc: 'Every cut is calculated. Every grain is respected. Our workshop is a sanctuary where raw timber is transformed into functional art through a rigorous 12-step seasoning and joinery process.',
      steps: [
        { title: 'Sourcing', desc: 'We hand-select sustainable hardwoods from local mills, focusing on character and structural integrity.' },
        { title: 'Seasoning', desc: 'Timber is air-dried and kiln-finished to ensure stability in any environment.' },
        { title: 'Joinery', desc: 'Traditional dovetail and mortise-and-tenon joints that last for generations.' }
      ],
      projectLabel: 'Current Project',
      project: 'White Oak Credenza',
      completion: 'Completion: 85%'
    }
  };
  const t = content[lang];

  return (
    <section id="services" className="py-32 bg-stone-950 text-white overflow-hidden relative">
      <div className="absolute right-0 top-0 h-full w-1/3 bg-stone-900/50 hidden lg:block"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-stone-500 text-[11px] uppercase tracking-[0.5em] mb-6 block font-semibold">{t.tag}</span>
            <h2 className="text-5xl md:text-7xl font-serif tracking-tighter mb-10 font-light">
              {t.title1} <br />
              <span className="italic font-medium text-stone-400">{t.title2}</span>
            </h2>
            <p className="text-xl text-stone-400 font-light leading-relaxed mb-12 max-w-lg">
              {t.desc}
            </p>
            
            <div className="space-y-12">
              {t.steps.map((step, i) => (
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
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1200" 
                alt="Workshop craftsmanship" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-stone-900 p-10 hidden md:block border border-white/5">
              <div className="flex flex-col gap-4">
                <span className="text-[10px] uppercase tracking-[0.3em] text-stone-500">{t.projectLabel}</span>
                <span className="text-2xl font-serif italic">{t.project}</span>
                <div className="w-20 h-px bg-stone-700"></div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-stone-500">{t.completion}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  const [lang, setLang] = useState<Language>('es');

  return (
    <div className="min-h-screen bg-[#fcfaf7] font-sans selection:bg-stone-900 selection:text-white">
      <Navbar lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        
        {/* Intro Section */}
        <section className="py-40 border-b border-stone-100 relative">
          <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden 2xl:block">
            <span className="vertical-text text-[10px] uppercase tracking-[0.5em] text-stone-300">
              La Raíz Roja — Monterrey, N.L.
            </span>
          </div>
          <div className="max-w-5xl mx-auto px-6 text-center">
            {lang === 'es' ? (
              <>
                <h2 className="text-5xl md:text-7xl font-serif tracking-tighter mb-12 leading-[1.1] font-light">
                  El placer de hacer el trabajo <br />
                  <span className="italic font-medium text-rose-800">le aporta perfección.</span>
                </h2>
                <p className="text-xl text-stone-500 font-light leading-relaxed max-w-3xl mx-auto">
                  En Carpintería La Raíz Roja, creemos que la madera es más que un simple material—es historia viva. 
                  Nuestros carpinteros expertos combinan técnicas tradicionales con diseño moderno para crear espacios increíbles.
                </p>
              </>
            ) : (
              <>
                <h2 className="text-5xl md:text-7xl font-serif tracking-tighter mb-12 leading-[1.1] font-light">
                  The pleasure of doing the job <br />
                  <span className="italic font-medium text-rose-800">brings perfection.</span>
                </h2>
                <p className="text-xl text-stone-500 font-light leading-relaxed max-w-3xl mx-auto">
                  At Carpintería La Raíz Roja, we believe that wood is more than just a material—it's living history. 
                  Our expert carpenters combine traditional techniques with modern design to create incredible spaces.
                </p>
              </>
            )}
          </div>
        </section>

        <Portfolio lang={lang} />
        <Promotions lang={lang} />
        <Craftsmanship lang={lang} />
        <Reviews lang={lang} />
        <Contact lang={lang} />
        <Newsletter lang={lang} />
      </main>
      <Footer lang={lang} />
      <WhatsAppButton lang={lang} />
    </div>
  );
}
