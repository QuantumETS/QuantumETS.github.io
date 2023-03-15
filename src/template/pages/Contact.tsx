import { Meta } from '../../layout/Meta';
import { AppConfig } from '../../utils/AppConfig';
import { Footer } from '../Footer';
// import { Pricing } from './Pricing';
// import { Testimonial } from './Testimonial';
import { Navbar } from '../Navbar';
import { Pricing } from '../Pricing';
import { Members } from '../Testimonial';

const Contact = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Navbar selectedTitle="Contact" />

    <Members />
    <div className="m-20 flex flex-col items-center justify-center">
      <a
        href="mailto:quantumets@etsmtl.ca"
        className="mt-8 inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
      >
        Contactez-nous
      </a>
    </div>
    <Pricing />
    <Footer />
  </div>
);

export { Contact };
