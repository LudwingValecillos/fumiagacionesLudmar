import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: 500, suffix: '+', label: 'Clientes', description: 'Hogares y comercios' },
  { value: 20, suffix: '+', label: 'Años', description: 'De experiencia' },
  { value: 98, suffix: '%', label: 'Éxito', description: 'Primera aplicación' },
  { value: 24, suffix: 'hs', label: 'Respuesta', description: 'Atención rápida' },
];

function useCountUp(end: number, duration = 2000, startCounting: boolean) {
  const [count, setCount] = useState(0);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!startCounting) return;
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [end, duration, startCounting]);

  return count;
}

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useCountUp(stat.value, 2000, inView);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="relative text-center"
    >
      <div className="relative">
        <span className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-display text-white tabular-nums">
          {count}
        </span>
        <span className="text-xl sm:text-3xl md:text-4xl font-extrabold font-display text-accent-400">
          {stat.suffix}
        </span>
      </div>
      <h3 className="text-xs sm:text-sm md:text-base font-bold text-white mt-1.5 sm:mt-2">{stat.label}</h3>
      <p className="text-brand-200/50 text-[10px] sm:text-xs mt-0.5">{stat.description}</p>
    </motion.div>
  );
}

export function Stats() {
  return (
    <section className="relative py-10 sm:py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-800 via-brand-900 to-brand-950" />
      <div className="absolute inset-0 noise-overlay opacity-20" />

      {/* Decorative circles - hidden on mobile */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-brand-500/10 pointer-events-none hidden md:block" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="section-title text-white mb-2 sm:mb-4">Resultados que hablan</h2>
          <p className="section-subtitle text-brand-200/70">
            Números reales que respaldan nuestro compromiso.
          </p>
        </motion.div>

        <div className="grid grid-cols-4 gap-3 sm:gap-6 md:gap-10">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
