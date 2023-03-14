import Link from 'next/link';

import { Background } from '../../background/Background';
import { Meta } from '../../layout/Meta';
import { Section } from '../../layout/Section';
import { NavbarTwoColumns } from '../../navigation/NavbarTwoColumns';
import { AppConfig } from '../../utils/AppConfig';
import { Footer } from '../Footer';
import { Logo } from '../Logo';
import { Pricing } from '../Pricing';
import { Members } from '../Testimonial';
// import { Pricing } from './Pricing';
// import { Testimonial } from './Testimonial';

const Navbar = () => (
  <Background color="bg-gray-200">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/">Accueil</Link>
        </li>
        <li>
          <Link href="/projet">Projet</Link>
        </li>
        <li style={{ borderBottom: '4px solid #6246EA' }}>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/workshop">Workshop</Link>
        </li>
      </NavbarTwoColumns>
    </Section>
  </Background>
);

const Contact = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    {Navbar()}
    <Members />
    <Pricing />
    <Footer />
  </div>
);

export { Contact };
