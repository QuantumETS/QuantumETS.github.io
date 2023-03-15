import { Meta } from '../../layout/Meta';
import { AppConfig } from '../../utils/AppConfig';
import { DescriptionProjets } from '../DescriptionProjets';
import { Footer } from '../Footer';
import { Navbar } from '../Navbar';
import { Projets } from '../Projets';

const Projet = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Navbar selectedTitle="Projet" />
    <DescriptionProjets />
    <Projets />
    <Footer />
  </div>
);

export { Projet };
