import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { cn } from '../lib/utils';

const faqs = [
  {
    question: '¿Tengo que irme de casa durante la fumigación?',
    answer: 'Depende del tratamiento y la plaga. Para geles (cucarachas/hormigas) no es necesario salir. Para pulverizaciones líquidas, sugerimos ausentarse entre 2 y 4 horas como medida preventiva. Nuestro técnico te indicará exactamente qué hacer.',
  },
  {
    question: '¿Los productos son tóxicos para niños o mascotas?',
    answer: 'Utilizamos exclusivamente productos domisanitarios autorizados por el Ministerio de Salud, de banda verde (la clasificación toxicológica más baja). Son totalmente seguros si se siguen nuestras indicaciones sencillas post-aplicación.',
  },
  {
    question: '¿Cuánto tarda en hacer efecto el tratamiento?',
    answer: 'El efecto varía. Con geles cucarachicidas, verás una reducción drástica en 48-72 hrs, y eliminación total en 1-2 semanas. Los líquidos para arácnidos o pulgas tienen efecto de choque casi inmediato y poder residual por semanas.',
  },
  {
    question: '¿Dan certificado para habilitación de locales?',
    answer: 'Sí, absolutamente. Entregamos el certificado oficial exigido por las autoridades municipales con código QR, esencial para comercios, restaurantes, bares e industrias.',
  },
  {
    question: '¿En qué zonas prestan servicio?',
    answer: 'Nuestro centro operativo está en Zona Sur, pero brindamos cobertura a toda la provincia de Buenos Aires y Capital Federal. Consultá disponibilidad para tu zona.',
  },
  {
    question: '¿Qué garantía ofrecen?',
    answer: 'Ofrecemos una garantía de 30 días: si durante este periodo la plaga persiste después de nuestro trabajo, realizamos un nuevo tratamiento sin costo adicional. La garantía se entrega por escrito junto con el certificado.',
  },
  {
    question: '¿Cuáles son los medios de pago disponibles?',
    answer: 'Aceptamos efectivo, débito, transferencias bancarias y Mercado Pago. Podés elegir el que más te convenga al momento del servicio.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-surface-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-50/30 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <span className="inline-block text-brand-600 font-bold text-sm tracking-wider uppercase mb-4 font-display">
              Preguntas Frecuentes
            </span>
            <h2 className="section-title text-slate-900 mb-5">
              Resolvemos tus dudas
            </h2>
            <p className="text-slate-500 leading-relaxed mb-8">
              Encontrá respuestas a las preguntas más comunes sobre nuestros servicios.
              Si no encontrás lo que buscás, escribinos por WhatsApp.
            </p>
            <a
              href="https://wa.me/5491122541220?text=Hola,%20tengo%20una%20consulta"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex"
            >
              <MessageCircle className="w-5 h-5" />
              Hacer una Pregunta
            </a>
          </motion.div>

          {/* Right column - Accordion */}
          <div className="lg:col-span-3 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={cn(
                    'rounded-2xl overflow-hidden transition-all duration-300',
                    isOpen
                      ? 'bg-white shadow-lg shadow-brand-500/5 border border-brand-100'
                      : 'bg-white border border-slate-100 hover:border-slate-200'
                  )}
                >
                  <button
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 rounded-2xl"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <span className={cn(
                      'font-semibold font-display pr-8 transition-colors duration-300',
                      isOpen ? 'text-brand-700' : 'text-slate-800'
                    )}>
                      {faq.question}
                    </span>
                    <div className={cn(
                      'w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300',
                      isOpen ? 'bg-brand-500 text-white rotate-180' : 'bg-brand-50 text-brand-500'
                    )}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 text-slate-500 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
