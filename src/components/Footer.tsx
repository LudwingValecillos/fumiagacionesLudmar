import { Phone, MapPin, Instagram, Facebook, Clock, ArrowUp, Mail } from 'lucide-react';
import logo from '../imgs/sinfondo.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-brand-950 text-slate-300 overflow-hidden">
      {/* Top wave divider */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
          <path d="M0 0V30C360 50 720 10 1080 30C1260 40 1380 45 1440 40V0H0Z" className="fill-white" />
        </svg>
      </div>

      <div className="absolute inset-0 noise-overlay opacity-10" />

      <div className="container mx-auto px-4 sm:px-6 relative pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-white/10 rounded-xl p-2">
                <img src={logo} alt="Fumigaciones Ludmar Logo" className="h-10 w-10 object-contain filter brightness-0 invert" />
              </div>
              <div>
                <span className="text-xl font-extrabold font-display text-white tracking-wider block">LUDMAR</span>
                <span className="text-[10px] text-brand-300 tracking-[0.2em] uppercase">Control de Plagas</span>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm">
              Expertos en control de plagas con más de 20 años protegiendo hogares y negocios en Buenos Aires. Productos certificados y garantía escrita.
            </p>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/ludmararg" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent-500 hover:text-brand-950 hover:border-accent-500 transition-all duration-300" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.facebook.com/alexis.valecillos.758" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent-500 hover:text-brand-950 hover:border-accent-500 transition-all duration-300" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://servicio.mercadolibre.com.ar/MLA-1474190409-fumigacion-ludmar-_JM" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent-500 hover:text-brand-950 hover:border-accent-500 transition-all duration-300 font-bold text-xs" aria-label="MercadoLibre">
                ML
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold font-display mb-6 text-sm tracking-wider uppercase">Navegación</h3>
            <ul className="space-y-3">
              {[
                { name: 'Servicios', href: '#servicios' },
                { name: 'Cómo Trabajamos', href: '#proceso' },
                { name: 'Garantías', href: '#garantias' },
                { name: 'Testimonios', href: '#testimonios' },
                { name: 'Preguntas Frecuentes', href: '#faq' },
                { name: 'Contacto', href: '#contacto' },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-accent-400 transition-colors duration-300 text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold font-display mb-6 text-sm tracking-wider uppercase">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-accent-400 mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:1122541220" className="hover:text-accent-400 transition-colors text-sm block">11 2254-1220</a>
                  <span className="text-xs text-slate-500">Lunes a Sábado</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-accent-400 mt-1 flex-shrink-0" />
                <a href="mailto:contacto@fumigacionesludmar.com" className="hover:text-accent-400 transition-colors text-sm">
                  contacto@fumigacionesludmar.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent-400 mt-1 flex-shrink-0" />
                <span className="text-sm">Zona Sur, GBA<br/>Cobertura en toda la Provincia de Buenos Aires</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-accent-400 mt-1 flex-shrink-0" />
                <span className="text-sm">Atención rápida ante emergencias</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-white font-bold font-display mb-6 text-sm tracking-wider uppercase">Presupuesto Gratis</h3>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
              <p className="text-sm text-slate-400 mb-5">
                Solicitá un presupuesto sin cargo hoy mismo. Respondemos en minutos por WhatsApp.
              </p>
              <a
                href="https://wa.me/5491122541220?text=Hola,%20me%20interesa%20solicitar%20un%20presupuesto"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-accent-500 hover:bg-accent-600 text-brand-950 py-3 px-4 rounded-xl font-bold text-sm transition-all duration-300 shadow-lg shadow-accent-500/20"
              >
                Escribir por WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; {currentYear} Fumigaciones Ludmar. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <span>Aprobado por Ministerio de Salud</span>
            <span className="hidden sm:inline text-slate-700">&bull;</span>
            <span>Personal Certificado</span>
          </div>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent-500 hover:text-brand-950 hover:border-accent-500 transition-all duration-300"
            aria-label="Volver arriba"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
