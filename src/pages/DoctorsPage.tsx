import { PageHeader } from '../components/ui/PageHeader';
import Team from '../components/sections/Team';

export default function DoctorsPage() {
  return (
    <>
      <PageHeader 
        title="Meet Our Doctors" 
        description="Our team of specialists is committed to your comfort and health, bringing decades of combined experience."
        imageSrc="/dental_team_premium_1777552773228.png"
      />
      <Team />
    </>
  );
}
