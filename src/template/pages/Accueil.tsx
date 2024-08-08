import { Meta } from '../../layout/Meta';
import { AppConfig } from '../../utils/AppConfig';
import { Activites } from '../Activites';
import { Banner } from '../Banner';
// import { Pricing } from './Pricing';
// import { Testimonial } from './Testimonial';
import { Events } from '../Events';
import { FAQ } from '../FAQ';
import { Footer } from '../Footer';
import { Hero } from '../Hero';
import { Navbar } from '../Navbar';
import { Members } from '../Testimonial';

const Accueil = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Navbar selectedTitle="Accueil" />
    <Hero />
    <Members />
    <Activites />
    <Events />
    <FAQ />
    <Banner />
    <Footer />
  </div>
);

export { Accueil };
