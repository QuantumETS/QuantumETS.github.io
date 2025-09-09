# QuantumÉTS - Site Web

Ce répertoire contient le code source du club étudiant QuantumÉTS. Il s'agit d'un site web statique construit avec Next.js, Tailwind CSS et TypeScript.

## Documentation

L'usage générique de ce site web est documenté dans le fichier [README_CSS-Theme.md](docs/README_CSS-Theme.md), qui accompagnait le thème utilisé ici.

La documentation spécifique à notre usage et aux modifications apportées se trouve ci-dessous.

Les problèmes et les demandes de changements sont gérés dans le [dépôt GitHub - Issues](https://github.com/QuantumETS/QuantumETS.github.io/issues).

## Contribuer

Pour démarrer l'édition en local, vous devez d'abord cloner le dépôt :

```bash
git clone https://github.com/QuantumETS/QuantumETS.github.io.git
cd QuantumETS.github.io
```

Ensuite, installez les dépendances :

```bash
npm install
```

>[!NOTE]
>`npm` est le gestionnaire de paquets par défaut pour Node.js. Il faut donc d'abord installer Node.js pour pouvoir utiliser `npm`. Vous pouvez télécharger Node.js depuis [nodejs.org](https://nodejs.org/).

## Démarrage

Lorsque les dépendances sont installées, le site peut être démarré en mode développement avec la commande suivante :

```bash
npm run dev
```

Cela lancera le serveur de développement et vous pourrez accéder au site à l'adresse [http://localhost:3000](http://localhost:3000).

## Sections du site internet à maintenir

Plusieurs sections du site demandent une attention particulière pour être maintenues à jour :

- **Accueil-Membres de l'équipe** : Cette section doit être mise à jour avec les informations des membres actuels du club. Les photos et les descriptions doivent être modifiées pour refléter les membres en fonction de l'année scolaire.
- **Accueil-Compétitions** : Les informations sur les compétitions doivent être mises à jour pour refléter les résultats et les événements récents.
- **Accueil-Commanditaires** : Les commanditaires du club doivent être mis à jour pour refléter les partenariats actuels. Les logos et les liens doivent être vérifiés pour s'assurer qu'ils sont corrects.
- **Apprendre** : Cette section contient les ressources pédagogiques de niveau débutant développées par le club. Elle contient aussi des liens vers les présentations des ateliers et des conférences passées.
- **Événements** : Les pages d’événements personnalisées (bannières, sections de texte, horaires) et le menu déroulant dans la barre de navigation.

### Accueil-Membres de l'équipe

Le contenu de cette section est géré dans le fichier `src/template/Testimonial.tsx`. Chaque membre de l'équipe est représenté par un objet `TestimonialCard` défini dans le fichier `src/members/MemberCard.tsx`. Pour ajouter ou modifier un membre, il suffit de modifier le

```ts
const Members = () => (
  <Background color="bg-gray-200">
    <Section title="Membres de l'équipe">
      <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x md:divide-gray-200 xl:grid-cols-4">
        <TestimonialCard
          image={{
            src: 'public/assets/john-doe.jpg',
            alt: 'John Doe',
          }}
          author={{
            name: 'John Doe',
            position: 'Administrateur',
          }}
        />
      </div>
    </Section>
  </Background>
);
```

### Accueil-Compétitions

Le contenu de cette section est géré dans le fichier `src/template/Events.tsx`. Chaque compétition est représentée comme une entrée dans un tableau `table`. Il suffit d'ajouter ou de modifier les entrées en suivant le format

```ts
<tr className="align-top">
  <td className="whitespace-normal px-6 py-4">
    <Link target="_blank" href="LIEN_VERS_LE_SITE_DE_LA_COMPÉTITION">
      <div className="text-sm font-medium text-blue-500 underline">
        Nom de la compétition
      </div>
    </Link>
  </td>
  <td className="whitespace-normal px-6 py-4">Mois Année de la compétition</td>
  <td className="whitespace-normal px-6 py-4">
    <p>
      Description de notre activité dans la compétition, faits marquants, constitution des équipes, etc.
    </p>
  </td>
  <td className="whitespace-normal px-6 py-4">
    <span className="inline-flex rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
      Statut de la compétition (Terminé, En cours, À venir)
    </span>
  </td>
  <td className="whitespace-normal px-6 py-4">
    Résultats de la compétition (1er, 2e, 3e, etc. ou mention honorable)
  </td>
</tr>
```

### Accueil-Commanditaires

Cette section est gérée dans le fichier `src/template/Customer.tsx`. Chaque commanditaire est représenté par un objet `CustomerLogo` défini dans le fichier `src/customers/CustomerLogo.tsx`.

```ts
<CustomerLogo
  src="/assets/images/LOGO_DU_COMMANDITAIRE.svg"
  alt="description du commanditaire"
  className="h-32"
/>
```

### Apprendre

La section "Apprendre" est gérée à l'aide des fichiers suivants :

- `src/template/pages/Notebook.tsx`
- `src/template/DescriptionNotebooks.tsx`
- `src/template/Notebooks.tsx`

Les ressources pédagogiques mises de l'avant comportent un bouton avec un lien menant vers le notebook hébergé sur [Deepnote](https://deepnote.com/). S'assurer que les liens sont à jour et publiques.

>[!CAUTION]
>Le lien des notebook étant public, s'assurer que les permissions sont correctement configurées pour éviter que ceux-ci ne soient modifiés par des personnes non autorisées. Il est recommandé de configurer en mode lecture seulement, sans possibilité d'exécution, puisque l'output est déjà généré et visible dans le notebook.

>[!IMPORTANT]
>Idéalement, les notebooks sont maintenus à jour régulièrement par les membres du club.

```ts
{/* src\template\Notebooks.tsx */}
[...]
 <NotebookRow
  title="Nom du Notebook"
  description={
    <>
      <p>
        Description du notebook...
      </p>
    </>
  }
  link="https://lien_vers_le_notebook_deepnote.com"
/>
[...]
```

### Événements

Les pages d’événements utilisent des composants dédiés et un menu déroulant dans la barre de navigation.

Composants disponibles (définis dans `src/template/pages/Events.tsx`):

- `EventTitle`: bannière avec titre, logo optionnel et dégradé.
- `EventText`: section « header + body » répétable.
- `EventSchedule`: tableau avec colonnes Title (peut être un lien), Date, Description, Location.
- `EventLayout`: gabarit qui inclut la barre de navigation et le pied de page.

Créer une page d’événement:

1. Créez un fichier sous `src/pages/events/mon-evenement.tsx`.
2. Utilisez les composants de `src/template/pages/Events.tsx`:

```tsx
import type { NextPage } from 'next';
import { EventLayout, EventTitle, EventText, EventSchedule, type EventScheduleItem } from '../../template/pages/Events';

const schedule: EventScheduleItem[] = [
  { title: 'Talk 1', titleHref: '#', date: 'YYYY-MM-DD HH:mm', description: '...', location: 'Room A' },
];

const MonEvenement: NextPage = () => (
  <EventLayout>
    <EventTitle title="Mon Événement" logoSrc="/assets/images/Logo.svg" gradientFrom="from-indigo-600" gradientTo="to-cyan-600" />
    <EventText header="À propos" body={<p>Description…</p>} />
    <EventSchedule title="Horaire" items={schedule} />
  </EventLayout>
);

export default MonEvenement;
```

Ajouter l’événement au menu déroulant de la Navbar:

1. Ouvrez `src/template/Navbar.tsx`.
2. Dans la liste `<ul>` du menu « Événements », ajoutez une entrée:

```tsx
<li className="px-4 py-2 hover:bg-gray-50">
  <Link href="/events/mon-evenement">Mon Événement</Link>
</li>
```

Retirer complètement une entrée du menu:

- Supprimez le `<li>` correspondant dans `Navbar.tsx`.
- Optionnel: supprimez la page sous `src/pages/events/...` si l’événement est définitivement retiré.

## Déploiement

Le déploiement du site est automatisé via GitHub Actions. Chaque fois qu'une modification est poussée sur la branche `main`, le site est reconstruit et déployé automatiquement en tant que site statique sur GitHub Pages.

Si un déploiement échoue, celui-ci sera visible dans l'onglet [Actions](https://github.com/QuantumETS/QuantumETS.github.io/actions)
