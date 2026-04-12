import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: 500, suffix: '+', label: 'Clientes Satisfechos', description: 'Hogares y comercios protegidos' },
  { value: 20, suffix: '+', label: 'Años de Experiencia', description: 'En el mercado argentino' },
  { value: 98, suffix: '%', label: 'Tasa de Éxito', description: 'En la primera aplicación' },
  { value: 24, suffix: 'hs', label: 'Tiempo de Respuesta', description: 'Atención rápida garantizada' },
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative text-center group"
    >
      <div className="relative">
        <span className="text-5xl sm:text-6xl md:text-7xl font-extrabold font-display text-white tabular-nums">
          {count}
        </span>
        <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-accent-400">
          {stat.suffix}
        </span>
      </div>
      <h3 className="text-lg font-bold text-white mt-3 mb-1">{stat.label}</h3>
      <p className="text-brand-200/60 text-sm">{stat.description}</p>
    </motion.div>
  );
}

export function Stats() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-800 via-brand-900 to-brand-950" />
      <div className="absolute inset-0 noise-overlay opacity-20" />

      {/* Decorative circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-brand-500/10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-brand-500/5 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-white mb-4">Resultados que hablan</h2>
          <p className="section-subtitle text-brand-200/70">
            Números reales que respaldan nuestro compromiso con la calidad y la satisfacción de cada cliente.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
