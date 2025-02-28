import { Background } from '../background/Background';
import { CustomerLogo } from '../customer/CustomerLogo';
import { Section } from '../layout/Section';

const Customer = () => (
  <Background color="bg-gray-200">
    <Section yPadding="py-8" title="Nos Partenaires">
      <div className="flex flex-wrap justify-center gap-6">
        <CustomerLogo
          src="/assets/images/AEETS-LOGO-Symbole-ORANGE-RGB-petit.svg"
          alt="AÉÉTS partenaire proton"
          className="h-32"
        />
        <CustomerLogo
          src="/assets/images/Logo_ETS_SansTypo_FR.png"
          alt="ÉTS partenaire proton"
          className="h-32"
        />
      </div>
    </Section>
  </Background>
);

export { Customer };
