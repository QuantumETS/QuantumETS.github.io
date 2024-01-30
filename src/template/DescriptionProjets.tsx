import { useTranslation } from 'react-i18next';

import { FeatureElement } from '../feature/FeatureElement';
import { Section } from '../layout/Section';

const DescriptionProjets = () => {
  const { t: tProjet } = useTranslation('projet');

  return (
    <Section
      title={tProjet('descriptionProjetsTitle')}
      description={tProjet('descriptionProjetsDescription')}
    >
      <div className="grid grid-cols-1 gap-x-4 gap-y-16 sm:grid-cols-2 md:grid-cols-4">
        <FeatureElement
          title="Soutien"
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
          Soutien aux étudiants désirants faire un projet dans le domaine de
          l&rsquo;informatique quantique avec des mentors.
        </FeatureElement>
        <FeatureElement
          title="Partenaire"
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
          Résolution de problèmes concrêts avec des partenaires externes (En
          développement).
        </FeatureElement>
        <FeatureElement
          title="Variété d'outils"
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
          Utilisation de technologies variées comme Qiskit, Cirq, Q#, Pennylane,
          braket, etc.
        </FeatureElement>
        <FeatureElement
          title="Reproduction d&rsquo;articles scientifiques"
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
          Le club offre la possibilité aux étudiants de reproduire des articles
          scientifiques.
        </FeatureElement>
      </div>
    </Section>
  );
};

export { DescriptionProjets };
