import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Background color="bg-gray-200">
    <Section>
      <VerticalFeatureRow
        title="QHack2023"
        image={{
          src: '/assets/images/QHack_2023_logo.png',
          alt: 'QHack 2023 Logo',
        }}
        isDone={true}
        action={
          <Link target="_blank" href="https://qhack.ai/">
            <Button>QHack 2023</Button>
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
      <VerticalFeatureRow
        title="QHack2023"
        image={{
          src: '/assets/images/big_quantum_hackathon.png',
          alt: 'QHack 2023 Logo',
        }}
        isDone={true}
        action={
          <Link
            target="_blank"
            href="https://quebec-quantique.ca/en/bighackathon/"
          >
            <Button>Big Quantum Hackathon 2022</Button>
          </Link>
        }
      >
        <p>
          Participation au Big Quantum Hackathon 2022, un concours d
          informatique quantique aliant technologie et affaire.
        </p>
        <p>
          Des étudiants de l ÉTS on pu terminer parmis les trois premières
          équipes.
        </p>
      </VerticalFeatureRow>
    </Section>
  </Background>
);

export { VerticalFeatures };
