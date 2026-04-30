import { PageHeader } from '../components/ui/PageHeader';
import About from '../components/sections/About';
import PatientJourney from '../components/sections/PatientJourney';
import FAQ from '../components/sections/FAQ';

export default function AboutPage() {
  return (
    <>
      <PageHeader 
        title="About Our Clinic" 
        description="Dedicated to providing world-class dental care with a personal touch in the heart of Chennai."
        imageSrc="/dentist_consultation_1777552685997.png"
      />
      <About />
      <PatientJourney />
      <FAQ />
    </>
  );
}
