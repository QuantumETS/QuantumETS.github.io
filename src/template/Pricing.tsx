import { useTranslation } from 'next-i18next';

import { Section } from '../layout/Section';
import { PricingCard } from '../pricing/PricingCard';
import { PricingFeature } from '../pricing/PricingFeature';

const Pricing = () => {
  const { t } = useTranslation('common');

  return (
    <Section title={t('pricingTitle')} subtitle={t('pricingSubtitle')}>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-1">
        <div className="flex flex-col items-center justify-center">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {/* Photon Plan */}
            <PricingCard
              name={t('pricingPhotonName')}
              price={t('pricingPhotonPrice')}
              periodicity={t('pricingPhotonPeriodicity')}
              description=""
              button={undefined}
            >
              {(
                t('pricingPhotonFeatures', { returnObjects: true }) as string[]
              ).map((feature, index) => (
                <PricingFeature key={index} text={feature} />
              ))}
            </PricingCard>

            {/* Electron Plan */}
            <PricingCard
              name={t('pricingElectronName')}
              price={t('pricingElectronPrice')}
              periodicity={t('pricingElectronPeriodicity')}
              description=""
              button={undefined}
            >
              {(
                t('pricingElectronFeatures', {
                  returnObjects: true,
                }) as string[]
              ).map((feature, index) => (
                <PricingFeature key={index} text={feature} />
              ))}
            </PricingCard>

            {/* Proton Plan */}
            <PricingCard
              name={t('pricingProtonName')}
              price={t('pricingProtonPrice')}
              periodicity={t('pricingProtonPeriodicity')}
              description=""
              button={undefined}
            >
              {(
                t('pricingProtonFeatures', { returnObjects: true }) as string[]
              ).map((feature, index) => (
                <PricingFeature key={index} text={feature} />
              ))}
            </PricingCard>

            {/* Neutron Plan */}
            <PricingCard
              name={t('pricingNeutronName')}
              price={t('pricingNeutronPrice')}
              periodicity={t('pricingNeutronPeriodicity')}
              description=""
              button={undefined}
            >
              {(
                t('pricingNeutronFeatures', { returnObjects: true }) as string[]
              ).map((feature, index) => (
                <PricingFeature key={index} text={feature} />
              ))}
            </PricingCard>
          </div>

          <div className="flex flex-col items-center justify-center">
            <a className="mt-8 inline-flex items-center justify-center text-base font-medium sm:w-auto sm:text-sm">
              {t('pricingNote')}
            </a>
          </div>

          <div className="m-5 flex flex-col items-center justify-center">
            <a
              href="https://quantumets.etsmtl.ca/assets/pdf/Quantum-plan-partenariat_v1.pdf"
              className="mt-8 inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              {t('pricingPlanButton')}
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export { Pricing };
