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

  return (
    <section id="contacto" className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-50/30 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-brand-600 font-bold text-sm tracking-wider uppercase mb-4 font-display">
            Contacto
          </span>
          <h2 className="section-title text-slate-900 mb-5">
            ¿Tenés un problema con plagas?
          </h2>
          <p className="section-subtitle">
            Escribinos y recibí una respuesta en minutos. Presupuesto sin cargo y sin compromiso.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Info cards */}
            <div className="space-y-4">
              {[
                {
                  icon: <Phone className="w-5 h-5" />,
                  title: 'Teléfono',
                  detail: '11 2254-1220',
                  sub: 'Lunes a Sábado',
                  href: 'tel:1122541220',
                },
                {
                  icon: <MessageCircle className="w-5 h-5" />,
                  title: 'WhatsApp',
                  detail: 'Respuesta inmediata',
                  sub: 'Escribinos ahora',
                  href: 'https://wa.me/5491122541220',
                },
                {
                  icon: <MapPin className="w-5 h-5" />,
                  title: 'Cobertura',
                  detail: 'Zona Sur, GBA',
                  sub: 'Toda la Prov. de Buenos Aires',
                  href: null,
                },
                {
                  icon: <Clock className="w-5 h-5" />,
                  title: 'Horario',
                  detail: 'Lunes a Sábado',
                  sub: 'Emergencias 24hs',
                  href: null,
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-start gap-4 p-4 rounded-2xl bg-surface-50 border border-slate-100 hover:border-brand-200 hover:shadow-md transition-all duration-300 group"
                    >
                      <div className="w-11 h-11 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 flex-shrink-0 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300">
                        {item.icon}
                      </div>
                      <div>
                        <span className="text-xs text-slate-400 uppercase tracking-wider font-medium">{item.title}</span>
                        <p className="font-bold text-slate-800 font-display">{item.detail}</p>
                        <p className="text-sm text-slate-400">{item.sub}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-surface-50 border border-slate-100">
                      <div className="w-11 h-11 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <span className="text-xs text-slate-400 uppercase tracking-wider font-medium">{item.title}</span>
                        <p className="font-bold text-slate-800 font-display">{item.detail}</p>
                        <p className="text-sm text-slate-400">{item.sub}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-surface-50 rounded-3xl p-6 sm:p-8 border border-slate-100">
              <h3 className="text-xl font-bold font-display text-slate-900 mb-1">Solicitá tu presupuesto</h3>
              <p className="text-sm text-slate-400 mb-6">Completá el formulario y te contactamos por WhatsApp.</p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-brand-600" />
                  </div>
                  <h4 className="text-xl font-bold font-display text-slate-900 mb-2">Mensaje enviado</h4>
                  <p className="text-slate-500">Se abrió WhatsApp con tu consulta. Te responderemos en minutos.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nombre" className="block text-sm font-medium text-slate-600 mb-1.5">
                        Nombre completo *
                      </label>
                      <input
                        id="nombre"
                        type="text"
                        required
                        value={formState.nombre}
                        onChange={(e) => setFormState({ ...formState, nombre: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-400 transition-all duration-300"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label htmlFor="telefono" className="block text-sm font-medium text-slate-600 mb-1.5">
                        Teléfono *
                      </label>
                      <input
                        id="telefono"
                        type="tel"
                        required
                        value={formState.telefono}
                        onChange={(e) => setFormState({ ...formState, telefono: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-400 transition-all duration-300"
                        placeholder="11 XXXX-XXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-600 mb-1.5">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-400 transition-all duration-300"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-slate-600 mb-1.5">
                      Describí tu problema *
                    </label>
                    <textarea
                      id="mensaje"
                      required
                      rows={4}
                      value={formState.mensaje}
                      onChange={(e) => setFormState({ ...formState, mensaje: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-400 transition-all duration-300 resize-none"
                      placeholder="Contanos qué plaga tenés, en qué zona estás y cualquier detalle relevante..."
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                    <p className="text-xs text-slate-400">
                      * Campos obligatorios. Tus datos están seguros.
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
