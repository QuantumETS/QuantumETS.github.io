import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { TestimonialCard } from '../members/MemberCard';

const Members = () => (
  <Background color="bg-gray-200">
    <Section title="Membres de l'équipe" subtitle="Membres">
      <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x md:divide-gray-200 xl:grid-cols-4">
        <TestimonialCard
          image={{
            src: '/assets/images/members/felix_wilhelmy.jpg',
            alt: 'Felix Wilhelmy',
          }}
          author={{
            name: 'Felix Wilhelmy',
            position: 'Président',
          }}
        />
        <TestimonialCard
          image={{
            src: '/assets/images/members/samuel_richard.jpg',
            alt: 'Samuel Richard',
          }}
          author={{
            name: 'Samuel Richard',
            position: 'Vice-président',
          }}
        />
        <TestimonialCard
          image={{
            src: '/assets/images/members/charles_choupin.jpg',
            alt: 'Charles Choupin',
          }}
          author={{
            name: 'Charles Choupin',
            position: 'Trésorier',
          }}
        />
        <TestimonialCard
          image={{
            src: '/assets/images/members/julien.jpg',
            alt: 'Julien Cardinal',
          }}
          author={{
            name: 'Julien Cardinal',
            position: 'VP formation',
          }}
        />
        <TestimonialCard
          image={{
            src: '/assets/images/members/guy-philippe_nadon.png',
            alt: 'Guy-Philippe Nadon',
          }}
          author={{
            name: 'Guy-Philippe Nadon',
            position: 'Administrateur',
          }}
        />
        <TestimonialCard
          image={{
            src: '/assets/images/members/gabriel_lemay.png',
            alt: 'Gabriel Lemay',
          }}
          author={{
            name: 'Gabriel Lemay',
            position: 'Administrateur',
          }}
        />
        <TestimonialCard
          image={{
            src: '/assets/images/members/simon_roy.png',
            alt: 'Simon Roy',
          }}
          author={{
            name: 'Simon Roy',
            position: 'Fondateur',
          }}
        />
        <TestimonialCard
          image={{
            src: '/assets/images/avatar2.png',
            alt: 'Antoine Lemelin',
          }}
          author={{
            name: 'Antoine Lemelin',
            position: 'Membre',
          }}
        />
        <TestimonialCard
          image={{
            src: '/assets/images/avatar2.png',
            alt: 'Félix Caron',
          }}
          author={{
            name: 'Félix Caron',
            position: 'Membre',
          }}
        />
        <TestimonialCard
          image={{
            src: '/assets/images/avatar2.png',
            alt: 'Xavier Bergeron ',
          }}
          author={{
            name: 'Xavier Bergeron',
            position: 'Membre',
          }}
        />
      </div>
    </Section>
  </Background>
);

export { Members };
