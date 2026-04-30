import { MessageCircle } from 'lucide-react';

export default function FloatingActions() {
  return (
    <>
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/919884718819?text=Hi%20D%20Care%20Dental%20Clinic%2C%20I'd%20like%20to%20book%20an%20appointment.%20Please%20let%20me%20know%20the%20available%20slots." 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-4 md:right-8 z-40 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lift hover:scale-110 transition-transform duration-300 hover:bg-[#20bd5a]"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </>
  );
}
