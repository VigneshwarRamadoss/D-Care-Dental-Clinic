import { FadeIn } from '@/components/ui/FadeIn';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function Location() {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] bg-slate-100 flex items-center">
      
      {/* Full Background Map */}
      <div className="absolute inset-0 w-full h-full z-0">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.77732372868!2d80.1899348!3d12.9860671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525dffa4288451%3A0x633afac8f3d877df!2s11%2C%20Veeraraghavan%20St%2C%20NCBS%20Colony%2C%20Nanganallur%2C%20Chennai%2C%20Tamil%20Nadu%20600061!5e0!3m2!1sen!2sin!4v1714483515432!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map Location"
          className="grayscale opacity-90 mix-blend-multiply"
        ></iframe>
        {/* Gradient Overlay for better readability of the floating card on mobile */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 md:via-transparent to-transparent pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex md:justify-start justify-center items-end md:items-center h-full pb-10 md:pb-0">
        <FadeIn>
          {/* Floating Glass Panel */}
          <div className="bg-white/90 backdrop-blur-xl rounded-[2rem] p-8 md:p-10 shadow-2xl border border-white/40 max-w-md w-full relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary to-accent"></div>
            
            <h3 className="text-2xl font-bold text-dark mb-8">Visit Our Clinic</h3>
            
            <div className="space-y-6">
              
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary group-hover:text-white transition-colors duration-300 rounded-2xl flex items-center justify-center text-primary shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-dark text-sm uppercase tracking-wider mb-1">Clinic Address</h4>
                  <p className="text-dark/70 text-sm leading-relaxed">11, Veeraraghavan St, NCBS Colony, Nanganallur, Chennai, Tamil Nadu 600061</p>
                </div>
              </div>

              <div className="w-full h-px bg-gray-200/60"></div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary group-hover:text-white transition-colors duration-300 rounded-2xl flex items-center justify-center text-primary shrink-0 shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-dark text-sm uppercase tracking-wider mb-1">Contact Us</h4>
                  <a href="tel:+919884718819" className="block text-dark/70 hover:text-primary transition-colors text-sm font-medium mb-1">+91 98847 18819</a>
                  <a href="mailto:info@dcaredental.com" className="block text-dark/70 hover:text-primary transition-colors text-sm font-medium">info@dcaredental.com</a>
                </div>
              </div>

              <div className="w-full h-px bg-gray-200/60"></div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary group-hover:text-white transition-colors duration-300 rounded-2xl flex items-center justify-center text-primary shrink-0 shadow-sm">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-dark text-sm uppercase tracking-wider mb-1">Opening Hours</h4>
                  <p className="text-dark/70 text-sm font-medium mb-1">Mon–Sat: <span className="font-bold text-dark">9:00 AM – 7:00 PM</span></p>
                  <p className="text-dark/70 text-sm font-medium">Sun: <span className="font-bold text-dark">10:00 AM – 2:00 PM</span></p>
                </div>
              </div>

            </div>

            <a 
              href="https://maps.google.com/?q=11,+Veeraraghavan+St,+NCBS+Colony,+Nanganallur,+Chennai,+Tamil+Nadu+600061" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-8 w-full block text-center bg-dark hover:bg-primary text-white font-bold py-4 rounded-xl transition-colors duration-300"
            >
              Get Directions
            </a>

          </div>
        </FadeIn>
      </div>
    </section>
  );
}
