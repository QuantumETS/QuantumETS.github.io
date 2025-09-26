import { Background } from '../background/Background';
import { CustomerLogo } from '../customer/CustomerLogo';
import { Section } from '../layout/Section';

const Customer = () => (
  <Background color="bg-gray-200">
    <Section yPadding="py-8" title="Nos Partenaires">
      <div className="flex flex-wrap justify-center gap-6">
        <CustomerLogo
          src="/assets/images/logo_lemnisket.png"
          alt="Logo de PhysicsGraph"
          tier="electron"
          link="https://physicsgraph.com/"
        />
        <CustomerLogo
          src="/assets/images/AEETS-LOGO-Symbole-ORANGE-RGB-petit.svg"
          alt="Logo de l'AÉÉTS"
          tier="electron"
          link="https://www.aeets.com/"
        />
        <CustomerLogo
          src="/assets/images/Logo_ETS_SansTypo_FR.png"
          alt="Logo de l'ÉTS"
          tier="electron"
          link="https://www.etsmtl.ca/"
        />
      </div>
    </Section>
  </Background>
);

export { Customer };
