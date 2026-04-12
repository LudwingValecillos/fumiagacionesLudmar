import { motion } from 'framer-motion';
import { ArrowRight, Bug, Rat, Antenna, Dog, Leaf } from 'lucide-react';

const services = [
  {
    icon: <Bug className="w-7 h-7" />,
    title: 'Cucarachas',
    image: 'https://hamasl.com/wp-content/uploads/2022/05/como-eliminar-cucarachas-en-casa.jpg',
    description: 'Aplicación de gel en puntos clave, bajo mesada y equipos eléctricos. Spray líquido perimetral para máxima efectividad.',
    treatment: 'Gel + Pulverización',
    badge: 'Más solicitado',
  },
  {
    icon: <Rat className="w-7 h-7" />,
    title: 'Roedores',
    image: 'https://tvazteca.brightspotcdn.com/dims4/default/07e384a/2147483647/strip/true/crop/2121x1414+0+0/resize/620x413!/format/webp/quality/90/?url=http%3A%2F%2Ftv-azteca-brightspot.s3.amazonaws.com%2F7c%2F67%2F0762ecba49f8b659892e06d204f3%2Fgettyimages-996155102.jpg',
    description: 'Desratización con cebos de alta seguridad y trampas. Soluciones integrales para hogares y comercios.',
    treatment: 'Cebos + Trampas',
    badge: null,
  },
  {
    icon: <Antenna className="w-7 h-7" />,
    title: 'Hormigas',
    image: 'https://estaticos-cdn.prensaiberica.es/clip/b9e6f7a0-79db-4ad2-8a80-5e88e717908b_16-9-discover-aspect-ratio_default_0.jpg',
    description: 'Eliminación de colonias invasoras interiores y exteriores mediante geles y aspersión localizada sin manchar.',
    treatment: 'Gel + Aspersión',
    badge: null,
  },
  {
    icon: <Dog className="w-7 h-7" />,
    title: 'Pulgas y Garrapatas',
    image: 'https://www.leonvet.es/update/tipos_de_garrapatas_en_perros_7319_0_600.jpg',
    description: 'Tratamiento intensivo en suelos, alfombras y zonas de descanso de mascotas para erradicar ciclos de reproducción.',
    treatment: 'Pulverización intensiva',
    badge: null,
  },
  {
    icon: <Leaf className="w-7 h-7" />,
    title: 'Arañas y Escorpiones',
    image: 'https://i.imgur.com/xGgtYPQ.jpeg',
    description: 'Control especializado y barreras preventivas mediante pulverización focalizada en zonas de riesgo.',
    treatment: 'Barrera perimetral',
    badge: null,
  },
];

export function Services() {
  return (
    <section id="servicios" className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-50/50 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-brand-600 font-bold text-sm tracking-wider uppercase mb-4 font-display">
            Nuestras Especialidades
          </span>
          <h2 className="section-title text-slate-900 mb-5">
            Soluciones para cada plaga
          </h2>
          <p className="section-subtitle">
            Tratamientos específicos y efectivos adaptados al tipo de plaga que afecta tu entorno, garantizando la salud de tu familia.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group card-elevated overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/60 via-brand-950/10 to-transparent z-10" />
                <img
                  src={service.image}
                  alt={`Tratamiento para ${service.title}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {service.badge && (
                  <span className="absolute top-4 left-4 z-20 bg-accent-500 text-brand-950 text-xs font-bold px-3 py-1 rounded-full">
                    {service.badge}
                  </span>
                )}
                <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2">
                  <span className="bg-white/15 backdrop-blur-md text-white text-xs font-medium px-3 py-1 rounded-full border border-white/20">
                    {service.treatment}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold font-display text-slate-900">{service.title}</h3>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-grow">
                  {service.description}
                </p>
                <a
                  href={`https://wa.me/5491122541220?text=Hola,%20quisiera%20información%20sobre%20el%20tratamiento%20para%20*${service.title}*`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-brand-600 font-bold text-sm hover:text-brand-700 transition-colors group/link"
                >
                  Consultar tratamiento
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gradient-to-br from-brand-600 via-brand-700 to-brand-800 rounded-2xl p-8 flex flex-col items-center justify-center text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 noise-overlay opacity-10" />
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <Bug className="w-8 h-8 text-accent-400" />
              </div>
              <h3 className="text-2xl font-bold font-display text-white mb-3">
                ¿Otra plaga?
              </h3>
              <p className="text-brand-100/80 text-sm mb-6 max-w-xs">
                Tratamos todo tipo de plagas urbanas. Contanos tu problema y te damos una solución personalizada.
              </p>
              <a
                href="https://wa.me/5491122541220?text=Hola,%20tengo%20un%20problema%20con%20una%20plaga%20y%20necesito%20ayuda"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm"
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
