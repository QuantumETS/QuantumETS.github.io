import { Meta } from '../../layout/Meta';
import { AppConfig } from '../../utils/AppConfig';
import { Banner } from '../Banner';
import { Customer } from '../Customer';
import { FAQ } from '../FAQ';
import { Features } from '../Features';
import { Footer } from '../Footer';
import { Hero } from '../Hero';
import { Navbar } from '../Navbar';
// import { Pricing } from './Pricing';
// import { Testimonial } from './Testimonial';
import { VerticalFeatures } from '../VerticalFeatures';

const Accueil = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Navbar selectedTitle="Accueil" />
    <Hero />
    <Customer />
    <Features />
    <VerticalFeatures />
    <FAQ />
    <Banner />
    <Footer />
  </div>
);

export { Accueil };
