import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu as MenuIcon, 
  X, 
  ChevronRight, 
  MapPin, 
  Phone, 
  Instagram, 
  Facebook, 
  Clock, 
  Calendar,
  Star,
  ArrowRight,
  Utensils,
  Leaf,
  ChefHat,
  Users,
  Plus,
  IceCream
} from 'lucide-react';
import { cn } from './lib/utils';
import { MENU_ITEMS, MenuItem, MenuCategory } from './constants';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'A Carta', href: '#menu' },
    { name: 'O Espaço', href: '#space' },
    { name: 'Filosofia', href: '#philosophy' },
    { name: 'Contactos', href: '#contacts' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-4 md:px-12",
      isScrolled ? "bg-dark/80 backdrop-blur-xl py-3 border-b border-white/5" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="font-display text-xl md:text-2xl font-bold tracking-[0.2em] flex items-center gap-3">
          <div className="w-6 h-6 md:w-8 md:h-8 bg-gold rotate-45 flex items-center justify-center transition-transform hover:rotate-90 duration-700">
            <div className="w-3 h-3 md:w-4 md:h-4 bg-dark -rotate-45 transition-transform hover:-rotate-90 duration-700" />
          </div>
          <span className="text-white">
            GEOMÉTRICO
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60 hover:text-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="border border-gold/50 text-gold px-8 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-gold hover:text-dark transition-all duration-500">
            Reservar
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <MenuIcon size={28} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 bg-dark z-[60] flex flex-col p-8"
          >
            <div className="flex justify-end">
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-white">
                <X size={32} />
              </button>
            </div>
            <div className="flex flex-col gap-8 mt-12">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-5xl font-display font-bold tracking-tighter text-white border-b border-white/10 pb-4"
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-gold text-dark py-6 text-xl font-bold uppercase tracking-widest mt-4">
                Reservar Mesa
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center pt-32 pb-24 group cursor-default">
      {/* Background with geometric overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://cdn.website.dish.co/media/24/b7/9692843/Geometrico-0002-2-jpg.jpg" 
          alt="Restaurante Geométrico Interior"
          className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-all duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-dark/50 group-hover:bg-dark/30 transition-all duration-1000" />
        <div className="absolute inset-0 geometric-grid opacity-10" />
      </div>

      <div className="relative z-10 text-center px-6 w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center justify-center"
        >
          <span className="text-gold font-bold uppercase tracking-[0.4em] text-xs mb-6 md:mb-8 block">
            Porto • Cedofeita
          </span>
          <h1 className="text-white font-display text-5xl sm:text-6xl md:text-8xl lg:text-[9rem] font-bold tracking-tighter leading-[0.85] mb-8 md:mb-10">
            GEOMETRIA<br />
            <span className="italic font-light text-paper/80">DO SABOR</span>
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-4 md:mt-8">
            <button className="bg-gold text-dark px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-all duration-500 flex items-center gap-3 group w-full sm:w-auto justify-center">
              A Carta <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-white/30 text-white px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-dark transition-all duration-500 backdrop-blur-sm w-full sm:w-auto justify-center">
              Reservar Mesa
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
};

const Philosophy = () => {
  return (
    <section id="philosophy" className="py-16 md:py-40 px-6 bg-stone relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 aspect-[4/5] overflow-hidden shadow-2xl border border-white/5 group cursor-pointer"
          >
            <img 
              src="https://cdn.thefork.com/tf-lab/image/upload/w_1000,h_1250,c_fill,q_auto,f_auto,g_auto:subject/restaurant/7bbae1d6-0dce-42c6-9374-535e4d46299d/80de0a6c-963c-4b4e-8368-d3523e052f7a.jpg" 
              alt="Detalhe Gastronómico"
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-dark/20 group-hover:opacity-0 transition-opacity duration-1000" />
          </motion.div>
          {/* Geometric Accent */}
          <div className="absolute -bottom-10 -right-10 w-80 h-80 border border-gold/10 -z-0 hidden md:block" />
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold/5 -z-0" />
        </div>

        <div className="flex flex-col gap-10">
          <div className="space-y-4">
            <span className="text-gold font-bold uppercase tracking-[0.4em] text-[10px]">A Nossa Essência</span>
            <h2 className="text-5xl sm:text-6xl md:text-8xl font-display font-bold tracking-tighter leading-[0.85] text-white">
              Tradição<br />
              <span className="italic font-light text-gold/80">REINVENTADA.</span>
            </h2>
          </div>
          <p className="text-xl text-white/60 leading-relaxed max-w-xl font-light">
            No coração de Cedofeita, o Geométrico nasce da vontade de unir a robustez da pedra portuense à delicadeza da alta gastronomia. Cada prato é uma composição onde a técnica rigorosa serve o produto puro.
          </p>
          <div className="grid grid-cols-2 gap-12 pt-10 border-t border-white/10">
            <div>
              <h4 className="font-display font-bold text-4xl mb-2 text-white">01</h4>
              <p className="text-[10px] text-gold/60 uppercase tracking-[0.3em] font-bold">Respeito pela Origem</p>
            </div>
            <div>
              <h4 className="font-display font-bold text-4xl mb-2 text-white">02</h4>
              <p className="text-[10px] text-gold/60 uppercase tracking-[0.3em] font-bold">Estética de Autor</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MenuSection = () => {
  const suggestions = [
    {
      title: "Entradas",
      subtitle: "Petiscos",
      desc: "Para partilhar com rigor e sabor.",
      image: "https://cdn.website.dish.co/media/7d/ae/9692880/Geometrico-0008-jpg.jpg",
      category: "A Nossa Seleção"
    },
    {
      title: "Pratos de Autor",
      subtitle: "Principais",
      desc: "A geometria perfeita em cada garfada.",
      image: "https://cdn.thefork.com/tf-lab/image/upload/w_500,h_500,c_fill,q_auto,f_auto,g_auto:subject/restaurant/7bbae1d6-0dce-42c6-9374-535e4d46299d/3069bf1e-97d3-4ca7-b7b6-6c5708908551.jpg",
      category: "Cozinha Criativa"
    },
    {
      title: "Especialidades",
      subtitle: "Para 2 Pessoas",
      desc: "Tradição reinventada para momentos únicos.",
      image: "https://cdn.thefork.com/tf-lab/image/upload/w_640,c_fill,q_auto,f_auto/restaurant/7bbae1d6-0dce-42c6-9374-535e4d46299d/468e02d6-a103-44c1-b3b5-5d9f23282682.png",
      category: "Momentos de Partilha"
    },
    {
      title: "Sobremesas",
      subtitle: "Doces",
      desc: "O final geométrico e doce da sua noite.",
      image: "https://cdn.website.dish.co/media/7e/cf/9692913/Geometrico-0103-jpg.jpg",
      category: "Geometria Doce"
    }
  ];

  const alternatives = [
    {
      title: "Vegetarianos",
      desc: "A essência da terra em composições geométricas. Pratos pensados para quem procura a pureza do produto vegetal com técnica de autor.",
      image: "https://cdn.thefork.com/tf-lab/image/upload/w_1920,c_fill,q_auto,f_auto/restaurant/7bbae1d6-0dce-42c6-9374-535e4d46299d/rejected/68bd8a83-6539-4178-9757-4458199eda58.jpg",
      tag: "Pureza"
    },
    {
      title: "Mixologia",
      desc: "Cocktails de autor e uma garrafeira selecionada. A geometria líquida que eleva a experiência gastronómica a um novo patamar.",
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800",
      tag: "Líquido"
    }
  ];

  return (
    <section id="menu" className="pt-16 md:pt-40 pb-16 md:pb-20 px-6 bg-dark relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section 1: Sugestão do Chefe */}
        <div className="mb-32">
          <div className="flex flex-col items-center text-center mb-16 space-y-4">
            <span className="text-gold font-bold uppercase tracking-[0.5em] text-[10px]">A Nossa Carta</span>
            <h2 className="text-5xl sm:text-6xl md:text-8xl font-display font-bold tracking-tighter text-white uppercase">
              Sugestão <span className="italic font-light text-gold/40 normal-case">do chefe</span>
            </h2>
            <div className="w-24 h-[1px] bg-gold/30 mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {suggestions.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative h-[500px] overflow-hidden cursor-pointer"
              >
                {/* Image Container */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-[1.5s] ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-dark/40 group-hover:bg-dark/10 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent opacity-90" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 z-10 p-8 flex flex-col justify-between border border-white/5 group-hover:border-gold/20 transition-colors duration-700">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-bold text-gold/60 uppercase tracking-[0.3em] border-l border-gold/30 pl-3">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <Star size={14} className="text-gold/40 group-hover:text-gold transition-colors duration-500" />
                  </div>

                  <div className="flex flex-col justify-end">
                    <div className="overflow-hidden mb-2">
                      <span className="block text-[10px] font-bold text-gold uppercase tracking-[0.4em] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-4xl font-display font-bold text-white uppercase tracking-tighter leading-none">
                      {item.title}<br />
                      <span className="italic font-light text-gold/40 normal-case text-2xl">{item.subtitle}</span>
                    </h3>
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-out">
                      <div className="overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        <div className="h-[1px] w-full bg-gold/30 mt-4 mb-3 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-200" />
                        <p className="text-white/50 text-xs font-light leading-relaxed pb-1">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-white/0 group-hover:border-gold/30 transition-all duration-700" />
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-white/0 group-hover:border-gold/30 transition-all duration-700" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 2: Alternativas */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="space-y-6">
              <span className="text-gold font-bold uppercase tracking-[0.5em] text-[10px] block">Harmonização & Essência</span>
              <h2 className="text-5xl sm:text-6xl md:text-8xl font-display font-bold tracking-tighter text-white uppercase leading-[0.9]">
                Além da <span className="italic font-light text-gold/40 normal-case">Cozinha</span>
              </h2>
            </div>
            <button className="border border-white/10 text-white/60 hover:text-white hover:border-white px-8 py-4 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-500">
              Ver Menu Completo
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {alternatives.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="group relative h-[400px] overflow-hidden rounded-3xl border border-white/5 cursor-pointer"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />
                
                <div className="absolute inset-0 p-10 md:p-12 flex flex-col justify-end pb-12 max-w-md">
                  <h3 className="text-4xl font-display font-bold text-white uppercase tracking-tighter mb-4">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-sm font-light leading-relaxed mb-8">
                    {item.desc}
                  </p>
                  <div className="flex items-center gap-4 text-gold group-hover:gap-6 transition-all duration-500">
                    <span className="uppercase tracking-[0.3em] text-[10px] font-bold">Explorar</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    {
      url: "https://cdn.website.dish.co/media/7b/ef/9692850/Geometrico-0108-jpg.jpg",
      title: "O Espaço",
      category: "Design Interior"
    },
    {
      url: "https://cdn.website.dish.co/media/76/79/9692855/Geometrico-0077-jpg.jpg",
      title: "Atmosfera",
      category: "Luz & Sombra"
    },
    {
      url: "https://cdn.website.dish.co/media/31/42/9692860/Geometrico-0001-jpg.jpg",
      title: "Detalhes",
      category: "Mise en Place"
    },
    {
      url: "https://cdn.website.dish.co/media/2a/87/9692865/Geometrico-0003-jpg.jpg",
      title: "Cozinha",
      category: "Rigor & Técnica"
    }
  ];

  return (
    <section id="space" className="pt-16 md:pt-20 pb-16 md:pb-40 px-6 bg-dark relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gold/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-white/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <span className="text-gold font-bold uppercase tracking-[0.5em] text-[10px] block">O Espaço</span>
            <h2 className="text-5xl sm:text-6xl md:text-8xl font-display font-bold tracking-tighter text-white leading-none">
              Ambiente &<br />
              <span className="italic font-light text-paper/40">DESIGN.</span>
            </h2>
          </div>
          <p className="text-white/40 max-w-sm text-sm font-light leading-relaxed border-l border-white/10 pl-8">
            Um refúgio minimalista onde a pedra bruta do Porto encontra a sofisticação das linhas contemporâneas. Cada detalhe foi pensado para elevar a experiência sensorial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 auto-rows-[250px] md:auto-rows-[350px]">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className={cn(
                "overflow-hidden relative group border border-white/5 cursor-pointer",
                idx === 0 ? "md:col-span-8 md:row-span-2" : "",
                idx === 1 ? "md:col-span-4 md:row-span-1" : "",
                idx === 2 ? "md:col-span-4 md:row-span-1" : "",
                idx === 3 ? "md:col-span-12 md:row-span-1" : ""
              )}
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay with Info */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {img.category}
                </span>
                <h3 className="text-2xl font-display font-bold text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {img.title}
                </h3>
              </div>

              {/* Minimal Border Accent */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-white/0 group-hover:border-white/20 transition-all duration-500" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-white/0 group-hover:border-white/20 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutUs = () => {
  return (
    <section id="about" className="py-16 md:py-40 px-6 bg-stone relative overflow-hidden border-t border-white/5">
      {/* Geometric Background Accents */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] border border-white/5 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] border border-white/5 rounded-full translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
          <div className="space-y-6">
            <span className="text-gold font-bold uppercase tracking-[0.5em] text-[10px] block">A Nossa História</span>
            <h2 className="text-5xl sm:text-6xl md:text-8xl font-display font-bold tracking-tighter text-white uppercase leading-[0.9]">
              Sobre <span className="italic font-light text-gold/40 normal-case">nós</span>
            </h2>
          </div>
          <p className="text-white/40 max-w-sm text-sm font-light leading-relaxed border-l border-white/10 pl-8">
            Uma viagem pela nossa essência, reconhecida por quem nos visita e pela crítica especializada.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          {/* Press (Editorial Style) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8 relative h-[400px] md:h-[600px] group overflow-hidden border border-white/5 cursor-pointer"
          >
            <img 
              src="https://cdn.website.dish.co/media/12/ca/9692979/Geometrico-0039-jpg.jpg" 
              alt="Press"
              className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />
            
            <div className="absolute inset-0 p-10 md:p-16 flex flex-col justify-end">
              <div className="overflow-hidden mb-4">
                <span className="text-gold font-bold uppercase tracking-[0.5em] text-[10px] block transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  Media & Imprensa
                </span>
              </div>
              <h3 className="text-4xl md:text-6xl font-display font-bold text-white uppercase tracking-tighter mb-6">
                Press
              </h3>
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-out">
                <div className="overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <p className="text-white/60 max-w-md font-light leading-relaxed mb-8">
                    O que a imprensa diz sobre nós. Saiba tudo!
                  </p>
                  <div className="flex items-center gap-4 text-gold group-hover:gap-6 transition-all duration-500">
                    <span className="uppercase tracking-[0.3em] text-[10px] font-bold">Ler Artigos</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Restaurante Recomendado (Badge Card) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="lg:col-span-4 bg-dark border border-white/5 p-10 md:p-16 flex flex-col items-center justify-center text-center group relative overflow-hidden cursor-pointer"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-gold/5 rounded-full blur-3xl group-hover:bg-gold/10 transition-colors duration-700" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
            
            <div className="w-48 h-48 md:w-56 md:h-56 mb-12 relative flex items-center justify-center">
              {/* Geometric rotating accent */}
              <div className="absolute inset-0 border border-gold/20 rotate-45 group-hover:rotate-90 transition-transform duration-1000 ease-out" />
              <div className="absolute inset-4 border border-white/10 -rotate-12 group-hover:rotate-0 transition-transform duration-1000 ease-out" />
              
              <img 
                src="https://cdn.website.dish.co/media/df/26/9700706/Geometrico-guru-png.jpg" 
                alt="Restaurante Recomendado"
                className="w-full h-full object-contain p-6 relative z-10 group-hover:scale-110 transition-transform duration-700 drop-shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <h3 className="text-2xl font-display font-bold text-white uppercase tracking-tighter mb-4">
              Restaurante<br />Recomendado
            </h3>
            <div className="h-[1px] w-12 bg-gold/30 mb-6 group-hover:w-24 transition-all duration-500" />
            <p className="text-white/50 text-sm font-light leading-relaxed">
              Reconhecimento da qualidade que todos os dias levamos até si.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  const reviews = [
    {
      name: "Maria Silva",
      source: "TheFork",
      rating: 5,
      text: "Uma experiência sensorial única. A forma como os sabores se cruzam com a apresentação geométrica dos pratos é divinal."
    },
    {
      name: "João Pereira",
      source: "TripAdvisor",
      rating: 5,
      text: "O ambiente minimalista e o serviço irrepreensível fazem deste espaço um verdadeiro tesouro em Cedofeita."
    },
    {
      name: "Ana Rodrigues",
      source: "Google Reviews",
      rating: 5,
      text: "Cada prato é uma obra de arte. A atenção ao detalhe e a qualidade dos ingredientes justificam todo o reconhecimento."
    }
  ];

  return (
    <section id="reviews" className="py-16 md:py-32 px-6 bg-dark relative overflow-hidden border-t border-white/5">
      {/* Background Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rotate-45 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <span className="text-gold font-bold uppercase tracking-[0.5em] text-[10px]">Testemunhos</span>
          <h2 className="text-5xl sm:text-6xl md:text-8xl font-display font-bold tracking-tighter text-white uppercase">
            A Voz de <span className="italic font-light text-gold/40 normal-case">quem nos visita</span>
          </h2>
          <div className="w-24 h-[1px] bg-gold/30 mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              className="bg-stone border border-white/5 p-8 md:p-12 relative group hover:border-gold/30 transition-colors duration-500 flex flex-col"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-gold fill-gold" />
                ))}
              </div>
              <p className="text-white/70 font-light leading-relaxed mb-8 text-sm md:text-base flex-grow">
                "{review.text}"
              </p>
              <div className="mt-auto">
                <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-1">{review.name}</h4>
                <span className="text-gold/60 text-[10px] uppercase tracking-[0.2em]">{review.source}</span>
              </div>

              {/* Geometric Corner */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contacts" className="py-16 md:py-40 px-6 bg-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
        <div className="flex flex-col gap-12">
          <div>
            <span className="text-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Contactos</span>
            <h2 className="text-5xl sm:text-6xl md:text-8xl font-display font-bold tracking-tighter mb-8 text-white">Visite-nos no Porto</h2>
            <p className="text-white/40 text-lg max-w-md font-light">
              Estamos situados no coração artístico da cidade, prontos para lhe proporcionar uma noite memorável.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-12">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-dark border border-white/5 flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-gold" />
              </div>
              <div>
                <h4 className="font-bold uppercase tracking-[0.2em] text-[10px] mb-2 text-gold">Localização</h4>
                <p className="text-sm text-white/70">Rua de Cedofeita, 450<br />4050-174 Porto, Portugal</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-dark border border-white/5 flex items-center justify-center shrink-0">
                <Phone size={20} className="text-gold" />
              </div>
              <div>
                <h4 className="font-bold uppercase tracking-[0.2em] text-[10px] mb-2 text-gold">Reservas</h4>
                <p className="text-sm text-white/70">+351 220 000 000<br />reservas@geometrico.pt</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-dark border border-white/5 flex items-center justify-center shrink-0">
                <Clock size={20} className="text-gold" />
              </div>
              <div>
                <h4 className="font-bold uppercase tracking-[0.2em] text-[10px] mb-2 text-gold">Horário</h4>
                <p className="text-sm text-white/70">Terça a Sábado<br />12:30 - 15:00 | 19:30 - 23:00</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-dark border border-white/5 flex items-center justify-center shrink-0">
                <Calendar size={20} className="text-gold" />
              </div>
              <div>
                <h4 className="font-bold uppercase tracking-[0.2em] text-[10px] mb-2 text-gold">Social</h4>
                <div className="flex gap-6 mt-2">
                  <Instagram size={20} className="text-white/40 hover:text-gold cursor-pointer transition-colors" />
                  <Facebook size={20} className="text-white/40 hover:text-gold cursor-pointer transition-colors" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-[400px] md:h-[600px] bg-dark overflow-hidden border border-white/5 group">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3004.475456448356!2d-8.62128762341253!3d41.15144581094038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd24650699999999%3A0x9999999999999999!2sRua%20de%20Cedofeita%20450%2C%204050-174%20Porto!5e0!3m2!1spt-PT!2spt!4v1711984000000!5m2!1spt-PT!2spt"
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="opacity-30 group-hover:opacity-100 group-hover:filter-none transition-all duration-1000"
            title="Localização Restaurante Geométrico"
          ></iframe>
          <div className="absolute inset-0 pointer-events-none geometric-grid opacity-10" />
          
          {/* Floating Label */}
          <div className="absolute bottom-8 right-8 z-10 pointer-events-none">
            <div className="bg-dark/80 backdrop-blur-md border border-white/10 p-4 flex items-center gap-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <div className="w-10 h-10 bg-gold rotate-45 flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-dark -rotate-45" />
              </div>
              <div>
                <span className="text-gold font-bold uppercase tracking-widest text-[10px] block">Cedofeita, Porto</span>
                <span className="text-white font-display font-bold text-lg tracking-tighter">Ver no Google Maps</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="font-display text-2xl font-bold tracking-[0.2em] flex items-center gap-3">
            <div className="w-8 h-8 bg-white rotate-45 flex items-center justify-center">
              <div className="w-4 h-4 bg-dark -rotate-45" />
            </div>
            <span>GEOMÉTRICO</span>
          </div>
          <p className="text-white/40 text-xs tracking-[0.3em] uppercase font-bold">Cozinha de Autor • Porto</p>
        </div>

        <div className="flex gap-12 text-sm font-bold uppercase tracking-[0.2em] text-white/60">
          <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Termos</a>
          <a href="#" className="hover:text-white transition-colors">Livro de Reclamações</a>
        </div>

        <p className="text-white/20 text-xs uppercase tracking-widest">
          © 2026 Restaurante Geométrico. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

const StickyCTA = () => {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 md:hidden w-[calc(100%-3rem)]">
      <button className="w-full bg-gold text-white py-5 font-bold uppercase tracking-[0.2em] shadow-2xl flex items-center justify-center gap-3 active:scale-95 transition-transform">
        <Calendar size={20} />
        Reservar Mesa
      </button>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <MenuSection />
        <Gallery />
        <AboutUs />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
