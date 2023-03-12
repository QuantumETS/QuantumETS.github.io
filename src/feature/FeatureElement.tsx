import type { ReactNode } from 'react';

type IFeatureElementProps = {
  title: string;
  icon: ReactNode;
  children: ReactNode;
};

const FeatureElement = (props: IFeatureElementProps) => (
  <div className="feature-element flex flex-col">
    <div className="mx-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gray-300 bg-gray-100">
      {props.icon}
    </div>

    <div className="mt-2 text-center">
      <div className="text-2xl font-semibold text-gray-900">{props.title}</div>
      <div className="mt-2 text-lg leading-8">{props.children}</div>
    </div>

    <style jsx>
      {`
        .feature-element :global(svg) {
          @apply text-primary-400 stroke-current w-6 h-6 stroke-2;
        }
      `}
    </style>
  </div>
);

export { FeatureElement };
