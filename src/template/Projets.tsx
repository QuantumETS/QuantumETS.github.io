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
          Nous sommes présentement dans le processus de développement d’un
          plug-in audio qui fonctionne avec des DAWs comme Reaper et Ableton
          Live. Ce plug-in sera capable d’appliquer des effets audio, créer des
          tables d’ondes ainsi que synthétiser du son directement à partir d’un
          ordinateur quantique. Les buts de ce projet sont :
        </p>
        <ul className="list-disc">
          <li>
            en apprendre davantage sur le traitement de signaux avec les
            ordinateurs quantiques
          </li>
          <li>
            créer une application utilisable par tout le monde qui utilise un
            ordinateur quantique
          </li>
          <li>
            consolider plusieurs papiers de recherche sous un même projet en
            créant des opérateurs pour la synthèse sonore soustractive
          </li>
          <li>
            potentiellement découvrir une méthode alternative de synthèse sonore
            qui pourrait être utile pour créer certains types de son
            difficilement faisable par synthèse par table d’ondes
          </li>
          <li>
            exploiter les propriétés particulières aux ordinateurs quantiques et
            explorer l’avantage quantique dans ce domaine
          </li>
          <li>
            ouvrir la porte à un projet pour faire un haut-parleur quantique??
          </li>
        </ul>
      </ProjetRow>
    </Section>
  </Background>
);

export { Projets };
