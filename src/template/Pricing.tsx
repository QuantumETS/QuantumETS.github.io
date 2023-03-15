import { Section } from '../layout/Section';
import { PricingCard } from '../pricing/PricingCard';
import { PricingFeature } from '../pricing/PricingFeature';

const Pricing = () => (
  <Section title="Plans partenariats" subtitle="Partenariat">
    <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
      <PricingCard
        name="Bronze"
        price="$250-499"
        periodicity="ans"
        description=""
        button={undefined}
      >
        <PricingFeature text="Logo de taille petite sur le site web" />
        <PricingFeature text="Lien vers l&rsquo;entreprise" />
      </PricingCard>
      <PricingCard
        name="Argent"
        price="$500-999"
        periodicity="ans"
        description=""
        button={undefined}
      >
        <PricingFeature text="Logo de taille moyenne sur le site web" />
        <PricingFeature text="Description de l&rsquo;entreprise" />
        <PricingFeature text="Lien vers l&rsquo;entreprise" />
        <PricingFeature text="Évènement corporatif" />
      </PricingCard>
      <PricingCard
        name="Or"
        price=">1000$"
        periodicity="ans"
        description=""
        button={undefined}
      >
        <PricingFeature text="Logo de grande taille sur le site web" />
        <PricingFeature text="Description de l&rsquo;entreprise" />
        <PricingFeature text="Lien vers l&rsquo;entreprise" />
        <PricingFeature text="Évènement corporatif" />
        <PricingFeature text="Logo sur les t-shirts de compétition" />
        <PricingFeature text="Promotion de l&rsquo;entreprise dans le serveur Discord" />
      </PricingCard>
    </div>
  </Section>
);

export { Pricing };
