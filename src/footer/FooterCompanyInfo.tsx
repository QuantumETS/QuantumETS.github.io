import type { ReactNode } from 'react';

type IFooterCompanyInfoProps = {
  logo: ReactNode;
  description: string;
};

const FooterCompanyInfo = (props: IFooterCompanyInfoProps) => (
  <div className="text-center md:text-left">
    <div className="flex justify-center md:justify-start">{props.logo}</div>

    <div className="mt-2 text-sm">{props.description}</div>
  </div>
);

export { FooterCompanyInfo };
