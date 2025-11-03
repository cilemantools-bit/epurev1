export default function ProjectSection() {
  return (
    <section id="projet" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-medium tracking-wider text-emerald-700 uppercase">
                Le Projet
              </p>
              <h2 className="text-slate-600-800">
                Une vision personnelle de l'habitat
              </h2>
            </div>

            <div className="space-y-4 text-slate-600">
              <p className="text-lg leading-relaxed">
                Né de la volonté d'un futur résident d'imaginer un lieu de vie durable,
                ÉPURE redéfinit les standards du confort et de la responsabilité environnementale.
              </p>

              <p>
                Ce projet unique à <strong className="text-slate-600-800">Veyrier, Genève</strong>,
                est né d'une démarche rare : celle d'un propriétaire genevois ayant choisi de
                remplacer une maison ancienne par un lieu de vie exemplaire, pensé comme s'il
                l'avait conçu pour lui-même.
              </p>

              <p>
                Tout a été imaginé dans une logique de <strong className="text-slate-600-800">soin,
                de justesse et de pérennité</strong>. Ce n'est pas une promotion immobilière,
                mais une philosophie de l'habitat.
              </p>
            </div>

            {/* Key Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-200 flex items-center justify-center">
                  <svg className="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-600-800">3 villas uniquement</h4>
                  <p className="text-sm text-slate-600">À échelle humaine</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-200 flex items-center justify-center">
                  <svg className="w-5 h-5 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-600-800">Permis en force</h4>
                  <p className="text-sm text-slate-600">Prêt à démarrer</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-200 flex items-center justify-center">
                  <svg className="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-600-800">Conçu avec soin</h4>
                  <p className="text-sm text-slate-600">Pensé pour durer</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-200 flex items-center justify-center">
                  <svg className="w-5 h-5 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-600-800">Engagement écologique</h4>
                  <p className="text-sm text-slate-600">Minergie P/THPE</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative h-[500px] lg:h-[600px] rounded-sm overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-700 to-amber opacity-80" />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white/60 text-sm">Image du projet à venir</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
