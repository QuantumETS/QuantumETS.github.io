import Link from 'next/link';
import React, { useState } from 'react';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

interface NavbarProps {
  selectedTitle:
    | 'Accueil'
    | 'Apprendre'
    | 'Partenaire'
    | 'Atelier'
    | 'Événements';
}

export const Navbar = ({ selectedTitle }: NavbarProps) => {
  const [eventsOpen, setEventsOpen] = useState(false);

  // Events dropdown items maintenance
  // - To add: push an item { href: '/events/my-event', label: 'My Event', enabled: true }
  // - To disable temporarily: set enabled: false or comment the entry
  // - To remove completely: delete the entry (and optionally the page under src/pages/events)
  type EventLink = { href: string; label: string; enabled?: boolean };
  const eventLinks: EventLink[] = [
    { href: '/events/QFF25', label: 'Qiskit Fall Fest 2025', enabled: true },
    // { href: '/events/event-example', label: 'Event Example', enabled: false },
  ];
  const activeEventLinks = eventLinks.filter((e) => e.enabled !== false);

  return (
    <Background color="bg-gray-200">
      <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo xl />}>
          <li
            style={
              selectedTitle === 'Accueil'
                ? { borderBottom: '4px solid #6246EA' }
                : {}
            }
          >
            <Link href="/">Accueil</Link>
          </li>
          <li
            style={
              selectedTitle === 'Apprendre'
                ? { borderBottom: '4px solid #6246EA' }
                : {}
            }
          >
            <Link href="/notebook">Apprendre</Link>
          </li>
          <li
            style={
              selectedTitle === 'Partenaire'
                ? { borderBottom: '4px solid #6246EA' }
                : {}
            }
          >
            <Link href="/contact">Partenaire</Link>
          </li>
          <li
            style={
              selectedTitle === 'Atelier'
                ? { borderBottom: '4px solid #6246EA' }
                : {}
            }
          >
            <Link href="/workshop">Atelier</Link>
          </li>
          <li
            className="relative"
            style={
              selectedTitle === 'Événements'
                ? { borderBottom: '4px solid #6246EA' }
                : {}
            }
          >
            <button
              type="button"
              className="flex w-full items-center gap-1 text-left"
              onClick={() => setEventsOpen((o) => !o)}
            >
              Événements
              <svg
                className={`h-4 w-4 transition-transform ${
                  eventsOpen ? 'rotate-180' : ''
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {eventsOpen && (
              <ul className="absolute left-0 z-20 mt-2 w-56 rounded-md bg-white py-2 shadow-lg ring-1 ring-black/5 sm:w-64 sm:py-2 sm:text-base">
                {/*
                  Dropdown maintenance: Refer to the eventLinks array above.
                */}
                {activeEventLinks.length === 0 ? (
                  <li
                    className="cursor-not-allowed select-none px-4 py-2 text-gray-400"
                    aria-disabled="true"
                  >
                    No upcoming events
                  </li>
                ) : (
                  activeEventLinks.map((e) => (
                    <li key={e.href} className="px-4 py-2 hover:bg-gray-50">
                      <Link href={e.href}>{e.label}</Link>
                    </li>
                  ))
                )}
              </ul>
            )}
          </li>
        </NavbarTwoColumns>
      </Section>
    </Background>
  );
};
