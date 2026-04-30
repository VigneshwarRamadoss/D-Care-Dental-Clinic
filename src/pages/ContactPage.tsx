import { PageHeader } from '../components/ui/PageHeader';
import Booking from '../components/sections/Booking';
import Location from '../components/sections/Location';

export default function ContactPage() {
  return (
    <>
      <PageHeader 
        title="Contact Us" 
        description="Have questions or ready to book? We're here to help you achieve your perfect smile."
        imageSrc="/modern_clinic_interior_1777552669692.png"
      />
      <Booking />
      <Location />
    </>
  );
}
