import className from 'classnames';
import type { ReactNode } from 'react';

type IVerticalFeatureRowProps = {
  title: string;
  description: ReactNode;
  objectif: ReactNode;
  papier: ReactNode;
  image: {
    src: string;
    alt: string;
  };
  isDone: boolean;
  reverse?: boolean;
  action?: ReactNode;
};

const ProjetRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    'vertical-feature',
    'first:mt-0',
    'mt-16',
    'flex',
    'flex-wrap',
    'items-center',
    {
      'flex-row-reverse': props.reverse,
    }
  );

  const badgeClass = props.isDone
    ? className(
        'align-middle',
        'ml-2',
        'bg-green-100',
        'text-green-800',
        'text-xs',
        'font-medium',
        'px-2.5',
        'py-0.5',
        'rounded',
        'dark:bg-green-900',
        'dark:text-green-300'
      )
    : className(
        'align-middle',
        'ml-2',
        'bg-yellow-100',
        'text-yellow-800',
        'text-xs',
        'font-medium',
        'px-2.5',
        'py-0.5',
        'rounded',
        'dark:bg-yellow-900',
        'dark:text-yellow-300'
      );

  const badgeName = props.isDone ? 'Terminé' : 'En cours';

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full sm:w-1/2 sm:px-6">
        <h3 className="block text-3xl font-semibold text-gray-900">
          {props.title} <span className={badgeClass}>{badgeName}</span>
        </h3>

        <div className="mt-3 text-xl leading-9">{props.description}</div>
        <h5 className="mt-3 block font-semibold text-gray-900">
          {'Objectifs : '}
        </h5>
        <div className="ml-8">
          <div className="mt-3 leading-9">{props.objectif}</div>
        </div>
        {props.action && <div className="mt-4">{props.action}</div>}
      </div>

      <div className="w-full p-6 sm:w-1/2">
        <img src={props.image.src} alt={props.image.alt} />
        <h4 className="block text-3xl font-semibold text-gray-900">
          {'Inspirations/sources'}
        </h4>
        <div className="mt-3 leading-9">{props.papier}</div>
      </div>

      <style jsx>
        {`
          .vertical-feature :global(p) {
            @apply mt-2;
          }
        `}
      </style>
    </div>
  );
};

export { ProjetRow };
