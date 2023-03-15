import { QuestionAnswer } from '../faq/QuestionAnswer';
import { Section } from '../layout/Section';

const FAQ = () => (
  <Section
    title="Vous avez des questions?"
    subtitle="FAQ"
    description="Quelques questions/réponses fréquentes concernant le club QuantumETS. Si vous avez d'autres interrogations veuillez communiquez avec l'équipe (voir la page &quot;Contact&quot;)."
  >
    <div className="flex flex-col">
      <QuestionAnswer question="Je suis un partenaire potentiel comment puis-je vous soutenir?">
        <p>
          En tant que partenaire potentiel, vous pouvez soutenir le club
          QuantumETS de plusieurs manières, notamment :
        </p>
        <div className="ml-8">
          <ol className="list-disc">
            <li>
              En offrant un soutien financier : Les dons et les parrainages nous
              permettent d&rsquo;acheter de l&rsquo;équipement,
              d&rsquo;organiser des événements et de financer des projets.
            </li>
            <li>
              En offrant des opportunités de stage ou d&rsquo;emploi : Si votre
              entreprise travaille dans le domaine quantique ou a des projets
              liés à ce domaine, vous pouvez offrir des opportunités de stage ou
              d&rsquo;emploi à nos membres.
            </li>
            <li>
              En partageant vos connaissances : Si vous travaillez dans le
              domaine quantique, vous pouvez partager votre expertise avec nos
              membres en offrant des présentations ou en animant des ateliers.
            </li>
            <li>
              En offrant des services pro bono : Si votre entreprise offre des
              services qui pourraient être utiles pour notre club, tels que la
              conception graphique ou la traduction, vous pouvez offrir vos
              services gratuitement.
            </li>
          </ol>
        </div>
        <p>
          Si vous êtes intéressé par l&rsquo;un de ces moyens de soutenir notre
          club, veuillez nous contacter (voir la page &quot;Contact&quot;).
        </p>
      </QuestionAnswer>
      <QuestionAnswer question="Qui peut rejoindre QuantumETS?">
        <p>
          Tous les étudiants de l&rsquo;École de technologie supérieure (ETS)
          qui sont intéressés par l&rsquo;informatique quantique peuvent
          rejoindre QuantumETS. Les membres du club proviennent de différentes
          facultés et programmes, ce qui crée un environnement diversifié et
          stimulant pour tous les membres.
        </p>
      </QuestionAnswer>
      <QuestionAnswer question="Ai-je besoin de connaissances préalables en informatique quantique pour rejoindre QuantumETS?">
        <p>
          Non, QuantumETS accueille tous les niveaux de compétences et de
          connaissances en informatique quantique. Les membres du club ont des
          antécédents académiques et professionnels différents et sont tous
          motivés à apprendre et à se développer dans le domaine de
          l&rsquo;informatique quantique.
        </p>
      </QuestionAnswer>
      <QuestionAnswer question="Quel est l'engagement de temps attendu pour les membres de QuantumETS?">
        <p>
          QuantumETS encourage la participation active de ses membres, mais
          l&rsquo;engagement de temps varie en fonction des intérêts et des
          horaires de chaque membre. Les rencontres du club ont lieu deux fois
          par mois pour présenter l&rsquo;actualité quantique, les opportunités
          de compétitions et différentes technologies, l&rsquo;avancement des
          projets. En période de compétition, les membres participants se
          rencontre une fois par semaine. En plus de cela, le club encourage ses
          membres à participer à des événements externes comme la visite
          d&rsquo;un ordinateur quantique. Les membres peuvent choisir leur
          niveau d&rsquo;implication en fonction de leur emploi du temps et de
          leurs intérêts personnels.
        </p>
      </QuestionAnswer>
    </div>
  </Section>
);

export { FAQ };
