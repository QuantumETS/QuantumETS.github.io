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
    title: 'Opening Keynote',
    titleHref: '#',
    date: '2025-10-01 09:00',
    description: 'Kick-off and overview',
    location: 'Room A',
  },
  {
    title: 'Workshop: Intro',
    titleHref: '#',
    date: '2025-10-01 11:00',
    description: 'Hands-on basics',
    location: 'Lab 1',
  },
];

const EventOne: NextPage = () => (
  <EventLayout>
    <EventTitle
      title="Event One"
      logoSrc="/assets/images/logo2.png"
      gradientFrom="from-fuchsia-700"
      gradientTo="to-pink-400"
    />
    <EventText
      header="About Event One"
      body={
        <p>
          This is a placeholder event page. Use EventText blocks to describe
          your event details, speakers, venue, and more.
        </p>
      }
    />
    <EventSchedule title="Schedule" items={schedule} />
  </EventLayout>
);

export default EventOne;
