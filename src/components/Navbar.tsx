import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
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
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-brand-900/5 py-2'
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 sm:gap-3 z-50 group">
          <div className={cn(
            'rounded-xl p-1.5 transition-all duration-300',
            isScrolled ? 'bg-brand-50' : 'bg-white/10 backdrop-blur-sm'
          )}>
            <img
              src={logo}
              alt="Fumigaciones Ludmar Logo"
              className="h-9 w-9 sm:h-10 sm:w-10 object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className={cn(
              'text-sm sm:text-xl font-extrabold font-display tracking-wider transition-colors duration-300',
              isScrolled ? 'text-brand-800' : 'text-white'
            )}>
              FUMIGACIONES LUDMAR
            </span>
            <span className={cn(
              'text-[10px] font-medium tracking-[0.2em] uppercase transition-colors duration-300 hidden sm:block',
              isScrolled ? 'text-brand-500' : 'text-brand-200'
            )}>
              Control de Plagas
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                'text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300',
                isScrolled
                  ? 'text-slate-600 hover:text-brand-600 hover:bg-brand-50'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              )}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:1122541220"
            className={cn(
              'flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-300',
              isScrolled
                ? 'text-brand-700 hover:bg-brand-50'
                : 'text-white/90 hover:bg-white/10'
            )}
          >
            <Phone className="w-4 h-4" />
            <span>11 2254-1220</span>
          </a>
          <a
            href="https://wa.me/5491122541220?text=Hola,%20quisiera%20solicitar%20un%20presupuesto"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-brand-950 px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-300 shadow-lg shadow-accent-500/25 hover:shadow-xl hover:shadow-accent-500/30 hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Presupuesto Gratis</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={cn(
            'lg:hidden p-2.5 rounded-xl z-50 transition-all duration-300',
            mobileMenuOpen
              ? 'text-white bg-white/10'
              : isScrolled ? 'text-brand-800 hover:bg-brand-50' : 'text-white hover:bg-white/10'
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Abrir menú"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 bg-brand-950/95 backdrop-blur-xl z-40 flex flex-col"
          >
            <div className="flex flex-col justify-center items-center flex-1 gap-2 px-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                  className="text-2xl font-display font-bold text-white/90 hover:text-accent-400 py-3 px-6 rounded-xl transition-colors w-full text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 flex flex-col gap-3 w-full"
              >
                <a
                  href="tel:1122541220"
                  className="flex items-center justify-center gap-3 text-white border-2 border-white/20 px-6 py-4 rounded-xl font-bold text-lg"
                >
                  <Phone className="w-5 h-5" />
                  11 2254-1220
                </a>
                <a
                  href="https://wa.me/5491122541220?text=Hola,%20quisiera%20solicitar%20un%20presupuesto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-accent-500 text-brand-950 px-6 py-4 rounded-xl font-bold text-lg shadow-xl"
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
