'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />

        {/* Animated Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-emerald-400/30 to-teal-400/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-400/30 to-blue-400/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Small Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
            <div className="glass-effect px-6 py-2 rounded-full text-sm font-medium text-emerald-700">
              <span className="inline-block w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse" />
              Projet immobilier d'exception à Genève
            </div>
          </motion.div>

          {/* Main Title with Letter Animation */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-600-900"
          >
            <motion.div
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Vivre <span className="text-gradient">l'élégance</span>
            </motion.div>
            <br />
            <motion.div
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className="text-gradient">durable</span>
            </motion.div>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <p className="text-2xl md:text-3xl text-slate-600-700 max-w-3xl mx-auto font-medium">
              Trois villas d'exception à Veyrier
            </p>
            <p className="text-lg md:text-xl text-slate-600-600 max-w-2xl mx-auto">
              Architecture contemporaine et engagement écologique au cœur de Genève
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <motion.a
              href="#villas"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg"
            >
              <span>Découvrir les villas</span>
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary text-lg"
            >
              <span>Demander le dossier</span>
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-gradient">3</div>
              <div className="text-sm text-slate-600-600 mt-1">Villas</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-gradient">270m²</div>
              <div className="text-sm text-slate-600-600 mt-1">Surface</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-gradient">P/THPE</div>
              <div className="text-sm text-slate-600-600 mt-1">Minergie</div>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{
              opacity: { duration: 1, delay: 1 },
              y: { duration: 2, repeat: Infinity },
            }}
            className="pt-12"
          >
            <a href="#projet" className="inline-block">
              <svg
                className="w-8 h-8 mx-auto text-emerald-600"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
