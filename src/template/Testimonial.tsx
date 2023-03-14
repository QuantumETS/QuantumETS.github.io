import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { TestimonialCard } from '../members/MemberCard';

const Members = () => (
  <Background color="bg-gray-200">
    <Section title="Membres de l'équipe" subtitle="Membres">
      <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x md:divide-gray-200 xl:grid-cols-4">
        <TestimonialCard
          image={{
            src: '/assets/images/avatar2.png',
            alt: 'Random name avatar alt text',
          }}
          author={{
            name: 'Simon Roy',
            position: 'Capitaine du club',
          }}
        />
        <TestimonialCard
          image={{
            src: '/assets/images/avatar2.png',
            alt: 'Random name avatar alt text',
          }}
          author={{
            name: 'Samuel Richard',
            position: 'Co-capitaine du club',
          }}
        />
        <TestimonialCard
          image={{
            src: '/assets/images/members/sm.jpg',
            alt: 'SM',
          }}
          author={{
            name: 'Samuel Montambault',
            position: 'Membre du club',
          }}
        />
        <TestimonialCard
          image={{
            src: '/assets/images/avatar.png',
            alt: 'Random name avatar alt text 2',
          }}
          author={{
            name: 'Daniel Lawson',
            position: 'Lead developer of Something',
          }}
        />
        <TestimonialCard
          image={{
            src: '/assets/images/avatar.png',
            alt: 'Random name avatar alt text 2',
          }}
          author={{
            name: 'Daniel Lawson',
            position: 'Lead developer of Something',
          }}
        />
        <TestimonialCard
          image={{
            src: '/assets/images/avatar3.png',
            alt: 'Random name avatar alt text 2',
          }}
          author={{
            name: 'Daniel Lawson',
            position: 'Lead developer of Something',
          }}
        />
        <TestimonialCard
          image={{
            src: '/assets/images/avatar3.png',
            alt: 'Random name avatar alt text 2',
          }}
          author={{
            name: 'Daniel Lawson',
            position: 'Lead developer of Something',
          }}
        />
        <TestimonialCard
          image={{
            src: '/assets/images/avatar3.png',
            alt: 'Random name avatar alt text 2',
          }}
          author={{
            name: 'Daniel Lawson',
            position: 'Lead developer of Something',
          }}
        />
        <TestimonialCard
          image={{
            src: '/assets/images/avatar3.png',
            alt: 'Random name avatar alt text 2',
          }}
          author={{
            name: 'Daniel Lawson',
            position: 'Lead developer of Something',
          }}
        />
      </div>
    </Section>
  </Background>
);

export { Members };
