import { ActionButtonSection } from '../../cta/ActionButtonSection';
import { Meta } from '../../layout/Meta';
import { AppConfig } from '../../utils/AppConfig';
import { DescriptionCompetitions } from '../DescriptionCompetitions';
import { Events } from '../Events';
import { Footer } from '../Footer';
import { Navbar } from '../Navbar';

const Competitions = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Navbar selectedTitle="Compétitions" />
    <DescriptionCompetitions />
    <Events />
    <ActionButtonSection
      body={
        <p>
          Découvrez l&rsquo;expérience du club en compétition à travers notre
          vlog tourné lors du hackathon YQuantum 2025 à l&rsquo;Université Yale.
        </p>
      }
      buttonLabel="VLOG YQuantum"
      actionUrl="https://youtu.be/MmPx3GXDZ3A"
      icon="external"
    />
    <Footer />
  </div>
);

export { Competitions };
