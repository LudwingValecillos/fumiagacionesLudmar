import { Phone, MapPin, Instagram, Facebook, Clock, ArrowUp, Mail } from 'lucide-react';
import logo from '../imgs/sinfondo.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-brand-950 text-slate-300 overflow-hidden">
      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
          <path d="M0 0V20C360 35 720 5 1080 20C1260 28 1380 30 1440 25V0H0Z" className="fill-surface-50" />
        </svg>
      </div>

      <div className="absolute inset-0 noise-overlay opacity-10" />

      <div className="container mx-auto px-4 sm:px-6 relative pt-12 sm:pt-16 md:pt-20 pb-6 sm:pb-8">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">

          {/* Brand Info - full width on small mobile */}
          <div className="col-span-2 md:col-span-1 space-y-4 sm:space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="bg-white/10 rounded-lg sm:rounded-xl p-1.5 sm:p-2">
                <img src={logo} alt="Fumigaciones Ludmar Logo" className="h-8 w-8 sm:h-10 sm:w-10 object-contain filter brightness-0 invert" />
              </div>
              <div>
                <span className="text-lg sm:text-xl font-extrabold font-display text-white tracking-wider block">LUDMAR</span>
                <span className="text-[9px] sm:text-[10px] text-brand-300 tracking-[0.2em] uppercase">Control de Plagas</span>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed text-xs sm:text-sm">
              +20 años protegiendo hogares y negocios en Buenos Aires. Productos certificados y garantía escrita.
            </p>
            <div className="flex gap-2 sm:gap-3">
              <a href="https://www.instagram.com/ludmararg" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent-500 hover:text-brand-950 hover:border-accent-500 transition-all duration-300" aria-label="Instagram">
                <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
              <a href="https://www.facebook.com/alexis.valecillos.758" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent-500 hover:text-brand-950 hover:border-accent-500 transition-all duration-300" aria-label="Facebook">
                <Facebook className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
              <a href="https://servicio.mercadolibre.com.ar/MLA-1474190409-fumigacion-ludmar-_JM" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent-500 hover:text-brand-950 hover:border-accent-500 transition-all duration-300 font-bold text-[10px]" aria-label="MercadoLibre">
                ML
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold font-display mb-3 sm:mb-5 text-xs sm:text-sm tracking-wider uppercase">Navegación</h3>
            <ul className="space-y-2 sm:space-y-2.5">
              {[
                { name: 'Servicios', href: '#servicios' },
                { name: 'Proceso', href: '#proceso' },
                { name: 'Garantías', href: '#garantias' },
                { name: 'Testimonios', href: '#testimonios' },
                { name: 'FAQ', href: '#faq' },
                { name: 'Contacto', href: '#contacto' },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-accent-400 transition-colors text-xs sm:text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold font-display mb-3 sm:mb-5 text-xs sm:text-sm tracking-wider uppercase">Contacto</h3>
            <ul className="space-y-2.5 sm:space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-accent-400 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:1122541220" className="hover:text-accent-400 transition-colors text-xs sm:text-sm block">11 2254-1220</a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-accent-400 mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm break-all">contacto@ludmar.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-accent-400 mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm">Zona Sur, GBA</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-accent-400 mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm">Emergencias 24hs</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-white font-bold font-display mb-3 sm:mb-5 text-xs sm:text-sm tracking-wider uppercase">Presupuesto Gratis</h3>
            <div className="bg-white/5 backdrop-blur-sm p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-white/10">
              <p className="text-xs sm:text-sm text-slate-400 mb-3 sm:mb-4">
                Respondemos en minutos por WhatsApp.
              </p>
              <a
                href="https://wa.me/5491122541220?text=Hola,%20me%20interesa%20solicitar%20un%20presupuesto"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-accent-500 hover:bg-accent-600 text-brand-950 py-2.5 sm:py-3 px-4 rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 shadow-lg shadow-accent-500/20"
              >
                Escribir por WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-5 sm:pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] sm:text-xs text-slate-500">
          <p>&copy; {currentYear} Fumigaciones Ludmar</p>
          <div className="flex items-center gap-2 sm:gap-4">
            <span>Min. de Salud</span>
            <span>&bull;</span>
            <span>Personal Certificado</span>
          </div>
          <button
            onClick={scrollToTop}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent-500 hover:text-brand-950 hover:border-accent-500 transition-all duration-300"
            aria-label="Volver arriba"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
