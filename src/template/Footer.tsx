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
            <li>
              <Link target="_blank" href="https://github.com/QuantumETS">
                Github
              </Link>
            </li>
          </FooterLinks>
          <FooterLinks title="Affiliation">
            <li>
              <Link href="https://www.etsmtl.ca/">
                École de technologie supérieure
              </Link>
            </li>
          </FooterLinks>
          <FooterLinks title="Notebook">
            <li>
              <Link
                target="_blank"
                href="https://deepnote.com/workspace/quantum-ets-bd6b11e4-0d15-4576-90e5-88412c5f674e/project/2-Qubit-et-superposition-a3b45c64-9522-4af8-a9fa-82004b07f9df/notebook/Notebook%201-e33f80205bf34ca381bea01f5f45a816"
              >
                Informatique quantique - Qubit et superposition
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                href="https://deepnote.com/workspace/quantum-ets-bd6b11e4-0d15-4576-90e5-88412c5f674e/project/1-Introduction-a-Pennylane-0c99f634-1e28-4587-813c-5f8dac4d40e7/"
              >
                Pennylane - Introduction
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                href="https://deepnote.com/workspace/quantum-ets-bd6b11e4-0d15-4576-90e5-88412c5f674e/project/2-Portes-quantiques-2b505ac8-bbd4-4fed-8a32-48eafb49d53a/notebook/2.%20Portes%20quantiques-feb2121453e441f3a601a3cbbef890c2"
              >
                Pennylane - Portes quantiques
              </Link>
            </li>
          </FooterLinks>
        </div>
      </FooterTwoRowsCopyright>
    </Section>
  </Background>
);

export { Footer };
