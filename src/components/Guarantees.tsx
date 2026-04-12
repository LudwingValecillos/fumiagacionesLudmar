import { motion } from 'framer-motion';
import { ShieldCheck, RefreshCw, Leaf, Award, ArrowRight } from 'lucide-react';

const guarantees = [
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: 'Garantía de 30 Días',
    description: 'Si la plaga persiste dentro de los 30 días posteriores al servicio, volvemos y re-realizamos el tratamiento sin costo adicional.',
  },
  {
    icon: <Leaf className="w-8 h-8" />,
    title: 'Productos Seguros',
    description: 'Utilizamos exclusivamente productos domisanitarios de banda verde, aprobados por el Ministerio de Salud. Seguros para tu familia y mascotas.',
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: 'Certificado Oficial',
    description: 'Entregamos certificado de fumigación con código QR, válido para habilitaciones municipales de comercios e industrias.',
  },
  {
    icon: <RefreshCw className="w-8 h-8" />,
    title: 'Satisfacción Total',
    description: 'Si solicitás la cancelación antes del servicio, devolvemos el 100% del adelanto. Tu confianza es nuestra prioridad.',
  },
];

export function Guarantees() {
  return (
    <section id="garantias" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-brand-950 to-slate-900" />
      <div className="absolute inset-0 noise-overlay opacity-20" />

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-400/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left side - headline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <span className="inline-block text-accent-400 font-bold text-sm tracking-wider uppercase mb-4 font-display">
              Tu Tranquilidad
            </span>
            <h2 className="section-title text-white mb-6">
              Respaldamos cada servicio con{' '}
              <span className="text-accent-400">garantías reales</span>
            </h2>
            <p className="text-brand-100/70 text-lg leading-relaxed mb-8">
              No hacemos promesas vacías. Cada tratamiento viene con el respaldo de nuestra experiencia y
              compromiso documentado. Satisfacción garantizada o repetimos el servicio.
            </p>
            <a
              href="https://wa.me/5491122541220?text=Hola,%20quiero%20consultar%20sobre%20las%20garantías%20del%20servicio"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Consultar Garantías
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Right side - guarantee cards */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {guarantees.map((g, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-accent-400/20 transition-all duration-500"
              >
                <div className="w-14 h-14 bg-accent-500/10 rounded-2xl flex items-center justify-center text-accent-400 mb-5 group-hover:bg-accent-500/20 group-hover:scale-110 transition-all duration-300">
                  {g.icon}
                </div>
                <h3 className="text-lg font-bold font-display text-white mb-2">{g.title}</h3>
                <p className="text-brand-100/60 text-sm leading-relaxed">{g.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
