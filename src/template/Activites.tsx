import { FeatureElement } from '../feature/FeatureElement';
import { Section } from '../layout/Section';

const Activites = () => (
  <Section
    title="Club QuantumETS"
    subtitle="Activités"
    description="Activités auxquelles les membres de QuantumETS participent approfondir leurs connaissances sur l'informatique quantique."
  >
    <div className="grid grid-cols-1 gap-x-4 gap-y-16 sm:grid-cols-2 md:grid-cols-3">
      <FeatureElement
        title="Hack-a-thon"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M0 0h24v24H0z" stroke="none" />
            <path d="M21 12h-4l-3 8-4-16-3 8H3" />
          </svg>
        }
      >
        Compétition de programmation quantique où les participants doivent
        résoudre des problèmes en utilisant des algorithmes quantiques. Souvent
        le temps de résolution et l&apos;originalité du code sont des critères
        de jugement.
      </FeatureElement>
      <FeatureElement
        title="Technologies"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M0 0h24v24H0z" stroke="none" />
            <path d="M12 12v.01M19.071 4.929a4 10 45 00-9.9 4.243 4 10 45 00-4.242 9.9 4 10 45 009.9-4.244 4 10 45 004.242-9.9" />
            <path d="M4.929 4.929a10 4 45 004.243 9.9 10 4 45 009.9 4.242 10 4 45 00-4.244-9.9 10 4 45 00-9.9-4.242" />
          </svg>
        }
      >
        Exploration des technologies de pointe en lien avec le développement de
        systèmes quantiques (Pennylane, Qiskit, IBM Composer, etc.)
      </FeatureElement>
      <FeatureElement
        title="Rencontres"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M0 0h24v24H0z" stroke="none" />
            <path d="M3 17l6-6 4 4 8-8" />
            <path d="M14 7h7v7" />
          </svg>
        }
      >
        Un environnement ouvert pour partager ses connaissances et en apprendre
        plus sur la programmation quantique.
      </FeatureElement>
    </div>
  </Section>
);

export { Activites };
