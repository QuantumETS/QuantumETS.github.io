import type { NextPage } from 'next';
import Link from 'next/link';

import type { EventGuestItem } from '../../template/pages/Events';
import {
  type EventScheduleItem,
  EventFAQ,
  EventGuests,
  EventLayout,
  EventSchedule,
  EventScheduleDownload,
  EventText,
  EventTitle,
  StrikeInfoBanner,
} from '../../template/pages/Events';

const schedule: EventScheduleItem[] = [
  {
    title: 'Workshop 1 : Introduction to Quantum Computing',
    date: 'October 10th, 2025, 18:00 - 20:00',
    description:
      'Join QuantumÉTS’ most popular workshop! Learn the fundamentals of quantum computing, from the history of quantum to the modern algorithms, through accessible explanations and live circuit demos. No math required, just curiosity!',
    location: 'École de Technologie Supérieure - Room A-1600',
  },
  {
    title: 'Workshop 2 : Basics of Programming Qiskit',
    date: 'October 17th, 2025, 18:00 - 20:00',
    description:
      'Learn the basics of coding for quantum machines, from one- and two-qubit operations to running algorithms on IBM Quantum. A hands-on introduction to bring your first quantum circuits to life!',
    location: 'École de Technologie Supérieure - Room D-3018',
  },
  {
    title: 'Workshop 3 : Mathematical Representation of Qubits',
    date: 'November 7th, 2025, 18:00 - 20:00',
    description: `Join us for an exploration of the mathematical concepts underlying qubits, revisiting the Bloch Sphere, vector spaces, Dirac notation, and more. This workshop will provide the foundation needed to understand quantum algorithms and their implementation in Qiskit. Suitable for those with a grasp of basic linear algebra.`,
    location:
      'Moved to an online format - link will be sent with the Eventbrite confirmation',
  },
  {
    title: 'Conference Day - Registration Now Live!',
    titleHref: 'https://www.eventbrite.ca/e/1716293513099?aff=oddtdtcreator',
    date: 'November 14th, 2025, 8:30 AM - 5:00 PM',
    description:
      'A day of inspiring talks from industry experts, researchers, and community leaders in quantum computing with networking opportunities and panel discussions. Stay tuned for the detailed agenda!',
    location: 'École de Technologie Supérieure - Room A-1600',
  },
];

const speakers: EventGuestItem[] = [
  {
    guestName: 'Gilles Brassard',
    guestTalk: (
      <ul>
        <li>Conference Day Speaker</li>
        <li>Talk: Qui vous a dit que la Nature est nonlocale ?</li>
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
        <li>Conference Day Speaker</li>
        <li>Talk: Variational Quantum State Preparation</li>
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
        <li>Conference Day Speaker</li>
        <li>Talk: Relier la physique et l&apos;optimisation</li>
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
    guestName: 'Nathan Wiebe, University of Toronto',
    guestTalk: (
      <ul>
        <li>Conference Day Speaker</li>
        <li>Talk: TBA</li>
      </ul>
    ),
    imageSrc: '/assets/QiskitFallFest25/speakers/wiebe.jpg',
  },
  {
    guestName: 'Simon Verret, AlgoLab',
    guestTalk: (
      <ul>
        <li>Conference Day Speaker</li>
        <li>
          Talk: Calculer la fonction de Green pour réduire l&apos;erreur sur la
          valeur moyenne d&apos;énergie
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
        <li>Workshop 1: Introduction to Quantum Computing</li>
        <li>Workshop 2: Basics of Programming Qiskit</li>
        <li>Workshop 3: Mathematical Representation of Qubits</li>
      </ul>
    ),
    imageSrc: '/assets/images/members/samuel_richard.jpg',
  },
  {
    guestName: 'Xavier Bergeron',
    guestTalk: (
      <ul>
        <li>Workshop 2: Basics of Programming Qiskit</li>
      </ul>
    ),
    imageSrc: '/assets/images/members/xavier_bergeron.png',
  },
  {
    guestName: 'More to be announced soon!',
    imageSrc: '/assets/QiskitFallFest25/speakers/coming_soon.png',
  },
];

const EventOne: NextPage = () => (
  <EventLayout>
    <StrikeInfoBanner
      title="STM Strike Information"
      content={
        <div>
          <p className="mb-4">
            <strong>Update (November 12, 2025):</strong> The STM strike is
            suspended. All our activities are proceeding as planned.
          </p>
          <p className="text-sm text-gray-600">
            For any new developments, please check the latest{' '}
            <a
              href="https://www.stm.info/en/info/service-updates/info-strike"
              className="font-bold text-indigo-600 hover:underline"
            >
              STM updates
            </a>
            .
          </p>
        </div>
      }
    />
    <EventTitle
      title="Qiskit Fall Fest 2025"
      logoSrc="/assets/QiskitFallFest25/Badge/Badge.png"
      gradientFrom="from-blue-800"
      gradientTo="to-fuchsia-500"
    />
    {/* Language selector */}
    <div className="mx-auto my-4 flex max-w-6xl justify-center px-4 text-sm sm:px-6 lg:px-8">
      <nav
        aria-label="Language selector"
        className="inline-block text-gray-700"
      >
        <Link href="/events/QFF25_FR" className="mr-2 hover:text-purple-600">
          FR
        </Link>
        <span className="text-gray-400">|</span>
        <span className="ml-2 font-bold text-purple-600">EN</span>
      </nav>
    </div>
    <EventText
      header="About the Qiskit Fall Fest"
      header_color="text-purple-700"
      body={
        <p>
          Qiskit Fall Fest is a student-led, worldwide series of events that
          brings people together to explore and learn about quantum computing.
          Whether you&apos;re a curious beginner or a seasoned coder, Qiskit
          Fall Fest 2025 offers something for everyone!
        </p>
      }
      imageSrc={'/assets/QiskitFallFest25/Badge/Badge_Dark.png'}
      imageAlt="Qiskit Fall Fest 2025 Logo"
      imagePosition="right"
    />
    <EventText
      header="A French-Language Event by QuantumÉTS"
      header_color="text-violet-700"
      body={
        <p>
          As part of the global Qiskit Fall Fest 2025, QuantumÉTS will host a
          special series of events to promote quantum computing education and
          community engagement in Québec, a French-speaking province. Our event
          will feature:
          <ul className="mt-2 list-disc pl-8">
            <li>Hands-on workshops and tutorials</li>
            <li>Keynote speeches from industry experts</li>
            <li>Networking opportunities with peers and professionals</li>
          </ul>
        </p>
      }
      imageSrc={'/assets/images/Logo_ETS_SansTypo_FR.png'}
      imageAlt="Logo de l'ÉTS"
      imagePosition="left"
    />
    <EventText
      header="Celebrating 100 Years of Quantum Innovation"
      header_color="text-indigo-700"
      body={
        <p>
          This year&apos;s Fall Fest theme is special: it&apos;s a tribute to a
          century of quantum discoveries. From the first thought experiments to
          modern quantum hardware, we&apos;ll explore how far we&apos;ve come
          and where we&apos;re heading. Expect sessions that bridge the past and
          future, showcasing breakthroughs, experiments, and theories that
          opened the door for today&apos;s quantum revolution.
        </p>
      }
      imageSrc="/assets/QiskitFallFest25/Illustration Exports/Simplified_Illustration.png"
      imageAlt="Illustration representing 100 years of quantum innovation"
      imagePosition="right"
    />
    <EventSchedule
      title="Schedule and Registration"
      items={schedule}
      buttonText="Register"
    />
    <EventScheduleDownload
      body="You can download the full schedule of the Conference Day event here."
      downloadUrl="https://etsmtl365-my.sharepoint.com/:b:/g/personal/quantumets_etsmtl_ca/IQBaimkQgwMCTLzFaHjTSMx8AaKvqLj9OhYJXQaLrFD75qg?e=is6W3U"
      buttonLabel="Download Schedule"
    />

    {/* Add speaker section */}
    <EventGuests title="Featured Speakers" items={speakers} />

    <EventFAQ
      items={[
        {
          question: 'What is Qiskit?',
          answer:
            'Qiskit is an open-source quantum computing software development framework developed by IBM Quantum.',
        },
        {
          question: 'Who can attend?',
          answer:
            'Qiskit Fall Fest is open to everyone, from beginners to experts in quantum computing.',
        },
        {
          question: 'Language / Langue',
          answer:
            "Our event will be conducted in French mostly, with some keynotes given in English, depending on the speaker's preference.",
        },
      ]}
    />
  </EventLayout>
);

export default EventOne;
