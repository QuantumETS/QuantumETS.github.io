import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { TestimonialCard } from '../members/MemberCard';

const Members = () => (
  <Background color="bg-gray-200">
    <Section title="Exécutif de Quantum ÉTS">
      <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x md:divide-gray-200 xl:grid-cols-3">
        <TestimonialCard
          image={{
            src: '/assets/images/members/samuel_richard.jpg',
            alt: 'Samuel Richard',
          }}
          author={{
            name: 'Samuel Richard',
            position: 'Président & Fondateur',
          }}
        />
        <TestimonialCard
          image={{
            src: '/assets/images/members/felix_wilhelmy.jpg',
            alt: 'Felix Wilhelmy',
          }}
          author={{
            name: 'Felix Wilhelmy',
            position: 'Vice-Président',
          }}
        />
        <TestimonialCard
          image={{
            src: '/assets/images/members/victor_rochon.png',
            alt: 'Victor Rochon',
          }}
          author={{
            name: 'Victor Rochon',
            position: 'Trésorier',
          }}
        />
        <TestimonialCard
          image={{
            src: '/assets/images/members/mohammad_el_mir.jpg',
            alt: 'Mohammad El Mir',
          }}
          author={{
            name: 'Mohammad El Mir',
            position: 'VP Communications',
          }}
        />
        <TestimonialCard
          image={{
            src: '/assets/images/members/julien.jpg',
            alt: 'Julien Cardinal',
          }}
          author={{
            name: 'Julien Cardinal',
            position: 'Soutien administratif',
          }}
        />
        <TestimonialCard
          image={{
            src: '/assets/images/members/guy-philippe_nadon.png',
            alt: 'Guy-Philippe Nadon',
          }}
          author={{
            name: 'Guy-Philippe Nadon',
            position: 'Soutien administratif',
          }}
        />
        <TestimonialCard
          image={{
            src: '/assets/images/members/gabriel_lemay.png',
            alt: 'Gabriel Lemay',
          }}
          author={{
            name: 'Gabriel Lemay',
            position: 'Soutien administratif',
          }}
        />
        <TestimonialCard
          image={{
            src: '/assets/images/members/charles_choupin.jpg',
            alt: 'Charles Choupin',
          }}
          author={{
            name: 'Charles Choupin',
            position: 'Soutien administratif',
          }}
        />
        <TestimonialCard
          image={{
            src: 'avatar2',
            alt: 'Felix-Antoine Lavallée',
          }}
          author={{
            name: 'Felix-Antoine Lavallée',
            position: 'Soutien administratif',
          }}
        />
        <TestimonialCard
          image={{
            src: 'avatar3',
            alt: 'Fadi Younes',
          }}
          author={{
            name: 'Fadi Younes',
            position: 'Soutien administratif',
          }}
        />
      </div>
    </Section>
  </Background>
);

export { Members };
