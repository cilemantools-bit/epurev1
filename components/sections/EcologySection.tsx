export default function EcologySection() {
  const features = [
    {
      icon: '🌳',
      title: 'Structure bois & terre crue',
      description: 'Matériaux nobles et innovants pour une empreinte carbone minimale',
    },
    {
      icon: '⚡',
      title: 'Minergie P / THPE',
      description: 'Performance énergétique exceptionnelle avec suivi sur 5 ans',
    },
    {
      icon: '☀️',
      title: 'Énergie solaire',
      description: '18 panneaux photovoltaïques + 2 thermiques par villa',
    },
    {
      icon: '💧',
      title: 'Gestion de l\'eau',
      description: 'Jardin de pluie et végétation adaptée au climat local',
    },
    {
      icon: '🔌',
      title: 'Mobilité électrique',
      description: 'Stations de recharge intégrées pour véhicules électriques',
    },
    {
      icon: '♻️',
      title: 'Réemploi & durabilité',
      description: 'Aménagements extérieurs conçus en matériaux réemployés',
    },
  ];

  const architecturePoints = [
    'Lignes épurées et volumes généreux',
    '270 m² utiles répartis sur 3 niveaux',
    'Jardins privatifs (~135 m² chacun)',
    'Cours anglaises végétalisées',
    'Lumière naturelle optimisée',
    'Circulation fluide intérieur/extérieur',
  ];

  return (
    <section id="ecologie" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium tracking-wider text-teal-700 uppercase mb-2">
            Architecture & Écologie
          </p>
          <h2 className="text-slate-600-800 mb-6">
            L'élégance au service de la durabilité
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            ÉPURE incarne une nouvelle manière d'habiter : architecture contemporaine,
            matériaux nobles et engagement écologique mesuré. Un luxe sobre et intelligent.
          </p>
        </div>

        {/* Architecture Visual */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl md:text-3xl font-serif text-slate-600-800 mb-6">
                Une architecture élégante et fonctionnelle
              </h3>
              <ul className="space-y-3">
                {architecturePoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-emerald-700 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-slate-600">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 lg:order-2 h-[400px] lg:h-[500px] bg-gradient-to-br from-emerald-200 to-emerald rounded-sm flex items-center justify-center shadow-xl">
              <p className="text-white/60 text-sm">Visualisation architecturale</p>
            </div>
          </div>
        </div>

        {/* Ecological Features Grid */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-serif text-slate-600-800 text-center mb-12">
            Innovations écologiques
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-stone-50 rounded-sm p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-xl font-semibold text-slate-600-800 mb-3">
                  {feature.title}
                </h4>
                <p className="text-slate-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="bg-gradient-to-r from-emerald-200/20 to-teal-200/20 rounded-sm p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h3 className="text-2xl md:text-3xl font-serif text-slate-600-800">
              Une expérience de vie unique
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed italic">
              "Lumière naturelle, confort thermique, calme, circulation fluide entre intérieur
              et extérieur. Chaque villa invite à ralentir, à respirer, à se reconnecter à un
              art de vivre durable."
            </p>
            <div className="pt-4">
              <a href="#contact" className="btn-primary inline-block">
                En savoir plus
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-serif text-emerald-700 mb-2">270m²</div>
            <div className="text-sm text-slate-600">Surface utile</div>
          </div>
          <div>
            <div className="text-4xl font-serif text-teal-700 mb-2">18+2</div>
            <div className="text-sm text-slate-600">Panneaux solaires</div>
          </div>
          <div>
            <div className="text-4xl font-serif text-emerald-700 mb-2">135m²</div>
            <div className="text-sm text-slate-600">Jardin privatif</div>
          </div>
          <div>
            <div className="text-4xl font-serif text-teal-700 mb-2">P/THPE</div>
            <div className="text-sm text-slate-600">Label Minergie</div>
          </div>
        </div>
      </div>
    </section>
  );
}
