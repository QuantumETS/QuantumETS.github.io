import { useTranslation } from 'next-i18next';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { ProjetRow } from '../projet/ProjetRow';

const Projets = () => {
  const { t: tProjet } = useTranslation('projet');

  return (
    <Background color="bg-gray-200">
      <Section>
        <ProjetRow
          title={tProjet('projetsOptimizationTitle')}
          image={{
            src: '/assets/images/solar_panel.jpg',
            alt: 'Solar panel',
          }}
          isDone={false}
          reverse={true}
          description={<p>{tProjet('projetsOptimizationDescription')}</p>}
          objectif={
            <ul className="list-disc">
              {(
                tProjet('projetsOptimizationObjectives', {
                  returnObjects: true,
                }) as string[]
              ).map((objective, index) => (
                <li key={index}>{objective}</li>
              ))}
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
        />
        <ProjetRow
          title={tProjet('projetsSynthesizerTitle')}
          image={{
            src: '/assets/images/projet_synth.jpg',
            alt: 'Synthesizer project',
          }}
          isDone={false}
          reverse={false}
          description={<p>{tProjet('projetsSynthesizerDescription')}</p>}
          objectif={
            <ul className="list-disc">
              {(
                tProjet('projetsSynthesizerObjectives', {
                  returnObjects: true,
                }) as string[]
              ).map((objective, index) => (
                <li key={index}>{objective}</li>
              ))}
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
        />
      </Section>
    </Background>
  );
};

export { Projets };
