import { motion } from 'framer-motion';
import { QrCode, ShieldCheck, HandCoins, UserCheck } from 'lucide-react';

export function Features() {
  return (
    <section className="py-10 sm:py-14 bg-surface-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Asymmetric bento: 1 wide + 3 compact */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">

          {/* Card 1 — wide hero feature */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-2 md:col-span-2 group relative bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-slate-100 shadow-sm overflow-hidden hover:shadow-lg hover:border-brand-100 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-50/60 via-transparent to-transparent pointer-events-none" />
            <div className="relative flex flex-col sm:flex-row sm:items-start gap-5">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-brand-500 rounded-2xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-brand-500/25">
                <QrCode className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <div>
                <h3 className="text-base sm:text-xl font-bold font-display text-slate-900 mb-2 leading-tight">
                  Certificados Oficiales con QR
                </h3>
                <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-md">
                  Certificados de fumigación con código QR, válidos para habilitaciones municipales. Indispensables para comercios, restaurantes e industrias.
                </p>
                <div className="mt-4 inline-flex items-center gap-2 text-brand-600 text-sm font-semibold">
                  <span className="w-2 h-2 rounded-full bg-brand-500" />
                  Certificado inmediato post-servicio
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="group bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-100 shadow-sm hover:shadow-lg hover:border-brand-100 transition-all duration-500 overflow-hidden relative"
          >
            <div className="w-11 h-11 sm:w-13 sm:h-13 bg-navy-50 rounded-xl sm:rounded-2xl flex items-center justify-center text-navy-600 mb-3 sm:mb-4 group-hover:bg-navy-500 group-hover:text-white transition-all duration-300">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="text-sm sm:text-base font-bold font-display text-slate-900 mb-1.5 leading-tight">Garantía 30 Días</h3>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">Si la plaga persiste, volvemos sin costo adicional.</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
            className="group bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-100 shadow-sm hover:shadow-lg hover:border-accent-200 transition-all duration-500 overflow-hidden relative"
          >
            <div className="w-11 h-11 sm:w-13 sm:h-13 bg-accent-50 rounded-xl sm:rounded-2xl flex items-center justify-center text-accent-700 mb-3 sm:mb-4 group-hover:bg-accent-500 group-hover:text-white transition-all duration-300">
              <HandCoins className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="text-sm sm:text-base font-bold font-display text-slate-900 mb-1.5 leading-tight">Múltiples Pagos</h3>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">Efectivo, débito, transferencias y Mercado Pago.</p>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="group bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-100 shadow-sm hover:shadow-lg hover:border-brand-100 transition-all duration-500 overflow-hidden relative"
          >
            <div className="w-11 h-11 sm:w-13 sm:h-13 bg-brand-50 rounded-xl sm:rounded-2xl flex items-center justify-center text-brand-600 mb-3 sm:mb-4 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300">
              <UserCheck className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="text-sm sm:text-base font-bold font-display text-slate-900 mb-1.5 leading-tight">Personal Certificado</h3>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">Técnicos especialistas actualizados y certificados.</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
