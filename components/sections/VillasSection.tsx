'use client';

import { useState } from 'react';

interface Villa {
  id: string;
  name: string;
  status: 'Disponible' | 'Réservée' | 'Vendue';
  surface: string;
  rooms: string;
  garden: string;
  price: string;
  features: string[];
}

const villas: Villa[] = [
  {
    id: '24E',
    name: 'Villa 24E',
    status: 'Disponible',
    surface: '~270 m²',
    rooms: '5.5 pièces',
    garden: '~135 m²',
    price: 'Sur demande',
    features: [
      'Hall d\'entrée lumineux',
      'Salon/salle à manger spacieux',
      'Cuisine ouverte haut de gamme',
      '3 chambres élégantes',
      '2 salles de bain',
      'Dressing optionnel',
      'Balcon et terrasse privés',
      'Cour anglaise végétalisée',
      'Sous-sol: salle de jeu, buanderie, cave',
    ],
  },
  {
    id: '24F',
    name: 'Villa 24F',
    status: 'Disponible',
    surface: '~270 m²',
    rooms: '5.5 pièces',
    garden: '~135 m²',
    price: 'Sur demande',
    features: [
      'Hall d\'entrée lumineux',
      'Salon/salle à manger spacieux',
      'Cuisine ouverte haut de gamme',
      '3 chambres élégantes',
      '2 salles de bain',
      'Dressing optionnel',
      'Balcon et terrasse privés',
      'Cour anglaise végétalisée',
      'Sous-sol: salle de jeu, buanderie, cave',
    ],
  },
  {
    id: '24G',
    name: 'Villa 24G',
    status: 'Disponible',
    surface: '~270 m²',
    rooms: '5.5 pièces',
    garden: '~135 m²',
    price: 'Sur demande',
    features: [
      'Hall d\'entrée lumineux',
      'Salon/salle à manger spacieux',
      'Cuisine ouverte haut de gamme',
      '3 chambres élégantes',
      '2 salles de bain',
      'Dressing optionnel',
      'Balcon et terrasse privés',
      'Cour anglaise végétalisée',
      'Sous-sol: salle de jeu, buanderie, cave',
    ],
  },
];

export default function VillasSection() {
  const [selectedVilla, setSelectedVilla] = useState<Villa | null>(null);

  const getStatusColor = (status: Villa['status']) => {
    switch (status) {
      case 'Disponible':
        return 'bg-green-100 text-green-800';
      case 'Réservée':
        return 'bg-yellow-100 text-yellow-800';
      case 'Vendue':
        return 'bg-red-100 text-red-800';
    }
  };

  return (
    <section id="villas" className="section-padding bg-stone-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium tracking-wider text-emerald-700 uppercase mb-2">
            Les Villas
          </p>
          <h2 className="text-slate-600-800 mb-6">
            Trois résidences d'exception
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Chaque villa offre ~270 m² d'espaces de vie élégants, pensés pour
            allier confort, lumière naturelle et harmonie avec la nature.
          </p>
        </div>

        {/* Villas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {villas.map((villa) => (
            <div
              key={villa.id}
              className="bg-white rounded-sm shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => setSelectedVilla(villa)}
            >
              {/* Image Placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-amber to-amber-700">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white/60 text-sm">Image de la {villa.name}</p>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(villa.status)}`}>
                    {villa.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-serif text-slate-600-800">
                  {villa.name}
                </h3>

                <div className="space-y-2 text-sm text-slate-600">
                  <div className="flex justify-between">
                    <span>Surface utile:</span>
                    <span className="font-medium text-slate-600-800">{villa.surface}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Chambres:</span>
                    <span className="font-medium text-slate-600-800">{villa.rooms}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Jardin privatif:</span>
                    <span className="font-medium text-slate-600-800">{villa.garden}</span>
                  </div>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedVilla(villa);
                  }}
                  className="w-full btn-secondary py-3 text-sm"
                >
                  Voir les détails
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Villa Details */}
        {selectedVilla && (
          <div className="bg-white rounded-sm shadow-xl p-8 md:p-12">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-3xl font-serif text-slate-600-800 mb-2">
                  {selectedVilla.name}
                </h3>
                <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(selectedVilla.status)}`}>
                  {selectedVilla.status}
                </span>
              </div>
              <button
                onClick={() => setSelectedVilla(null)}
                className="text-slate-600 hover:text-slate-600-800"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-slate-600-800">Caractéristiques</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-slate-600">Surface utile</p>
                      <p className="text-lg font-medium text-slate-600-800">{selectedVilla.surface}</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-600">Chambres</p>
                      <p className="text-lg font-medium text-slate-600-800">{selectedVilla.rooms}</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-600">Jardin</p>
                      <p className="text-lg font-medium text-slate-600-800">{selectedVilla.garden}</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-600">Prix</p>
                      <p className="text-lg font-medium text-slate-600-800">{selectedVilla.price}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-slate-600-800">Espaces & Équipements</h4>
                  <ul className="space-y-2">
                    {selectedVilla.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-emerald-700 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="h-96 bg-gradient-to-br from-amber to-amber-700 rounded-sm flex items-center justify-center">
                  <p className="text-white/60 text-sm">Plans & images à venir</p>
                </div>

                <a href="#contact" className="btn-primary w-full block text-center">
                  Demander le dossier complet
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
