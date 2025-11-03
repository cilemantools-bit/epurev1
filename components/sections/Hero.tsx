export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-ipure-blue-light/30 via-ipure-cream to-ipure-green-light/20">
        {/* This would be replaced with actual images */}
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-40" />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light tracking-tight text-ipure-grey-dark">
            Vivre l'élégance durable
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-ipure-grey max-w-2xl mx-auto leading-relaxed">
            Trois villas d'exception à Veyrier, Genève.
            <br />
            Architecture contemporaine et engagement écologique.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a href="#villas" className="btn-primary">
              Découvrir les villas
            </a>
            <a href="#contact" className="btn-secondary">
              Demander le dossier
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-16 animate-bounce">
            <svg
              className="w-6 h-6 mx-auto text-ipure-blue-dark"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
