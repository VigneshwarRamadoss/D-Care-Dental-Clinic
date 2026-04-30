import { PageHeader } from '../components/ui/PageHeader';
import Services from '../components/sections/Services';

export default function ServicesPage() {
  return (
    <>
      <PageHeader 
        title="Our Services" 
        description="Comprehensive dental solutions from preventive care to advanced surgery, tailored to your needs."
        imageSrc="/dental_technology_high_res_1777552703388.png"
      />
      <Services />
    </>
  );
}
