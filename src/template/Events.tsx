import Link from 'next/link';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';

const Events = () => (
  <Background color="bg-gray-200">
    <Section>
      <h2 className="text-3xl font-semibold text-gray-900">Compétitions</h2>
      <table className="mt-8 min-w-full table-auto border border-gray-200 bg-white">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider text-gray-500">
              Nom
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider text-gray-500">
              Date
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider text-gray-500">
              Description
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider text-gray-500">
              Position
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          <tr className="align-top">
            <td className="whitespace-normal px-6 py-4">
              <Link target="_blank" href="https://iquhack.mit.edu/">
                <div className="text-sm font-medium text-blue-500 underline">
                  iQuHACK 2026 (MIT)
                </div>
              </Link>
            </td>
            <td className="whitespace-normal px-6 py-4">Janvier 2026</td>
            <td className="whitespace-normal px-6 py-4">
              <p>
                3<sup>e</sup> place au Technical Challenge de QuEra, ainsi
                qu&apos;une mention d&apos;honneur pour le Creator Challenge de
                QuEra. 🏅
              </p>
            </td>
            <td className="whitespace-normal px-6 py-4">
              3<sup>e</sup> (Technical Challenge), mention d&apos;honneur
            </td>
          </tr>
          <tr className="align-top">
            <td className="whitespace-normal px-6 py-4">
              <Link
                target="_blank"
                href="linkedin.com/posts/institut-quantique---université-de-sherbrooke_iqucodefest-2025-activity-7346252790127583234-CFtM?originalSubdomain=fr"
              >
                <div className="text-sm font-medium text-blue-500 underline">
                  iQuCodeFest 2025 (Polytechnique Montréal)
                </div>
              </Link>
            </td>
            <td className="whitespace-normal px-6 py-4">Juin 2025</td>
            <td className="whitespace-normal px-6 py-4">
              <p>
                Premières et troisièmes places dans les défis
                d&apos;algorithmique quantique organisés par Polytechnique. 🥇🥉
              </p>
            </td>
            <td className="whitespace-normal px-6 py-4">
              1<sup>er</sup> et 3<sup>e</sup>
            </td>
          </tr>
          <tr className="align-top">
            <td className="whitespace-normal px-6 py-4">
              <Link target="_blank" href="https://www.yquantum.dev/">
                <div className="text-sm font-medium text-blue-500 underline">
                  YQuantum 2025 (Yale)
                </div>
              </Link>
            </td>
            <td className="whitespace-normal px-6 py-4">Mai 2025</td>
            <td className="whitespace-normal px-6 py-4">
              <p>
                1<sup>er</sup> au Quantum Optimization Challenge et 2
                <sup>e</sup>
                place au Tahoe Quantum Challenge. 🏆
              </p>
            </td>
            <td className="whitespace-normal px-6 py-4">
              1<sup>er</sup>, 2<sup>e</sup>
            </td>
          </tr>
          <tr className="align-top">
            <td className="whitespace-normal px-6 py-4">
              <Link
                target="_blank"
                href="https://www.iquise.mit.edu/iQuHACK/2025-01-31"
              >
                <div className="text-sm font-medium text-blue-500 underline">
                  iQuHACK 2025 (MIT)
                </div>
              </Link>
            </td>
            <td className="whitespace-normal px-6 py-4">Janvier 2025</td>
            <td className="whitespace-normal px-6 py-4">
              <p>
                Victoire au Quantinuum Challenge, et mention honorable au D-Wave
                Challenge. 🏅
              </p>
            </td>
            <td className="whitespace-normal px-6 py-4">
              1<sup>er</sup>, mention honorable
            </td>
          </tr>
          <tr className="align-top">
            <td className="whitespace-normal px-6 py-4">
              <Link target="_blank" href="https://qec.amiv.ethz.ch/qhack24/">
                <div className="text-sm font-medium text-blue-500 underline">
                  ETH Zürich Hackathon (2024)
                </div>
              </Link>
            </td>
            <td className="whitespace-normal px-6 py-4">Mai 2024</td>
            <td className="whitespace-normal px-6 py-4">
              <p>
                Deuxième place en compétition sur site à ETH Zürich. Mention
                spéciale de Nvidia pour notre démo. 🏅
              </p>
            </td>
            <td className="whitespace-normal px-6 py-4">
              2<sup>e</sup> place
            </td>
          </tr>
          <tr className="align-top">
            <td className="whitespace-normal px-6 py-4">
              <Link
                target="_blank"
                href="https://www.xanadu.ai/events/canadian-quantum-cup/"
              >
                <div className="text-sm font-medium text-blue-500 underline">
                  Canadian Quantum Cup (2023)
                </div>
              </Link>
            </td>
            <td className="whitespace-normal px-6 py-4">Novembre 2023</td>
            <td className="whitespace-normal px-6 py-4">
              <p>
                5<sup>e</sup> au classement général et 1<sup>er</sup> au Québec,
                compétition organisée par Xanadu. 🇨🇦
              </p>
            </td>
            <td className="whitespace-normal px-6 py-4">
              5<sup>e</sup>/14
            </td>
          </tr>
          <tr className="align-top">
            <td className="whitespace-normal px-6 py-4">
              <Link target="_blank" href="https://qhack.ai/">
                <div className="text-sm font-medium text-blue-500 underline">
                  QHack (compétition internationale à distance)
                </div>
              </Link>
            </td>
            <td className="whitespace-normal px-6 py-4">2023-2024</td>
            <td className="whitespace-normal px-6 py-4">
              <p>
                2024 : 16<sup>e</sup> sur 645 équipes;
                <br />
                2023 : 25<sup>e</sup> sur 726 équipes. ✨
              </p>
            </td>
            <td className="whitespace-normal px-6 py-4">16/645 et 25/726</td>
          </tr>
        </tbody>
      </table>
    </Section>
  </Background>
);

export { Events };
