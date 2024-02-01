import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { TestimonialCard } from '../members/MemberCard';

const Members = () => (
  <Background color="bg-gray-200">
    <Section title="Membres de l'équipe" subtitle="Membres">
      <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x md:divide-gray-200 xl:grid-cols-4">
        <TestimonialCard
          image={{
            src: '/assets/images/members/simon_roy.png',
            alt: 'Simon Roy',
          }}
          author={{
            name: 'Simon Roy',
            position: 'Administrateur',
          }}
        />
        <TestimonialCard
          image={{
            src: '/assets/images/members/samuel_richard.jpg',
            alt: 'Samuel Richard',
          }}
          author={{
            name: 'Samuel Richard',
            position: 'Administrateur',
          }}
        />
        <TestimonialCard
          image={{
            src: '/assets/images/members/juliana_delgado.jpg',
            alt: 'Étudiant en génie logiciel',
          }}
          author={{
            name: 'Juliana Delgado',
            position: 'Administratrice',
          }}
        />
        <TestimonialCard
          image={{
            src: '/assets/images/members/guy-philippe_nadon.png',
            alt: '',
          }}
          author={{
            name: 'Guy-Philippe Nadon',
            position: 'Chef de projet',
          }}
        />
        <TestimonialCard
          image={{
            src: '/assets/images/members/felix_wilhelmy.jpg',
            alt: 'Felix Wilhelmy',
          }}
          author={{
            name: 'Felix Wilhelmy',
            position: 'VP Compétition',
          }}
        />
        <TestimonialCard
          image={{
            src: '/assets/images/members/charles_choupin.jpg',
            alt: 'Charles Choupin',
          }}
          author={{
            name: 'Charles Choupin',
            position: 'VP Partenaire',
          }}
        />
        <TestimonialCard
          image={{
            src: '/assets/images/members/vincent_richard.jpg',
            alt: 'Vincent Ricard',
          }}
          author={{
            name: 'Vincent Ricard',
            position: 'Recherchiste - QMeeting',
          }}
        />
        <TestimonialCard
          image={{
            src: '/assets/images/members/julien.jpg',
            alt: 'Julien Cardinal',
          }}
          author={{
            name: 'Julien Cardinal',
            position: 'Responsable formation',
          }}
        />
        <TestimonialCard
          image={{
            src: '/assets/images/members/samuel_montambault.jpg',
            alt: 'Samuel Montambault',
          }}
          author={{
            name: 'Samuel Montambault',
            position: 'VP com. interne',
          }}
        />
        <TestimonialCard
          image={{
            src: '/assets/images/members/jacky_fong.jpg',
            alt: 'Étudiant en génie logiciel',
          }}
          author={{
            name: 'Jacky Fong',
            position: 'Étudiant en génie logiciel',
          }}
        />
        <TestimonialCard
          image={{
            src: '/assets/images/members/catarina.png',
            alt: 'Catarina Castro',
          }}
          author={{
            name: 'Catarina Castro',
            position: 'Étudiante en génie logiciel',
          }}
        />
        <TestimonialCard
          image={{
            src: '/assets/images/avatar2.png',
            alt: 'Random name avatar alt text 2',
          }}
          author={{
            name: 'Vincent Alix-Joly',
            position: 'Étudiant en génie logiciel',
          }}
        />
        <TestimonialCard
          image={{
            src: '/assets/images/avatar2.png',
            alt: 'Random name avatar alt text 2',
          }}
          author={{
            name: 'Wylliam Cantin-Charawi',
            position: 'Étudiant en génie logiciel',
          }}
        />
        <TestimonialCard
          image={{
            src: '/assets/images/avatar3.png',
            alt: 'Étudiant en génie logiciel',
          }}
          author={{
            name: 'Sean Malo-Lanthier',
            position: 'Étudiant en génie logiciel',
          }}
        />
      </div>
    </Section>
  </Background>
);

export { Members };
