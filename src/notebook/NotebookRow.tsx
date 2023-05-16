import className from 'classnames';
import type { ReactNode } from 'react';

type IVerticalFeatureRowProps = {
  title: string;
  description: ReactNode;
  link: string;
};

const NotebookRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    'vertical-feature',
    'first:mt-0',
    'mt-16',
    'flex',
    'flex-wrap',
    'items-center'
  );

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full sm:px-6">
        <h3 className="block text-3xl font-semibold text-gray-900">
          {props.title}
        </h3>

        <div className="text-justify text-xl leading-9">
          {props.description}
        </div>
        {props.link && (
          <div className="w-full p-5">
            <button
              className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
              // eslint-disable-next-line no-return-assign
              onClick={() => window.open(props.link, '_blank')}
            >
              Aller au notebook
            </button>
          </div>
        )}
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

export { NotebookRow };
