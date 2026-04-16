import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Award, Clock, CheckCircle2, Star } from 'lucide-react';

const trustCards = [
  { icon: <ShieldCheck className="w-5 h-5" />, label: 'Productos Ecológicos', sub: 'Banda verde' },
  { icon: <Award className="w-5 h-5" />, label: 'Técnicos Certificados', sub: 'Min. Salud' },
  { icon: <CheckCircle2 className="w-5 h-5" />, label: 'Garantía Escrita', sub: '30 días' },
  { icon: <Clock className="w-5 h-5" />, label: 'Respuesta Rápida', sub: 'En minutos' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-mesh" />
      <div className="absolute inset-0 noise-overlay opacity-30" />

      {/* Ambient blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] -translate-y-1/4 translate-x-1/4 pointer-events-none">
        <div className="w-full h-full rounded-full bg-brand-400/6 blur-3xl" />
      </div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] translate-y-1/3 -translate-x-1/4 pointer-events-none">
        <div className="w-full h-full rounded-full bg-accent-500/5 blur-3xl" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] hidden md:block pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.1) 1px,transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-36 md:pb-24">
        <div className="grid lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px] gap-12 xl:gap-20 items-center max-w-6xl mx-auto">

          {/* LEFT — content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Eyebrow badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-brand-100 text-xs sm:text-sm font-medium mb-6 sm:mb-8">
                <span className="w-1.5 h-1.5 bg-accent-400 rounded-full animate-pulse flex-shrink-0" />
                Empresa certificada — Ministerio de Salud
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-white mb-5 sm:mb-7 text-balance"
              style={{ fontSize: 'clamp(2rem, 5vw + 0.5rem, 4rem)', lineHeight: 1.08, letterSpacing: '-0.03em' }}
            >
              Protegemos tu hogar{' '}
              <br className="hidden sm:block" />
              <span className="text-accent-400">libre de plagas</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-brand-100/75 mb-8 sm:mb-10 leading-relaxed mx-auto lg:mx-0"
              style={{ fontSize: 'clamp(0.9rem, 1.5vw + 0.5rem, 1.125rem)', maxWidth: '52ch' }}
            >
              Más de <strong className="text-white font-semibold">20 años de experiencia</strong> eliminando
              plagas con productos aprobados por el Ministerio de Salud.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3 mb-10 sm:mb-14"
            >
              <a
                href="https://wa.me/5491122541220?text=Hola,%20me%20interesa%20solicitar%20un%20presupuesto"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto btn-primary text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-3.5"
              >
                Presupuesto Gratis
                <span className="w-5 h-5 rounded-full bg-brand-950/15 flex items-center justify-center">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </a>
              <a
                href="#servicios"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/25 text-white hover:bg-white/10 font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full transition-all duration-300 text-sm sm:text-base backdrop-blur-sm"
              >
                Ver Servicios
              </a>
            </motion.div>

            {/* Trust row */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {['CF', 'MG', 'AR', 'LP'].map((initials, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 border-2 border-brand-800 flex items-center justify-center text-[9px] font-bold text-white"
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-accent-400 text-accent-400" />
                  ))}
                  <span className="text-white font-bold text-sm ml-1">4.9</span>
                </div>
                <p className="text-brand-200/60 text-xs">+500 clientes satisfechos</p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT — visual cards stack */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex flex-col gap-3"
          >
            {/* Main stat card */}
            <div className="p-1.5 rounded-[1.75rem] bg-white/8 border border-white/12">
              <div className="bg-white/10 backdrop-blur-sm rounded-[1.35rem] p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-brand-200/60 text-xs font-medium uppercase tracking-widest mb-1">Efectividad comprobada</p>
                    <p className="text-white font-extrabold font-display" style={{ fontSize: '3rem', lineHeight: 1, letterSpacing: '-0.04em' }}>
                      98<span className="text-accent-400 text-3xl">%</span>
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-accent-500/15 border border-accent-400/20 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-accent-400" />
                  </div>
                </div>
                <p className="text-brand-100/60 text-sm">Resolución en primera aplicación</p>
              </div>
            </div>

            {/* Two small cards */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: '20+', label: 'Años de', sub: 'experiencia', icon: <Award className="w-5 h-5 text-brand-300" /> },
                { value: '500+', label: 'Clientes', sub: 'activos', icon: <ShieldCheck className="w-5 h-5 text-accent-400" /> },
              ].map((card, i) => (
                <div key={i} className="p-1 rounded-2xl bg-white/8 border border-white/12">
                  <div className="bg-white/8 backdrop-blur-sm rounded-[calc(1rem-2px)] p-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                    {card.icon}
                    <p className="text-white font-extrabold font-display text-2xl mt-2" style={{ letterSpacing: '-0.03em' }}>
                      {card.value}
                    </p>
                    <p className="text-brand-200/60 text-xs mt-0.5 leading-tight">{card.label}<br />{card.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust indicators row */}
            <div className="grid grid-cols-2 gap-2">
              {trustCards.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-white/6 border border-white/8"
                >
                  <div className="text-accent-400 flex-shrink-0">{item.icon}</div>
                  <div>
                    <p className="text-white font-semibold text-xs leading-tight">{item.label}</p>
                    <p className="text-brand-200/50 text-[10px]">{item.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mobile trust grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-2 gap-2 lg:hidden"
          >
            {trustCards.map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-white/6 border border-white/8 text-center"
              >
                <div className="text-accent-400">{item.icon}</div>
                <span className="text-white font-semibold text-[11px] leading-tight">{item.label}</span>
                <span className="text-brand-200/50 text-[10px]">{item.sub}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
          <path d="M0 60V30C240 50 480 10 720 30C960 50 1200 15 1440 35V60H0Z" className="fill-surface-50" />
        </svg>
      </div>
    </section>
  );
}
