# Maintenance des pages d'Événements

Ce document détaille la gestion et la maintenance des pages d'événements du site QuantumÉTS. Il couvre la création de nouvelles pages, l'utilisation des composants disponibles et la gestion du menu de navigation.

## Table des matières

- [Ajouter une nouvelle page d'événement](#ajouter-une-nouvelle-page-dévénement)
- [Gestion de la navigation](#gestion-de-la-navigation)
- [Composants disponibles](#composants-disponibles)
- [Référence des composants](#référence-des-composants)

## Ajouter une nouvelle page d'événement

### 1. Créer le fichier de la page

Créez un nouveau fichier sous `src/pages/events/` avec un nom descriptif :

```
src/pages/events/mon-nouvel-evenement.tsx
```

### 2. Structure de base d'une page

```tsx
import type { NextPage } from 'next';
import { EventLayout } from '../../template/pages/Events';

const MonNouvelEvenement: NextPage = () => (
  <EventLayout>
    {/* Contenu de votre événement */}
  </EventLayout>
);

export default MonNouvelEvenement;
```

### 3. Routes automatiques

Next.js génère automatiquement les routes basées sur la structure des fichiers :

- `src/pages/events/mon-evenement.tsx` → `/events/mon-evenement`
- `src/pages/events/qff25.tsx` → `/events/qff25`
- `src/pages/events/index.tsx` → `/events/` (page d'index)

## Gestion de la navigation

### Ajouter l'événement au menu déroulant

Le menu déroulant "Événements" dans la navbar est géré via un tableau dans `src/template/Navbar.tsx` :

```tsx
const eventLinks = [
  { href: '/events/mon-nouvel-evenement', label: 'Mon Nouvel Événement', enabled: true },
  { href: '/events/qff25', label: 'Qiskit Fall Fest 2025', enabled: true },
  // ... autres événements
];
```

### États des événements

- **`enabled: true`** : L'événement apparaît dans le menu et est accessible
- **`enabled: false`** : L'événement est désactivé (apparaît grisé, non cliquable)
- **Retiré du tableau** : L'événement n'apparaît plus dans le menu

### Fallback automatique

Si aucun événement n'est activé (`enabled: true`), le menu affiche automatiquement "Aucun événement à venir" en état désactivé.

## Composants disponibles

| Composant | Description | Usage principal |
|-----------|-------------|----------------|
| **EventLayout** | Gabarit de base avec navbar et footer | Structure de page |
| **EventTitle** | Bannière avec titre, logo et dégradé | En-tête d'événement |
| **EventText** | Section texte avec support d'images | Sections descriptives |
| **EventSchedule** | Tableau d'horaires avec inscriptions | Programme détaillé |
| **EventGuests** | Grille de conférenciers avec photos | Présentation des intervenants |
| **EventFAQ** | Questions-réponses pliables | Informations pratiques |

## Référence des composants

### EventLayout

Gabarit de base qui inclut la barre de navigation avec l'élément "Événements" sélectionné et le pied de page.

```tsx
import { EventLayout } from '../../template/pages/Events';

const MonEvenement: NextPage = () => (
  <EventLayout>
    {/* Contenu de votre événement */}
  </EventLayout>
);
```

**Props :** Aucune prop spécifique, utilise `children` pour le contenu.

### EventTitle

Bannière d'en-tête avec titre, logo optionnel et dégradé de couleur personnalisable.

```tsx
import { EventTitle } from '../../template/pages/Events';

<EventTitle 
  title="Mon Événement 2025"
  logoSrc="/assets/images/logo-evenement.png"
  gradientFrom="from-blue-600"
  gradientTo="to-purple-600"
/>
```

**Props :**

- `title` (string, requis) : Titre principal de l'événement
- `logoSrc` (string, optionnel) : Chemin vers le logo à afficher
- `gradientFrom` (string, optionnel) : Couleur de début du dégradé (défaut: `"from-indigo-500"`)
- `gradientTo` (string, optionnel) : Couleur de fin du dégradé (défaut: `"to-purple-500"`)

### EventText

Section de texte répétable avec en-tête, contenu et support d'images. Génère automatiquement des ancres pour la navigation directe.

```tsx
import { EventText } from '../../template/pages/Events';

<EventText 
  header="À propos de l'événement"
  header_color="text-purple-700"
  body={
    <p>
      Description détaillée de l'événement avec du contenu riche...
    </p>
  }
  imageSrc="/assets/images/event-illustration.png"
  imagePosition="right"
  imageAlt="Illustration de l'événement"
/>
```

**Props :**
- `header` (string, requis) : Titre de la section
- `header_color` (string, optionnel) : Classe Tailwind pour la couleur du titre
- `body` (string | JSX.Element, requis) : Contenu de la section
- `imageSrc` (string, optionnel) : Chemin vers l'image d'illustration
- `imagePosition` ('left' | 'right', optionnel) : Position de l'image (défaut: `"left"`)
- `imageAlt` (string, optionnel) : Texte alternatif de l'image

**Fonctionnalités :**
- Génération automatique d'ancres (ex: "À propos" → `#à-propos`)
- Mise en page responsive avec image
- Support de contenu JSX riche

### EventSchedule

Tableau d'horaires avec boutons d'inscription et colonnes pour titre, date, description et lieu.

```tsx
import { EventSchedule, type EventScheduleItem } from '../../template/pages/Events';

const schedule: EventScheduleItem[] = [
  {
    title: 'Conférence d\'ouverture',
    titleHref: 'https://inscription.eventbrite.com/12345',
    date: '14 novembre 2025, 9:00 - 10:00',
    description: 'Introduction aux concepts quantiques modernes',
    location: 'Salle A-1600, ÉTS'
  },
  {
    title: 'Atelier pratique',
    date: '14 novembre 2025, 10:30 - 12:00',
    description: 'Programmation avec Qiskit',
    location: 'Laboratoire D-3018, ÉTS'
  }
];

<EventSchedule 
  title="Programme de la journée"
  items={schedule}
  buttonText="S'inscrire"
/>
```

**Props :**
- `title` (string, requis) : Titre de la section d'horaires
- `items` (EventScheduleItem[], requis) : Liste des éléments du programme
- `buttonText` (string, requis) : Texte du bouton d'inscription

**Type EventScheduleItem :**
- `title` (string, requis) : Nom de l'activité
- `titleHref` (string, optionnel) : Lien d'inscription externe
- `date` (string, requis) : Date et heure de l'activité
- `description` (string, requis) : Description de l'activité
- `location` (string, requis) : Lieu de l'activité

### EventGuests

Grille responsive de conférenciers et invités avec photos circulaires, présentations et biographies.

```tsx
import { EventGuests, type EventGuestItem } from '../../template/pages/Events';

const speakers: EventGuestItem[] = [
  {
    guestName: 'Dr. Marie Quantum',
    guestTalk: 'Les défis de l\'informatique quantique',
    body: (
      <p>
        Dr. Marie Quantum est professeure à l'Université de Montréal et 
        spécialiste en algorithmes quantiques...
      </p>
    ),
    imageSrc: '/assets/speakers/marie-quantum.jpg'
  },
  {
    guestName: 'Jean Développeur',
    guestTalk: (
      <ul>
        <li>Atelier 1 : Introduction à Qiskit</li>
        <li>Atelier 2 : Circuits quantiques avancés</li>
      </ul>
    ),
    imageSrc: '/assets/speakers/jean-developpeur.jpg'
  }
];

<EventGuests 
  title="Conférenciers invités"
  items={speakers}
/>
```

**Props :**
- `title` (string, optionnel) : Titre de la section (défaut: `"Guests"`)
- `items` (EventGuestItem[], requis) : Liste des conférenciers/invités

**Type EventGuestItem :**
- `guestName` (string, requis) : Nom du conférencier
- `guestTalk` (string | JSX.Element, optionnel) : Titre de présentation ou contenu JSX
- `body` (string | JSX.Element, optionnel) : Biographie ou description
- `imageSrc` (string, optionnel) : Chemin vers la photo du conférencier

**Fonctionnalités :**
- Photos circulaires automatiques (96px × 96px)
- Mise en page responsive (1 colonne mobile, 2 colonnes desktop)
- Support de contenu JSX pour présentations et biographies

### EventFAQ

Section de questions-réponses avec éléments pliables/dépliables et animations.

```tsx
import { EventFAQ, type EventFAQItem } from '../../template/pages/Events';

const faqItems: EventFAQItem[] = [
  {
    question: 'Qui peut participer à l\'événement ?',
    answer: 'L\'événement est ouvert à tous les étudiants et professionnels intéressés par l\'informatique quantique.'
  },
  {
    question: 'Y a-t-il des prérequis ?',
    answer: (
      <div>
        <p>Aucun prérequis spécifique, mais une connaissance de base en :</p>
        <ul>
          <li>Mathématiques (algèbre linéaire)</li>
          <li>Programmation (Python recommandé)</li>
        </ul>
      </div>
    ),
    defaultOpen: true
  }
];

<EventFAQ 
  title="Questions fréquentes"
  items={faqItems}
/>
```

**Props :**
- `title` (string, optionnel) : Titre de la section (défaut: `"FAQ"`)
- `items` (EventFAQItem[], requis) : Liste des questions-réponses

**Type EventFAQItem :**
- `question` (string, requis) : Texte de la question
- `answer` (string | JSX.Element, requis) : Réponse (texte ou contenu JSX)
- `defaultOpen` (boolean, optionnel) : État d'ouverture par défaut (défaut: `false`)

**Fonctionnalités :**
- Animation d'ouverture/fermeture fluide
- Support de contenu JSX riche dans les réponses
- États d'ouverture configurables individuellement

## Exemple complet

Voici un exemple d'une page d'événement complète utilisant tous les composants :

```tsx
import type { NextPage } from 'next';
import { 
  EventLayout, 
  EventTitle, 
  EventText, 
  EventSchedule, 
  EventGuests,
  EventFAQ,
  type EventScheduleItem,
  type EventGuestItem,
  type EventFAQItem
} from '../../template/pages/Events';

const schedule: EventScheduleItem[] = [
  {
    title: 'Conférence d\'ouverture',
    titleHref: 'https://eventbrite.com/event1',
    date: '15 décembre 2025, 9:00 - 10:00',
    description: 'Introduction aux nouvelles technologies quantiques',
    location: 'Auditorium A-1600, ÉTS'
  }
];

const speakers: EventGuestItem[] = [
  {
    guestName: 'Dr. Quantum Expert',
    guestTalk: 'L\'avenir de l\'informatique quantique',
    body: <p>Expert reconnu dans le domaine...</p>,
    imageSrc: '/assets/speakers/expert.jpg'
  }
];

const faq: EventFAQItem[] = [
  {
    question: 'Comment s\'inscrire ?',
    answer: 'Utilisez les boutons d\'inscription dans le programme ci-dessus.'
  }
];

const MonEvenement: NextPage = () => (
  <EventLayout>
    <EventTitle 
      title="Symposium Quantique 2025"
      logoSrc="/assets/symposium-logo.png"
      gradientFrom="from-green-600"
      gradientTo="to-blue-600"
    />
    
    <EventText 
      header="À propos du symposium"
      header_color="text-green-700"
      body={<p>Un événement unique rassemblant...</p>}
      imageSrc="/assets/symposium-image.jpg"
      imagePosition="right"
    />
    
    <EventSchedule 
      title="Programme"
      items={schedule}
      buttonText="Réserver ma place"
    />
    
    <EventGuests 
      title="Conférenciers"
      items={speakers}
    />
    
    <EventFAQ 
      title="Informations pratiques"
      items={faq}
    />
  </EventLayout>
);

export default MonEvenement;
```

Cette structure modulaire permet de créer rapidement des pages d'événements riches et cohérentes tout en maintenant la flexibilité nécessaire pour des besoins spécifiques.