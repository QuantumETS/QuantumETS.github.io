import React from 'react';

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
