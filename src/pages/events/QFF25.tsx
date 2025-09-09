import type { NextPage } from 'next';

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
    titleHref: '#',
    date: 'First week of October - Exact date TBA',
    description:
      'Join QuantumÉTS’ most popular workshop! Learn the fundamentals of quantum computing, from the history of quantum to the modern algorithms, through accessible explanations and live circuit demos. No math required, just curiosity!',
    location: 'TBA',
  },
  {
    title: 'Workshop 2 : Basics of Programming Qiskit',
    titleHref: '#',
    date: 'Third week of October - Exact date TBA',
    description:
      'Learn the basics of coding for quantum machines, from one- and two-qubit operations to running algorithms on IBM Quantum. A hands-on introduction to bring your first quantum circuits to life!',
    location: 'TBA',
  },
  {
    title: 'Workshop 3 : Mathematical Representation of Qubits',
    titleHref: '#',
    date: 'First week of November - Exact date TBA',
    description: `Join us for an exploration of the mathematical concepts underlying qubits, revisiting the Bloch Sphere, vector spaces, Dirac notation, and more. This workshop will provide the foundation needed to understand quantum algorithms and their implementation in Qiskit. Suitable for those with a grasp of basic linear algebra.`,
    location: 'TBA',
  },
  {
    title: 'Conference Day',
    titleHref: '#',
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
    <EventText
      header="About the Qiskit Fall Fest"
      body={
        <p>
          Qiskit Fall Fest is a student-led, worldwide series of events that
          brings people together to explore and learn about quantum computing.
        </p>
      }
    />
    <EventText
      header="QFF 2025 at QuantumÉTS"
      body={
        <p>
          As part of the global Qiskit Fall Fest 2025, QuantumÉTS will host a
          special series of events in French to promote quantum computing
          education and community engagement. Our event will feature:
          <ul className="mt-2 list-disc pl-8">
            <li>Hands-on workshops and tutorials</li>
            <li>Keynote speeches from industry experts</li>
            <li>Networking opportunities with peers and professionals</li>
          </ul>
        </p>
      }
    />
    <EventSchedule title="Schedule" items={schedule} />
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
          question: 'What is the language of the event?',
          answer:
            'Our event will be conducted in French, offering a unique opportunity for French-speaking enthusiasts to engage with quantum computing content in their native language.',
        },
      ]}
    />
  </EventLayout>
);

export default EventOne;
