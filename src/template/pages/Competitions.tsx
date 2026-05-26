import { Meta } from '../../layout/Meta';
import { AppConfig } from '../../utils/AppConfig';
import { DescriptionCompetitions } from '../DescriptionCompetitions';
import { Events } from '../Events';
import { Footer } from '../Footer';
import { Navbar } from '../Navbar';

const Competitions = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Navbar selectedTitle="Compétitions" />
    <DescriptionCompetitions />
    <Events />
    <Footer />
  </div>
);

export { Competitions };
