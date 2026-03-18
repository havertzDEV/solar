import { Sun, Battery, Zap, Shield, ChevronRight, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2">
            <div className="bg-solar-yellow p-2 rounded-lg">
              <Sun className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-display font-bold tracking-tight">ISOLLAR</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="text-sm font-medium hover:text-solar-yellow transition-colors">Início</a>
            <a href="#servicos" className="text-sm font-medium hover:text-solar-yellow transition-colors">Serviços</a>
            <a href="#beneficios" className="text-sm font-medium hover:text-solar-yellow transition-colors">Benefícios</a>
            <a href="#calculadora" className="text-sm font-medium hover:text-solar-yellow transition-colors">Calculadora</a>
            <button className="bg-solar-dark text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-solar-dark/90 transition-all">
              Orçamento Grátis
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-b border-black/5 px-4 py-6 flex flex-col gap-4"
          >
            <a href="#inicio" onClick={() => setIsOpen(false)} className="text-lg font-medium">Início</a>
            <a href="#servicos" onClick={() => setIsOpen(false)} className="text-lg font-medium">Serviços</a>
            <a href="#beneficios" onClick={() => setIsOpen(false)} className="text-lg font-medium">Benefícios</a>
            <a href="#calculadora" onClick={() => setIsOpen(false)} className="text-lg font-medium">Calculadora</a>
            <button className="bg-solar-yellow text-white w-full py-3 rounded-xl font-bold">
              Orçamento Grátis
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export function Hero() {
  return (
    <section id="inicio" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-solar-yellow/10 text-solar-yellow text-xs font-bold tracking-wider uppercase mb-6">
              Energia Limpa e Renovável
            </span>
            <h1 className="text-5xl lg:text-7xl font-display font-bold leading-[1.1] mb-8">
              O sol brilha para <span className="text-solar-yellow">sua economia.</span>
            </h1>
            <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
              Reduza sua conta de luz em até 95% com tecnologia de ponta em painéis solares. Sustentabilidade que cabe no seu bolso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-solar-yellow text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-lg hover:shadow-solar-yellow/20 transition-all flex items-center justify-center gap-2">
                Começar Agora <ChevronRight className="w-5 h-5" />
              </button>
              <button className="border border-black/10 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-black/5 transition-all">
                Ver Projetos
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-8 border-t border-black/5 pt-8">
              <div>
                <p className="text-3xl font-display font-bold">500+</p>
                <p className="text-sm text-gray-500">Instalações</p>
              </div>
              <div className="w-px h-10 bg-black/5" />
              <div>
                <p className="text-3xl font-display font-bold">95%</p>
                <p className="text-sm text-gray-500">Economia Média</p>
              </div>
              <div className="w-px h-10 bg-black/5" />
              <div>
                <p className="text-3xl font-display font-bold">25 anos</p>
                <p className="text-sm text-gray-500">Garantia</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-[40px] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=1000" 
                alt="Painéis Solares" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-black/5 max-w-[200px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-green-100 p-2 rounded-full">
                  <Zap className="w-5 h-5 text-green-600" />
                </div>
                <span className="font-bold text-sm">Eficiência</span>
              </div>
              <p className="text-xs text-gray-500">Nossos painéis possuem a maior taxa de conversão do mercado.</p>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-solar-yellow/5 to-transparent" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-solar-yellow/10 rounded-full blur-3xl" />
    </section>
  );
}

export function Features() {
  const features = [
    {
      icon: <Sun className="w-8 h-8" />,
      title: "Energia Infinita",
      description: "Aproveite a fonte de energia mais abundante do planeta sem se preocupar com aumentos de tarifas."
    },
    {
      icon: <Battery className="w-8 h-8" />,
      title: "Armazenamento Inteligente",
      description: "Sistemas de baterias para garantir que você tenha energia mesmo durante a noite ou quedas de rede."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Garantia Estendida",
      description: "Trabalhamos apenas com os melhores fabricantes, oferecendo até 25 anos de garantia de performance."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instalação Rápida",
      description: "Nossa equipe técnica especializada realiza a instalação em tempo recorde, com o mínimo de interferência."
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-display font-bold mb-6">Por que escolher a Isollar?</h2>
          <p className="text-gray-600">Oferecemos soluções completas, desde o projeto inicial até a manutenção preventiva do seu sistema solar.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="text-solar-yellow mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Calculator() {
  const [bill, setBill] = useState(300);
  
  const monthlySavings = bill * 0.95;
  const yearlySavings = monthlySavings * 12;
  const paybackYears = 4.5; // Estimated average

  return (
    <section id="calculadora" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-solar-dark rounded-[40px] overflow-hidden text-white">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 lg:p-20">
              <h2 className="text-4xl font-display font-bold mb-8">Calculadora de Economia</h2>
              <p className="text-gray-400 mb-12">Descubra quanto você pode economizar mudando para energia solar hoje mesmo.</p>
              
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between mb-4">
                    <span className="text-sm font-medium">Sua conta mensal de luz</span>
                    <span className="text-solar-yellow font-bold">R$ {bill}</span>
                  </div>
                  <input 
                    type="range" 
                    min="100" 
                    max="5000" 
                    step="50"
                    value={bill}
                    onChange={(e) => setBill(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-solar-yellow"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Economia Mensal</p>
                    <p className="text-2xl font-display font-bold text-solar-yellow">R$ {monthlySavings.toFixed(0)}</p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Economia Anual</p>
                    <p className="text-2xl font-display font-bold text-solar-yellow">R$ {yearlySavings.toFixed(0)}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-solar-yellow p-12 lg:p-20 flex flex-col justify-center text-solar-dark">
              <div className="mb-8">
                <p className="text-sm font-bold uppercase tracking-widest mb-2">Retorno do Investimento</p>
                <p className="text-6xl font-display font-bold">~{paybackYears} anos</p>
              </div>
              <p className="text-lg mb-10 opacity-80">
                O sistema se paga em poucos anos e gera energia gratuita por décadas. É o melhor investimento para seu patrimônio.
              </p>
              <button className="bg-solar-dark text-white py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform">
                Solicitar Estudo Detalhado
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contato" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-display font-bold mb-8">Pronto para transformar seu telhado?</h2>
            <p className="text-gray-600 mb-12">Preencha o formulário e um de nossos especialistas entrará em contato para realizar um orçamento personalizado sem compromisso.</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-solar-yellow/10 p-3 rounded-xl">
                  <Zap className="w-6 h-6 text-solar-yellow" />
                </div>
                <div>
                  <p className="font-bold">E-mail</p>
                  <p className="text-gray-500">contato@solara.com.br</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-solar-yellow/10 p-3 rounded-xl">
                  <Zap className="w-6 h-6 text-solar-yellow" />
                </div>
                <div>
                  <p className="font-bold">Telefone</p>
                  <p className="text-gray-500">(98) 99151-6381</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-10 rounded-[32px] shadow-xl border border-black/5">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2">Nome</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-black/10 focus:border-solar-yellow outline-none transition-colors" placeholder="Seu nome" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">WhatsApp</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-black/10 focus:border-solar-yellow outline-none transition-colors" placeholder="(00) 00000-0000" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">E-mail</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-black/10 focus:border-solar-yellow outline-none transition-colors" placeholder="seu@email.com" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Mensagem</label>
                <textarea className="w-full px-4 py-3 rounded-xl border border-black/10 focus:border-solar-yellow outline-none transition-colors h-32" placeholder="Como podemos ajudar?"></textarea>
              </div>
              <button className="w-full bg-solar-dark text-white py-4 rounded-xl font-bold hover:bg-solar-dark/90 transition-all">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-solar-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-solar-yellow p-2 rounded-lg">
                <Sun className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-display font-bold tracking-tight">ISOLLAR</span>
            </div>
            <p className="text-gray-400 max-w-sm">
              Líder em soluções fotovoltaicas, ajudando milhares de famílias e empresas a conquistarem sua independência energética.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-solar-yellow transition-colors">Início</a></li>
              <li><a href="#" className="hover:text-solar-yellow transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-solar-yellow transition-colors">Serviços</a></li>
              <li><a href="#" className="hover:text-solar-yellow transition-colors">Projetos</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-solar-yellow transition-colors">Privacidade</a></li>
              <li><a href="#" className="hover:text-solar-yellow transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-solar-yellow transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">© 2022 Isollar Energy Engenharia. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            {/* Social icons could go here */}
          </div>
        </div>
      </div>
    </footer>
  );
}
