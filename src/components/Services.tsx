import { motion } from 'framer-motion';
import { ArrowRight, Bug, Rat, Antenna, Dog, Leaf } from 'lucide-react';

const services = [
  {
    icon: <Bug className="w-5 h-5 sm:w-7 sm:h-7" />,
    title: 'Cucarachas',
    image: 'https://imgs.search.brave.com/gxDQtnGdv1rJAcFmUKV-cByf_blFHngVql17ZBI3uc4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50Lm5hdGlvbmFs/Z2VvZ3JhcGhpYy5j/b20uZXMvbWVkaW8v/MjAyMy8wNS8xMC9j/dWNhcmFjaGFfNTJl/YzcwNGNfMjMwNTEw/MTc1NjEwXzgwMHg1/MjcuanBn',
    description: 'Gel en puntos clave y spray líquido perimetral para máxima efectividad.',
    treatment: 'Gel + Pulverización',
    badge: 'Más solicitado',
  },
  {
    icon: <Rat className="w-5 h-5 sm:w-7 sm:h-7" />,
    title: 'Roedores',
    image: 'https://tvazteca.brightspotcdn.com/dims4/default/07e384a/2147483647/strip/true/crop/2121x1414+0+0/resize/620x413!/format/webp/quality/90/?url=http%3A%2F%2Ftv-azteca-brightspot.s3.amazonaws.com%2F7c%2F67%2F0762ecba49f8b659892e06d204f3%2Fgettyimages-996155102.jpg',
    description: 'Cebos de alta seguridad y trampas. Soluciones integrales para hogares y comercios.',
    treatment: 'Cebos + Trampas',
    badge: null,
  },
  {
    icon: <Antenna className="w-5 h-5 sm:w-7 sm:h-7" />,
    title: 'Hormigas',
    image: 'https://estaticos-cdn.prensaiberica.es/clip/b9e6f7a0-79db-4ad2-8a80-5e88e717908b_16-9-discover-aspect-ratio_default_0.jpg',
    description: 'Eliminación de colonias con geles y aspersión localizada sin manchar.',
    treatment: 'Gel + Aspersión',
    badge: null,
  },
  {
    icon: <Dog className="w-5 h-5 sm:w-7 sm:h-7" />,
    title: 'Pulgas y Garrapatas',
    image: 'https://www.leonvet.es/update/tipos_de_garrapatas_en_perros_7319_0_600.jpg',
    description: 'Tratamiento intensivo en suelos y zonas de mascotas.',
    treatment: 'Pulverización intensiva',
    badge: null,
  },
  {
    icon: <Leaf className="w-5 h-5 sm:w-7 sm:h-7" />,
    title: 'Arañas y Escorpiones',
    image: 'https://i.imgur.com/xGgtYPQ.jpeg',
    description: 'Barreras preventivas con pulverización focalizada en zonas de riesgo.',
    treatment: 'Barrera perimetral',
    badge: null,
  },
];

export function Services() {
  return (
    <section id="servicios" className="section-padding bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <span className="inline-block text-brand-600 font-bold text-xs sm:text-sm tracking-wider uppercase mb-2 sm:mb-4 font-display">
            Nuestras Especialidades
          </span>
          <h2 className="section-title text-slate-900 mb-3 sm:mb-5">
            Soluciones para cada plaga
          </h2>
          <p className="section-subtitle">
            Tratamientos específicos adaptados al tipo de plaga que afecta tu entorno.
          </p>
        </motion.div>

        {/* Mobile: horizontal compact cards. Desktop: grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="group card-elevated overflow-hidden flex flex-row sm:flex-col"
            >
              {/* Image - side on mobile, top on desktop */}
              <div className="relative w-28 sm:w-full h-auto sm:h-44 lg:h-52 overflow-hidden flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/50 via-transparent to-transparent z-10" />
                <img
                  src={service.image}
                  alt={`Tratamiento para ${service.title}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {service.badge && (
                  <span className="absolute top-2 left-2 sm:top-3 sm:left-3 z-20 bg-accent-500 text-brand-950 text-[10px] sm:text-xs font-bold px-2 py-0.5 sm:px-3 sm:py-1 rounded-full">
                    {service.badge}
                  </span>
                )}
                <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 z-20">
                  <span className="bg-white/15 backdrop-blur-md text-white text-[10px] sm:text-xs font-medium px-2 py-0.5 sm:px-3 sm:py-1 rounded-full border border-white/20">
                    {service.treatment}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-3.5 sm:p-5 lg:p-6 flex flex-col flex-grow justify-center sm:justify-start">
                <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-3">
                  <div className="w-7 h-7 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-brand-50 rounded-lg sm:rounded-xl flex items-center justify-center text-brand-600 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300 flex-shrink-0">
                    {service.icon}
                  </div>
                  <h3 className="text-sm sm:text-lg lg:text-xl font-bold font-display text-slate-900">{service.title}</h3>
                </div>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-2 sm:mb-4 flex-grow line-clamp-2 sm:line-clamp-none">
                  {service.description}
                </p>
                <a
                  href={`https://wa.me/5491122541220?text=Hola,%20quisiera%20información%20sobre%20el%20tratamiento%20para%20*${service.title}*`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-brand-600 font-bold text-xs sm:text-sm hover:text-brand-700 transition-colors group/link"
                >
                  Consultar
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="bg-gradient-to-br from-brand-600 via-brand-700 to-brand-800 rounded-2xl p-5 sm:p-8 flex flex-col items-center justify-center text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 noise-overlay opacity-10" />
            <div className="relative z-10">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-5">
                <Bug className="w-6 h-6 sm:w-8 sm:h-8 text-accent-400" />
              </div>
              <h3 className="text-lg sm:text-2xl font-bold font-display text-white mb-2 sm:mb-3">
                ¿Otra plaga?
              </h3>
              <p className="text-brand-100/80 text-xs sm:text-sm mb-4 sm:mb-6 max-w-xs">
                Contanos tu problema y te damos una solución personalizada.
              </p>
              <a
                href="https://wa.me/5491122541220?text=Hola,%20tengo%20un%20problema%20con%20una%20plaga%20y%20necesito%20ayuda"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs sm:text-sm"
              >
                Contactar Ahora
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
