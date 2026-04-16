import { motion } from 'framer-motion';
import { Star, CheckCircle } from 'lucide-react';

const testimonials = [
  {
    name: 'María González',
    role: 'Restaurante, Zona Sur',
    content: 'Ludmar acabó con nuestro problema de cucarachas de raíz. Una sola visita y cero reincidencia. El certificado llegó al instante. Recomendado.',
    rating: 5,
    initials: 'MG',
    featured: true,
  },
  {
    name: 'Carlos Ruiz',
    role: 'Propietario, Lomas de Zamora',
    content: 'Rapidez y prolijidad. Problema resuelto en una visita. Los volvería a llamar sin dudarlo.',
    rating: 5,
    initials: 'CR',
    featured: false,
  },
  {
    name: 'Ana Martínez',
    role: 'Administradora de Consorcio',
    content: 'Siempre puntuales. Certificado al momento y sin quejas de ningún vecino.',
    rating: 5,
    initials: 'AM',
    featured: false,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export function Testimonials() {
  const featured = testimonials.find((t) => t.featured)!;
  const rest = testimonials.filter((t) => !t.featured);

  return (
    <section id="testimonios" className="section-padding bg-surface-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-14"
        >
          <span className="inline-block text-brand-600 font-bold text-xs sm:text-sm tracking-wider uppercase mb-3 font-display">
            Testimonios
          </span>
          <h2 className="section-title text-slate-900 mb-0 max-w-lg">
            Lo que dicen quienes confían en nosotros
          </h2>
        </motion.div>

        {/* Asymmetric layout: featured large left + 2 stacked right */}
        <div className="grid md:grid-cols-[1.4fr_1fr] gap-4 sm:gap-5">

          {/* Featured testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-brand-950 rounded-3xl p-7 sm:p-10 overflow-hidden flex flex-col justify-between min-h-[280px]"
          >
            <div className="absolute inset-0 noise-overlay opacity-15 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-48 h-48 translate-x-1/4 translate-y-1/4 pointer-events-none">
              <div className="w-full h-full rounded-full bg-brand-400/8 blur-2xl" />
            </div>

            <div className="relative z-10">
              <Stars count={featured.rating} />
              <p className="text-white/85 text-base sm:text-lg leading-relaxed mt-5 mb-7" style={{ fontStyle: 'normal' }}>
                "{featured.content}"
              </p>
            </div>

            <div className="relative z-10 flex items-center gap-3 pt-5 border-t border-white/10">
              <div className="w-11 h-11 rounded-full bg-brand-500 flex items-center justify-center text-white font-bold font-display text-sm flex-shrink-0">
                {featured.initials}
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="font-bold font-display text-white text-sm">{featured.name}</h4>
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                </div>
                <p className="text-brand-300/60 text-xs">{featured.role}</p>
              </div>
            </div>
          </motion.div>

          {/* 2 compact testimonials stacked */}
          <div className="flex flex-col gap-4 sm:gap-5">
            {rest.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.12 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-slate-100 shadow-sm flex-1 flex flex-col justify-between"
              >
                <div>
                  <Stars count={t.rating} />
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed mt-3 mb-4">
                    "{t.content}"
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div className="w-9 h-9 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-bold font-display text-xs flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <h4 className="font-bold font-display text-slate-900 text-sm">{t.name}</h4>
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                    </div>
                    <p className="text-slate-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Rating summary */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex items-center justify-between bg-white rounded-2xl px-5 py-3.5 border border-slate-100 shadow-sm"
            >
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <strong className="text-slate-800 text-sm font-bold">4.9/5</strong>
              </div>
              <span className="text-slate-500 text-xs font-medium">+100 reseñas verificadas</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
