import type { ReactNode } from 'react';
import { TypeAnimation } from 'react-type-animation';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  image?: {
    src: string;
    alt: string;
  };
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center">
    <h1 className="whitespace-pre-line text-5xl font-bold leading-hero text-gray-900">
      {props.title}
    </h1>
    <div className="mt-4 mb-6 text-2xl">{props.description}</div>
    <div
      style={{
        textAlign: 'center',
        display: 'block',
        width: '100%',
      }}
    >
      <TypeAnimation
        sequence={[
          2000,
          '|01> + |10>',
          2000,
          '|00> + |11>',
          2000,
          '|01> - |10>',
          2000,
          '|00> - |11>',
        ]}
        wrapper="div"
        cursor={true}
        repeat={Infinity}
        style={{
          fontFamily: 'monospace',
          fontSize: '4em',
          position: 'absolute',
          top: '12em',
          marginLeft: '-171px', // final size of the text / 2
          left: '50%',
          textAlign: 'center',
        }}
      />
    </div>
    {props.image && (
      <img
        className="mx-auto mt-12 rounded-md"
        src={props.image.src}
        alt={props.image.alt}
      />
    )}
  </header>
);

export { HeroOneButton };
