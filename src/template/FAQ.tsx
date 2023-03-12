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
      <QuestionAnswer question="Je suis un partenaire potentiel comment puis-je vous faire part de mes ">
        <p>
          Etiam malesuada massa id sapien eleifend congue. Curabitur tempus urna
          molestie lacus dictum faucibus.
        </p>
        <p>
          Fusce sed nunc ultrices, sollicitudin dui eu, laoreet lacus. Nullam
          mollis nisi ac turpis maximus, posuere viverra lectus tristique.
          Checkout <Link href="/">this example</Link>.
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
