import { Meta } from '../../layout/Meta';
import { AppConfig } from '../../utils/AppConfig';
import { DescriptionNotebooks } from '../DescriptionNotebooks';
import { Footer } from '../Footer';
import { Navbar } from '../Navbar';
import { Notebooks } from '../Notebooks';

const Notebook = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Navbar selectedTitle="Apprendre" />
    <DescriptionNotebooks />
    <Notebooks />
    <Footer />
  </div>
);

export { Notebook };
