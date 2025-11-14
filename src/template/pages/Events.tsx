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
                  <button
                    type="button"
                    disabled
                    className="inline-flex cursor-not-allowed items-center rounded bg-gray-300 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm"
                    aria-disabled="true"
                  >
                    {buttonText}
                  </button>
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

export type EventGuestItem = {
  guestName: string;
  guestTalk?: string | JSX.Element;
  body?: string | JSX.Element;
  imageSrc?: string;
};

type EventGuestsProps = {
  title?: string;
  items: EventGuestItem[];
};

const GuestCard: React.FC<{ guest: EventGuestItem }> = ({ guest }) => (
  <div className="flex gap-4">
    {guest.imageSrc && (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={guest.imageSrc}
        alt={`${guest.guestName} profile`}
        className="h-48 w-48 shrink-0 rounded-full object-cover shadow-lg"
      />
    )}
    <div className="min-w-0 flex-1">
      <h3 className="text-xl font-semibold text-gray-900">{guest.guestName}</h3>
      {guest.guestTalk && (
        <p className="text-m mb-2 font-medium text-purple-600">
          {guest.guestTalk}
        </p>
      )}
      {guest.body && (
        <div className="text-m max-w-none text-gray-700">{guest.body}</div>
      )}
    </div>
  </div>
);

export const EventGuests = ({ title = 'Guests', items }: EventGuestsProps) => {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <h2 className="mb-8 text-center text-2xl font-semibold text-gray-900">
        {title}
      </h2>
      <hr
        className="mx-auto -mt-4 mb-8 h-px w-36 border-0 bg-purple-200"
        aria-hidden="true"
      />
      <div className="grid gap-8">
        {items.map((guest, idx) => (
          <GuestCard key={idx} guest={guest} />
        ))}
      </div>
    </section>
  );
};

// Event Action Button Component
type EventActionButtonProps = {
  body: string | JSX.Element;
  buttonLabel: string;
  actionUrl: string;
  icon?: 'download' | 'link' | 'external';
};

export const EventActionButton = ({
  body,
  buttonLabel,
  actionUrl,
  icon = 'download',
}: EventActionButtonProps) => {
  const getIcon = () => {
    switch (icon) {
      case 'download':
        return (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        );
      case 'link':
        return (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
          />
        );
      case 'external':
        return (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        );
      default:
        return (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        );
    }
  };

  return (
    <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="text-center">
        <div className="mb-6 text-gray-700">{body}</div>
        <a
          href={actionUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-lg bg-violet-600 px-6 py-3 text-base font-medium text-white shadow-sm transition hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
        >
          <svg
            className="-ml-1 mr-2 h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {getIcon()}
          </svg>
          {buttonLabel}
        </a>
      </div>
    </section>
  );
};

// Strike Information Banner Component
type StrikeInfoBannerProps = {
  title: string;
  content: JSX.Element;
};

export const StrikeInfoBanner = ({ title, content }: StrikeInfoBannerProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      {/* Banner */}
      <div
        className="cursor-pointer bg-green-600 text-white transition-colors hover:bg-green-700"
        onClick={() => setIsOpen(true)}
      >
        <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <span className="text-sm font-medium sm:text-base">{title}</span>
            <svg
              className="ml-2 h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal Content */}
          <div className="relative mx-4 w-full max-w-2xl rounded-lg bg-white shadow-xl">
            <div className="border-b border-gray-200 px-6 py-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 transition-colors hover:text-gray-600"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="max-h-96 overflow-y-auto px-6 py-4">{content}</div>
          </div>
        </div>
      )}
    </>
  );
};
