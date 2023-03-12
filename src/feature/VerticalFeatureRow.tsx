import className from 'classnames';
import type { ReactNode } from 'react';

type IVerticalFeatureRowProps = {
  title: string;
  children: ReactNode;
  image: {
    src: string;
    alt: string;
  };
  isDone: boolean;
  reverse?: boolean;
  action?: ReactNode;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
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

  const badgeName = props.isDone ? 'Terminé' : 'À venir';

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full sm:w-1/2 sm:px-6">
        <div className="inline-block text-sm font-bold text-primary-500">
          Évènements
        </div>
        <span className={badgeClass}>{badgeName}</span>
        <h3 className="block text-3xl font-semibold text-gray-900">
          {props.title}
        </h3>
        <div className="mt-3 text-xl leading-9">{props.children}</div>
        {props.action && <div className="mt-4">{props.action}</div>}
      </div>

      <div className="w-full p-6 sm:w-1/2">
        <img src={props.image.src} alt={props.image.alt} />
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

export { VerticalFeatureRow };
