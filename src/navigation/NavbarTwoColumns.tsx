import className from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import type { ReactNode } from 'react';
import { useState } from 'react';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => {
  const [showMenu, setShowMenu] = useState(false);

  const router = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onToggleLanguageClick = (newLocale: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  const changeTo = router.locale === 'en' ? 'fr' : 'en';

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

  const languageButtonClass = className('language-switch-btn', {
    'active-language': router.locale === changeTo,
  });

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
          <li>
            <button
              type="button"
              onClick={() => onToggleLanguageClick(changeTo)}
              className={languageButtonClass}
            >
              {changeTo}
            </button>
          </li>
        </ul>
      </nav>

      <style jsx>
        {`
          .language-switch-btn {
            padding: 0.5rem 1rem;
            border: 2px solid #4a5568; /* Gray border */
            color: #4a5568; /* Gray text */
            background-color: transparent;
            border-radius: 0.375rem; /* TailwindCSS rounded-md */
            font-size: 0.875rem; /* TailwindCSS text-sm */
            cursor: pointer;
            transition: all 0.2s ease-in-out;
          }

          .language-switch-btn:hover,
          .language-switch-btn.active-language {
            border-color: #2b6cb0; /* Blue border for hover and active language */
            color: #2b6cb0; /* Blue text for hover and active language */
          }
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
