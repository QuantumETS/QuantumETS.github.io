import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';
import { Documentation } from './pages/Documentation';
import { Home } from './pages/Home';

type IBaseProps = {
  page: string;
};

const Route = (props: IBaseProps) => (
  <div className="text-gray-600 antialiased">
    {props.page === 'home' && <Home />}
    {props.page === 'contact' && <Contact />}
    {props.page === 'blog' && <Blog />}
    {props.page === 'documentation' && <Documentation />}
  </div>
);

export { Route };
