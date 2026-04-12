import { motion } from 'framer-motion';
import { Star, CheckCircle, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'María González',
    role: 'Dueña de Restaurante, Zona Sur',
    content: 'Excelente servicio, muy profesionales y efectivos. Habíamos probado otras opciones sin éxito, pero Ludmar acabó con nuestro problema de cucarachas de raíz. Recomendado al 100%.',
    rating: 5,
    initials: 'MG',
    color: 'from-brand-400 to-brand-600',
  },
  {
    name: 'Carlos Ruiz',
    role: 'Vecino de Lomas de Zamora',
    content: 'Acabaron con mi problema de plagas en una sola visita. Increíble la rapidez y la prolijidad con la que trabajan. Los volvería a llamar sin dudarlo.',
    rating: 5,
    initials: 'CR',
    color: 'from-navy-400 to-navy-600',
  },
  {
    name: 'Ana Martínez',
    role: 'Administradora de Consorcio',
    content: 'Personal muy amable, siempre llegan a horario y el servicio es de primera calidad. Nos dan el certificado al momento y nunca tuvimos una queja de los vecinos.',
    rating: 5,
    initials: 'AM',
    color: 'from-accent-400 to-accent-600',
  },
];

export function Testimonials() {
  return (
    <section id="testimonios" className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-brand-50/40 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-brand-600 font-bold text-sm tracking-wider uppercase mb-4 font-display">
            Testimonios
          </span>
          <h2 className="section-title text-slate-900 mb-5">
            Lo que dicen nuestros clientes
          </h2>
          <p className="section-subtitle">
            Cientos de hogares y comercios ya confían en nuestra eficacia y profesionalismo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-surface-50 p-8 rounded-2xl border border-slate-100 hover:border-brand-200/50 hover:shadow-xl hover:shadow-brand-500/5 transition-all duration-500"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 text-brand-100 group-hover:text-brand-200 transition-colors duration-300">
                <Quote className="w-10 h-10" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent-400 text-accent-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-slate-600 leading-relaxed mb-8 min-h-[100px] relative z-10">
                "{t.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                <div className={`w-12 h-12 bg-gradient-to-br ${t.color} rounded-xl flex items-center justify-center text-white font-bold font-display text-sm shadow-lg`}>
                  {t.initials}
                </div>
                <div>
                  <h4 className="font-bold font-display text-slate-900 flex items-center gap-2">
                    {t.name}
                    <CheckCircle className="w-4 h-4 text-brand-500" />
                  </h4>
                  <span className="text-sm text-slate-400">{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Reviews link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <p className="text-slate-400 text-sm">
            <span className="inline-flex items-center gap-1">
              <Star className="w-4 h-4 fill-accent-400 text-accent-400" />
              <strong className="text-slate-600">4.9/5</strong> basado en más de 100 reseñas verificadas
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
