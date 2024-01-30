import { Section } from '../layout/Section';
import { PricingCard } from '../pricing/PricingCard';
import { PricingFeature } from '../pricing/PricingFeature';

const Pricing = () => (
  <Section title="Plans partenariats" subtitle="Partenariat">
    <div className="grid grid-cols-1 gap-3 md:grid-cols-1">
      <div className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <PricingCard
            name="Photon"
            price=">500$"
            periodicity="ans"
            description=""
            button={undefined}
          >
            <PricingFeature text="Logo sur le site Internet (Petit)" />
            <PricingFeature text="Partage de contenu du partenaire sur les réseaux sociaux du club (1 fois)" />
            <PricingFeature text="Remerciement lors de d'évènements (LinkedIn)" />
          </PricingCard>
          <PricingCard
            name="Electron"
            price=">1000$"
            periodicity="ans"
            description=""
            button={undefined}
          >
            <PricingFeature text="Inclut tout le contenu Photon" />
            <PricingFeature text="Logo sur T-shirt de compétition (Petit)" />
            <PricingFeature text="Logo dans les présentations d'atelier" />
          </PricingCard>
          <PricingCard
            name="Proton"
            price=">2000$"
            periodicity="ans"
            description=""
            button={undefined}
          >
            <PricingFeature text="Inclut tout le contenu Electron" />
            <PricingFeature text="Logo sur le site Internet (Grand)" />
            <PricingFeature text="Logo sur la page d'accueil du site Internet" />
            <PricingFeature text="Rencontre de l'équipe (Virtuelle ou en personne)" />
            <PricingFeature text="Mention dans les ateliers" />
            <PricingFeature text="Description sur le site internet" />
          </PricingCard>
          <PricingCard
            name="Neutron"
            price=">4000$"
            periodicity="ans"
            description=""
            button={undefined}
          >
            <PricingFeature text="Inclut tout le contenu Proton" />
            <PricingFeature text="Logo sur T-shirt de compétition (Grand)" />
            <PricingFeature text="Partage de contenu du partenaire sur les réseaux sociaux du club (2 fois)" />
            <PricingFeature text="Distribution de matériel promotionel" />
            <PricingFeature text="Évènement corporatif*" />
          </PricingCard>
        </div>
        <div className="flex flex-col items-center justify-center">
          <a className="mt-8 inline-flex items-center justify-center text-base font-medium sm:w-auto sm:text-sm">
            {' '}
            *Nous consulter afin de déterminer les détails de l&apos;évènement.
            Possible combinaison avec un atelier de Quantum ÉTS.
          </a>
        </div>
        <div className="m-5 flex flex-col items-center justify-center">
          <a
            href="https://quantumets.etsmtl.ca/assets/pdf/Quantum-plan-partenariat_v1.pdf"
            className="mt-8 inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Plan de partenariat
          </a>
        </div>
      </div>
    </div>
  </Section>
);

export { Pricing };
