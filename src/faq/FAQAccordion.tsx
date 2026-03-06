import React from 'react';

export type FAQItem = {
  question: string;
  answer: React.ReactNode;
  defaultOpen?: boolean;
};

type FAQAccordionProps = {
  title?: string;
  items: FAQItem[];
};

const FAQItemRow: React.FC<{ item: FAQItem; index: number }> = ({
  item,
  index,
}) => {
  const [open, setOpen] = React.useState<boolean>(!!item.defaultOpen);
  const contentId = `faq-accordion-content-${index}`;

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

export const FAQAccordion = ({ title = 'FAQ', items }: FAQAccordionProps) => (
  <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
    <h2 className="mb-4 text-2xl font-semibold text-gray-900">{title}</h2>
    <div className="divide-y divide-gray-200 overflow-hidden rounded border border-gray-200 bg-white">
      {items.map((item, idx) => (
        <FAQItemRow key={idx} item={item} index={idx} />
      ))}
    </div>
  </section>
);

// Backwards-compatible aliases for existing event pages
export const EventFAQ = FAQAccordion;
export type EventFAQItem = FAQItem;
