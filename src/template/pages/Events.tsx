import Link from 'next/link';
import React from 'react';

import { Meta } from '../../layout/Meta';
import { AppConfig } from '../../utils/AppConfig';
import { Footer } from '../Footer';
import { Navbar } from '../Navbar';

type EventTitleProps = {
  title: string;
  logoSrc?: string;
  gradientFrom?: string; // tailwind color e.g., from-purple-500
  gradientTo?: string; // tailwind color e.g., to-indigo-500
};

export const EventTitle = ({
  title,
  logoSrc,
  gradientFrom = 'from-indigo-500',
  gradientTo = 'to-purple-500',
}: EventTitleProps) => (
  <div
    className={`relative isolate overflow-hidden bg-gradient-to-r ${gradientFrom} ${gradientTo} py-16 text-white sm:py-20`}
  >
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-4">
        {logoSrc && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={logoSrc} alt="Event logo" className="h-14 w-14 rounded" />
        )}
        <h1 className="text-3xl font-bold sm:text-4xl">{title}</h1>
      </div>
    </div>
  </div>
);

type EventTextProps = {
  header: string;
  body: string | JSX.Element;
};

export const EventText = ({ header, body }: EventTextProps) => (
  <section className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
    <h2 className="mb-3 text-2xl font-semibold text-gray-900">{header}</h2>
    <div className="prose max-w-none text-gray-700">{body}</div>
  </section>
);

export type EventScheduleItem = {
  title: string;
  titleHref?: string;
  date: string;
  description: string;
  location: string;
};

type EventScheduleProps = {
  title: string;
  items: EventScheduleItem[];
};

export const EventSchedule = ({ title, items }: EventScheduleProps) => (
  <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
    <h2 className="mb-4 text-2xl font-semibold text-gray-900">{title}</h2>
    <div className="overflow-x-auto rounded border border-gray-200 bg-white">
      <table className="min-w-full divide-y divide-gray-200 text-left">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-sm font-medium text-gray-600">
              Title
            </th>
            <th className="px-4 py-3 text-sm font-medium text-gray-600">
              Date
            </th>
            <th className="px-4 py-3 text-sm font-medium text-gray-600">
              Description
            </th>
            <th className="px-4 py-3 text-sm font-medium text-gray-600">
              Location
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {items.map((it, idx) => (
            <tr key={idx} className="hover:bg-gray-50">
              <td className="px-4 py-3 text-primary-600">
                {it.titleHref ? (
                  <Link href={it.titleHref}>{it.title}</Link>
                ) : (
                  it.title
                )}
              </td>
              <td className="px-4 py-3 text-gray-700">{it.date}</td>
              <td className="px-4 py-3 text-gray-700">{it.description}</td>
              <td className="px-4 py-3 text-gray-700">{it.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
);

// A simple shell layout for an Event page
type EventLayoutProps = {
  children: React.ReactNode;
};

export const EventLayout = ({ children }: EventLayoutProps) => (
  <div className="text-gray-700 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Navbar selectedTitle="Événements" />
    {children}
    <Footer />
  </div>
);
