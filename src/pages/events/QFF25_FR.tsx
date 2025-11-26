import type { NextPage } from 'next';
import Link from 'next/link';

import type { EventGuestItem } from '../../template/pages/Events';
import {
  type EventScheduleItem,
  EventFAQ,
  EventGuests,
  EventLayout,
  EventSchedule,
  EventText,
  EventTitle,
} from '../../template/pages/Events';

const schedule: EventScheduleItem[] = [
  {
    title: "Atelier 1 : Introduction à l'informatique quantique",
    titleHref: 'https://youtu.be/FADoJ_gTgz4',
    date: '10 octobre 2025, 18:00 - 20:00',
    description:
      "Participez à l'atelier le plus populaire de QuantumÉTS ! Découvrez les bases de l'informatique quantique, de son histoire aux algorithmes modernes, grâce à des explications accessibles et des démonstrations de circuits en direct. Aucun prérequis en maths - la curiosité suffit !",
    location: 'École de technologie supérieure - Salle A-1600',
  },
  {
    title: 'Atelier 2 : Bases de la programmation avec Qiskit',
    date: '17 octobre 2025, 18:00 - 20:00',
    description:
      "Apprenez les bases du code pour machines quantiques : opérations à un et deux qubits et exécution d'algorithmes sur IBM Quantum. Une introduction pratique pour donner vie à vos premiers circuits quantiques.",
    location: 'École de technologie supérieure - Salle D-3018',
  },
  {
    title: 'Atelier 3 : Représentation mathématique des qubits',
    titleHref: 'https://youtu.be/S3FqSe9KbO4',
    date: '7 novembre 2025, 18:00 - 20:00',
    description:
      'Explorez les concepts mathématiques sous-jacents aux qubits : sphère de Bloch, espaces vectoriels, notation de Dirac et plus. Idéal si vous maîtrisez les bases de l’algèbre linéaire.',
    location:
      'Déplacé à un format en ligne - le lien sera envoyé avec la confirmation Eventbrite',
  },
  {
    title: 'Journée de conférences - Inscriptions maintenant ouvertes !',
    date: '14 novembre 2025, 8:30 - 17:00',
    description:
      "Une journée d'exposés inspirants d'experts de l'industrie, de chercheurs et de leaders communautaires, avec réseautage et panels. Détails à venir.",
    location: 'École de technologie supérieure - Salle A-1600',
  },
];

const speakers: EventGuestItem[] = [
  {
    guestName: 'Gilles Brassard, Université de Montréal',
    guestTalk: (
      <ul>
        <li>Conférencier - Journée de conférences</li>
        <li>Présentation : Qui vous a dit que la Nature est nonlocale ?</li>
      </ul>
    ),
    body: (
      <>
        <p>
          L&apos;un des aspects les plus surprenants de la théorie quantique est
          qu&apos;elle nous donne l&apos;impression que nous vivons dans un
          univers nonlocal. Ceci veut dire que des événements qui se passent en
          un point de l&apos;univers semblent avoir un effet instantané sur un
          point arbitrairement éloigné. Cette idée révoltait tant Einstein
          qu&apos;il l&apos;a qualifiée d&apos;action fantomatique à distance.
          Et pourtant, le Prix Nobel de physique a été attribué en 2022 pour la
          démonstration expérimentale de ce phénomène réalisée un demi-siècle
          auparavant. Qu&apos;en disent ces lauréats ? Dans son récent livre «
          Si Einstein avait su ? », Aspect affirme accepter « l&apos;idée […]
          d&apos;une interaction capable d&apos;affecter l&apos;état quantique à
          distance de façon instantanée ». Et pourtant, aucune expérience dont
          le but est de confirmer les prédictions de la théorie quantique ne
          peut être utilisée comme argument en faveur de la nonlocalité. En
          effet, toute théorie réversible de la physique qui ne permet pas la
          possibilité de communication instantanée (par exemple la théorie
          quantique unitaire) peut s&apos;expliquer dans un univers local et
          réaliste pour autant que l&apos;on adopte la définition de localité
          donnée par Einstein en 1949 (et non pas celle donnée par John Bell en
          1964). Lorsqu&apos;on y pense de la bonne façon, ce bon vieux Einstein
          avait raison une fois de plus !
        </p>
      </>
    ),
    imageSrc: '/assets/QiskitFallFest25/speakers/brassard_2.jpg',
  },
  {
    guestName: 'Jacob Biamonte, École de technologie supérieure',
    guestTalk: (
      <ul>
        <li>Conférencier - Journée de conférences</li>
        <li>Présentation : Variational Quantum State Preparation</li>
      </ul>
    ),
    body: (
      <>
        <p>
          A global research effort is underway to operate quantum processors
          through iterative quantum–classical feedback loops. In this talk, I
          will present our discovery of several fundamental limitations of this
          variational paradigm and how these insights have guided our current
          work on quantum state preparation. We found that problem-instance
          structure can induce under parameterization in the Quantum Approximate
          Optimization Algorithm (QAOA), leading to systematic failure modes and
          demonstrating that many early benchmarks were not statistically
          representative of typical problem instances. We also uncovered
          avalanche effects in quantum circuit training, providing the first
          counterexamples to the piecewise trainability conjecture. On the
          positive side, we identified parameter concentration phenomena—the
          first sufficient conditions under which optimized circuit parameters
          become independent of problem instances—and proved that the
          variational model is, in principle, a universal model of quantum
          computation. Ultimately, all variational approaches rely on outer-loop
          optimization to enhance a quantum processor&apos;s ability to prepare
          specific states. I will conclude with our recent progress toward
          leveraging these methods to achieve direct quantum state preparation.
        </p>
      </>
    ),
    imageSrc: '/assets/QiskitFallFest25/speakers/biamonte.png',
  },
  {
    guestName: 'Victor Drouin-Touchette, Université de Sherbrooke / Pasqal',
    guestTalk: (
      <ul>
        <li>Conférencier - Journée de conférences</li>
        <li>Présentation : Relier la physique et l&apos;optimisation</li>
      </ul>
    ),
    body: (
      <>
        <p>
          En physique, la recherche de l&apos;état fondamental d&apos;un
          Hamiltonien est analogue à la résolution d&apos;un problème
          d&apos;optimisation. Cette présentation met en lumière ce parallèle,
          en expliquant comment les contraintes deviennent des interactions et
          les solutions des minima énergétiques. Nous verrons ensuite comment
          l&apos;ingénierie de l&apos;Hamiltonien et de son contrôle quantique
          permet d&apos;explorer efficacement des paysages énergétiques
          complexes. En conclusion, nous discuterons de la manière dont les
          ordinateurs quantiques à atomes neutres exploitent ces principes pour
          manipuler l&apos;information à l&apos;échelle atomique.
        </p>
      </>
    ),
    imageSrc: '/assets/QiskitFallFest25/speakers/drouin-touchette.png',
  },
  {
    guestName: 'Simon Verret, AlgoLab',
    guestTalk: (
      <ul>
        <li>Conférencier - Journée de conférences</li>
        <li>
          Présentation : Calculer la fonction de Green pour réduire
          l&apos;erreur sur la valeur moyenne d&apos;énergie
        </li>
      </ul>
    ),
    body: (
      <>
        <p>
          Une application clé pour l&apos;avenir de l&apos;informatique
          quantique consiste à préparer et à mesurer l&apos;état fondamental des
          systèmes physiques. Cependant, les méthodes proposées jusqu&apos;à
          présent posent des problèmes : les algorithmes variationnels se
          heurtent à des « plateaux stériles », les méthodes de Krylov souffrent
          du bruit statistique et la plupart des autres méthodes nécessitent la
          correction d&apos;erreurs. Or, l&apos;Algolab vient de développer un
          algorithme pour calculer la fonction de Green, qui semble pouvoir
          améliorer l&apos;estimation de l&apos;énergie d&apos;états
          fondamentaux imparfaits. Je présenterai des résultats obtenus avec
          l&apos;ordinateur quantique d&apos;IBM et des simulations de cette
          méthode.
        </p>
      </>
    ),
    imageSrc: '/assets/QiskitFallFest25/speakers/verret.png',
  },
  {
    guestName: 'Samuel Richard',
    guestTalk: (
      <ul>
        <li>Atelier 1 : Introduction à l&apos;informatique quantique</li>
        <li>Atelier 2 : Bases de la programmation avec Qiskit</li>
        <li>Atelier 3 : Représentation mathématique des qubits</li>
      </ul>
    ),
    imageSrc: '/assets/images/members/samuel_richard.jpg',
  },
  {
    guestName: 'Xavier Bergeron',
    guestTalk: (
      <ul>
        <li>Atelier 2 : Bases de la programmation avec Qiskit</li>
      </ul>
    ),
    imageSrc: '/assets/images/members/xavier_bergeron.png',
  },
];

const QFF25_FR: NextPage = () => (
  <EventLayout>
    <EventTitle
      title="Qiskit Fall Fest 2025"
      logoSrc="/assets/QiskitFallFest25/Badge/Badge.png"
      gradientFrom="from-blue-800"
      gradientTo="to-fuchsia-500"
    />
    {/* Sélecteur de langue */}
    <div className="mx-auto my-4 flex max-w-6xl justify-center px-4 text-sm sm:px-6 lg:px-8">
      <nav
        aria-label="Sélecteur de langue"
        className="inline-block text-gray-700"
      >
        <span className="mr-2 font-bold text-purple-600">FR</span>
        <span className="text-gray-400">|</span>
        <Link href="/events/QFF25" className="ml-2 hover:text-purple-600">
          EN
        </Link>
      </nav>
    </div>
    <EventText
      header="À propos du Qiskit Fall Fest"
      header_color="text-purple-700"
      body={
        <p>
          Le Qiskit Fall Fest est une série d&apos;événements étudiants à
          travers le monde, visant à rassembler les passionnés pour explorer et
          apprendre l&apos;informatique quantique. Que vous soyez curieux·se ou
          déjà expérimenté·e, l&apos;édition 2025 a quelque chose pour vous !
        </p>
      }
      imageSrc={'/assets/QiskitFallFest25/Badge/Badge_Dark.png'}
      imageAlt="Logo Qiskit Fall Fest 2025"
      imagePosition="right"
    />
    <EventText
      header="Un événement en français par QuantumÉTS"
      header_color="text-violet-700"
      body={
        <>
          <p>
            Dans le cadre du Qiskit Fall Fest 2025, QuantumÉTS organise une
            série d&apos;activités pour promouvoir l&apos;éducation et la
            communauté en informatique quantique au Québec. Au programme :
          </p>
          <ul className="mt-2 list-disc pl-8">
            <li>Ateliers pratiques et tutoriels</li>
            <li>Conférences données par des experts de l&apos;industrie</li>
            <li>Réseautage avec pairs et professionnels</li>
          </ul>
        </>
      }
      imageSrc={'/assets/images/Logo_ETS_SansTypo_FR.png'}
      imageAlt="Logo de l'ÉTS"
      imagePosition="left"
    />
    <EventText
      header="Célébrer 100 ans d'innovation quantique"
      header_color="text-indigo-700"
      body={
        <p>
          Le thème de cette année est spécial : un hommage à un siècle de
          découvertes quantiques. Des premières expériences de pensée au
          matériel moderne, nous verrons le chemin parcouru et les perspectives
          d&apos;avenir en reliant passé et futur de la révolution quantique.
        </p>
      }
      imageSrc="/assets/QiskitFallFest25/Illustration Exports/Simplified_Illustration.png"
      imageAlt="Illustration représentant 100 ans d'innovation quantique"
      imagePosition="right"
    />
    <EventSchedule
      title="Programme et inscriptions"
      items={schedule}
      buttonText="Visionner"
    />

    {/* Section des conférencier·ère·s */}
    <EventGuests title="Nos conférencier·ère·s" items={speakers} />

    <EventFAQ
      items={[
        {
          question: "Qu'est-ce que Qiskit ?",
          answer:
            "Qiskit est un cadre open source de développement pour l'informatique quantique, développé par IBM Quantum.",
        },
        {
          question: 'Qui peut participer ?',
          answer:
            'Tout le monde est le bienvenu, des débutant·es aux passionné·es expérimenté·es en informatique quantique.',
        },
        {
          question: 'Langue / Language',
          answer:
            "L'événement se déroulera principalement en français. Certains contenus et activités pourront être bilingues (FR/EN) selon les intervenants et le matériel.",
        },
      ]}
    />
  </EventLayout>
);

export default QFF25_FR;
