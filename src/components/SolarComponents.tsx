import { Sun, Battery, Zap, Shield, ChevronRight, Menu, X, MessageCircle, Send, User, Bot, Phone, Calendar, ArrowRight, Star, CheckCircle2, Users, Play, Quote, HelpCircle, MapPin, Award, TrendingUp, Clock } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI } from "@google/genai";

export function Logo({ className = "h-12", light = false }: { className?: string, light?: boolean }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative flex items-center justify-center">
        <Sun className={`w-8 h-8 ${light ? 'text-white' : 'text-solar-yellow'} animate-spin-slow`} />
        <Zap className={`w-4 h-4 absolute ${light ? 'text-solar-dark' : 'text-white'} translate-y-0.5`} />
      </div>
      <div className="flex flex-col leading-none">
        <span className={`text-xl font-display font-bold tracking-tighter ${light ? 'text-white' : 'text-solar-dark'}`}>
          ISOLLAR
        </span>
        <span className={`text-[10px] font-bold tracking-[0.2em] ${light ? 'text-white/60' : 'text-solar-yellow'}`}>
          ENERGY
        </span>
      </div>
    </div>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={false}
      animate={{
        paddingTop: scrolled ? "1rem" : "1.5rem",
        paddingBottom: scrolled ? "1rem" : "1.5rem",
      }}
      className="fixed w-full z-[100] transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          animate={{
            backgroundColor: scrolled ? "rgba(15, 23, 42, 0.08)" : "rgba(255, 255, 255, 0.7)",
            backdropFilter: scrolled ? "blur(24px)" : "blur(16px)",
            borderColor: scrolled ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.2)",
          }}
          className="rounded-full px-6 flex justify-between h-16 items-center shadow-lg shadow-black/5 border transition-all duration-500"
        >
          <div className="flex items-center gap-2">
            <Logo className="h-12" light={scrolled} />
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#inicio" className={`text-sm font-medium transition-colors ${scrolled ? 'text-white/90 hover:text-solar-yellow' : 'text-solar-dark hover:text-solar-yellow'}`}>Início</a>
            <a href="#servicos" className={`text-sm font-medium transition-colors ${scrolled ? 'text-white/90 hover:text-solar-yellow' : 'text-solar-dark hover:text-solar-yellow'}`}>Serviços</a>
            <a href="#calculadora" className={`text-sm font-medium transition-colors ${scrolled ? 'text-white/90 hover:text-solar-yellow' : 'text-solar-dark hover:text-solar-yellow'}`}>Economia</a>
            <a href="#equipe" className={`text-sm font-medium transition-colors ${scrolled ? 'text-white/90 hover:text-solar-yellow' : 'text-solar-dark hover:text-solar-yellow'}`}>Equipe</a>
            <div className="flex items-center gap-3">
              <a 
                href="https://wa.me/5598991516381" 
                target="_blank"
                className="flex items-center gap-2 text-sm font-bold text-green-600 hover:text-green-700 transition-colors"
              >
                <Phone className="w-4 h-4" /> (98) 99151-6381
              </a>
              <button className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${scrolled ? 'bg-solar-yellow text-solar-dark hover:bg-white' : 'bg-solar-dark text-white hover:bg-solar-blue'}`}>
                Orçamento Grátis
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={`p-2 transition-colors ${scrolled ? 'text-white' : 'text-solar-dark'}`}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`md:hidden mx-4 mt-4 rounded-3xl p-6 flex flex-col gap-4 shadow-2xl border ${
              scrolled ? 'bg-solar-dark/95 backdrop-blur-2xl border-white/10 text-white' : 'glass text-solar-dark'
            }`}
          >
            <a href="#inicio" onClick={() => setIsOpen(false)} className="text-lg font-medium">Início</a>
            <a href="#servicos" onClick={() => setIsOpen(false)} className="text-lg font-medium">Serviços</a>
            <a href="#calculadora" onClick={() => setIsOpen(false)} className="text-lg font-medium">Economia</a>
            <a href="#equipe" onClick={() => setIsOpen(false)} className="text-lg font-medium">Equipe</a>
            <hr className={scrolled ? "border-white/10" : "border-black/5"} />
            <a href="https://wa.me/5598991516381" className="bg-green-500 text-white w-full py-3 rounded-xl font-bold flex justify-center items-center gap-2">
              <Phone className="w-5 h-5" /> Falar no WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export function Hero() {
  return (
    <section id="inicio" className="relative pt-40 pb-24 lg:pt-56 lg:pb-40 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-solar-yellow/10 text-solar-yellow-dark text-xs font-bold mb-8 border border-solar-yellow/20">
              <div className="w-2 h-2 bg-solar-yellow rounded-full animate-pulse" />
              <span>Consultoria Gratuita Disponível Hoje</span>
            </div>
            <h1 className="text-6xl lg:text-8xl font-display font-bold leading-[0.95] mb-8 text-solar-dark">
              Energia <br />
              <span className="text-solar-yellow">Inteligente.</span>
            </h1>
            <p className="text-xl text-solar-gray mb-12 max-w-lg leading-relaxed font-light">
              Projetamos o futuro da sua economia com engenharia de precisão e tecnologia fotovoltaica de última geração no Maranhão.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a 
                href="https://wa.me/5598991516381"
                target="_blank"
                className="bg-solar-dark text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-solar-blue transition-all flex items-center justify-center gap-3 shadow-xl shadow-solar-dark/20 group"
              >
                Falar com Consultor <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </a>
              <button className="glass px-10 py-5 rounded-2xl font-bold text-lg hover:bg-solar-dark hover:text-white transition-all flex items-center justify-center gap-2 group">
                Simular Economia <TrendingUp className="w-5 h-5 group-hover:translate-y-[-2px] transition-transform" />
              </button>
            </div>
            
            <div className="mt-16 flex items-center gap-10">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden shadow-sm">
                    <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="Cliente" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 text-solar-yellow fill-solar-yellow" />)}
                </div>
                <p className="text-sm font-medium text-solar-gray">+ Confiança na Instalação</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl transition-transform duration-700">
              <img 
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1000" 
                alt="Engenharia Solar" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-solar-dark/60 to-transparent" />
              <div className="absolute bottom-10 left-10 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-solar-yellow p-2 rounded-lg">
                    <Zap className="w-6 h-6 text-solar-dark" />
                  </div>
                  <p className="text-4xl font-display font-bold">95%</p>
                </div>
                <p className="text-sm font-medium opacity-80 uppercase tracking-widest">Economia Garantida</p>
              </div>
            </div>
            
            {/* Floating Card */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 z-20 glass p-8 rounded-3xl shadow-2xl max-w-[240px]"
            >
              <div className="bg-green-100 w-12 h-12 rounded-2xl flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-bold text-lg mb-2">Certificação A</h4>
              <p className="text-sm text-solar-gray">Equipamentos com selo Procel de eficiência energética.</p>
            </motion.div>

            {/* Interactive Badge */}
            <motion.div 
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 z-20 bg-solar-dark text-white p-6 rounded-3xl shadow-2xl flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-solar-yellow flex items-center justify-center">
                <Users className="w-5 h-5 text-solar-dark" />
              </div>
              <div>
                <p className="text-xs opacity-60 uppercase tracking-widest">Consultores</p>
                <p className="text-sm font-bold">3 Online Agora</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Abstract Background */}
      <div className="absolute top-0 right-0 -z-10 w-1/3 h-full bg-solar-yellow/5 skew-x-12 transform origin-top" />
      <div className="absolute bottom-0 left-0 -z-10 w-1/4 h-1/2 bg-solar-blue/5 -skew-x-12 transform origin-bottom" />
    </section>
  );
}

export function Features() {
  const features = [
    {
      icon: <Sun className="w-10 h-10" />,
      title: "Geração Infinita",
      description: "Sua própria usina de energia, produzindo eletricidade limpa 365 dias por ano."
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Engenharia de Ponta",
      description: "Projetos assinados por engenheiros especialistas, garantindo máxima segurança e performance."
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Instalação Premium",
      description: "Equipe própria altamente treinada para uma instalação limpa, rápida e segura."
    },
    {
      icon: <Battery className="w-10 h-10" />,
      title: "Monitoramento 24h",
      description: "Acompanhe sua geração de energia em tempo real pelo seu smartphone, de qualquer lugar."
    }
  ];

  return (
    <section id="servicos" className="py-32 bg-solar-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8"
        >
          <div className="max-w-2xl">
            <span className="text-solar-yellow font-bold text-sm uppercase tracking-widest mb-4 block">Nossos Diferenciais</span>
            <h2 className="text-5xl font-display font-bold text-solar-dark">Por que a Isollar Energy é a escolha certa?</h2>
          </div>
          <p className="text-lg text-solar-gray max-w-sm font-light">
            Combinamos excelência técnica com o melhor atendimento do mercado para entregar resultados reais.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, backgroundColor: "#0F172A", color: "#FFFFFF" }}
              className="bg-white p-10 rounded-[40px] border border-black/5 shadow-sm transition-all duration-500 group"
            >
              <div className="text-solar-yellow mb-8 group-hover:scale-110 transition-transform">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-solar-gray group-hover:text-white/70 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SalesTeam() {
  const consultants = [
    {
      name: "Eng. Ricardo Silva",
      role: "Consultor Técnico Sênior",
      image: "https://picsum.photos/seed/consultant1/400/500",
      whatsapp: "5598991516381",
      status: "Online"
    },
    {
      name: "Ana Oliveira",
      role: "Especialista em Projetos Residenciais",
      image: "https://picsum.photos/seed/consultant2/400/500",
      whatsapp: "5598991516381",
      status: "Em Atendimento"
    },
    {
      name: "Marcos Souza",
      role: "Gestor de Contas Corporativas",
      image: "https://picsum.photos/seed/consultant3/400/500",
      whatsapp: "5598991516381",
      status: "Online"
    }
  ];

  return (
    <section id="equipe" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-solar-yellow font-bold text-sm uppercase tracking-widest mb-4 block">Atendimento Personalizado</span>
          <h2 className="text-5xl font-display font-bold mb-6">Fale com nossos especialistas</h2>
          <p className="text-xl text-solar-gray font-light">Nossa equipe está pronta para desenhar o projeto ideal para sua necessidade, com atendimento direto e sem burocracia.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {consultants.map((person, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group"
            >
              <div className="relative aspect-[3/4] rounded-[40px] overflow-hidden mb-6 shadow-xl">
                <img src={person.image} alt={person.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                
                {/* Status Badge */}
                <div className="absolute top-6 right-6 glass px-3 py-1.5 rounded-full flex items-center gap-2 z-20">
                  <div className={`w-2 h-2 rounded-full ${person.status === 'Online' ? 'bg-green-500 animate-pulse' : 'bg-solar-yellow'}`} />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-solar-dark">{person.status}</span>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-solar-dark/90 via-solar-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <p className="text-white/70 text-sm mb-4 font-light">Especialista com mais de 5 anos de experiência em sistemas fotovoltaicos.</p>
                  <a 
                    href={`https://wa.me/${person.whatsapp}`}
                    target="_blank"
                    className="w-full bg-green-500 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-green-600 transition-colors shadow-lg"
                  >
                    <Phone className="w-5 h-5" /> Iniciar Chat Direto
                  </a>
                </div>
              </div>
              <h4 className="text-2xl font-bold mb-1">{person.name}</h4>
              <p className="text-solar-yellow font-medium text-sm">{person.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  const steps = [
    {
      title: "Análise Técnica",
      description: "Estudo de viabilidade e análise do seu consumo histórico.",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Projeto de Engenharia",
      description: "Desenvolvimento do projeto personalizado para seu telhado.",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Instalação Premium",
      description: "Execução rápida e limpa com equipamentos de alta performance.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Homologação",
      description: "Cuidamos de toda a burocracia com a concessionária.",
      icon: <CheckCircle2 className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-32 bg-solar-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-display font-bold mb-6">Como funciona a jornada?</h2>
          <p className="text-white/60 text-xl font-light">Do primeiro contato à economia real, cuidamos de tudo.</p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-px bg-white/10 -z-0" />
          
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="relative z-10 text-center"
            >
              <div className="w-24 h-24 rounded-full bg-solar-yellow/10 border border-solar-yellow/20 flex items-center justify-center mx-auto mb-8 group hover:bg-solar-yellow transition-all duration-500">
                <div className="text-solar-yellow group-hover:text-solar-dark transition-colors">
                  {step.icon}
                </div>
              </div>
              <h4 className="text-xl font-bold mb-4">{step.title}</h4>
              <p className="text-white/40 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectGallery() {
  const projects = [
    {
      title: "Residencial Alphaville",
      location: "São Luís, MA",
      power: "12.5 kWp",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Comercial Centro",
      location: "Imperatriz, MA",
      power: "45.0 kWp",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Fazenda Solar",
      location: "Balsas, MA",
      power: "120.0 kWp",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section className="py-32 bg-solar-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-between items-end mb-20"
        >
          <div>
            <h2 className="text-5xl font-display font-bold mb-6">Projetos Entregues</h2>
            <p className="text-solar-gray text-xl font-light">Engenharia de precisão em todo o estado.</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-solar-dark font-bold hover:text-solar-yellow transition-colors">
            Ver Portfólio Completo <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group relative rounded-[40px] overflow-hidden shadow-2xl aspect-[4/5]"
            >
              <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-solar-dark via-transparent to-transparent p-10 flex flex-col justify-end">
                <div className="bg-solar-yellow/20 backdrop-blur-md border border-solar-yellow/30 px-3 py-1 rounded-full w-fit mb-4">
                  <span className="text-solar-yellow text-[10px] font-bold uppercase tracking-widest">{project.power}</span>
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">{project.title}</h4>
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <MapPin className="w-4 h-4" /> {project.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const reviews = [
    {
      name: "João Mendes",
      role: "Empresário",
      text: "A Isollar Energy transformou o custo fixo da minha empresa em investimento. O atendimento do Ricardo foi impecável do início ao fim.",
      avatar: "https://picsum.photos/seed/p1/100/100"
    },
    {
      name: "Maria Helena",
      role: "Professora",
      text: "Minha conta de luz caiu de R$ 800 para a taxa mínima. O sistema se paga sozinho e a equipe de instalação foi muito cuidadosa.",
      avatar: "https://picsum.photos/seed/p2/100/100"
    },
    {
      name: "Carlos Alberto",
      role: "Engenheiro Civil",
      text: "Como engenheiro, prezo pela qualidade técnica. A Isollar utiliza os melhores componentes do mercado e a execução foi perfeita.",
      avatar: "https://picsum.photos/seed/p3/100/100"
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-display font-bold mb-6">O que dizem nossos clientes</h2>
          <div className="flex justify-center gap-1">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-6 h-6 text-solar-yellow fill-solar-yellow" />)}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-solar-light p-10 rounded-[40px] border border-black/5 relative"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-solar-yellow/10" />
              <p className="text-solar-gray italic mb-8 leading-relaxed font-light">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h5 className="font-bold">{review.name}</h5>
                  <p className="text-xs text-solar-yellow font-medium uppercase tracking-widest">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "A energia solar funciona em dias nublados?",
      a: "Sim! Embora a produção seja menor que em dias de sol pleno, os painéis fotovoltaicos captam a radiação solar mesmo através das nuvens."
    },
    {
      q: "Qual a vida útil do sistema?",
      a: "Os painéis solares têm garantia de performance de 25 anos, mas podem durar mais de 30 anos com a manutenção correta."
    },
    {
      q: "O que acontece se acabar a luz da rua?",
      a: "Por segurança (norma da ANEEL), o sistema on-grid se desliga automaticamente para proteger os técnicos que trabalham na rede. Existem sistemas com baterias (off-grid ou híbridos) que mantêm a energia."
    },
    {
      q: "Como é feita a manutenção?",
      a: "A manutenção é simples: basicamente a limpeza dos painéis com água quando houver acúmulo de sujeira e a verificação periódica das conexões elétricas."
    }
  ];

  return (
    <section className="py-32 bg-solar-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <HelpCircle className="w-12 h-12 text-solar-yellow mx-auto mb-6" />
          <h2 className="text-5xl font-display font-bold mb-6">Dúvidas Frequentes</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-3xl border border-black/5 overflow-hidden shadow-sm">
              <button 
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-solar-light/50 transition-colors"
              >
                <span className="font-bold text-lg">{faq.q}</span>
                <ChevronRight className={`w-6 h-6 transition-transform duration-300 ${openIdx === i ? 'rotate-90' : ''}`} />
              </button>
              <AnimatePresence>
                {openIdx === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-8 pb-8 text-solar-gray leading-relaxed font-light"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Calculator() {
  const [bill, setBill] = useState(500);
  
  const monthlySavings = bill * 0.95;
  const yearlySavings = monthlySavings * 12;
  const paybackYears = 4.2;

  return (
    <section id="calculadora" className="py-32 bg-solar-dark text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-6xl font-display font-bold mb-8 leading-tight">
              Quanto você <br />
              <span className="text-solar-yellow">deixa na mesa?</span>
            </h2>
            <p className="text-xl text-white/60 mb-12 font-light leading-relaxed">
              O dinheiro que você paga para a concessionária poderia estar sendo investido no seu patrimônio. Veja o impacto em 1 ano.
            </p>
            
            <div className="space-y-12">
              <div className="relative">
                <div className="flex justify-between mb-6">
                  <span className="text-lg font-medium opacity-80">Gasto mensal atual</span>
                  <span className="text-3xl font-display font-bold text-solar-yellow">R$ {bill.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min="200" 
                  max="10000" 
                  step="100"
                  value={bill}
                  onChange={(e) => setBill(Number(e.target.value))}
                  className="w-full h-3 bg-white/10 rounded-full appearance-none cursor-pointer accent-solar-yellow"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="glass-dark p-8 rounded-[32px]">
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-3">Economia em 1 Ano</p>
                  <p className="text-4xl font-display font-bold text-solar-yellow">R$ {yearlySavings.toLocaleString()}</p>
                </div>
                <div className="glass-dark p-8 rounded-[32px]">
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-3">Em 25 Anos</p>
                  <p className="text-4xl font-display font-bold text-solar-yellow">R$ {(yearlySavings * 25).toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-solar-yellow rounded-[60px] p-12 lg:p-20 text-solar-dark shadow-2xl shadow-solar-yellow/20">
              <div className="flex items-center gap-4 mb-10">
                <div className="bg-solar-dark p-3 rounded-2xl">
                  <Zap className="w-8 h-8 text-solar-yellow" />
                </div>
                <h3 className="text-3xl font-display font-bold">Análise Grátis</h3>
              </div>
              <p className="text-xl mb-12 font-medium opacity-80 leading-relaxed">
                Nossos consultores realizam um estudo técnico completo do seu telhado via satélite.
              </p>
              <form className="space-y-4">
                <input type="text" placeholder="Seu WhatsApp" className="w-full px-6 py-5 rounded-2xl bg-white/50 border border-black/5 outline-none focus:bg-white transition-all font-bold" />
                <button className="w-full bg-solar-dark text-white py-5 rounded-2xl font-bold text-lg hover:bg-solar-blue transition-all shadow-xl">
                  Receber Estudo Grátis
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-solar-blue/20 rounded-full blur-[120px] -z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-solar-yellow/10 rounded-full blur-[120px] -z-0" />
    </section>
  );
}

export function Contact() {
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    email: '',
    mensagem: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (name: string, value: string) => {
    let error = '';
    if (!value.trim()) {
      error = 'Este campo é obrigatório';
    } else if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      error = 'E-mail inválido';
    } else if (name === 'whatsapp' && value.replace(/\D/g, '').length < 10) {
      error = 'WhatsApp inválido';
    }
    return error;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (touched[name]) {
      const error = validate(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validate(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors: Record<string, string> = {};
    Object.keys(formData).forEach(key => {
      const error = validate(key, formData[key as keyof typeof formData]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTouched(Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {}));
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ nome: '', whatsapp: '', email: '', mensagem: '' });
    setTouched({});
    
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="contato" className="py-32 bg-solar-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-[60px] p-12 lg:p-24 shadow-2xl relative overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-20 relative z-10">
            <div>
              <h2 className="text-5xl font-display font-bold mb-8">Vamos tirar seu projeto do papel?</h2>
              <p className="text-xl text-solar-gray mb-12 font-light">Estamos prontos para atender você em todo o estado do Maranhão.</p>
              
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-solar-dark rounded-2xl flex items-center justify-center text-solar-yellow">
                    <Phone className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-xs text-solar-gray uppercase tracking-widest mb-1">WhatsApp</p>
                    <p className="text-2xl font-bold">(98) 99151-6381</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-solar-dark rounded-2xl flex items-center justify-center text-solar-yellow">
                    <Send className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-xs text-solar-gray uppercase tracking-widest mb-1">E-mail</p>
                    <p className="text-2xl font-bold">isollarenergyengenharia@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <input 
                    type="text" 
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Nome *" 
                    className={`w-full px-6 py-4 rounded-2xl bg-white border outline-none focus:ring-2 transition-all ${
                      touched.nome && errors.nome 
                        ? 'border-red-500 focus:ring-red-500/20' 
                        : 'border-black/5 focus:ring-solar-yellow/20'
                    }`} 
                  />
                  {touched.nome && errors.nome && <p className="text-red-500 text-sm ml-2">{errors.nome}</p>}
                </div>
                <div className="space-y-1">
                  <input 
                    type="text" 
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="WhatsApp *" 
                    className={`w-full px-6 py-4 rounded-2xl bg-white border outline-none focus:ring-2 transition-all ${
                      touched.whatsapp && errors.whatsapp 
                        ? 'border-red-500 focus:ring-red-500/20' 
                        : 'border-black/5 focus:ring-solar-yellow/20'
                    }`} 
                  />
                  {touched.whatsapp && errors.whatsapp && <p className="text-red-500 text-sm ml-2">{errors.whatsapp}</p>}
                </div>
              </div>
              <div className="space-y-1">
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="E-mail *" 
                  className={`w-full px-6 py-4 rounded-2xl bg-white border outline-none focus:ring-2 transition-all ${
                    touched.email && errors.email 
                      ? 'border-red-500 focus:ring-red-500/20' 
                      : 'border-black/5 focus:ring-solar-yellow/20'
                  }`} 
                />
                {touched.email && errors.email && <p className="text-red-500 text-sm ml-2">{errors.email}</p>}
              </div>
              <div className="space-y-1">
                <textarea 
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Como podemos ajudar? *" 
                  className={`w-full px-6 py-4 rounded-2xl bg-white border outline-none focus:ring-2 transition-all h-40 ${
                    touched.mensagem && errors.mensagem 
                      ? 'border-red-500 focus:ring-red-500/20' 
                      : 'border-black/5 focus:ring-solar-yellow/20'
                  }`}
                ></textarea>
                {touched.mensagem && errors.mensagem && <p className="text-red-500 text-sm ml-2">{errors.mensagem}</p>}
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-5 rounded-2xl font-bold text-lg transition-all shadow-xl flex items-center justify-center gap-2 ${
                  isSuccess 
                    ? 'bg-green-500 text-white' 
                    : 'bg-solar-dark text-white hover:bg-solar-blue'
                } ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : isSuccess ? (
                  <>
                    <CheckCircle2 className="w-6 h-6" />
                    Mensagem Enviada!
                  </>
                ) : (
                  'Enviar Mensagem'
                )}
              </button>
            </form>
          </div>
          
          <div className="absolute top-0 right-0 w-1/2 h-full bg-solar-yellow/5 -z-0" />
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-solar-dark text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <Logo className="h-16" light={true} />
            </div>
            <p className="text-xl text-white/40 max-w-md font-light leading-relaxed">
              Transformando a luz do sol em liberdade financeira para famílias e empresas maranhenses desde 2022.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-8">Navegação</h4>
            <ul className="space-y-4 text-white/40 font-medium">
              <li><a href="#inicio" className="hover:text-solar-yellow transition-colors">Início</a></li>
              <li><a href="#servicos" className="hover:text-solar-yellow transition-colors">Serviços</a></li>
              <li><a href="#calculadora" className="hover:text-solar-yellow transition-colors">Calculadora</a></li>
              <li><a href="#equipe" className="hover:text-solar-yellow transition-colors">Nossa Equipe</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-8">Contato</h4>
            <ul className="space-y-4 text-white/40 font-medium">
              <li>São Luís - MA</li>
              <li>(98) 99151-6381</li>
              <li>isollarenergyengenharia@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-sm">© 2022 Isollar Energy Engenharia. CNPJ: 00.000.000/0001-00</p>
          <div className="flex gap-8 text-white/20 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot', text: string }[]>([
    { role: 'bot', text: 'Olá! Sou o consultor virtual da Isollar Energy Engenharia. Como posso ajudar você hoje?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (text?: string) => {
    const userMessage = text || input.trim();
    if (!userMessage || isLoading) return;

    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: messages.concat({ role: 'user', text: userMessage }).map(m => ({
          role: m.role === 'user' ? 'user' : 'model',
          parts: [{ text: m.text }]
        })),
        config: {
          systemInstruction: "Você é um consultor especializado da Isollar Energy Engenharia, uma empresa de engenharia solar no Maranhão. Seu objetivo é tirar dúvidas de clientes sobre energia fotovoltaica, economia, instalação e benefícios. Seja profissional, prestativo e use um tom de consultor de engenharia. Se o cliente quiser um orçamento real ou falar com um humano, sugira o WhatsApp (98) 99151-6381. Mantenha as respostas concisas e em português do Brasil.",
        }
      });

      const botResponse = response.text || "Desculpe, tive um problema ao processar sua pergunta. Pode tentar novamente?";
      
      setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'bot', text: "No momento estou offline. Por favor, entre em contato pelo WhatsApp (98) 99151-6381 para falar com um consultor humano." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const quickActions = [
    "Quanto custa?",
    "Como funciona?",
    "Falar com vendedor"
  ];

  return (
    <>
      {/* Floating Action Button for WhatsApp */}
      <motion.a
        href="https://wa.me/5598991516381"
        target="_blank"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-32 right-8 z-[200] w-16 h-16 bg-green-500 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-green-600 transition-colors"
      >
        <Phone className="w-7 h-7" />
        <span className="absolute right-full mr-4 bg-solar-dark text-white px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">WhatsApp Direto</span>
      </motion.a>

      <div className="fixed bottom-8 right-8 z-[200]">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              className="bg-white w-[400px] h-[600px] rounded-[40px] shadow-2xl border border-black/5 flex flex-col overflow-hidden mb-6"
            >
              {/* Header */}
              <div className="bg-solar-dark p-8 text-white flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="bg-solar-yellow p-2.5 rounded-2xl">
                    <Bot className="w-6 h-6 text-solar-dark" />
                  </div>
                  <div>
                    <p className="font-bold">Consultor Isollar</p>
                    <p className="text-[10px] text-solar-yellow flex items-center gap-1.5 font-bold uppercase tracking-widest">
                      <span className="w-2 h-2 bg-solar-yellow rounded-full animate-pulse" />
                      Engenheiro Online
                    </p>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-xl transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-8 space-y-6 bg-solar-light/50">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] p-5 rounded-[24px] text-sm leading-relaxed ${
                      msg.role === 'user' 
                        ? 'bg-solar-dark text-white rounded-tr-none shadow-lg' 
                        : 'bg-white text-solar-dark border border-black/5 rounded-tl-none shadow-sm'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white p-5 rounded-[24px] rounded-tl-none border border-black/5 shadow-sm">
                      <div className="flex gap-1.5">
                        <span className="w-2 h-2 bg-solar-yellow rounded-full animate-bounce" />
                        <span className="w-2 h-2 bg-solar-yellow rounded-full animate-bounce [animation-delay:0.2s]" />
                        <span className="w-2 h-2 bg-solar-yellow rounded-full animate-bounce [animation-delay:0.4s]" />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Actions */}
              <div className="px-8 py-4 flex gap-2 overflow-x-auto no-scrollbar bg-solar-light/50">
                {quickActions.map((action, i) => (
                  <button 
                    key={i}
                    onClick={() => handleSend(action)}
                    className="whitespace-nowrap px-4 py-2 rounded-full border border-solar-yellow text-solar-yellow text-xs font-bold hover:bg-solar-yellow hover:text-white transition-all"
                  >
                    {action}
                  </button>
                ))}
              </div>

              {/* Input */}
              <div className="p-6 bg-white border-t border-black/5">
                <div className="relative">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Sua dúvida técnica..."
                    className="w-full pl-6 pr-14 py-4 bg-solar-light rounded-2xl text-sm outline-none focus:ring-2 focus:ring-solar-yellow/20 transition-all font-medium"
                  />
                  <button 
                    onClick={() => handleSend()}
                    disabled={isLoading || !input.trim()}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-3 text-solar-yellow hover:bg-solar-yellow/10 rounded-xl transition-all disabled:opacity-50"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex justify-center items-center gap-2 mt-4">
                  <Phone className="w-3 h-3 text-green-500" />
                  <a href="https://wa.me/5598991516381" target="_blank" className="text-[10px] text-solar-gray hover:text-solar-yellow transition-colors">
                    Falar com consultor humano no <span className="font-bold text-green-600">WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-20 h-20 bg-solar-yellow text-white rounded-full shadow-2xl shadow-solar-yellow/40 flex items-center justify-center relative group overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }}>
                <X className="w-8 h-8" />
              </motion.div>
            ) : (
              <motion.div key="chat" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -90 }}>
                <MessageCircle className="w-8 h-8" />
              </motion.div>
            )}
          </AnimatePresence>
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
        </motion.button>
      </div>
    </>
  );
}
