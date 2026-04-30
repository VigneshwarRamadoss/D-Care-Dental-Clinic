import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';

const bookingSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  service: z.string().min(1, { message: 'Please select a service.' }),
  date: z.string().min(1, { message: 'Please select a preferred date.' }),
  timeSlot: z.string().min(1, { message: 'Please select a preferred time slot.' }),
  concerns: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export default function Booking() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = (data: BookingFormValues) => {
    console.log(data);
    toast.success('Appointment Request Received', {
      description: 'Our team will contact you shortly to confirm your booking.',
      duration: 5000,
    });
    reset();
  };

  return (
    <section id="booking" className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-secondary/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Text & Features */}
          <div>
            <FadeIn>
              <div className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 bg-white px-3 py-1 rounded-full shadow-sm border border-gray-100">
                Book Consultation
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-dark max-w-lg leading-tight">
                Your Confident Smile <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Starts Here</span>
              </h2>
              <p className="text-lg text-muted mb-12 max-w-lg leading-relaxed">
                Schedule your consultation and let our experienced team create a customized treatment plan designed specifically for you.
              </p>

              <div className="space-y-5">
                {[
                  {
                    icon: '🏆',
                    title: 'Priority Scheduling',
                    desc: 'Dedicated time slots for returning and urgent patients.',
                  },
                  {
                    icon: '👨‍⚕️',
                    title: 'Expert Specialists',
                    desc: 'Match with the exact doctor who fits your specific needs.',
                  },
                  {
                    icon: '🖥️',
                    title: 'Advanced Diagnostics',
                    desc: 'Precise 3D scanning and digital treatment planning.',
                  }
                ].map((feature, i) => (
                  <div key={i} className="group bg-white rounded-3xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex gap-5 items-center max-w-lg hover:-translate-y-1 cursor-default">
                    <div className="text-2xl bg-secondary/30 group-hover:bg-primary group-hover:text-white transition-colors duration-300 w-14 h-14 rounded-2xl flex items-center justify-center shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-dark mb-1 group-hover:text-primary transition-colors">{feature.title}</h4>
                      <p className="text-sm text-muted leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right Form */}
          <div className="relative">
            <FadeIn delay={0.2} direction="left">
               {/* Live slot badge */}
              <div className="absolute -top-4 -right-2 md:-right-6 bg-dark py-2.5 px-5 rounded-full shadow-xl z-20 flex items-center gap-3 border border-dark/20">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-xs font-bold text-white tracking-wide">4 Slots Available This Week</span>
              </div>

              <div className="bg-white rounded-[2.5rem] shadow-2xl p-6 md:p-10 relative z-10 border border-gray-100 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-accent to-primary"></div>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-4">
                  <div className="grid grid-cols-2 gap-5">
                    <div className="col-span-2">
                       <input 
                        type="text" 
                        placeholder="Full Name"
                        className={`w-full h-14 px-5 rounded-2xl border bg-slate-50 text-dark outline-none transition-all duration-300 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 ${errors.name ? 'border-red-500' : 'border-gray-200'}`}
                        {...register('name')}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1.5 font-medium px-2">{errors.name.message}</p>}
                    </div>

                    <div className="col-span-2 relative">
                      <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none border-r border-gray-300 pr-3">
                        <span className="text-gray-500 text-sm font-medium">+91</span>
                      </div>
                      <input 
                        type="tel" 
                        placeholder="Phone Number"
                        className={`w-full h-14 pl-20 pr-5 rounded-2xl border bg-slate-50 text-dark outline-none transition-all duration-300 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 ${errors.phone ? 'border-red-500' : 'border-gray-200'}`}
                        {...register('phone')}
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1.5 font-medium px-2">{errors.phone.message}</p>}
                    </div>

                    <div className="col-span-2">
                      <select 
                        className={`w-full h-14 px-5 rounded-2xl border bg-slate-50 text-dark outline-none transition-all duration-300 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 appearance-none cursor-pointer ${errors.service ? 'border-red-500' : 'border-gray-200'}`}
                        {...register('service')}
                      >
                        <option value="">Select Service Needed</option>
                        <option value="General Checkup">General Checkup</option>
                        <option value="Orthodontics">Orthodontics (Braces/Aligners)</option>
                        <option value="Implants">Dental Implants</option>
                        <option value="Cosmetic">Smile Makeover / Bleaching</option>
                        <option value="Pediatric">Pediatric Dentistry</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.service && <p className="text-red-500 text-xs mt-1.5 font-medium px-2">{errors.service.message}</p>}
                    </div>

                    <div className="col-span-2 md:col-span-1">
                      <input 
                        type="date" 
                        className={`w-full h-14 px-5 rounded-2xl border bg-slate-50 text-dark outline-none transition-all duration-300 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 cursor-pointer ${errors.date ? 'border-red-500' : 'border-gray-200'}`}
                        {...register('date')}
                      />
                      {errors.date && <p className="text-red-500 text-xs mt-1.5 font-medium px-2">{errors.date.message}</p>}
                    </div>

                    <div className="col-span-2 md:col-span-1">
                       <select 
                        className={`w-full h-14 px-5 rounded-2xl border bg-slate-50 text-dark outline-none transition-all duration-300 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 appearance-none cursor-pointer ${errors.timeSlot ? 'border-red-500' : 'border-gray-200'}`}
                        {...register('timeSlot')}
                      >
                        <option value="">Preferred Time</option>
                        <option value="Morning">Morning (9 AM - 12 PM)</option>
                        <option value="Afternoon">Afternoon (12 PM - 4 PM)</option>
                        <option value="Evening">Evening (4 PM - 7 PM)</option>
                      </select>
                      {errors.timeSlot && <p className="text-red-500 text-xs mt-1.5 font-medium px-2">{errors.timeSlot.message}</p>}
                    </div>

                    <div className="col-span-2">
                       <textarea 
                        placeholder="Any specific concerns? (Optional)"
                        rows={3}
                        className="w-full p-5 rounded-2xl border border-gray-200 bg-slate-50 text-dark outline-none transition-all duration-300 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 resize-none"
                        {...register('concerns')}
                      />
                    </div>
                  </div>

                  <button type="submit" className="w-full h-14 rounded-2xl bg-gradient-to-r from-primary to-accent text-white font-bold text-lg shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 mt-4">
                    Confirm Appointment <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </button>
                </form>
                
                <div className="mt-8 pt-8 border-t border-gray-100 text-center">
                  <p className="text-sm font-medium text-muted mb-4 uppercase tracking-wider">Or Reach Us Instantly</p>
                  <a 
                    href="https://wa.me/919884718819?text=Hi%20D%20Care%20Dental%20Clinic%2C%20I'd%20like%20to%20book%20an%20appointment.%20Please%20let%20me%20know%20the%20available%20slots." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3.5 px-6 rounded-2xl transition-all duration-300 hover:shadow-lg w-full justify-center group"
                  >
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" className="group-hover:scale-110 transition-transform">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                    </svg>
                    WhatsApp Support +91 98847 18819
                  </a>
                </div>

              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
