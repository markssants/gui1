/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, 
  Download, 
  Instagram, 
  Music, 
  Calendar, 
  Image as LucideImage, 
  Mail, 
  ArrowRight, 
  Menu, 
  X,
  Plus,
  Activity,
  AudioLines
} from 'lucide-react';
import { useState, useEffect } from 'react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Biografia', href: '#bio' },
    { name: 'Agenda', href: '#agenda' },
    { name: 'Músicas', href: '#music' },
    { name: 'Galeria', href: '#gallery' },
    { name: 'Identidade', href: '#brand' },
    { name: 'Contratar', href: '#booking' },
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 font-headline ${isScrolled ? 'bg-surface/80 backdrop-blur-2xl py-4 shadow-neon-primary/10' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <span className="text-2xl font-bold tracking-tighter text-primary">PACHECCO</span>
          
          <div className="hidden md:flex gap-10 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-on-surface/60 hover:text-primary transition-colors uppercase text-xs tracking-widest font-bold"
              >
                {link.name}
              </a>
            ))}
          </div>

          <button className="bg-gradient-to-r from-primary to-tertiary text-surface font-bold px-8 py-2.5 rounded-xl active:scale-95 duration-200 transition-all font-headline text-sm">
            BAIXAR PRESSKIT
          </button>
        </div>
        <div className="bg-gradient-to-r from-transparent via-primary/20 to-transparent h-[1px] w-full mt-4" />
      </nav>

      {/* Side Nav for Desktop */}
      <aside className="hidden lg:flex h-screen w-20 hover:w-64 transition-all duration-500 fixed left-0 top-0 z-[110] flex-col py-8 bg-surface/90 backdrop-blur-3xl border-r border-primary/5 group overflow-hidden shadow-2xl">
        <div className="px-6 mb-12">
          <span className="text-primary font-black italic block group-hover:hidden">P.</span>
          <span className="text-primary font-black italic hidden group-hover:block text-xl tracking-tighter uppercase">PACHECCO</span>
        </div>
        <div className="flex flex-col gap-2 flex-grow">
          {[
            { icon: <Plus size={20} />, label: 'Início', href: '#' },
            { icon: <Activity size={20} />, label: 'Músicas', href: '#music' },
            { icon: <Calendar size={20} />, label: 'Tour', href: '#agenda' },
            { icon: <LucideImage size={20} />, label: 'Mídia', href: '#gallery' },
            { icon: <Music size={20} />, label: 'Brand', href: '#brand' },
            { icon: <Mail size={20} />, label: 'Contato', href: '#booking' },
          ].map((item, i) => (
            <a 
              key={i}
              href={item.href}
              className="flex items-center gap-6 px-6 py-4 text-on-surface/40 hover:text-primary hover:bg-white/5 transition-all"
            >
              <div className="shrink-0">{item.icon}</div>
              <span className="font-headline uppercase text-[10px] tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </aside>
    </>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-surface">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          className="w-full h-full object-cover opacity-50" 
          alt="PACHECCO Performing" 
          src="/regenerated_image_1777430426012.png"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-surface/80 via-transparent to-surface/80"></div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center px-4"
      >
        <h1 className="font-headline text-[15vw] leading-[0.8] font-bold tracking-tighter text-on-surface drop-shadow-2xl">
          PACHECCO
        </h1>
        <p className="font-headline text-primary mt-8 tracking-[0.4em] uppercase text-sm md:text-xl font-medium">
          Experiência Sonora
        </p>
        
        <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center items-center">
          <div className="liquid-glass p-1 rounded-xl">
            <button className="px-10 py-5 font-headline font-bold bg-primary text-surface rounded-xl hover:shadow-neon-primary transition-all duration-300 uppercase tracking-widest text-xs">
              EXPLORAR SONS
            </button>
          </div>
          <button className="text-on-surface border border-white/10 px-10 py-5 rounded-xl hover:bg-white/10 transition-all backdrop-blur-md uppercase font-bold tracking-widest text-xs">
            CONTRATAR
          </button>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[10px] uppercase tracking-widest">DESLIZE PARA BAIXO</span>
        <motion.div 
          animate={{ height: [0, 48, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] bg-gradient-to-b from-primary to-transparent"
        />
      </div>
    </section>
  );
};

const Bio = () => {
  return (
    <section className="py-32 px-8 md:px-24 bg-surface-low relative overflow-hidden" id="bio">
      {/* Decorative Blur */}
      <div className="absolute -top-64 -left-64 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-tertiary/20 blur-3xl rounded-full" />
          <img 
            className="relative z-10 w-full aspect-[4/5] object-cover rounded-3xl shadow-2xl transition-all duration-700 hover:grayscale" 
            alt="Guilherme Pacheco Portrait" 
            src="/regenerated_image_1777429091530.png"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 space-y-10"
        >
          <div>
            <span className="font-headline text-secondary tracking-[0.3em] uppercase text-xs font-bold block mb-4">Biografia do Artista</span>
            <h2 className="font-headline text-5xl md:text-8xl font-bold leading-none tracking-tighter">
              Guilherme <br/>
              <span className="text-primary italic">Pacheco</span>
            </h2>
          </div>

          <div className="space-y-6 font-body text-on-surface/70 text-lg leading-relaxed max-w-xl">
            <p>
              Baseado no coração pulsante do underground eletrônico, PACHECCO é mais do que um DJ — ele é um arquiteto de paisagens sonoras...
              Com um estilo próprio que funde ritmos hipnóticos profundos com texturas industriais agressivas, seus sets são uma jornada pelo "Sonic Flux".
            </p>
            <p>
              Com mais de uma década de evolução na cena, Guilherme dominou a arte de ler a pista, transformando pistas de dança em espaços comunitários de transcendência. 
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 py-10 border-t border-white/5">
            {[
              { val: '120+', label: 'Shows Anuais', color: 'text-primary' },
              { val: '15', label: 'Países', color: 'text-tertiary' },
              { val: '1M+', label: 'Streams', color: 'text-secondary' },
            ].map((stat, i) => (
              <div key={i}>
                <p className={`${stat.color} font-headline text-4xl font-bold`}>{stat.val}</p>
                <p className="text-[10px] uppercase tracking-widest text-on-surface/40 mt-2 font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Agenda = () => {
  const events = [
    { date: 'MAR 24', year: '2024', title: 'Warehouse Rituals', location: 'Berlim, DE', status: 'tickets', color: 'text-primary' },
    { date: 'ABR 02', year: '2024', title: 'The Void Club', location: 'São Paulo, BR', status: 'soldout', color: 'text-tertiary' },
    { date: 'ABR 15', year: '2024', title: 'Neon Horizon Festival', location: 'Ibiza, ES', status: 'tickets', color: 'text-secondary' },
  ];

  return (
    <section className="py-32 px-8 md:px-24 bg-surface" id="agenda">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div>
            <span className="font-headline text-tertiary tracking-[0.3em] uppercase text-xs font-bold">Datas da Tour</span>
            <h2 className="font-headline text-5xl md:text-6xl font-bold mt-4 tracking-tighter">Próximos Fluxos</h2>
          </div>
          <a href="#" className="text-primary hover:text-primary/70 transition-all flex items-center gap-3 font-headline text-sm font-bold uppercase tracking-widest">
            Ver Agenda Completa <ArrowRight size={18} />
          </a>
        </div>

        <div className="liquid-glass rounded-[40px] overflow-hidden shadow-2xl border-white/5">
          <div className="divide-y divide-white/5">
            {events.map((event, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="grid grid-cols-1 md:grid-cols-4 items-center p-10 hover:bg-white/5 transition-all group cursor-default"
              >
                <div className="flex flex-col mb-4 md:mb-0">
                  <span className={`text-4xl font-headline font-bold ${event.color}`}>{event.date}</span>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-on-surface/30 font-bold">{event.year}</span>
                </div>
                <div className="md:col-span-2 space-y-1">
                  <h4 className="text-2xl font-headline font-bold text-on-surface group-hover:text-primary transition-colors">{event.title}</h4>
                  <p className="text-on-surface/50 font-medium tracking-wide">{event.location}</p>
                </div>
                <div className="flex md:justify-end mt-6 md:mt-0">
                  <button className={`px-8 py-3 rounded-xl border font-headline font-bold text-[10px] uppercase tracking-[0.2em] transition-all duration-300 ${
                    event.status === 'soldout' 
                      ? 'border-white/10 text-on-surface/30 cursor-not-allowed' 
                      : `border-${event.color.split('-')[1]}/30 ${event.color} group-hover:bg-${event.color.split('-')[1]} group-hover:text-surface`
                  }`}>
                    {event.status === 'soldout' ? 'Esgotado' : 'Garantir Ingresso'}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const MusicSection = () => {
  return (
    <section className="py-32 px-8 md:px-24 bg-surface-low" id="music">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 text-center">
          <span className="font-headline text-primary tracking-[0.3em] uppercase text-xs font-bold">Discografia</span>
          <h2 className="font-headline text-5xl md:text-7xl font-bold mt-4 tracking-tighter">Lançamentos</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Main Player Mix */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="liquid-glass p-10 rounded-[40px] border-primary/10 group"
          >
            <div className="flex items-center gap-6 mb-10">
              <div className="w-20 h-20 bg-secondary/20 rounded-2xl flex items-center justify-center text-secondary">
                <AudioLines size={40} />
              </div>
              <div>
                <h3 className="font-headline text-2xl font-bold uppercase tracking-tight">Flux Mix 042</h3>
                <p className="text-xs text-on-surface/40 font-bold tracking-widest mt-1">SET EXCLUSIVO SOUNDCLOUD</p>
              </div>
            </div>
            
            <div className="relative aspect-video bg-surface-high rounded-3xl flex items-center justify-center overflow-hidden border border-white/5">
              <div className="flex items-end gap-1.5 h-32 px-10">
                {[...Array(20)].map((_, i) => (
                  <motion.div 
                    key={i}
                    animate={{ height: [`${Math.random() * 100}%`, `${Math.random() * 100}%`] }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatType: "mirror" }}
                    className="w-1.5 bg-primary/40 rounded-full"
                  />
                ))}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-surface-highest/80 to-transparent flex items-end p-8">
                <button className="w-16 h-16 rounded-2xl bg-primary text-surface flex items-center justify-center hover:scale-110 transition-transform shadow-neon-primary">
                  <Play fill="currentColor" size={24} />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Track List */}
          <div className="flex flex-col gap-6">
            {[
              { title: 'Liquid Tension', year: '2023', color: 'from-primary to-tertiary', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=400' },
              { title: 'Obsidian Ghost', year: '2023', color: 'from-tertiary to-secondary', image: '/regenerated_image_1777430732778.png' },
              { title: 'Cyber Ritual', year: '2024', color: 'from-secondary to-primary', image: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=400' },
            ].map((track, i) => (
              <motion.div 
                key={i}
                whileHover={{ x: 10 }}
                className="flex items-center gap-8 p-6 liquid-glass rounded-3xl cursor-pointer group"
              >
                <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 group-hover:scale-105 transition-transform duration-500 bg-surface">
                  <img src={track.image} alt={track.title} className="w-full h-full object-cover group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="flex-grow">
                  <h4 className="font-headline text-xl font-bold uppercase tracking-tight">{track.title}</h4>
                  <p className="text-[10px] text-on-surface/40 font-bold tracking-[0.2em] mt-1">PACHECCO, {track.year}</p>
                </div>
                <button className="text-primary opacity-40 group-hover:opacity-100 transition-opacity">
                  <Play fill="currentColor" size={32} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  return (
    <section className="py-32 px-8 md:px-24 bg-surface" id="gallery">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <h2 className="font-headline text-5xl md:text-6xl font-bold tracking-tighter">
            Galeria <span className="text-tertiary italic">Visual</span>
          </h2>
          <p className="text-on-surface/40 max-w-sm uppercase text-[10px] tracking-widest leading-loose font-bold">
            Capture a energia da pista. Uma coleção de momentos da turnê mundial.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 min-h-[800px]">
          <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-[40px]">
            <img className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" src="/regenerated_image_1777430122758.png" alt="Tour Photo" />
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </div>
          <div className="col-span-2 relative group overflow-hidden rounded-[40px]">
            <img className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" src="/regenerated_image_1777430200935.png" alt="Tour Photo" />
            <div className="absolute inset-0 bg-tertiary/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </div>
          <div className="relative group overflow-hidden rounded-[40px]">
            <img className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" src="/regenerated_image_1777430531280.png" alt="Tour Photo" />
          </div>
          <div className="relative group overflow-hidden rounded-[40px] bg-surface-high flex items-center justify-center border border-white/5 p-8 text-center cursor-pointer">
            <img 
              className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-500" 
              src="/regenerated_image_1777430635864.png" 
              alt="Background" 
            />
             <div className="relative z-10 flex flex-col items-center gap-4">
                <Plus size={40} className="text-primary" />
                <span className="font-headline font-bold text-sm tracking-widest uppercase">Ver Tudo</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const VisualIdentity = () => {
  return (
    <section className="py-32 px-8 md:px-24 bg-surface-low border-y border-white/5" id="brand">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div>
            <span className="font-headline text-primary tracking-[0.3em] uppercase text-xs font-bold block mb-4">Identidade de Marca</span>
            <h2 className="font-headline text-5xl md:text-6xl font-bold tracking-tighter">Identidade Visual</h2>
            <p className="mt-8 text-on-surface/50 text-xl font-medium leading-relaxed">
              A marca PACHECCO personifica a intersecção entre o rigor técnico e a pulsação orgânica. Uma identidade forjada no contraste absoluto, desenhada para reverberar com precisão tanto no digital quanto no físico.
            </p>
          </div>

          <div className="flex flex-wrap gap-6">
            {[
              { name: 'Ciano Neon', color: 'bg-primary' },
              { name: 'Magenta Elétrico', color: 'bg-secondary' },
              { name: 'Espaço Profundo', color: 'bg-surface border border-white/20' },
            ].map((color, i) => (
              <div key={i} className="flex items-center gap-4 bg-surface-high p-4 rounded-full border border-white/5 pr-8">
                <div className={`w-8 h-8 rounded-full ${color.color} shadow-lg`} />
                <span className="text-[10px] font-bold uppercase tracking-widest">{color.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8"
        >
          <div className="bg-surface p-16 rounded-[40px] flex items-center justify-center border border-white/5 shadow-2xl overflow-hidden group">
            <span className="text-6xl md:text-7xl font-headline font-black italic tracking-tighter text-primary group-hover:scale-105 transition-transform duration-500">PACHECCO</span>
          </div>
          <div className="bg-white p-16 rounded-[40px] flex items-center justify-center shadow-2xl overflow-hidden group">
            <span className="text-6xl md:text-7xl font-headline font-black italic tracking-tighter text-surface group-hover:scale-105 transition-transform duration-500">PACHECCO</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section className="py-32 px-8 md:px-24 bg-surface relative overflow-hidden" id="booking">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 blur-[200px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="space-y-12">
            <div>
              <h2 className="font-headline text-6xl md:text-8xl font-bold leading-none tracking-tighter mb-8">
                Vamos <br/>
                <span className="text-primary">Conectar</span>
              </h2>
              <p className="text-on-surface/50 text-xl font-medium max-w-md">Para agendamentos, pedidos de remix ou contatos gerais. Entre no fluxo.</p>
            </div>

            <div className="liquid-glass p-10 rounded-[40px] border-primary/20 inline-block space-y-6">
              <div>
                <p className="font-headline font-bold text-[10px] uppercase tracking-[0.3em] mb-2 text-primary">Imprensa e Assets</p>
                <p className="text-on-surface/40 text-xs mb-8">Bio PDF, Fotos Hi-Res, Tech Rider, Logos</p>
              </div>
              <button className="flex items-center gap-4 bg-primary text-surface px-10 py-5 rounded-2xl font-headline font-bold hover:shadow-neon-primary transition-all group">
                <Download size={20} className="group-hover:translate-y-0.5 transition-transform" />
                BAIXAR PRESSKIT COMPLETO
              </button>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="liquid-glass p-12 rounded-[50px] border-white/5 shadow-2xl"
          >
            <form className="space-y-10">
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.2em] text-on-surface/30 font-bold">Nome Completo</label>
                <input className="w-full bg-transparent border-b border-white/10 focus:border-primary focus:ring-0 transition-all text-on-surface pb-4 text-lg outline-none" placeholder="Seu Nome" type="text" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.2em] text-on-surface/30 font-bold">E-mail de Contato</label>
                <input className="w-full bg-transparent border-b border-white/10 focus:border-primary focus:ring-0 transition-all text-on-surface pb-4 text-lg outline-none" placeholder="email@exemplo.com" type="email" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.2em] text-on-surface/30 font-bold">Sua Mensagem</label>
                <textarea className="w-full bg-transparent border-b border-white/10 focus:border-primary focus:ring-0 transition-all text-on-surface pb-4 text-lg outline-none resize-none" placeholder="O que você tem em mente?" rows={3} />
              </div>
              <button className="w-full bg-gradient-to-r from-primary to-tertiary text-surface font-headline font-bold py-6 rounded-2xl hover:opacity-90 transition-all active:scale-[0.98] uppercase tracking-[0.2em] text-xs">
                ENVIAR MENSAGEM
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-surface py-20 px-8 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="space-y-4 text-center md:text-left">
          <span className="text-3xl font-bold tracking-tighter text-primary font-headline uppercase">PACHECCO</span>
          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-on-surface/20 font-bold">
            © {new Date().getFullYear()} PACHECCO. TODOS OS DIREITOS RESERVADOS.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-10">
          {[
            { name: 'Instagram', icon: <Instagram size={16} /> },
            { name: 'SoundCloud', icon: <Music size={16} /> },
            { name: 'Spotify', icon: <Music size={16} /> },
            { name: 'Resident Advisor', icon: <AudioLines size={16} /> },
          ].map((social) => (
            <a 
              key={social.name} 
              href="#" 
              className="flex items-center gap-3 text-[10px] tracking-[0.2em] uppercase text-on-surface/30 hover:text-primary transition-all font-bold"
            >
              {social.icon}
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <main className="lg:pl-20 relative selection:bg-primary selection:text-surface">
      <Navbar />
      <Hero />
      <Bio />
      <Agenda />
      <MusicSection />
      <Gallery />
      <VisualIdentity />
      <Contact />
      <Footer />
      
      {/* Mobile Nav Mockup (Hidden on LG) */}
      <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[200] liquid-glass px-8 py-4 rounded-full flex gap-10 items-center border border-primary/20 shadow-neon-primary/20">
         <a href="#" className="text-primary"><Plus size={24} /></a>
         <a href="#music" className="text-on-surface/40"><Activity size={24} /></a>
         <a href="#agenda" className="text-on-surface/40"><Calendar size={24} /></a>
         <a href="#booking" className="text-on-surface/40"><Mail size={24} /></a>
      </div>
    </main>
  );
}
