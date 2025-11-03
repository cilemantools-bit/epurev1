'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2340&auto=format&fit=crop"
          alt="Villa moderne"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/30 to-slate-900/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-4">
        <div className="max-w-5xl mx-auto space-y-6 md:space-y-8">
          {/* Badge */}
          <div className="inline-block">
            <div className="glass-effect px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium text-white">
              <span className="inline-block w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse" />
              Projet immobilier d'exception à Genève
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-white">
            Vivre <span className="text-gradient">l'élégance</span>
            <br />
            <span className="text-gradient">durable</span>
          </h1>

          {/* Subtitle */}
          <div className="space-y-3 md:space-y-4">
            <p className="text-xl md:text-2xl lg:text-3xl text-white max-w-3xl mx-auto font-medium">
              Trois villas d'exception à Veyrier
            </p>
            <p className="text-base md:text-lg lg:text-xl text-slate-200 max-w-2xl mx-auto">
              Architecture contemporaine et engagement écologique au cœur de Genève
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 md:pt-8">
            <a
              href="#villas"
              className="btn-primary text-base md:text-lg w-full sm:w-auto"
            >
              Découvrir les villas
            </a>
            <a
              href="#contact"
              className="btn-secondary text-base md:text-lg w-full sm:w-auto"
            >
              Demander le dossier
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto pt-8 md:pt-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient">3</div>
              <div className="text-xs md:text-sm text-slate-300 mt-1">Villas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient">270m²</div>
              <div className="text-xs md:text-sm text-slate-300 mt-1">Surface</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient">P/THPE</div>
              <div className="text-xs md:text-sm text-slate-300 mt-1">Minergie</div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-8 md:pt-12 animate-bounce hidden md:block">
            <a href="#projet" className="inline-block">
              <svg
                className="w-8 h-8 mx-auto text-white"
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
          </div>
        </div>
      </div>
    </section>
  );
}
