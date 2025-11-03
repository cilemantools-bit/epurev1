# ÉPURE - Vivre l'élégance durable

Site web officiel du projet immobilier ÉPURE à Veyrier, Genève.

## Description

ÉPURE est un projet immobilier résidentiel d'exception composé de trois villas contemporaines, alliant architecture élégante, éco-responsabilité et confort haut de gamme.

## Caractéristiques du site

- **Architecture moderne** : Conçu avec Next.js 14, React et TypeScript
- **Design élégant** : Styled avec Tailwind CSS selon la charte graphique ÉPURE
- **Performance optimale** : Build statique optimisé pour des temps de chargement rapides
- **Responsive** : Adapté à tous les écrans (mobile, tablette, desktop)
- **SEO optimisé** : Métadonnées complètes et structure sémantique

## Sections du site

1. **Hero** - Page d'accueil avec message principal
2. **Le Projet** - Histoire et philosophie d'ÉPURE
3. **Les Villas** - Présentation détaillée des 3 villas (24E, 24F, 24G)
4. **Architecture & Écologie** - Innovations architecturales et engagement environnemental
5. **Emplacement** - Localisation à Veyrier et proximités
6. **Contact** - Formulaires de contact et demande de dossier

## Technologies utilisées

- **Framework** : Next.js 14 (App Router)
- **Langage** : TypeScript
- **Style** : Tailwind CSS
- **Deployment** : Optimisé pour Vercel

## Installation

```bash
# Installer les dépendances
npm install

# Lancer en mode développement
npm run dev

# Build pour production
npm run build

# Démarrer en production
npm start
```

## Scripts disponibles

- `npm run dev` - Lance le serveur de développement sur http://localhost:3000
- `npm run build` - Crée un build optimisé pour la production
- `npm start` - Lance le serveur de production
- `npm run lint` - Vérifie le code avec ESLint

## Configuration des couleurs

Le site utilise une palette de couleurs personnalisée définie dans `tailwind.config.ts` :

- **Blanc & Crème** : Tons neutres et lumineux
- **Bois** : Tons chaleureux pour évoquer les matériaux naturels
- **Bleu** : Tons apaisants et élégants
- **Vert** : Tons naturels pour l'aspect écologique

## Structure du projet

```
epurev1/
├── app/
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Page d'accueil
│   └── globals.css        # Styles globaux
├── components/
│   ├── Header.tsx         # Navigation
│   ├── Footer.tsx         # Pied de page
│   └── sections/          # Sections de la page
│       ├── Hero.tsx
│       ├── ProjectSection.tsx
│       ├── VillasSection.tsx
│       ├── EcologySection.tsx
│       ├── LocationSection.tsx
│       └── ContactSection.tsx
├── public/                # Assets statiques (à venir)
└── package.json
```

## Prochaines étapes

- [ ] Ajouter les images réelles du projet
- [ ] Intégrer une solution de formulaire backend
- [ ] Ajouter des animations fluides
- [ ] Implémenter une galerie photo interactive
- [ ] Ajouter une carte interactive pour la section Emplacement
- [ ] Optimiser les images avec Next.js Image
- [ ] Ajouter Google Analytics ou autre solution d'analytics

## Contact

Pour plus d'informations sur le projet ÉPURE :
- Email : contact@épure.ch
- Téléphone : +41 22 345 67 89

---

© 2025 ÉPURE - Tous droits réservés
