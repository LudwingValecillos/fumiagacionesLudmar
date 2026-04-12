import { motion } from 'framer-motion';
import { ShieldCheck, RefreshCw, Leaf, Award, ArrowRight } from 'lucide-react';

const guarantees = [
  {
    icon: <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: 'Garantía 30 Días',
    description: 'Si la plaga persiste, volvemos y tratamos sin costo adicional.',
  },
  {
    icon: <Leaf className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: 'Productos Seguros',
    description: 'Banda verde, aprobados por el Ministerio de Salud. Seguros para tu familia.',
  },
  {
    icon: <Award className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: 'Certificado Oficial',
    description: 'Con código QR, válido para habilitaciones municipales.',
  },
  {
    icon: <RefreshCw className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: 'Satisfacción Total',
    description: 'Cancelación antes del servicio = 100% reembolso.',
  },
];

export function Guarantees() {
  return (
    <section id="garantias" className="relative py-12 sm:py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-brand-950 to-slate-900" />
      <div className="absolute inset-0 noise-overlay opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Mobile: stacked. Desktop: side by side */}
        <div className="grid lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 text-center lg:text-left"
          >
            <span className="inline-block text-accent-400 font-bold text-xs sm:text-sm tracking-wider uppercase mb-2 sm:mb-4 font-display">
              Tu Tranquilidad
            </span>
            <h2 className="section-title text-white mb-3 sm:mb-5">
              Servicio con{' '}
              <span className="text-accent-400">garantías reales</span>
            </h2>
            <p className="text-brand-100/70 text-sm sm:text-base leading-relaxed mb-5 sm:mb-8">
              Cada tratamiento con el respaldo de nuestra experiencia. Satisfacción garantizada o repetimos el servicio.
            </p>
            <a
              href="https://wa.me/5491122541220?text=Hola,%20quiero%20consultar%20sobre%20las%20garantías%20del%20servicio"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary hidden sm:inline-flex"
            >
              Consultar Garantías
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Guarantee cards - 2x2 grid */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-3 sm:gap-4">
            {guarantees.map((g, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-3.5 sm:p-5 lg:p-6 hover:bg-white/10 hover:border-accent-400/20 transition-all duration-500"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent-500/10 rounded-xl sm:rounded-2xl flex items-center justify-center text-accent-400 mb-2.5 sm:mb-4 group-hover:bg-accent-500/20 transition-all duration-300">
                  {g.icon}
                </div>
                <h3 className="text-sm sm:text-base lg:text-lg font-bold font-display text-white mb-1 sm:mb-2 leading-tight">{g.title}</h3>
                <p className="text-brand-100/60 text-[11px] sm:text-xs lg:text-sm leading-relaxed">{g.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="lg:hidden text-center">
            <a
              href="https://wa.me/5491122541220?text=Hola,%20quiero%20consultar%20sobre%20las%20garantías%20del%20servicio"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Consultar Garantías
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
