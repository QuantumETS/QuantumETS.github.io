import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { ProjetRow } from '../projet/ProjetRow';

const Projets = () => (
  <Background color="bg-gray-200">
    <Section>
      <ProjetRow
        title="Synthétiseur"
        image={{
          src: '/assets/images/projet_synth.jpg',
          alt: 'QHack 2023 Logo',
        }}
        isDone={false}
        reverse={false}
      >
        <p>
          Le synthétiseur est un projet qui a pour but de créer un plugin pour
          le logiciel de synthèse musicale Ableton Live. Ce plugin permettra de
          créer des sons à l&rsquo;aide d&rsquo;un ordinateur quantique. Il est
          actuellement en développement.
        </p>
      </ProjetRow>
    </Section>
  </Background>
);

export { Projets };
