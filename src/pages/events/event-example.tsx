import type { NextPage } from 'next';

import { AlertBannerDialog } from '../../alert/AlertBannerDialog';
import { ActionButtonSection } from '../../cta/ActionButtonSection';
import {
  type EventScheduleItem,
  EventSchedule,
} from '../../event/EventSchedule';
import { EventTitle } from '../../event/EventTitle';
import { EventText } from '../../layout/TextSection';
import { EventLayout } from '../../template/pages/Events';

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

    <AlertBannerDialog
      title="Info: schedule subject to change"
      bannerClassName="bg-red-600 hover:bg-red-700"
      content={
        <div>
          <p>
            This is an example alert banner with an informational popup dialog.
          </p>
          <p className="mt-3">
            You can use it for last-minute updates (venue, timing, access,
            etc.).
          </p>
        </div>
      }
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
    <EventSchedule title="Agenda" items={schedule} buttonText="Register" />

    <ActionButtonSection
      body={<p>Download the event one-pager / poster.</p>}
      buttonLabel="Download PDF"
      actionUrl="https://example.com/event-one-pager.pdf"
      icon="download"
    />
    <ActionButtonSection
      body={<p>Open the registration form for this event.</p>}
      buttonLabel="Register"
      actionUrl="https://example.com/register"
      icon="link"
    />
    <ActionButtonSection
      body={<p>Visit the official event site for more info.</p>}
      buttonLabel="Official Website"
      actionUrl="https://example.com"
      icon="external"
    />
  </EventLayout>
);

export default EventExample;
