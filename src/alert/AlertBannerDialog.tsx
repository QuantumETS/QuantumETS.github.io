import className from 'classnames';
import React from 'react';

export type AlertBannerDialogProps = {
  title: string;
  content: React.ReactNode;
  bannerClassName?: string;
};

export const AlertBannerDialog = ({
  title,
  content,
  bannerClassName,
}: AlertBannerDialogProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      {/* Banner */}
      <div
        className={className(
          'cursor-pointer bg-green-600 text-white transition-colors hover:bg-green-700',
          bannerClassName
        )}
        onClick={() => setIsOpen(true)}
      >
        <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <span className="text-sm font-medium sm:text-base">{title}</span>
            <svg
              className="ml-2 h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Dialog */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          />

          {/* Dialog Content */}
          <div className="relative mx-4 w-full max-w-2xl rounded-lg bg-white shadow-xl">
            <div className="border-b border-gray-200 px-6 py-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 transition-colors hover:text-gray-600"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="max-h-96 overflow-y-auto px-6 py-4">{content}</div>
          </div>
        </div>
      )}
    </>
  );
};
