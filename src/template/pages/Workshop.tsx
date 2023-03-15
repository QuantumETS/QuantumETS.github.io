import { Meta } from '../../layout/Meta';
import { AppConfig } from '../../utils/AppConfig';
import { Banner } from '../Banner';
import { Customer } from '../Customer';
import { FAQ } from '../FAQ';
import { Features } from '../Features';
import { Footer } from '../Footer';
import { Hero } from '../Hero';
import { Navbar } from '../Navbar';
import { VerticalFeatures } from '../VerticalFeatures';

const Workshop = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Navbar selectedTitle="Workshop" />
    <Hero />
    <Customer />
    <Features />
    <VerticalFeatures />
    <FAQ />
    <Banner />
    <Footer />
  </div>
);

export { Workshop };
