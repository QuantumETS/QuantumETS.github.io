import className from 'classnames';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { useState } from 'react';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const navClass = className(
    'w-full',
    'sm:w-auto',
    'sm:block',
    'mt-2',
    'sm:mt-0',
    {
      hidden: !showMenu,
    }
  );

  return (
    <div className="flex flex-wrap items-center justify-between">
      <div>
        <Link href="/">{props.logo}</Link>
      </div>

      <div className="sm:hidden">
        <button
          className="rounded-md p-3 text-gray-900 hover:bg-white"
          onClick={handleShowMenu}
          type="button"
        >
          <svg
            className="h-6 w-6 stroke-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M0 0h24v24H0z" stroke="none" />
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <nav className={navClass}>
        <ul className="navbar flex flex-col rounded bg-white px-5 pt-3 pb-5 text-xl font-medium text-gray-800 sm:flex-row sm:items-center sm:bg-transparent sm:p-0">
          {props.children}
        </ul>
      </nav>

      <style jsx>
        {`
          .navbar :global(a) {
            @apply inline-block w-full;
          }

          .navbar :global(li:not(:first-child)) {
            @apply mt-3;
          }

          .navbar :global(a .btn) {
            @apply w-full;
          }

          .navbar :global(a:hover) {
            @apply text-primary-600;
          }

          @screen sm {
            /* Reset w-full rule */
            .navbar :global(a),
            .navbar :global(a .btn) {
              @apply w-auto;
            }

            .navbar :global(li:not(:first-child)) {
              @apply mt-0;
            }

            .navbar :global(li:not(:last-child)) {
              @apply mr-5;
            }
          }
        `}
      </style>
    </div>
  );
};

export { NavbarTwoColumns };
