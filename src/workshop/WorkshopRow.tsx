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

const WorkshopRow = (props: IVerticalFeatureRowProps) => {
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

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full sm:w-1/2 sm:px-6">
        <div className="inline-block text-sm font-bold text-primary-500">
          Atelier
        </div>
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

export { WorkshopRow };
