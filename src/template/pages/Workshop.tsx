import Link from 'next/link';

import { Background } from '../../background/Background';
import { Meta } from '../../layout/Meta';
import { Section } from '../../layout/Section';
import { NavbarTwoColumns } from '../../navigation/NavbarTwoColumns';
import { AppConfig } from '../../utils/AppConfig';
import { Banner } from '../Banner';
import { Customer } from '../Customer';
import { FAQ } from '../FAQ';
import { Features } from '../Features';
import { Footer } from '../Footer';
import { Hero } from '../Hero';
import { Logo } from '../Logo';
import { VerticalFeatures } from '../VerticalFeatures';

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
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li style={{ borderBottom: '4px solid #6246EA' }}>
          <Link href="/workshop">Workshop</Link>
        </li>
      </NavbarTwoColumns>
    </Section>
  </Background>
);

const Workshop = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    {Navbar()}
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