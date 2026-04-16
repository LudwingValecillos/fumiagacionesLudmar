import { useState, useEffect } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';
import logo from '../imgs/sinfondo.png';

const navLinks = [
  { name: 'Servicios', href: '#servicios' },
  { name: 'Proceso', href: '#proceso' },
  { name: 'Garantías', href: '#garantias' },
  { name: 'Testimonios', href: '#testimonios' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contacto', href: '#contacto' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 sm:pt-5 px-4">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          'w-full max-w-5xl flex items-center justify-between gap-3 px-4 sm:px-5 py-2.5 rounded-full transition-all duration-500',
          isScrolled
            ? 'bg-white/92 backdrop-blur-xl shadow-xl shadow-brand-900/8 border border-slate-200/60'
            : 'bg-white/12 backdrop-blur-md border border-white/20'
        )}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0 group">
          <div className={cn(
            'rounded-xl p-1.5 transition-all duration-300',
            isScrolled ? 'bg-brand-50' : 'bg-white/10'
          )}>
            <img src={logo} alt="Fumigaciones Ludmar" className="h-7 w-7 sm:h-8 sm:w-8 object-contain" />
          </div>
          <div className="flex flex-col leading-none">
            <span className={cn(
              'text-[11px] sm:text-xs font-extrabold font-display tracking-[0.12em] uppercase transition-colors duration-300',
              isScrolled ? 'text-brand-800' : 'text-white'
            )}>
              Fumigaciones Ludmar
            </span>
            <span className={cn(
              'text-[8px] sm:text-[9px] font-medium tracking-[0.2em] uppercase transition-colors duration-300 hidden sm:block',
              isScrolled ? 'text-brand-400' : 'text-brand-200/70'
            )}>
              Control de Plagas
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                'text-sm font-medium px-3 py-1.5 rounded-full transition-all duration-200',
                isScrolled
                  ? 'text-slate-600 hover:text-brand-700 hover:bg-brand-50'
                  : 'text-white/75 hover:text-white hover:bg-white/12'
              )}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
          <a
            href="tel:1122541220"
            className={cn(
              'flex items-center gap-1.5 text-sm font-semibold px-3 py-1.5 rounded-full transition-all duration-200',
              isScrolled ? 'text-brand-700 hover:bg-brand-50' : 'text-white/85 hover:bg-white/12'
            )}
          >
            <Phone className="w-3.5 h-3.5 flex-shrink-0" />
            <span>11 2254-1220</span>
          </a>
          <a
            href="https://wa.me/5491122541220?text=Hola,%20quisiera%20solicitar%20un%20presupuesto"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-brand-950 pl-4 pr-2.5 py-2 rounded-full font-bold text-sm shadow-md shadow-accent-500/25 hover:-translate-y-px active:translate-y-0 transition-all duration-300"
          >
            <span>Presupuesto</span>
            <span className="w-5 h-5 rounded-full bg-brand-950/10 flex items-center justify-center">
              <MessageCircle className="w-3 h-3" />
            </span>
          </a>
        </div>

        {/* Mobile Toggle — animated hamburger → X */}
        <button
          className={cn(
            'lg:hidden w-9 h-9 rounded-full flex flex-col items-center justify-center gap-1.5 flex-shrink-0 transition-all duration-300',
            mobileMenuOpen
              ? 'bg-white/20 text-white'
              : isScrolled ? 'text-brand-800 hover:bg-brand-50' : 'text-white hover:bg-white/12'
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          <motion.span
            className="block h-0.5 w-4 bg-current rounded-full origin-center"
            animate={mobileMenuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          />
          <motion.span
            className="block h-0.5 w-4 bg-current rounded-full"
            animate={mobileMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block h-0.5 w-4 bg-current rounded-full origin-center"
            animate={mobileMenuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          />
        </button>
      </motion.nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed inset-0 bg-brand-950/96 backdrop-blur-xl z-40 flex flex-col"
          >
            <div className="flex flex-col justify-center items-center flex-1 gap-1 px-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 + 0.08, ease: [0.16, 1, 0.3, 1], duration: 0.45 }}
                  className="text-2xl font-display font-bold text-white/75 hover:text-accent-400 py-3 px-6 rounded-xl transition-colors w-full text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8 flex flex-col gap-3 w-full"
              >
                <a href="tel:1122541220" className="flex items-center justify-center gap-3 text-white border-2 border-white/20 px-6 py-4 rounded-2xl font-bold text-lg">
                  <Phone className="w-5 h-5" />
                  11 2254-1220
                </a>
                <a
                  href="https://wa.me/5491122541220?text=Hola,%20quisiera%20solicitar%20un%20presupuesto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-accent-500 text-brand-950 px-6 py-4 rounded-2xl font-bold text-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  Presupuesto Gratis
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
