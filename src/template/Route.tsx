import { Accueil } from './pages/Accueil';
import { Contact } from './pages/Contact';
import { Notebook } from './pages/Notebook';
import { Workshop } from './pages/Workshop';

type IBaseProps = {
  page: string;
};

const Route = (props: IBaseProps) => (
  <div className="text-gray-600 antialiased">
    {props.page === 'accueil' && <Accueil />}
    {props.page === 'contact' && <Contact />}
    {props.page === 'notebook' && <Notebook />}
    {props.page === 'workshop' && <Workshop />}
  </div>
);

export { Route };
