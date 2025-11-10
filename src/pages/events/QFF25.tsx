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
        <li>Talk: Who Told You That Nature Is Nonlocal?</li>
      </ul>
    ),
    body: (
      <>
        <p>
          One of the most surprising aspects of quantum theory is that it gives
          us the impression we live in a nonlocal universe. This means that
          events occurring at one point in the universe seem to have an
          instantaneous effect on another point arbitrarily far away. This idea
          so disturbed Einstein that he famously called it “spooky action at a
          distance.” And yet, the Nobel Prize in Physics was awarded in 2022 for
          the experimental demonstration of this phenomenon, achieved half a
          century earlier. But what do those laureates say? In his recent book
          “If Einstein Had Known?”, Aspect writes that he accepts “the idea […]
          of an interaction capable of instantaneously affecting a quantum state
          at a distance.” And yet, no experiment designed to confirm the
          predictions of quantum theory can serve as evidence in favor of
          nonlocality. Indeed, any reversible theory of physics that forbids
          instantaneous communication (for example, unitary quantum theory) can
          still be explained within a local and realistic universe—provided we
          use Einstein&apos;s 1949 definition of locality, rather than John
          Bell&apos;s 1964 version. When viewed from the right perspective, good
          old Einstein was right once again!
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
        <li>
          Talk: <i>TBA</i>
        </li>
      </ul>
    ),
    imageSrc: '/assets/QiskitFallFest25/speakers/biamonte.png',
  },
  {
    guestName: 'Victor Drouin-Touchette, Université de Sherbrooke / Pasqal',
    guestTalk: (
      <ul>
        <li>Conference Day Speaker</li>
        <li>Talk: Bridging Physics and Optimization</li>
      </ul>
    ),
    body: (
      <>
        <p>
          In physics, finding the ground state of a Hamiltonian is analogous to
          solving an optimization problem. This presentation highlights that
          parallel by explaining how constraints translate into interactions and
          how solutions correspond to energy minima. We will then explore how
          Hamiltonian engineering and quantum control enable the efficient
          exploration of complex energy landscapes. Finally, we will discuss how
          neutral-atom quantum computers leverage these principles to manipulate
          information at the atomic scale.
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
          Talk: Computing the Green&apos;s Function to Reduce Error on the
          Energy Expectation Value
        </li>
      </ul>
    ),
    body: (
      <>
        <p>
          A key near-term application of quantum computing is to prepare and
          measure the ground state of physical systems. However, current
          approaches face limitations: variational algorithms encounter
          so-called barren plateaus, Krylov methods suffer from statistical
          noise, and most other techniques require error correction. Recently,
          Algolab developed an algorithm to compute the Green&apos;s function
          that appears to improve the energy-expectation estimate of imperfect
          ground states. I will present results obtained on IBM&apos;s quantum
          computer as well as simulations of this method.
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
            <strong>Important Notice:</strong> Due to the ongoing STM (Société
            de transport de Montréal) strike, public transportation services may
            be significantly affected.
          </p>
          <h4 className="mb-2 font-semibold">Affected Activities:</h4>
          <ul className="mb-4 list-disc space-y-1 pl-6">
            <li>
              Workshop 3: The workshop has been moved online and will only be
              given in person if the strike is lifted beforehand.
            </li>
            <li>Conference Day: No changes for now.</li>
          </ul>
          <p className="text-sm text-gray-600">
            We recommend checking the latest{' '}
            <a
              href="https://www.stm.info/en/info/service-updates/info-strike"
              className="font-bold text-indigo-600 hover:underline"
            >
              STM updates
            </a>{' '}
            before traveling to the event.
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
