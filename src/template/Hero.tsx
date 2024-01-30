import { useTranslation } from 'next-i18next';

import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';

const Hero = () => {
  const { t } = useTranslation('common');

  return (
    <Background color="bg-gray-200">
      <Section yPadding="pt-20 pb-3">
        <HeroOneButton
          title={<span className="text-primary-500">{t('heroTitle')}</span>}
          description={t('heroDescription')}
          image={{
            src: '/assets/images/hero-image.png',
            alt: 'Hero screenshot',
          }}
        />
      </Section>
    </Background>
  );
};

export { Hero };
