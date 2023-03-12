import type { ReactNode } from 'react';

type IFooterTwoRowsCopyrightProps = {
  siteName: string;
  children: ReactNode;
};

const FooterTwoRowsCopyright = (props: IFooterTwoRowsCopyrightProps) => (
  <>
    {props.children}

    <div className="mt-12 text-center text-sm text-gray-500">
      {`© Copyright ${new Date().getFullYear()} ${
        props.siteName
      }. Tout droit réservé.`}
    </div>
  </>
);

export { FooterTwoRowsCopyright };
