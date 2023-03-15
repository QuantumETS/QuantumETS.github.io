import { Accueil } from './pages/Accueil';
import { Contact } from './pages/Contact';
import { Projet } from './pages/Projet';
import { Workshop } from './pages/Workshop';

type IBaseProps = {
  page: string;
};

const Route = (props: IBaseProps) => (
  <div className="text-gray-600 antialiased">
    {props.page === 'accueil' && <Accueil />}
    {props.page === 'contact' && <Contact />}
    {props.page === 'projet' && <Projet />}
    {props.page === 'workshop' && <Workshop />}
  </div>
);

export { Route };
