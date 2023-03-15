import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const Projets = () => (
  <Background color="bg-gray-200">
    <Section>
      <VerticalFeatureRow
        title="Synthétiseur"
        image={{
          src: '/assets/images/QHack_2023_logo.png',
          alt: 'QHack 2023 Logo',
        }}
        isDone={false}
        action={
          <Link target="_blank" href="https://qhack.ai/">
            <Button>Synthétiseur</Button>
          </Link>
        }
        reverse={true}
      >
        <p>
          Participation à QHack 2023, un hack-a-thon de 1 semaine où plusieurs
          problèmes quantique étaient présentés.
        </p>
        <p>
          3 équipes qui ont terminés respectivement{' '}
          <b>
            25<sup>e</sup>, 137<sup>e</sup> et 176<sup>e</sup> position
          </b>{' '}
          sur plus de 726 équipes inscrites! 🎉
        </p>
      </VerticalFeatureRow>
    </Section>
  </Background>
);

export { Projets };
