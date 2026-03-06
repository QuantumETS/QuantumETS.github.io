import React from 'react';

export type TextSectionProps = {
  header: string;
  headerColor?: string; // tailwind color e.g., text-purple-500
  body: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: 'left' | 'right';
};

export const TextSection = ({
  header,
  headerColor = '',
  body,
  imageSrc,
  imageAlt = 'Illustration',
  imagePosition = 'left',
}: TextSectionProps) => (
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
          <h2 className={`mb-3 text-2xl font-semibold ${headerColor}`}>
            {header}
          </h2>
          <div className="prose max-w-none text-gray-700">{body}</div>
        </div>
      </div>
    ) : (
      <>
        <h2 className={`mb-3 text-2xl font-semibold ${headerColor}`}>
          {header}
        </h2>
        <div className="prose max-w-none text-gray-700">{body}</div>
      </>
    )}
  </section>
);

// Backwards-compatible alias for existing event pages
export const EventText = (
  props: Omit<TextSectionProps, 'headerColor'> & { header_color?: string }
) => {
  const { header_color: headerColorLegacy, ...rest } = props;
  return <TextSection {...rest} headerColor={headerColorLegacy} />;
};
