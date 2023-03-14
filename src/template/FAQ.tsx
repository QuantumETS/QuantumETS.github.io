import Link from 'next/link';

import { QuestionAnswer } from '../faq/QuestionAnswer';
import { Section } from '../layout/Section';

const FAQ = () => (
  <Section
    title="Vous avez des questions?"
    subtitle="FAQ"
    description="Quelques questions/réponses fréquentes concernant le club QuantumETS. Si vous avez d'autres interrogations veuillez communiquez avec l'équipe par courriel au "
  >
    <div className="flex flex-col">
      <QuestionAnswer question="Je suis un partenaire potentiel comment puis-je vous soutenir?">
        <p>
          En tant que partenaire potentiel, vous pouvez soutenir le club
          QuantumETS de plusieurs manières, notamment :
        </p>
        <ul>
          <li>
            En offrant un soutien financier : Les dons et les parrainages nous
            permettent d&rsquo;acheter de l&rsquo;équipement, d&rsquo;organiser
            des événements et de financer des projets de recherche.
          </li>
          <li>
            En offrant des opportunités de stage ou d&rsquo;emploi : Si votre
            entreprise travaille dans le domaine quantique ou a des projets liés
            à ce domaine, vous pouvez offrir des opportunités de stage ou
            d&rsquo;emploi à nos membres.
          </li>
          <li>
            En partageant vos connaissances : Si vous travaillez dans le domaine
            quantique, vous pouvez partager votre expertise avec nos membres en
            offrant des présentations ou en animant des ateliers.
          </li>
          <li>
            En offrant des services pro bono : Si votre entreprise offre des
            services qui pourraient être utiles pour notre club, tels que la
            conception graphique ou la traduction, vous pouvez offrir vos
            services gratuitement.
          </li>
        </ul>
        <p>
          Si vous êtes intéressé par l&rsquo;un de ces moyens de soutenir notre
          club, veuillez nous contacter par courriel à l&rsquo;adresse suivante
          : [insérer l&rsquo;adresse courriel du club].
        </p>
      </QuestionAnswer>
      <QuestionAnswer question="Lorem ipsum dolor sit amet, consectetur adipiscing elit?">
        <p>
          Etiam malesuada massa id sapien eleifend congue. Curabitur tempus urna
          molestie lacus dictum faucibus.
        </p>
      </QuestionAnswer>
      <QuestionAnswer question="Lorem ipsum dolor sit amet, consectetur adipiscing elit?">
        <p>
          Etiam malesuada massa id sapien eleifend congue. Curabitur tempus urna
          molestie lacus dictum faucibus.
        </p>
      </QuestionAnswer>
      <QuestionAnswer question="Lorem ipsum dolor sit amet, consectetur adipiscing elit?">
        <p>
          Etiam malesuada massa id sapien eleifend congue. Curabitur tempus urna
          molestie lacus dictum faucibus. Read our{' '}
          <Link href="/">blog post</Link>.
        </p>
      </QuestionAnswer>
      <QuestionAnswer question="Lorem ipsum dolor sit amet, consectetur adipiscing elit?">
        <p>
          Etiam malesuada massa id sapien eleifend congue. Curabitur tempus urna
          molestie lacus dictum faucibus.
        </p>
      </QuestionAnswer>
    </div>
  </Section>
);

export { FAQ };
