import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';
import { Documentation } from './pages/Documentation';
import { Home } from './pages/Home';

type IBaseProps = {
  page: string;
};

const Route = (props: IBaseProps) => (
  <div className="text-gray-600 antialiased">
    {props.page === 'accueil' && <Home />}
    {props.page === 'contact' && <Contact />}
    {props.page === 'projet' && <Blog />}
    {props.page === 'workshop' && <Documentation />}
  </div>
);

export { Route };
