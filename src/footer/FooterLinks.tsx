import type { ReactNode } from 'react';

type IFooterLinksProps = {
  title: string;
  children: ReactNode;
};

const FooterLinks = (props: IFooterLinksProps) => (
  <div className="footer-links text-center sm:text-left">
    <div className="font-semibold text-gray-800">{props.title}</div>

    <nav className="mt-3">
      <ul>{props.children}</ul>
    </nav>

    <style jsx>
      {`
        .footer-links :global(li) {
          @apply mt-1;
        }

        .footer-links :global(li a:hover) {
          @apply text-primary-600;
        }
      `}
    </style>
  </div>
);

export { FooterLinks };
