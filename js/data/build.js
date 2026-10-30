export const STACK = [
  {
    name: "Laravel 11",
    role: "Framework PHP 8.1+ (backend, routes, Eloquent)",
  },
  { name: "Livewire", role: "Interactivité sans écrire de JavaScript" },
  { name: "Filament", role: "Interface d'administration" },
  { name: "TailwindCSS", role: "Styles utilitaires, responsive" },
  { name: "MySQL / MariaDB", role: "Base de données (3 tables)" },
  { name: "Composer, Node, NPM", role: "Gestion des dépendances et du build" },
  { name: "Git", role: "Versionnement, branches et Pull Requests" },
];

export const FEATURES = [
  {
    title: "Côté utilisateur",
    items: [
      "Inscription et connexion",
      "Catalogue filtré",
      "Calendrier dynamique",
      "Prix en temps réel",
      "Paiement simulé",
      "Modification et annulation",
      "Historique des réservations",
      "Interface responsive",
    ],
  },
  {
    title: "Côté administrateur",
    items: [
      "Dashboard Filament",
      "CRUD des biens et réservations",
      "Gestion des rôles",
      "Filtres avancés",
      "Rapports",
    ],
  },
  {
    title: "Moteur de réservation",
    items: [
      "Disponibilités en temps réel",
      "Contraintes temporelles",
      "Prix dynamique",
      "Règles d'annulation",
    ],
  },
];

export const SCREENS = {
  desktop: [
    {
      src: "assets/img/desktop/desktop-accueil.png",
      alt: "Page d'accueil desktop",
      caption: "Accueil",
    },
    {
      src: "assets/img/desktop/desktop-login.png",
      alt: "Pages de connexion et d'inscription desktop",
      caption: "Connexion / inscription",
    },
    {
      src: "assets/img/desktop/desktop-catalogue.png",
      alt: "Catalogue des biens avec filtres, desktop",
      caption: "Catalogue",
    },
    {
      src: "assets/img/desktop/desktop-detail.png",
      alt: "Détail d'un bien avec calendrier et prix, desktop",
      caption: "Détail d'un bien",
    },
    {
      src: "assets/img/desktop/desktop-profil.png",
      alt: "Profil et historique des réservations, desktop",
      caption: "Profil",
    },
  ],
  mobile: [
    {
      src: "assets/img/mobile/mobile-accueil.png",
      alt: "Page d'accueil mobile",
      caption: "Accueil",
    },
    {
      src: "assets/img/mobile/mobile-proprietes.png",
      alt: "Liste des propriétés, mobile",
      caption: "Propriétés",
    },
    {
      src: "assets/img/mobile/mobile-details.png",
      alt: "Détail d'un bien, mobile",
      caption: "Détails",
    },
    {
      src: "assets/img/mobile/mobile-profil.png",
      alt: "Profil utilisateur, mobile",
      caption: "Profil",
    },
  ],
};
