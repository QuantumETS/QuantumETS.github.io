import { Meta } from '../../layout/Meta';
import { AppConfig } from '../../utils/AppConfig';
import { Activites } from '../Activites';
import { Banner } from '../Banner';
import { Customer } from '../Customer';
import { Events } from '../Events';
import { FAQ } from '../FAQ';
import { Footer } from '../Footer';
import { Hero } from '../Hero';
import { Navbar } from '../Navbar';

const Projet = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Navbar selectedTitle="Projet" />
    <Hero />
    <Customer />
    <Activites />
    <Events />
    <FAQ />
    <Banner />
    <Footer />
  </div>
);

export { Projet };
