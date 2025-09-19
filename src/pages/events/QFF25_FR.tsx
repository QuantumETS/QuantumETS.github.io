import type { NextPage } from 'next';
import Link from 'next/link';

import {
  type EventScheduleItem,
  EventFAQ,
  EventLayout,
  EventSchedule,
  EventText,
  EventTitle,
} from '../../template/pages/Events';

const schedule: EventScheduleItem[] = [
  {
    title: "Atelier 1 : Introduction à l'informatique quantique",
    titleHref: 'https://www.eventbrite.ca/e/1671892709099?aff=oddtdtcreator',
    date: '10 octobre 2025, 18:00 - 20:00',
    description:
      "Participez à l'atelier le plus populaire de QuantumÉTS ! Découvrez les bases de l'informatique quantique, de son histoire aux algorithmes modernes, grâce à des explications accessibles et des démonstrations de circuits en direct. Aucun prérequis en maths - la curiosité suffit !",
    location: 'École de technologie supérieure - Salle A-1600',
  },
  {
    title: 'Atelier 2 : Bases de la programmation avec Qiskit',
    titleHref: 'https://www.eventbrite.ca/e/1693030372419?aff=oddtdtcreator',
    date: '17 octobre 2025, 18:00 - 20:00',
    description:
      "Apprenez les bases du code pour machines quantiques : opérations à un et deux qubits et exécution d'algorithmes sur IBM Quantum. Une introduction pratique pour donner vie à vos premiers circuits quantiques.",
    location: 'École de technologie supérieure - Salle D-3018',
  },
  {
    title: 'Atelier 3 : Représentation mathématique des qubits',
    titleHref: 'https://www.eventbrite.ca/e/1693056340089?aff=oddtdtcreator',
    date: '7 novembre 2025, 18:00 - 20:00',
    description:
      'Explorez les concepts mathématiques sous-jacents aux qubits : sphère de Bloch, espaces vectoriels, notation de Dirac et plus. Idéal si vous maîtrisez les bases de l’algèbre linéaire.',
    location: 'École de technologie supérieure - Salle D-3018',
  },
  {
    title: 'Journée de conférences - Inscriptions bientôt ouvertes !',
    date: '14 novembre 2025, 8:30 - 17:00',
    description:
      "Une journée d'exposés inspirants d'experts de l'industrie, de chercheurs et de leaders communautaires, avec réseautage et panels. Détails à venir.",
    location: 'École de technologie supérieure - Salle A-1600',
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
      buttonText="S'inscrire"
    />
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
