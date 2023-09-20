import { Section } from '../layout/Section';

const Pricing = () => (
  <Section title="Plans partenariats" subtitle="Partenariat">
    {/* jsx temporaire : À venir */}
    <div className="grid grid-cols-1 gap-3 md:grid-cols-1">
      <div className="m-20 flex flex-col items-center justify-center">
        <a
          href="http://localhost:3000/assets/pdf/Quantum-plan-partenariat_v1.pdf"
          className="mt-8 inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        >
          Plan de partenariat
        </a>
      </div>
    </div>
  </Section>
);

export { Pricing };
