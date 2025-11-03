export default function LocationSection() {
  const proximities = [
    { name: 'Centre de Genève', distance: '10 min', icon: '🏙️' },
    { name: 'Carouge', distance: '8 min', icon: '🏘️' },
    { name: 'Écoles internationales', distance: '5-15 min', icon: '🎓' },
    { name: 'Commerces & Services', distance: '5 min', icon: '🛍️' },
    { name: 'Transports publics', distance: '2 min', icon: '🚌' },
    { name: 'Espaces naturels', distance: '3 min', icon: '🌲' },
  ];

  return (
    <section id="emplacement" className="section-padding bg-stone-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium tracking-wider text-emerald-700 uppercase mb-2">
            Emplacement
          </p>
          <h2 className="text-slate-600-800 mb-6">
            Veyrier, au cœur de la vie genevoise
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Un quartier résidentiel paisible et verdoyant, idéalement situé pour allier
            vie urbaine dynamique et sérénité naturelle.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map Placeholder */}
          <div className="order-2 lg:order-1">
            <div className="bg-gradient-to-br from-emerald-200 to-teal-200 rounded-sm h-[450px] flex items-center justify-center shadow-xl">
              <div className="text-center">
                <svg className="w-16 h-16 mx-auto mb-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-white/60 text-sm">Carte interactive à venir</p>
              </div>
            </div>
          </div>

          {/* Location Details */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-serif text-slate-600-800">
                Un emplacement privilégié
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Située dans la commune de <strong className="text-slate-600-800">Veyrier</strong>,
                à quelques minutes seulement de Genève et Carouge, ÉPURE bénéficie d'un cadre
                résidentiel calme et verdoyant, tout en restant proche de toutes les commodités.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Un environnement idéal pour les familles cherchant à conjuguer qualité de vie,
                proximité urbaine et contact avec la nature.
              </p>
            </div>

            {/* Proximities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {proximities.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-sm p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{item.icon}</span>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-600-800">
                        {item.name}
                      </h4>
                      <p className="text-xs text-slate-600">{item.distance}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div className="bg-white rounded-sm p-6 shadow-md">
              <h4 className="text-lg font-semibold text-slate-600-800 mb-4">
                Points forts du quartier
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-teal-700 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-slate-600">
                    Quartier résidentiel paisible et sécurisé
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-teal-700 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-slate-600">
                    Espaces verts et sentiers de promenade à proximité
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-teal-700 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-slate-600">
                    Excellente desserte en transports publics
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-teal-700 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-slate-600">
                    Écoles et infrastructures familiales de qualité
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
