import { motion } from 'framer-motion';
import { Search, ClipboardList, SprayCan, FileCheck, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: <Search className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />,
    title: 'Inspección Gratuita',
    description: 'Evaluamos tu espacio para identificar plaga, nivel de infestación y focos de origen.',
  },
  {
    number: '02',
    icon: <ClipboardList className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />,
    title: 'Plan Personalizado',
    description: 'Diseñamos un plan con productos y métodos adecuados a tu situación.',
  },
  {
    number: '03',
    icon: <SprayCan className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />,
    title: 'Tratamiento Profesional',
    description: 'Aplicamos productos domisanitarios seguros y efectivos con precisión.',
  },
  {
    number: '04',
    icon: <FileCheck className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />,
    title: 'Certificado y Garantía',
    description: 'Certificado con código QR, recomendaciones y garantía escrita de 30 días.',
  },
];

export function Process() {
  return (
    <section id="proceso" className="section-padding bg-surface-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <span className="inline-block text-brand-600 font-bold text-xs sm:text-sm tracking-wider uppercase mb-2 sm:mb-4 font-display">
            Así Trabajamos
          </span>
          <h2 className="section-title text-slate-900 mb-3 sm:mb-5">
            Proceso simple y transparente
          </h2>
          <p className="section-subtitle">
            Te acompañamos en cada paso para devolverte la tranquilidad.
          </p>
        </motion.div>

        {/* Mobile: 2x2 grid, Desktop: 4 columns */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[56px] left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-brand-300/60 to-transparent z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.55, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col items-center text-center group cursor-default"
            >
              {/* Step icon */}
              <div className="relative z-10 mb-3 sm:mb-5">
                <div className="w-14 h-14 sm:w-18 sm:h-18 lg:w-[80px] lg:h-[80px] rounded-xl sm:rounded-2xl bg-white border-2 border-brand-100 flex items-center justify-center text-brand-600 group-hover:bg-brand-500 group-hover:text-white group-hover:border-brand-500 group-hover:shadow-lg group-hover:shadow-brand-500/20 transition-all duration-500">
                  {step.icon}
                </div>
                <span className="absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-7 sm:h-7 bg-accent-500 text-brand-950 rounded-md sm:rounded-lg flex items-center justify-center text-[10px] sm:text-xs font-extrabold font-display shadow-md">
                  {step.number}
                </span>
              </div>

              <h3 className="text-xs sm:text-sm lg:text-base font-bold font-display text-slate-900 mb-1.5 sm:mb-2 leading-tight">{step.title}</h3>
              <p className="text-slate-500 text-[11px] sm:text-xs lg:text-sm leading-relaxed max-w-[160px] sm:max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-12"
        >
          <a
            href="https://wa.me/5491122541220?text=Hola,%20quisiera%20agendar%20una%20inspección%20gratuita"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Inspección Gratuita
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
