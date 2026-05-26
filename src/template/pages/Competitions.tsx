import { Meta } from '../../layout/Meta';
import { AppConfig } from '../../utils/AppConfig';
import { Footer } from '../Footer';
import { Navbar } from '../Navbar';

const Competitions = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Navbar selectedTitle="Compétitions" />
    <Footer />
  </div>
);

export { Competitions };
