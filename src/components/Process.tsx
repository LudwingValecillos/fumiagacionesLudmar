import { motion } from 'framer-motion';
import { Search, ClipboardList, SprayCan, FileCheck, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: <Search className="w-7 h-7" />,
    title: 'Inspección Gratuita',
    description: 'Evaluamos tu espacio sin compromiso para identificar el tipo de plaga, nivel de infestación y focos de origen.',
  },
  {
    number: '02',
    icon: <ClipboardList className="w-7 h-7" />,
    title: 'Plan Personalizado',
    description: 'Diseñamos un plan de tratamiento específico con productos y métodos adecuados a tu situación.',
  },
  {
    number: '03',
    icon: <SprayCan className="w-7 h-7" />,
    title: 'Tratamiento Profesional',
    description: 'Aplicamos los productos domisanitarios más seguros y efectivos del mercado con precisión experta.',
  },
  {
    number: '04',
    icon: <FileCheck className="w-7 h-7" />,
    title: 'Certificado y Garantía',
    description: 'Entregamos certificado oficial con código QR, recomendaciones preventivas y garantía escrita de 30 días.',
  },
];

export function Process() {
  return (
    <section id="proceso" className="section-padding bg-surface-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-50/40 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-brand-600 font-bold text-sm tracking-wider uppercase mb-4 font-display">
            Así Trabajamos
          </span>
          <h2 className="section-title text-slate-900 mb-5">
            Un proceso simple y transparente
          </h2>
          <p className="section-subtitle">
            Desde la inspección hasta la garantía, te acompañamos en cada paso para devolverte la tranquilidad.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[72px] left-[12%] right-[12%] h-px bg-gradient-to-r from-brand-200 via-brand-300 to-brand-200 z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="relative flex flex-col items-center text-center group"
            >
              {/* Step number + icon */}
              <div className="relative z-10 mb-6">
                <div className="w-[88px] h-[88px] rounded-2xl bg-white border-2 border-brand-100 flex items-center justify-center text-brand-600 group-hover:bg-brand-500 group-hover:text-white group-hover:border-brand-500 group-hover:shadow-xl group-hover:shadow-brand-500/20 transition-all duration-500 group-hover:-translate-y-1">
                  {step.icon}
                </div>
                <span className="absolute -top-2 -right-2 w-8 h-8 bg-accent-500 text-brand-950 rounded-lg flex items-center justify-center text-xs font-extrabold font-display shadow-lg">
                  {step.number}
                </span>
              </div>

              <h3 className="text-lg font-bold font-display text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <a
            href="https://wa.me/5491122541220?text=Hola,%20quisiera%20agendar%20una%20inspección%20gratuita"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Agendar Inspección Gratuita
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
