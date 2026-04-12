import { motion } from 'framer-motion';
import { Star, CheckCircle, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'María González',
    role: 'Restaurante, Zona Sur',
    content: 'Excelente servicio. Ludmar acabó con nuestro problema de cucarachas de raíz. Recomendado al 100%.',
    rating: 5,
    initials: 'MG',
    color: 'from-brand-400 to-brand-600',
  },
  {
    name: 'Carlos Ruiz',
    role: 'Lomas de Zamora',
    content: 'Acabaron con mi problema en una sola visita. Increíble la rapidez y prolijidad. Los volvería a llamar.',
    rating: 5,
    initials: 'CR',
    color: 'from-navy-400 to-navy-600',
  },
  {
    name: 'Ana Martínez',
    role: 'Administradora Consorcio',
    content: 'Siempre puntuales, servicio de primera. Certificado al momento y nunca una queja de vecinos.',
    rating: 5,
    initials: 'AM',
    color: 'from-accent-400 to-accent-600',
  },
];

export function Testimonials() {
  return (
    <section id="testimonios" className="section-padding bg-slate-50/50 relative overflow-hidden">
      {/* Elementos decorativos de fondo para un look premium */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-gradient-to-b from-brand-50/50 to-transparent blur-3xl -z-10 transform translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-full md:w-1/2 h-full bg-gradient-to-t from-slate-100/80 to-transparent blur-3xl -z-10 transform -translate-x-1/3"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 15 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-10 sm:mb-14 md:mb-16"
        >
          <span className="inline-flex items-center justify-center px-4 py-1.5 bg-brand-50 text-brand-600 rounded-full font-bold text-xs sm:text-sm tracking-widest uppercase mb-4 border border-brand-100/50 shadow-sm">
            Testimonios
          </span>
          <h2 className="section-title text-slate-900 mb-4 sm:mb-6">
            Lo que dicen nuestros clientes
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto text-slate-600">
            Hogares y comercios que ya confían en nuestra eficacia para mantener sus espacios seguros y libres de plagas.
          </p>
        </motion.div>

        {/* Stack vertical para móvil (Grid 1 columna), Grid de 3 columnas para desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white p-6 sm:p-8 rounded-3xl border border-slate-100/80 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between h-full"
            >
              {/* Marca de agua de comillas (muy sutil de fondo) */}
              <div className="absolute -right-4 -bottom-4 text-slate-50 group-hover:text-slate-100 transition-colors duration-500 z-0 transform -rotate-12 translate-y-2">
                <Quote className="w-32 h-32 sm:w-40 sm:h-40" />
              </div>

              <div className="relative z-10 flex-grow">
                {/* Estrellas */}
                <div className="flex gap-1 mb-5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400 drop-shadow-sm" />
                  ))}
                </div>

                {/* Contenido */}
                <p className="text-slate-700 text-base sm:text-[17px] leading-relaxed mb-6 font-medium">
                  "{t.content}"
                </p>
              </div>

              {/* Autor */}
              <div className="relative z-10 flex items-center gap-4 pt-6 border-t border-slate-100 mt-auto">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${t.color} rounded-full flex items-center justify-center text-white font-bold font-display text-[15px] sm:text-[17px] shadow-sm flex-shrink-0 border-[3px] border-white ring-1 ring-slate-100`}>
                  {t.initials}
                </div>
                <div className="flex flex-col">
                  <h4 className="font-bold font-display text-slate-900 text-[15px] sm:text-[17px] flex items-center gap-1.5 leading-tight">
                    {t.name}
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  </h4>
                  <span className="text-[13px] sm:text-[15px] text-slate-500 mt-0.5">{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Rating summary interactivo/elegante */}
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           className="text-center mt-10 sm:mt-12"
        >
          <div className="inline-flex items-center gap-2.5 bg-white px-5 sm:px-6 py-3 rounded-full shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
             <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
             <div className="flex items-center gap-1.5">
               <strong className="text-slate-800 text-sm sm:text-base font-bold">4.9/5</strong>
               <span className="w-1 h-1 rounded-full bg-slate-300"></span>
               <span className="text-slate-500 text-[13px] sm:text-sm font-medium">Más de 100 reseñas verificadas</span>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
