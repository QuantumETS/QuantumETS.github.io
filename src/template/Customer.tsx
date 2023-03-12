import { Background } from '../background/Background';
import { CustomerLogo } from '../customer/CustomerLogo';
import { Section } from '../layout/Section';

const Customer = () => (
  <Background color="bg-gray-200">
    <Section yPadding="py-8">
      <div className="grid grid-cols-2 sm:grid-cols-6">
        <CustomerLogo
          src="/assets/images/logo2.png"
          alt="Random company logo"
        />
        <CustomerLogo
          src="/assets/images/logo2.png"
          alt="Random company logo"
        />
        <CustomerLogo
          src="/assets/images/logo3.png"
          alt="Random company logo"
        />
        <CustomerLogo
          src="/assets/images/logo2.png"
          alt="Random company logo"
        />
        <CustomerLogo
          src="/assets/images/logo2.png"
          alt="Random company logo"
        />
        <CustomerLogo
          src="/assets/images/logo3.png"
          alt="Random company logo"
        />
      </div>
    </Section>
  </Background>
);

export { Customer };
