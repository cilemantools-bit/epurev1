export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & Tagline */}
          <div>
            <h3 className="text-3xl font-bold tracking-tight mb-3">
              <span className="text-gradient">ÉPURE</span>
            </h3>
            <p className="text-sm text-slate-300 mb-4 font-medium">
              Vivre l'élégance durable
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">
              Projet immobilier résidentiel d'exception à Veyrier, Genève.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-bold mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <a href="#projet" className="text-sm text-slate-300 hover:text-emerald-400 transition-colors inline-flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform">Le Projet</span>
                </a>
              </li>
              <li>
                <a href="#villas" className="text-sm text-slate-300 hover:text-emerald-400 transition-colors inline-flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform">Les Villas</span>
                </a>
              </li>
              <li>
                <a href="#ecologie" className="text-sm text-slate-300 hover:text-emerald-400 transition-colors inline-flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform">Architecture & Écologie</span>
                </a>
              </li>
              <li>
                <a href="#emplacement" className="text-sm text-slate-300 hover:text-emerald-400 transition-colors inline-flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform">Emplacement</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-slate-300 hover:text-emerald-400 transition-colors inline-flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform">Contact</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-slate-300">
              <p className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Veyrier, Genève
              </p>
              <p className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:contact@epure.ch" className="hover:text-emerald-400 transition-colors">
                  contact@epure.ch
                </a>
              </p>
              <p className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+41223456789" className="hover:text-emerald-400 transition-colors">
                  +41 22 345 67 89
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-700 text-center">
          <p className="text-sm text-slate-400">
            © {currentYear} ÉPURE. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
