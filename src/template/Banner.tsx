import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';
import { SocialLinks } from '../utils/SocialLinks';

const Banner = () => (
  <Background color="bg-gray-200">
    <Section>
      <CTABanner
        title="Venez nous rejoindre sur le serveur Discord !"
        subtitle="Actualités, discussions, projets, événements, et bien plus encore !"
        button={
          <Link href={SocialLinks.discord} target="_blank" rel="noreferrer">
            <Button>Joindre</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Banner };
