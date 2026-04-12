import { motion } from 'framer-motion';
import { QrCode, ShieldCheck, HandCoins, UserCheck } from 'lucide-react';

const features = [
  {
    icon: <QrCode className="w-5 h-5 sm:w-7 sm:h-7" />,
    title: 'Certificados Oficiales',
    description: 'Certificados de fumigación con código QR para comercios e industrias.',
    accent: 'from-brand-500 to-brand-400',
    bgAccent: 'bg-brand-50',
    iconColor: 'text-brand-600',
  },
  {
    icon: <ShieldCheck className="w-5 h-5 sm:w-7 sm:h-7" />,
    title: 'Garantía 30 Días',
    description: 'Si la plaga persiste, volvemos sin costo adicional.',
    accent: 'from-navy-500 to-navy-400',
    bgAccent: 'bg-navy-50',
    iconColor: 'text-navy-600',
  },
  {
    icon: <HandCoins className="w-5 h-5 sm:w-7 sm:h-7" />,
    title: 'Múltiples Pagos',
    description: 'Efectivo, débito, transferencias y Mercado Pago.',
    accent: 'from-accent-500 to-accent-400',
    bgAccent: 'bg-accent-50',
    iconColor: 'text-accent-700',
  },
  {
    icon: <UserCheck className="w-5 h-5 sm:w-7 sm:h-7" />,
    title: 'Personal Capacitado',
    description: 'Técnicos especialistas actualizados y certificados.',
    accent: 'from-brand-500 to-brand-300',
    bgAccent: 'bg-brand-50',
    iconColor: 'text-brand-600',
  },
];

export function Features() {
  return (
    <section className="py-10 sm:py-14 md:py-20 bg-surface-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative">
        {/* Mobile: 2-col compact grid, Desktop: 4-col */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group relative bg-white p-4 sm:p-5 lg:p-7 rounded-xl sm:rounded-2xl border border-slate-100 hover:border-brand-200/50 shadow-sm hover:shadow-xl hover:shadow-brand-500/5 transition-all duration-500"
            >
              <div className={`absolute top-0 left-4 right-4 sm:left-6 sm:right-6 h-0.5 bg-gradient-to-r ${feature.accent} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 ${feature.bgAccent} rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 lg:mb-5 ${feature.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-sm sm:text-base lg:text-lg font-bold font-display text-slate-900 mb-1 sm:mb-2 leading-tight">{feature.title}</h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
