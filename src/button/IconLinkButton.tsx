import React from 'react';

type IconLinkButtonProps = {
  href: string;
  label: string;
  icon?: 'download' | 'link' | 'external';
};

const IconPath = ({
  icon,
}: {
  icon: NonNullable<IconLinkButtonProps['icon']>;
}): JSX.Element | null => {
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
      return null;
  }
};

export const IconLinkButton = ({
  href,
  label,
  icon = 'download',
}: IconLinkButtonProps) => (
  <a
    href={href}
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
      <IconPath icon={icon} />
    </svg>
    {label}
  </a>
);
