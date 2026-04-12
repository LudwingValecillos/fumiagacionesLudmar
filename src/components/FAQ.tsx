import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { cn } from '../lib/utils';

const faqs = [
  {
    question: '¿Tengo que irme de casa?',
    answer: 'Depende del tratamiento. Para geles no es necesario salir. Para pulverizaciones, sugerimos ausentarse 2-4 horas. El técnico te indica exactamente qué hacer.',
  },
  {
    question: '¿Es tóxico para niños o mascotas?',
    answer: 'Usamos productos de banda verde (clasificación toxicológica más baja), autorizados por el Ministerio de Salud. Totalmente seguros siguiendo nuestras indicaciones.',
  },
  {
    question: '¿Cuánto tarda en hacer efecto?',
    answer: 'Geles cucarachicidas: reducción drástica en 48-72 hs, eliminación total en 1-2 semanas. Líquidos: efecto de choque inmediato con poder residual.',
  },
  {
    question: '¿Dan certificado para locales?',
    answer: 'Sí. Entregamos el certificado oficial con código QR, esencial para comercios, restaurantes e industrias.',
  },
  {
    question: '¿En qué zonas trabajan?',
    answer: 'Centro operativo en Zona Sur, con cobertura en toda la Provincia de Buenos Aires y Capital Federal.',
  },
  {
    question: '¿Qué garantía ofrecen?',
    answer: '30 días: si la plaga persiste, realizamos nuevo tratamiento sin costo. La garantía se entrega por escrito.',
  },
  {
    question: '¿Medios de pago disponibles?',
    answer: 'Efectivo, débito, transferencias bancarias y Mercado Pago. Elegí el que más te convenga.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-surface-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative">
        {/* Mobile: single column header + accordion. Desktop: 2+3 grid */}
        <div className="grid lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 text-center lg:text-left"
          >
            <span className="inline-block text-brand-600 font-bold text-xs sm:text-sm tracking-wider uppercase mb-2 sm:mb-3 font-display">
              FAQ
            </span>
            <h2 className="section-title text-slate-900 mb-2 sm:mb-4">
              Preguntas frecuentes
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
              Respuestas rápidas. Si no encontrás lo que buscás, escribinos.
            </p>
            <a
              href="https://wa.me/5491122541220?text=Hola,%20tengo%20una%20consulta"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary hidden lg:inline-flex"
            >
              <MessageCircle className="w-4 h-4" />
              Hacer Pregunta
            </a>
          </motion.div>

          {/* Accordion */}
          <div className="lg:col-span-3 space-y-2 sm:space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: index * 0.04 }}
                  className={cn(
                    'rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300',
                    isOpen
                      ? 'bg-white shadow-md shadow-brand-500/5 border border-brand-100'
                      : 'bg-white border border-slate-100'
                  )}
                >
                  <button
                    className="w-full px-4 py-3.5 sm:px-6 sm:py-4 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-xl sm:rounded-2xl"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <span className={cn(
                      'font-semibold font-display text-sm sm:text-base pr-4 transition-colors duration-300 leading-tight',
                      isOpen ? 'text-brand-700' : 'text-slate-800'
                    )}>
                      {faq.question}
                    </span>
                    <div className={cn(
                      'w-6 h-6 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300',
                      isOpen ? 'bg-brand-500 text-white rotate-180' : 'bg-brand-50 text-brand-500'
                    )}>
                      <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="px-4 pb-4 sm:px-6 sm:pb-5 text-slate-500 text-sm leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile CTA */}
          <div className="lg:hidden text-center">
            <a
              href="https://wa.me/5491122541220?text=Hola,%20tengo%20una%20consulta"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <MessageCircle className="w-4 h-4" />
              Hacer Pregunta
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
