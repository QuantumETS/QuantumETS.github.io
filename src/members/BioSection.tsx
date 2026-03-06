import React from 'react';

export type BioItem = {
  name: string;
  subtitle?: React.ReactNode;
  body?: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
};

type BioSectionProps = {
  title?: string;
  items: BioItem[];
};

const BioCard: React.FC<{ item: BioItem }> = ({ item }) => (
  <div className="flex gap-4">
    {item.imageSrc && (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={item.imageSrc}
        alt={item.imageAlt ?? `${item.name} profile`}
        className="h-48 w-48 shrink-0 rounded-full object-cover shadow-lg"
      />
    )}
    <div className="min-w-0 flex-1">
      <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
      {item.subtitle && (
        <p className="text-m mb-2 font-medium text-purple-600">
          {item.subtitle}
        </p>
      )}
      {item.body && (
        <div className="text-m max-w-none text-gray-700">{item.body}</div>
      )}
    </div>
  </div>
);

export const BioSection = ({ title = 'Guests', items }: BioSectionProps) => (
  <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
    <h2 className="mb-8 text-center text-2xl font-semibold text-gray-900">
      {title}
    </h2>
    <hr
      className="mx-auto -mt-4 mb-8 h-px w-36 border-0 bg-purple-200"
      aria-hidden="true"
    />
    <div className="grid gap-8">
      {items.map((item, idx) => (
        <BioCard key={idx} item={item} />
      ))}
    </div>
  </section>
);

// Backwards-compatible exports for event pages
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

export const EventGuests = ({ title, items }: EventGuestsProps) => (
  <BioSection
    title={title}
    items={items.map((g) => ({
      name: g.guestName,
      subtitle: g.guestTalk,
      body: g.body,
      imageSrc: g.imageSrc,
    }))}
  />
);
