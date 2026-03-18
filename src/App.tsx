/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar, Hero, Features, Calculator, Contact, Footer } from './components/SolarComponents';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-solar-yellow/30">
      <Navbar />
      <main>
        <Hero />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Features />
        </motion.div>

        <Calculator />

        <section id="beneficios" className="py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=1000" 
                    alt="Sustentabilidade" 
                    className="rounded-[40px] shadow-2xl"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-solar-yellow/20 rounded-full blur-3xl -z-10" />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-4xl font-display font-bold mb-8">Sustentabilidade que gera valor real.</h2>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-solar-yellow rounded-2xl flex items-center justify-center text-white font-bold text-xl">1</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Valorização do Imóvel</h4>
                      <p className="text-gray-600">Imóveis com energia solar são valorizados em média 10% a mais no mercado imobiliário.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-solar-yellow rounded-2xl flex items-center justify-center text-white font-bold text-xl">2</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Proteção Contra Inflação</h4>
                      <p className="text-gray-600">Fique imune aos reajustes anuais das concessionárias de energia elétrica.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-solar-yellow rounded-2xl flex items-center justify-center text-white font-bold text-xl">3</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Impacto Ambiental Positivo</h4>
                      <p className="text-gray-600">Reduza sua pegada de carbono e contribua para um futuro mais limpo para as próximas gerações.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
