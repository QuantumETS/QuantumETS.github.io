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
    title: 'Workshop 1 : Introduction to Quantum Computing',
    titleHref: 'https://www.eventbrite.ca/e/1671892709099?aff=oddtdtcreator',
    date: 'October 10th, 2025, 18:00 - 20:00',
    description:
      'Join QuantumÉTS’ most popular workshop! Learn the fundamentals of quantum computing, from the history of quantum to the modern algorithms, through accessible explanations and live circuit demos. No math required, just curiosity!',
    location: 'École de Technologie Supérieure - Room A-1600',
  },
  {
    title: 'Workshop 2 : Basics of Programming Qiskit',
    titleHref: 'https://www.eventbrite.ca/e/1693030372419?aff=oddtdtcreator',
    date: 'October 17th, 2025, 18:00 - 20:00',
    description:
      'Learn the basics of coding for quantum machines, from one- and two-qubit operations to running algorithms on IBM Quantum. A hands-on introduction to bring your first quantum circuits to life!',
    location: 'École de Technologie Supérieure - Room D-3018',
  },
  {
    title: 'Workshop 3 : Mathematical Representation of Qubits',
    titleHref: 'https://www.eventbrite.ca/e/1693056340089?aff=oddtdtcreator',
    date: 'November 7th, 2025, 18:00 - 20:00',
    description: `Join us for an exploration of the mathematical concepts underlying qubits, revisiting the Bloch Sphere, vector spaces, Dirac notation, and more. This workshop will provide the foundation needed to understand quantum algorithms and their implementation in Qiskit. Suitable for those with a grasp of basic linear algebra.`,
    location: 'École de Technologie Supérieure - Room D-3018',
  },
  {
    title: 'Conference Day - Registration Opening Soon!',
    date: 'Mid-November - Exact date TBA',
    description:
      'A day of inspiring talks from industry experts, researchers, and community leaders in quantum computing with networking opportunities and panel discussions. Stay tuned for the detailed agenda!',
    location: 'TBA',
  },
];

const EventOne: NextPage = () => (
  <EventLayout>
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
    <EventSchedule title="Schedule and Registration" items={schedule} />
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
            'Our event will be conducted in French, offering a unique opportunity for French-speaking enthusiasts to engage with quantum computing content in their native language.',
        },
      ]}
    />
  </EventLayout>
);

export default EventOne;
