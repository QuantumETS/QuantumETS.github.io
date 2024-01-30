import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const Events = () => {
  const { t } = useTranslation('common');

  return (
    <Background color="bg-gray-200">
      <Section>
        <VerticalFeatureRow
          title={t('eventsQHackTitle')}
          image={{
            src: '/assets/images/QHack_2023_logo.png',
            alt: t('eventsQHackTitle'),
          }}
          isDone={true}
          action={
            <Link target="_blank" href="https://qhack.ai/">
              <Button>{t('eventsQHackTitle')}</Button>
            </Link>
          }
          reverse={true}
        >
          <p>{t('eventsQHackDescription1')}</p>
          <p>{t('eventsQHackDescription2')}</p>
        </VerticalFeatureRow>
        <VerticalFeatureRow
          title={t('eventsBigQuantumTitle')}
          image={{
            src: '/assets/images/big_quantum_hackathon.png',
            alt: t('eventsBigQuantumTitle'),
          }}
          isDone={true}
          action={
            <Link
              target="_blank"
              href="https://quebec-quantique.ca/en/bighackathon/"
            >
              <Button>{t('eventsBigQuantumTitle')}</Button>
            </Link>
          }
        >
          <p>{t('eventsBigQuantumDescription1')}</p>
          <p>{t('eventsBigQuantumDescription2')}</p>
        </VerticalFeatureRow>
      </Section>
    </Background>
  );
};

export { Events };
