import { PageHeader } from '../components/ui/PageHeader';
import Reviews from '../components/sections/Reviews';

export default function ReviewsPage() {
  return (
    <>
      <PageHeader 
        title="Patient Reviews" 
        description="Read what our patients have to say about their experiences at D Care Dental Clinic."
        imageSrc="/happy_patient_smile_1777552790232.png"
      />
      <Reviews />
    </>
  );
}
