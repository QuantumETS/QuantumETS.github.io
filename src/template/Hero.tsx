import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';

const Hero = () => (
  <Background color="bg-gray-200">
    <Section yPadding="pt-20 pb-3">
      <HeroOneButton
        title={
          <>
            <span className="text-primary-500">QuantumETS</span>
            {/* TODO: change this title for an image
             <img
              className="inline-block h-40 w-auto"
              src="/assets/images/LogoBanner.svg"
              alt="Logo"
            /> */}
          </>
        }
        description="Un club scientifique pour promouvoir l'apprentissage de la programmation d'ordinateur quantique."
        image={{
          src: '/assets/images/hero-image.png',
          alt: 'Hero screenshot',
        }}
      />
    </Section>
  </Background>
);

export { Hero };
