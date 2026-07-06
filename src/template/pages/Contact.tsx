import { Meta } from '../../layout/Meta';
import { AppConfig } from '../../utils/AppConfig';
import { Footer } from '../Footer';
// import { Pricing } from './Pricing';
// import { Testimonial } from './Testimonial';
import { Navbar } from '../Navbar';
import { Pricing } from '../Pricing';

const Contact = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Navbar selectedTitle="Partenaire" />
    <Pricing />
    <Footer />
  </div>
);

export { Contact };
