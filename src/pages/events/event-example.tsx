import type { NextPage } from 'next';

import {
  type EventScheduleItem,
  EventLayout,
  EventSchedule,
  EventText,
  EventTitle,
} from '../../template/pages/Events';

const schedule: EventScheduleItem[] = [
  {
    title: 'Registration',
    titleHref: '#',
    date: '2025-11-12 08:30',
    description: 'Badge pickup and coffee',
    location: 'Lobby',
  },
  {
    title: 'Panel Discussion',
    titleHref: '#',
    date: '2025-11-12 14:00',
    description: 'Expert insights and Q&A',
    location: 'Main Hall',
  },
];

const EventExample: NextPage = () => (
  <EventLayout>
    <EventTitle
      title="Event Example"
      logoSrc="/assets/images/Logo.svg"
      gradientFrom="from-indigo-600"
      gradientTo="to-cyan-600"
    />
    <EventText
      header="Overview"
      body={
        <>
          <p>
            Another sample event page showcasing multiple blocks. Duplicate and
            rearrange sections as needed.
          </p>
          <p className="mt-3">
            You can add as many EventText sections as required.
          </p>
        </>
      }
    />
    <EventText
      header="Details"
      body={<p>Location, logistics, and participation info go here.</p>}
    />
    <EventSchedule title="Agenda" items={schedule} />
  </EventLayout>
);

export default EventExample;
