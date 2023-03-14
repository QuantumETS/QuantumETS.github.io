import Link from 'next/link';

import { Button } from '../button/Button';
import { Section } from '../layout/Section';
import { PricingCard } from '../pricing/PricingCard';
import { PricingFeature } from '../pricing/PricingFeature';

const Pricing = () => (
  <Section title="Plans partenariats" subtitle="Prix">
    <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
      <PricingCard
        name="Argent"
        price="$1k"
        periodicity="ans"
        description="Merci"
        button={
          <Link href="/">
            <Button full>Get Started</Button>
          </Link>
        }
      >
        <PricingFeature text="1 Team Members" />
        <PricingFeature text="1 Website" />
        <PricingFeature text="1 GB Storage" />
        <PricingFeature text="1 TB Transfer" />
        <PricingFeature text="Email Support" />
      </PricingCard>
      <PricingCard
        name="Or"
        price="$1.5k"
        periodicity="ans"
        description="Best for small teams"
        button={
          <Link href="/">
            <Button full>Get Started</Button>
          </Link>
        }
      >
        <PricingFeature text="5 Team Members" />
        <PricingFeature text="5 Website" />
        <PricingFeature text="5 GB Storage" />
        <PricingFeature text="5 TB Transfer" />
        <PricingFeature text="Email Support" />
      </PricingCard>
      <PricingCard
        name="ENTERPRISE"
        price="Personnalisé"
        periodicity=""
        description="Best for industry leader"
        button={
          <Link href="/">
            <Button full>Get Started</Button>
          </Link>
        }
      >
        <PricingFeature text="30 Team Members" />
        <PricingFeature text="30 Website" />
        <PricingFeature text="30 GB Storage" />
        <PricingFeature text="30 TB Transfer" />
        <PricingFeature text="Email Support" />
      </PricingCard>
    </div>
  </Section>
);

export { Pricing };
