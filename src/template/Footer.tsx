import Link from 'next/link';

import { Background } from '../background/Background';
import { FooterCompanyInfo } from '../footer/FooterCompanyInfo';
import { FooterLinks } from '../footer/FooterLinks';
import { FooterTwoRowsCopyright } from '../footer/FooterTwoRowsCopyright';
import { Section } from '../layout/Section';
import { AppConfig } from '../utils/AppConfig';
import { Logo } from './Logo';

const Footer = () => (
  <Background color="bg-gray-100">
    <Section>
      <FooterTwoRowsCopyright siteName={AppConfig.site_name}>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-6">
          <div className="col-span-1 sm:col-span-2">
            <FooterCompanyInfo
              logo={<Logo />}
              description={AppConfig.description}
            />
          </div>

          <FooterLinks title="Resources">
            <li>
              <Link href="/">First link</Link>
            </li>
            <li>
              <Link href="/">Second link</Link>
            </li>
            <li>
              <Link href="/">Third link</Link>
            </li>
            <li>
              <Link href="/">Forth link</Link>
            </li>
          </FooterLinks>
          <FooterLinks title="Ressources">
            <li>
              <Link
                target="_blank"
                href="https://deepnote.com/workspace/quantum-ets-bd6b11e4-0d15-4576-90e5-88412c5f674e/project/Accueil-e47dd782-7979-4281-90a8-414c28f9ef8e/"
              >
                Deepnote
              </Link>
            </li>
            <li>
              <Link target="_blank" href="https://codebook.xanadu.ai/">
                Xanadu Codebook
              </Link>
            </li>
            <li>
              <Link target="_blank" href="https://quantumalgorithmzoo.org/">
                Q-Algorithm Zoo
              </Link>
            </li>
          </FooterLinks>
          <FooterLinks title="Contact">
            <li>
              <Link href="mailto:simon.roy.1@ens.etsmtl.ca">Capitaine</Link>
            </li>
            <li>
              <Link href="mailto:samuel.richard.4@ens.etsmtl.ca">Co-Capitaine</Link>
            </li>
          </FooterLinks>
          <FooterLinks title="Legal">
            <li>
              <Link href="/">First link</Link>
            </li>
            <li>
              <Link href="/">Second link</Link>
            </li>
            <li>
              <Link href="/">Third link</Link>
            </li>
            <li>
              <Link href="/">Forth link</Link>
            </li>
          </FooterLinks>
        </div>
      </FooterTwoRowsCopyright>
    </Section>
  </Background>
);

export { Footer };
