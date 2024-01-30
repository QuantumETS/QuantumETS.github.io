import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => {
  const { t } = useTranslation('common');

  return (
    <Section yPadding="pb-16">
      <CTABanner
        title={t('bannerTitle')}
        subtitle={t('bannerSubtitle')}
        button={
          <Link href="https://discord.gg/uH3H5r33MA">
            <Button>{t('bannerButton')}</Button>
          </Link>
        }
      />
    </Section>
  );
};

export { Banner };
