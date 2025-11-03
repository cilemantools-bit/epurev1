export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-600-800 text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & Tagline */}
          <div>
            <h3 className="text-2xl font-serif font-light tracking-wider mb-3">
              ÉPURE
            </h3>
            <p className="text-sm text-slate-600-300 mb-4">
              Vivre l'élégance durable
            </p>
            <p className="text-sm text-slate-600-300">
              Projet immobilier résidentiel d'exception à Veyrier, Genève.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-medium mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a href="#projet" className="text-sm text-slate-600-300 hover:text-white transition-colors">
                  Le Projet
                </a>
              </li>
              <li>
                <a href="#villas" className="text-sm text-slate-600-300 hover:text-white transition-colors">
                  Les Villas
                </a>
              </li>
              <li>
                <a href="#ecologie" className="text-sm text-slate-600-300 hover:text-white transition-colors">
                  Architecture & Écologie
                </a>
              </li>
              <li>
                <a href="#emplacement" className="text-sm text-slate-600-300 hover:text-white transition-colors">
                  Emplacement
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-slate-600-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-medium mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-slate-600-300">
              <p>Veyrier, Genève</p>
              <p>
                <a href="mailto:contact@ipure.ch" className="hover:text-white transition-colors">
                  contact@ipure.ch
                </a>
              </p>
              <p>
                <a href="tel:+41223456789" className="hover:text-white transition-colors">
                  +41 22 345 67 89
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-300 text-center">
          <p className="text-sm text-slate-600-300">
            © {currentYear} ÉPURE. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
