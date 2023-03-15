import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { Section } from '../layout/Section';
import { WorkshopRow } from '../workshop/WorkshopRow';

const WorkshopList = () => (
  <Background color="bg-gray-200">
    <Section>
      <WorkshopRow
        title="Introduction à l'informatique quantique"
        image={{
          src: '/assets/images/workshop_1.jpg',
          alt: 'Equation de Schrödinger',
        }}
        isDone={true}
        action={
          <Link target="_blank" href="">
            <Button>PowerPoint</Button>
          </Link>
        }
      >
        <p>
          Cette atelier a pour but de présenter les bases de l&apos;informatique
          quantique théorique. Il est donnée une fois par session et est ouvert
          à tous les étudiants de l&apos;ÉTS. Les notions de base de la
          mécanique quantique y sont abordées comme le principe de
          superposition, l&apos;intrication, etc.
        </p>
        <p>
          Prochaine date: <b>À venir</b>
        </p>
      </WorkshopRow>
      <WorkshopRow
        title="Introduction à la programmation quantique"
        image={{
          src: '/assets/images/workshop_2.jpg',
          alt: 'Programmation',
        }}
        isDone={true}
        action={
          <Link target="_blank" href="">
            <Button>PowerPoint</Button>
          </Link>
        }
      >
        <p>
          Cette atelier a pour but de présenter les bases de la programmation
          quantique. Il est donnée une fois par session et est ouvert à tous les
          étudiants de l&apos;ÉTS. Pour cet atelier, le club utilise Qiskit et
          les ordinateurs de IBM pour permettre aux étudiants d&apos;envoyer des
          programmes quantiques sur des ordinateurs quantiques réels.
        </p>
        <p>
          Prochaine date: <b>À venir</b>
        </p>
      </WorkshopRow>
    </Section>
  </Background>
);

export { WorkshopList };
