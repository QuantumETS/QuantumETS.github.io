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
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-10">
        {logoSrc && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={logoSrc}
            alt="Event logo"
            style={{
              height: `150px`,
              marginRight: '5px',
            }}
          />
        )}
        <h1 className="text-3xl font-bold sm:text-6xl">{title}</h1>
      </div>
    </div>
  </div>
);

type EventTextProps = {
  header: string;
  body: string | JSX.Element;
};

export const EventText = ({ header, body }: EventTextProps) => (
  <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
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
  <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
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
        <tbody className="divide-y divide-gray-200">
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

export type EventFAQItem = {
  question: string;
  answer: string | JSX.Element;
  defaultOpen?: boolean;
};

type EventFAQProps = {
  title?: string;
  items: EventFAQItem[];
};

const FAQItemRow: React.FC<{ item: EventFAQItem; index: number }> = ({
  item,
  index,
}) => {
  const [open, setOpen] = React.useState<boolean>(!!item.defaultOpen);
  const contentId = `event-faq-content-${index}`;

  return (
    <div>
      <button
        type="button"
        className="flex w-full items-center justify-between px-4 py-3 text-left font-medium text-gray-900 hover:bg-gray-50"
        aria-expanded={open}
        aria-controls={contentId}
        onClick={() => setOpen((o) => !o)}
      >
        <span>{item.question}</span>
        <svg
          className={`h-4 w-4 shrink-0 transition-transform ${
            open ? 'rotate-180' : ''
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
      {open && (
        <div id={contentId} className="px-4 pb-4 text-gray-700">
          {item.answer}
        </div>
      )}
    </div>
  );
};
export const EventFAQ = ({ title = 'FAQ', items }: EventFAQProps) => {
  return (
    <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <h2 className="mb-4 text-2xl font-semibold text-gray-900">{title}</h2>
      <div className="divide-y divide-gray-200 overflow-hidden rounded border border-gray-200 bg-white">
        {items.map((item, idx) => (
          <FAQItemRow key={idx} item={item} index={idx} />
        ))}
      </div>
    </section>
  );
};
