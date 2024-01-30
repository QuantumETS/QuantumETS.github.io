import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { ProjetRow } from '../projet/ProjetRow';

const Projets = () => (
  <Background color="bg-gray-200">
    <Section>
      <ProjetRow
        title="Optimisation de consomation d'énergie"
        image={{
          src: '/assets/images/solar_panel.jpg',
          alt: 'Solar panel',
        }}
        isDone={false}
        reverse={true}
        description={
          <p>
            Le club Éclipse participe annuellement à des compétitions de
            véhicules solaires. Utilisant un algorithme pour définir la vitesse
            optimale, ce projet explore si une solution quantique pourrait
            améliorer cette méthode qui nécessite actuellement 30 minutes.
          </p>
        }
        objectif={
          <ul className="list-disc">
            <li>
              Approfondir les connaissances sur l&apos;optimisation de vitesse
              avec les ordinateurs quantiques.
            </li>
            <li>
              Développer un outil pour intégrer la simulation de la course
              solaire avec la puissance d&apos;un ordinateur quantique.
            </li>
            <li>
              Exploiter les capacités uniques des ordinateurs quantiques et
              explorer les avantages quantiques pour la course solaire.
            </li>
            <li>
              Explorer une méthode alternative quantique pour déterminer la
              vitesse optimale face aux conditions changeantes.
            </li>
          </ul>
        }
        papier={
          <div className="ml-8">
            <ul className="list-disc">
              <li>
                Optimal Quantum Control of Charging Quantum Batteries :{' '}
                <a
                  className="font-medium text-blue-600 underline hover:no-underline dark:text-blue-500"
                  href="https://arxiv.org/abs/2207.00094"
                >
                  arXiv:2301.01595
                </a>
              </li>
              <li>
                Optimization of robot trajectory planning with nature-inspired
                and hybrid quantum algorithms :{' '}
                <a
                  className="font-medium text-blue-600 underline hover:no-underline dark:text-blue-500"
                  href="https://aws.amazon.com/fr/blogs/quantum-computing/optimization-of-robot-trajectory-planning-with-nature-inspired-and-hybrid-quantum-algorithms/"
                >
                  Optimization de trajectoire de robot.
                </a>
              </li>
            </ul>
          </div>
        }
      ></ProjetRow>
      <ProjetRow
        title="Synthétiseur"
        image={{
          src: '/assets/images/projet_synth.jpg',
          alt: 'QHack 2023 Logo',
        }}
        isDone={false}
        reverse={false}
        description={
          <p>
            Nous sommes présentement dans le processus de développement d’un
            plug-in audio qui fonctionne avec des DAWs comme Reaper et Ableton
            Live. Ce plug-in sera capable d’appliquer des effets audio, créer
            des tables d’ondes ainsi que synthétiser du son directement à partir
            d’un ordinateur quantique.
          </p>
        }
        objectif={
          <ul className="list-disc">
            <li>
              Apprendre davantage sur les algorithmes de traitement de signaux
              avec les ordinateurs quantiques.
            </li>
            <li>
              Créer un outil qui permet l&apos;utilisation d&apos;un ordinateur
              quantique dans le monde de l&apos;art.
            </li>
            <li>
              Consolider plusieurs papiers de recherche sous un même projet en
              créant des opérateurs pour la synthèse sonore.
            </li>
            <li>
              Utilsation d&apos;une méthode alternative de synthèse sonore qui
              pourrait être utile pour créer certains types de son difficilement
              faisable par synthèse par table d’ondes.
            </li>
            <li>
              Exploiter les propriétés particulières aux ordinateurs quantiques
              et explorer l’avantage quantique dans ce domaine
            </li>
          </ul>
        }
        papier={
          <div className="ml-8">
            <ul className="list-disc">
              <li>
                Quantum Representations of Sound: from mechanical waves to
                quantum circuits :{' '}
                <a
                  className="font-medium text-blue-600 underline hover:no-underline dark:text-blue-500"
                  href="https://arxiv.org/abs/2301.01595"
                >
                  arXiv:2301.01595
                </a>
              </li>
              <li>
                Flexible Representation and Manipulation of Audio Signals on
                Quantum Computers :{' '}
                <a
                  className="font-medium text-blue-600 underline hover:no-underline dark:text-blue-500"
                  href="https://arxiv.org/abs/1701.01291"
                >
                  arXiv:1701.01291
                </a>
              </li>
              <li>
                Quantum Wavelet Transforms: Fast Algorithms and Complete
                Circuits :{' '}
                <a
                  className="font-medium text-blue-600 underline hover:no-underline dark:text-blue-500"
                  href="https://arxiv.org/abs/quant-ph/9809004"
                >
                  arXiv:quant-ph/9809004
                </a>
              </li>
              <li>
                Wavetable Synthesis Algorithm Explained :{' '}
                <a
                  className="font-medium text-blue-600 underline hover:no-underline dark:text-blue-500"
                  href="https://thewolfsound.com/sound-synthesis/wavetable-synthesis-algorithm/"
                >
                  thewolfsound.com
                </a>
              </li>
            </ul>
          </div>
        }
      ></ProjetRow>
    </Section>
  </Background>
);

export { Projets };
