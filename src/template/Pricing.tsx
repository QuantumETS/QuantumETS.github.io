import { Section } from '../layout/Section';
import { PricingCard } from '../pricing/PricingCard';
import { PricingFeature } from '../pricing/PricingFeature';
import { SocialLinks } from '../utils/SocialLinks';

const partnershipPlanUrl =
  'https://etsmtl365-my.sharepoint.com/:b:/g/personal/quantumets_etsmtl_ca/IQDNeYCW8S45TYlEZYwlbAwFAVXJR4cDzZ17ht6NJReI2PY?e=tgMZQS';

const buttonClass =
  'inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto sm:text-sm';

const Pricing = () => (
  <Section title="Plans partenariats" subtitle="Partenariat">
    <div className="grid grid-cols-1 gap-3 md:grid-cols-1">
      <div className="flex flex-col items-center justify-center">
        <div className="mb-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href={SocialLinks.email} className={buttonClass}>
            Contactez-nous
          </a>
          <a
            href={partnershipPlanUrl}
            className={buttonClass}
            target="_blank"
            rel="noopener noreferrer"
          >
            Plan détaillé
          </a>
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <PricingCard
            name="Photon"
            price=">500$"
            periodicity="ans"
            description=""
            button={undefined}
          >
            <PricingFeature text="Logo section partenaire : Petit" />
            <PricingFeature text="Remerciement sur nos réseaux sociaux : LinkedIn, Instagram, Discord" />
          </PricingCard>
          <PricingCard
            name="Électron"
            price=">1000$"
            periodicity="ans"
            description=""
            button={undefined}
          >
            <PricingFeature text="Logo section partenaire : Petit" />
            <PricingFeature text="Logo sur la page d'accueil" />
            <PricingFeature text="Logo sur T-shirt de compétition : Petit" />
            <PricingFeature text="Logo dans les diapositives d'atelier" />
            <PricingFeature text="Remerciement sur nos réseaux sociaux : LinkedIn, Instagram, Discord" />
            <PricingFeature text="Partage de contenu du partenaire sur les réseaux sociaux du club : 1 fois" />
          </PricingCard>
          <PricingCard
            name="Proton"
            price=">2000$"
            periodicity="ans"
            description=""
            button={undefined}
          >
            <PricingFeature text="Logo section partenaire : Grand" />
            <PricingFeature text="Logo sur la page d'accueil" />
            <PricingFeature text="Description section partenaire" />
            <PricingFeature text="Logo sur T-shirt de compétition : Moyen" />
            <PricingFeature text="Logo dans les diapositives d'atelier" />
            <PricingFeature text="Remerciement sur nos réseaux sociaux : LinkedIn, Instagram, Discord" />
            <PricingFeature text="Partage de contenu du partenaire sur les réseaux sociaux du club : 1 fois" />
            <PricingFeature text="Rencontre conviviale avec les membres" />
            <PricingFeature text="Bloc promotionnel dans les ateliers : 2 min" />
          </PricingCard>
          <PricingCard
            name="Atomique"
            price=">4000$"
            periodicity="ans"
            description=""
            button={undefined}
          >
            <PricingFeature text="Logo section partenaire : Grand" />
            <PricingFeature text="Logo sur la page d'accueil" />
            <PricingFeature text="Description section partenaire" />
            <PricingFeature text="Logo sur T-shirt de compétition : Grand" />
            <PricingFeature text="Logo dans les diapositives d'atelier" />
            <PricingFeature text="Remerciement sur nos réseaux sociaux : LinkedIn, Instagram, Discord" />
            <PricingFeature text="Partage de contenu du partenaire sur les réseaux sociaux du club : 2 fois" />
            <PricingFeature text="Distribution de matériel promotionnel" />
            <PricingFeature text="Rencontre conviviale avec les membres" />
            <PricingFeature text="Bloc promotionnel dans les ateliers : 5 min" />
            <PricingFeature text="Co-organisation d'un événement corporatif*" />
          </PricingCard>
        </div>
        <div className="flex flex-col items-center justify-center">
          <a className="mt-8 inline-flex items-center justify-center text-base font-medium sm:w-auto sm:text-sm">
            {' '}
            *Nous consulter afin de déterminer les détails de l&apos;événement.
            Combinaison possible avec un atelier de Quantum ÉTS.
          </a>
        </div>
      </div>
    </div>
  </Section>
);

export { Pricing };
