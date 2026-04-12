import { motion } from 'framer-motion';
import { QrCode, ShieldCheck, HandCoins, UserCheck } from 'lucide-react';

const features = [
  {
    icon: <QrCode className="w-7 h-7" />,
    title: 'Certificados Oficiales',
    description: 'Entregamos certificados de fumigación válidos con código QR para comercios e industrias.',
    accent: 'from-brand-500 to-brand-400',
    bgAccent: 'bg-brand-50',
    iconColor: 'text-brand-600',
  },
  {
    icon: <ShieldCheck className="w-7 h-7" />,
    title: 'Garantía de 30 Días',
    description: 'Si la plaga persiste dentro de los 30 días, volvemos sin costo adicional. Tu tranquilidad está respaldada.',
    accent: 'from-navy-500 to-navy-400',
    bgAccent: 'bg-navy-50',
    iconColor: 'text-navy-600',
  },
  {
    icon: <HandCoins className="w-7 h-7" />,
    title: 'Múltiples Medios de Pago',
    description: 'Efectivo, débito, transferencias bancarias y Mercado Pago. Pagá como más te convenga.',
    accent: 'from-accent-500 to-accent-400',
    bgAccent: 'bg-accent-50',
    iconColor: 'text-accent-700',
  },
  {
    icon: <UserCheck className="w-7 h-7" />,
    title: 'Personal Capacitado',
    description: 'Técnicos especialistas en manejo integrado de plagas, constantemente actualizados y certificados.',
    accent: 'from-brand-500 to-brand-300',
    bgAccent: 'bg-brand-50',
    iconColor: 'text-brand-600',
  },
];

export function Features() {
  return (
    <section className="section-padding bg-surface-50 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white p-7 rounded-2xl border border-slate-100 hover:border-brand-200/50 shadow-sm hover:shadow-xl hover:shadow-brand-500/5 transition-all duration-500"
            >
              {/* Top gradient line */}
              <div className={`absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r ${feature.accent} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className={`w-14 h-14 ${feature.bgAccent} rounded-2xl flex items-center justify-center mb-5 ${feature.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold font-display text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
