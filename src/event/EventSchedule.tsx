import React from 'react';

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
                ) : null}
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
