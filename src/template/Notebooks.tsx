import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { NotebookRow } from '../notebook/NotebookRow';

const Notebooks = () => (
  <Background color="bg-gray-200">
    <Section title="Pennylane">
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ flex: '0 0 48%', marginBottom: '2%' }}>
          <NotebookRow
            title="Introduction à Pennylane"
            description={
              <>
                <p>
                  Ce notebook présente l&rsquo;informatique quantique avec
                  PennyLane. Il explique l&rsquo;installation, les concepts clés
                  tels que les qubits, les circuits et les portes quantiques, et
                  les différentes mesures disponibles. Des exemples pratiques
                  sont également inclus.
                </p>
              </>
            }
            link="https://deepnote.com/workspace/quantum-ets-bd6b11e4-0d15-4576-90e5-88412c5f674e/project/1-Introduction-a-Pennylane-0c99f634-1e28-4587-813c-5f8dac4d40e7/notebook/Notebook%201-51fc9f3f18ec45e08de8b13439fa1973"
          />
        </div>
        <div style={{ flex: '0 0 48%', marginBottom: '2%' }}>
          <NotebookRow
            title="Portes quantiques"
            description={
              <>
                <p>
                  Ce notebook se concentre sur les portes quantiques en
                  informatique quantique, abordant leur utilisation pour
                  manipuler les états et créer des états intriqués. Il propose
                  des exercices pratiques et met en évidence la distinction
                  entre ordinateur quantique et ordinateur classique.
                </p>
              </>
            }
            link="https://deepnote.com/workspace/quantum-ets-bd6b11e4-0d15-4576-90e5-88412c5f674e/project/2-Portes-quantiques-2b505ac8-bbd4-4fed-8a32-48eafb49d53a/notebook/2.%20Portes%20quantiques-feb2121453e441f3a601a3cbbef890c2"
          />
        </div>
        <div style={{ flex: '0 0 48%', marginBottom: '2%' }}>
          <NotebookRow
            title="Visualisation et exécution"
            description={
              <p>
                Ce notebook se focalise sur l&rsquo;exécution et la
                visualisation des circuits quantiques. Il présente les méthodes
                de visualisation des circuits et résultats, la décomposition en
                portes de base, l&rsquo;importance du nombre de
                &rsquo;shots&rsquo; pour la précision, et le choix du
                simulateur, y compris les options dans PennyLane et
                l&rsquo;utilisation des simulateurs et ordinateurs d&rsquo;IBM
                avec Qiskit.
              </p>
            }
            link="https://deepnote.com/workspace/quantum-ets-bd6b11e4-0d15-4576-90e5-88412c5f674e/project/3-Visualisation-et-execution-b8dec5ae-227c-4adf-9916-6d78ad055f94/notebook/3.%20Ex%C3%A9cution%20et%20visualisation-a384546714d54f63a395c2e8bc6a89cd"
          />
        </div>
        <div style={{ flex: '0 0 48%', marginBottom: '2%' }}>
          <NotebookRow
            title="Circuits personnalisés"
            description={
              <p>
                Ce notebook traite de la création de circuits quantiques
                personnalisés, en abordant les concepts de circuits
                paramétrables, de portes personnalisées et d&rsquo;opérateurs
                personnalisés. Il explique comment ajouter des paramètres aux
                circuits, créer des portes personnalisées pour des rotations
                spécifiques, et séparer un circuit en fonctions modulaires. Il
                met également en avant l&rsquo;utilisation de templates pour
                simplifier la création de circuits.
              </p>
            }
            link="https://deepnote.com/workspace/quantum-ets-bd6b11e4-0d15-4576-90e5-88412c5f674e/project/4-Circuits-personnalises-5b041386-997a-42e7-81de-c6d4767dbca5/notebook/4.%20Circuits%20personnalis%C3%A9s-95c80666291b4a9ba5e0cbfc198760c4"
          />
        </div>
        <div style={{ flex: '0 0 48%', marginBottom: '2%' }}>
          <NotebookRow
            title="Algorithmes"
            description={
              <p>
                Ce notebook commence par une introduction aux algorithmes
                classiques, puis passe aux algorithmes quantiques, en mettant
                l&rsquo;accent sur l&rsquo;algorithme de Deutsch et de Grover.
                Le notebook explique en détail le fonctionnement de ces
                algorithmes, y compris son utilisation pour résoudre des
                problèmes spécifiques. Il explique comment mettre ces
                algorithmes en application avec PennyLane.
              </p>
            }
            link="https://deepnote.com/workspace/quantum-ets-bd6b11e4-0d15-4576-90e5-88412c5f674e/project/5-Algorithmes-2ebfbb2d-87c6-4213-8ccb-cadd5dccd7b0/notebook/5.%20Grover-ca3683f3b0134b0caa1464293a3d1a73"
          />
        </div>
        <div style={{ flex: '0 0 48%', marginBottom: '2%' }}>
          <NotebookRow
            title="Phase et opérations quantiques"
            description={<p>À venir</p>}
            link=""
          />
        </div>
        <div style={{ flex: '0 0 48%', marginBottom: '2%' }}>
          <NotebookRow
            title="Apprentissage machine quantique"
            description={<p>À venir</p>}
            link=""
          />
        </div>
        <div style={{ flex: '0 0 48%', marginBottom: '2%' }}>
          <NotebookRow
            title="Simulation et chimie"
            description={<p>À venir</p>}
            link=""
          />
        </div>
      </div>
    </Section>
    <Section title="Qiskit">
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ flex: '0 0 48%', marginBottom: '2%' }}>
          <NotebookRow
            title="Python et Qiskit"
            description={<p>À venir</p>}
            link=""
          />
        </div>
        <div style={{ flex: '0 0 48%', marginBottom: '2%' }}>
          <NotebookRow
            title="Manipulation d'un qubit simple"
            description={<p>À venir</p>}
            link=""
          />
        </div>
        <div style={{ flex: '0 0 48%', marginBottom: '2%' }}>
          <NotebookRow
            title="Manipulation de plusieurs qubits"
            description={<p>À venir</p>}
            link=""
          />
        </div>
        <div style={{ flex: '0 0 48%', marginBottom: '2%' }}>
          <NotebookRow
            title="Algorithmes de base"
            description={<p>À venir</p>}
            link=""
          />
        </div>
      </div>
    </Section>

    <Section title="Snowflake">
      <NotebookRow
        title="Introduction à snowflake"
        description={<p>À venir</p>}
        link=""
      />
    </Section>
  </Background>
);

export { Notebooks };
