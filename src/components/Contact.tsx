import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, MapPin, Clock, MessageCircle, CheckCircle } from 'lucide-react';

export function Contact() {
  const [formState, setFormState] = useState({
    nombre: '',
    telefono: '',
    email: '',
    mensaje: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola, soy *${formState.nombre}*.\n\nTeléfono: ${formState.telefono}\nEmail: ${formState.email}\n\nConsulta: ${formState.mensaje}`;
    const url = `https://wa.me/5491122541220?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const contactItems = [
    { icon: <Phone className="w-4 h-4" />, title: 'Teléfono', detail: '11 2254-1220', sub: 'Lun a Sáb', href: 'tel:1122541220' },
    { icon: <MessageCircle className="w-4 h-4" />, title: 'WhatsApp', detail: 'Respuesta rápida', sub: 'Escribinos', href: 'https://wa.me/5491122541220' },
    { icon: <MapPin className="w-4 h-4" />, title: 'Cobertura', detail: 'Zona Sur, GBA', sub: 'Prov. de Bs.As.', href: null },
    { icon: <Clock className="w-4 h-4" />, title: 'Horario', detail: 'Lun a Sáb', sub: 'Emergencias 24hs', href: null },
  ];

  return (
    <section id="contacto" className="section-padding bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6 sm:mb-10 md:mb-14"
        >
          <span className="inline-block text-brand-600 font-bold text-xs sm:text-sm tracking-wider uppercase mb-2 sm:mb-3 font-display">
            Contacto
          </span>
          <h2 className="section-title text-slate-900 mb-2 sm:mb-4">
            ¿Problema con plagas?
          </h2>
          <p className="section-subtitle">
            Escribinos y recibí respuesta en minutos. Sin cargo ni compromiso.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-5 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {/* Contact Info - 2x2 on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-2.5 sm:gap-3">
              {contactItems.map((item, i) => {
                const content = (
                  <div className="flex items-center lg:items-start gap-2.5 sm:gap-3 p-3 sm:p-3.5 rounded-xl bg-surface-50 border border-slate-100 hover:border-brand-200 transition-all duration-300 group h-full">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-brand-50 rounded-lg sm:rounded-xl flex items-center justify-center text-brand-600 flex-shrink-0 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-medium block">{item.title}</span>
                      <p className="font-bold text-slate-800 font-display text-xs sm:text-sm truncate">{item.detail}</p>
                      <p className="text-[10px] sm:text-xs text-slate-400 hidden sm:block">{item.sub}</p>
                    </div>
                  </div>
                );

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {content}
                      </a>
                    ) : content}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-surface-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-slate-100">
              <h3 className="text-base sm:text-lg font-bold font-display text-slate-900 mb-0.5">Solicitá tu presupuesto</h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-4 sm:mb-5">Te contactamos por WhatsApp.</p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-10 sm:py-16 text-center"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-brand-100 rounded-full flex items-center justify-center mb-3">
                    <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-brand-600" />
                  </div>
                  <h4 className="text-base sm:text-xl font-bold font-display text-slate-900 mb-1">Mensaje enviado</h4>
                  <p className="text-slate-500 text-sm">Se abrió WhatsApp con tu consulta.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="nombre" className="block text-xs sm:text-sm font-medium text-slate-600 mb-1">
                        Nombre *
                      </label>
                      <input
                        id="nombre"
                        type="text"
                        required
                        value={formState.nombre}
                        onChange={(e) => setFormState({ ...formState, nombre: e.target.value })}
                        className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-white border border-slate-200 rounded-lg sm:rounded-xl text-sm text-slate-800 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-400 transition-all"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label htmlFor="telefono" className="block text-xs sm:text-sm font-medium text-slate-600 mb-1">
                        Teléfono *
                      </label>
                      <input
                        id="telefono"
                        type="tel"
                        required
                        value={formState.telefono}
                        onChange={(e) => setFormState({ ...formState, telefono: e.target.value })}
                        className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-white border border-slate-200 rounded-lg sm:rounded-xl text-sm text-slate-800 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-400 transition-all"
                        placeholder="11 XXXX-XXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-slate-600 mb-1">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-white border border-slate-200 rounded-lg sm:rounded-xl text-sm text-slate-800 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-400 transition-all"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block text-xs sm:text-sm font-medium text-slate-600 mb-1">
                      Describí tu problema *
                    </label>
                    <textarea
                      id="mensaje"
                      required
                      rows={3}
                      value={formState.mensaje}
                      onChange={(e) => setFormState({ ...formState, mensaje: e.target.value })}
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-white border border-slate-200 rounded-lg sm:rounded-xl text-sm text-slate-800 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-400 transition-all resize-none"
                      placeholder="Qué plaga tenés, zona, detalles..."
                    />
                  </div>

                  <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-3 pt-1">
                    <p className="text-[10px] sm:text-xs text-slate-400">
                      * Obligatorios. Tus datos están seguros.
                    </p>
                    <button type="submit" className="btn-primary w-full sm:w-auto">
                      <Send className="w-4 h-4" />
                      Enviar por WhatsApp
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
