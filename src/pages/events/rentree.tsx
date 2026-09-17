import type { NextPage } from 'next';

import {
  type EventScheduleItem,
  EventSchedule,
} from '../../event/EventSchedule';
import { EventTitle } from '../../event/EventTitle';
import { EventText } from '../../layout/TextSection';
import { EventLayout } from '../../template/pages/Events';

const schedule: EventScheduleItem[] = [
  {
    title: "Séance d'information",
    date: '18 septembre 2026, 18h00',
    description:
      "Venez rencontrer l'équipe de Quantum ÉTS et découvrir les activités prévues pour la session. Une belle occasion de socialiser et de poser vos questions sur le club.",
    location: 'F-3010',
  },
  {
    title: "Séance d'information",
    date: '22 septembre 2026, 12h30',
    description:
      "Passez nous voir sur l'heure du midi pour discuter du club, rencontrer les membres et en apprendre plus sur l'informatique quantique.",
    location: 'D-3017',
  },
  {
    title: '1er atelier',
    date: '2 octobre 2026',
    description: 'Contenu à déterminer.',
    location: 'A-1600',
  },
  {
    title: '2e atelier',
    date: '16 octobre 2026',
    description: 'Contenu à déterminer.',
    location: 'D-3018',
  },
  {
    title: '3e atelier',
    date: '30 octobre 2026',
    description: 'Contenu à déterminer.',
    location: 'D-3018',
  },
];

const Rentree: NextPage = () => (
  <EventLayout>
    <EventTitle
      title="Événement de la rentrée"
      gradientFrom="from-indigo-600"
      gradientTo="to-purple-600"
    />

    <EventText
      header="À propos"
      body={
        <p>
          Quantum ÉTS lance la nouvelle session avec son événement de la
          rentrée ! Restez à l'affût, d'autres activités seront ajoutées au
          programme au fil de la session.
        </p>
      }
    />

    <EventSchedule title="Programme" items={schedule} buttonText="S'inscrire" />
  </EventLayout>
);

export default Rentree;
