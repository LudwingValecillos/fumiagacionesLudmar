import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Award, Clock, CheckCircle2 } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-mesh" />

      {/* Noise texture overlay */}
      <div className="absolute inset-0 noise-overlay opacity-30" />

      {/* Organic shape decorations */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] -translate-y-1/4 translate-x-1/4 pointer-events-none">
        <div className="w-full h-full rounded-full bg-brand-400/8 blur-3xl" />
      </div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] translate-y-1/3 -translate-x-1/4 pointer-events-none">
        <div className="w-full h-full rounded-full bg-accent-500/5 blur-3xl" />
      </div>

      {/* Floating organic shapes */}
      <motion.div
        animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[15%] right-[10%] w-20 h-20 border border-white/5 rounded-3xl hidden lg:block"
      />
      <motion.div
        animate={{ y: [10, -15, 10], rotate: [0, -3, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-[20%] left-[8%] w-32 h-32 border border-brand-300/10 rounded-full hidden lg:block"
      />
      <motion.div
        animate={{ y: [5, -10, 5] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[40%] right-[5%] w-3 h-3 bg-accent-400/30 rounded-full hidden lg:block"
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-28 pb-20 md:pt-32 md:pb-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-brand-100 text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" />
              Empresa Certificada — Ministerio de Salud
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight text-balance"
          >
            Protegemos tu hogar
            <br />
            <span className="relative inline-block">
              <span className="relative z-10 text-accent-400">libre de plagas</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute bottom-1 md:bottom-2 left-0 right-0 h-2 md:h-3 bg-accent-500/20 rounded-full origin-left -z-0"
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-brand-100/80 mb-10 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0"
          >
            Más de <strong className="text-white font-semibold">20 años de experiencia</strong> eliminando plagas con
            productos domisanitarios aprobados por el Ministerio de Salud.
            Seguridad, eficacia y cuidado del medio ambiente.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 px-4 sm:px-0"
          >
            <a
              href="https://wa.me/5491122541220?text=Hola,%20me%20interesa%20solicitar%20un%20presupuesto"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto btn-primary text-base sm:text-lg px-8 py-4"
            >
              Presupuesto Gratis
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#servicios"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 border-2 border-white/20 text-white hover:bg-white/10 font-bold px-8 py-4 rounded-full transition-all duration-300 text-base sm:text-lg backdrop-blur-sm"
            >
              Ver Servicios
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
          >
            {[
              { icon: <ShieldCheck className="w-5 h-5" />, label: 'Productos Ecológicos', sublabel: 'Banda verde' },
              { icon: <Award className="w-5 h-5" />, label: 'Técnicos Certificados', sublabel: 'Capacitados' },
              { icon: <CheckCircle2 className="w-5 h-5" />, label: 'Garantía Escrita', sublabel: '30 días' },
              { icon: <Clock className="w-5 h-5" />, label: 'Respuesta Rápida', sublabel: 'En minutos' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/5 hover:bg-white/10 transition-colors duration-300"
              >
                <div className="text-accent-400">{item.icon}</div>
                <span className="text-white font-semibold text-sm text-center leading-tight">{item.label}</span>
                <span className="text-brand-200/60 text-xs">{item.sublabel}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
          <path d="M0 80V40C240 70 480 10 720 40C960 70 1200 20 1440 50V80H0Z" className="fill-surface-50" />
        </svg>
      </div>
    </section>
  );
}
