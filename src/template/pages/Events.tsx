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
  header_color?: string; // tailwind color e.g., text-purple-500
  body: string | JSX.Element;
  // Optional illustrative image displayed alongside the text
  imageSrc?: string;
  imageAlt?: string;
  // Controls where the text gets condensed relative to the image
  // left: image on the left, text on the right (default)
  // right: image on the right, text on the left
  imagePosition?: 'left' | 'right';
};

export const EventText = ({
  header,
  header_color,
  body,
  imageSrc,
  imageAlt = 'Event illustration',
  imagePosition = 'left',
}: EventTextProps) => (
  <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
    {imageSrc ? (
      <div
        className={`flex flex-col items-start gap-6 sm:items-stretch sm:gap-8 ${
          imagePosition === 'right' ? 'sm:flex-row-reverse' : 'sm:flex-row'
        }`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageSrc}
          alt={imageAlt}
          className="rounded-sm sm:max-h-40 sm:max-w-sm"
        />
        <div className="flex-1">
          <h2 className={`mb-3 text-2xl font-semibold ${header_color}`}>
            {header}
          </h2>
          <div className="prose max-w-none text-gray-700">{body}</div>
        </div>
      </div>
    ) : (
      <>
        <h2 className={`mb-3 text-2xl font-semibold ${header_color}`}>
          {header}
        </h2>
        <div className="prose max-w-none text-gray-700">{body}</div>
      </>
    )}
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
  buttonText: string;
};

export const EventSchedule = ({
  title,
  items,
  buttonText,
}: EventScheduleProps) => (
  <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
    <h2 className="mb-4 text-2xl font-semibold text-gray-900">{title}</h2>
    <div className="overflow-x-auto rounded border border-gray-200 bg-white">
      <table className="min-w-full divide-y divide-gray-200 text-left">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-sm font-medium text-gray-600"></th>
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
              <td className="px-4 py-3">
                {it.titleHref ? (
                  <a
                    href={it.titleHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded bg-violet-600 px-3 py-1 text-xs font-medium text-white shadow-sm transition hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-1"
                  >
                    {buttonText}
                  </a>
                ) : (
                  <span className="text-xs text-gray-300">—</span>
                )}
              </td>
              <td className="px-4 py-3 text-primary-600">{it.title}</td>
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
