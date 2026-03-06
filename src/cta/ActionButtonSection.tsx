import React from 'react';

import { IconLinkButton } from '../button/IconLinkButton';

type ActionButtonSectionProps = {
  body: React.ReactNode;
  buttonLabel: string;
  actionUrl: string;
  icon?: 'download' | 'link' | 'external';
};

export const ActionButtonSection = ({
  body,
  buttonLabel,
  actionUrl,
  icon = 'download',
}: ActionButtonSectionProps) => (
  <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
    <div className="text-center">
      <div className="mb-6 text-gray-700">{body}</div>
      <IconLinkButton href={actionUrl} label={buttonLabel} icon={icon} />
    </div>
  </section>
);
