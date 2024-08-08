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
              Title
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider text-gray-500">
              Date
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider text-gray-500">
              Description
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider text-gray-500">
              Status
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider text-gray-500">
              Position
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          <tr className="align-top">
            <td className="whitespace-normal px-6 py-4">
              <Link target="_blank" href="https://qec.amiv.ethz.ch/qhack24/">
                <div className="text-sm font-medium text-blue-500 underline">
                  ETH Zurich 2024
                </div>
              </Link>
            </td>
            <td className="whitespace-normal px-6 py-4">Mai 2024</td>
            <td className="whitespace-normal px-6 py-4">
              <p>
                Participation à ETH Zurich en mai 2024. Nous avons reçu une
                mention d&rsquo;honneur de Nvidia. 🏅
              </p>
            </td>
            <td className="whitespace-normal px-6 py-4">
              <span className="inline-flex rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                Terminé
              </span>
            </td>
            <td className="whitespace-normal px-6 py-4">
              Mention d&rsquo;honneur
            </td>
          </tr>
          <tr className="align-top">
            <td className="whitespace-normal px-6 py-4">
              <Link target="_blank" href="https://qhack.ai/">
                <div className="text-sm font-medium text-blue-500 underline">
                  QHack24
                </div>
              </Link>
            </td>
            <td className="whitespace-normal px-6 py-4">Février 2024</td>
            <td className="whitespace-normal px-6 py-4">
              <p>
                Participation à QHack24 en février 2024. Nous avons terminé 16
                <sup>e</sup> sur 643 équipes. 🎉
              </p>
            </td>
            <td className="whitespace-normal px-6 py-4">
              <span className="inline-flex rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                Terminé
              </span>
            </td>
            <td className="whitespace-normal px-6 py-4">16/643</td>
          </tr>
          <tr className="align-top">
            <td className="whitespace-normal px-6 py-4">
              <Link
                target="_blank"
                href="https://www.xanadu.ai/events/canadian-quantum-cup/"
              >
                <div className="text-sm font-medium text-blue-500 underline">
                  Canadian Quantum Cup
                </div>
              </Link>
            </td>
            <td className="whitespace-normal px-6 py-4">Novembre 2023</td>
            <td className="whitespace-normal px-6 py-4">
              <p>
                Participation à la Canadian Quantum Cup en novembre 2023. Nous
                avons terminé 5<sup>e</sup> sur 14 équipes, et 1<sup>er</sup> au
                Québec. 🇨🇦
              </p>
            </td>
            <td className="whitespace-normal px-6 py-4">
              <span className="inline-flex rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                Terminé
              </span>
            </td>
            <td className="whitespace-normal px-6 py-4">
              5/14 (1er au Québec)
            </td>
          </tr>
          <tr className="align-top">
            <td className="whitespace-normal px-6 py-4">
              <Link
                target="_blank"
                href="https://www.qaif.org/contests/quantum-games-hackathon"
              >
                <div className="text-sm font-medium text-blue-500 underline">
                  Quantum Games Hackathon
                </div>
              </Link>
            </td>
            <td className="whitespace-normal px-6 py-4">Septembre 2023</td>
            <td className="whitespace-normal px-6 py-4">
              <p>
                Participation au Quantum Games Hackathon en septembre 2023. Nous
                avons terminé 5<sup>e</sup> sur 15 équipes. 🎮
              </p>
            </td>
            <td className="whitespace-normal px-6 py-4">
              <span className="inline-flex rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                Terminé
              </span>
            </td>
            <td className="whitespace-normal px-6 py-4">5/15</td>
          </tr>
          <tr className="align-top">
            <td className="whitespace-normal px-6 py-4">
              <Link target="_blank" href="https://qhack.ai/">
                <div className="text-sm font-medium text-blue-500 underline">
                  QHack2023
                </div>
              </Link>
            </td>
            <td className="whitespace-normal px-6 py-4">Mars 2023</td>
            <td className="whitespace-normal px-6 py-4">
              <p>
                Participation à QHack 2023, un hack-a-thon de 1 semaine où
                plusieurs problèmes quantiques étaient présentés. 3 équipes ont
                terminé respectivement{' '}
                <b>
                  25<sup>e</sup>, 137<sup>e</sup> et 176<sup>e</sup> position
                </b>{' '}
                sur plus de 726 équipes inscrites! 🎉
              </p>
            </td>
            <td className="whitespace-normal px-6 py-4">
              <span className="inline-flex rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                Terminé
              </span>
            </td>
            <td className="whitespace-normal px-6 py-4">
              25/726, 137/726, 176/726
            </td>
          </tr>
          <tr className="align-top">
            <td className="whitespace-normal px-6 py-4">
              <Link
                target="_blank"
                href="https://quebec-quantique.ca/en/bighackathon/"
              >
                <div className="text-sm font-medium text-blue-500 underline">
                  BIG Quantum Hackathon 2022
                </div>
              </Link>
            </td>
            <td className="whitespace-normal px-6 py-4">Novembre 2022</td>
            <td className="whitespace-normal px-6 py-4">
              <p>
                Participation au Big Quantum Hackathon 2022, un concours
                d&apos;informatique quantique alliant technologie et le monde
                des affaires. Cette compétition permet à des étudiants de
                résoudre des problèmes concrets à l&apos;aide de la technologie
                quantique. Des étudiants de l&apos;ÉTS se sont classés parmi les
                trois premières équipes. 🥇🥈🥉
              </p>
            </td>
            <td className="whitespace-normal px-6 py-4">
              <span className="inline-flex rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                Terminé
              </span>
            </td>
            <td className="whitespace-normal px-6 py-4">Top 3</td>
          </tr>
        </tbody>
      </table>
    </Section>
  </Background>
);

export { Events };
