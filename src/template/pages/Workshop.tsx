import { Meta } from '../../layout/Meta';
import { AppConfig } from '../../utils/AppConfig';
import { Footer } from '../Footer';
import { Navbar } from '../Navbar';
import { WorkshopList } from '../WorkshopList';

const Workshop = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Navbar selectedTitle="Atelier" />
    <WorkshopList />
    <Footer />
  </div>
);

export { Workshop };
