import * as Dialog from '@radix-ui/react-dialog';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { X } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

export default function ExitIntentPopup() {
  const [open, setOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasTriggered) {
        setOpen(true);
        setHasTriggered(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasTriggered]);

  const onSubmit = (data: any) => {
    toast.success('Assessment Requested', {
      description: 'We will call you back shortly.',
    });
    setOpen(false);
    reset();
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-dark/60 backdrop-blur-sm z-[100] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-[50%] top-[50%] z-[100] grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white p-6 shadow-lift rounded-[var(--radius-card)] duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] px-8 py-10 text-center">
          
          <div className="mx-auto w-16 h-16 bg-secondary text-primary rounded-full flex items-center justify-center mb-2">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21c-2.8 0-5.8-1.5-6.8-4.4a8 8 0 0 1-.2-5.6C6.1 8 8.1 6.5 12 6c3.9.5 5.9 2 6.9 4.9a8 8 0 0 1-.1 5.6C17.7 19.5 14.8 21 12 21z"/><path d="M12 21v-7"/><path d="M12 6V3"/></svg>
          </div>
          
          <Dialog.Title className="text-3xl font-display font-bold text-dark mb-2">
            Before You Go —
          </Dialog.Title>
          <Dialog.Description className="text-primary font-bold text-xl mb-6">
            Book a FREE Smile Assessment
          </Dialog.Description>
          
          <p className="text-muted text-sm mb-8">
            Don't leave your dental health to chance. Drop your details and our team will get in touch with you to schedule a complimentary initial assessment.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input 
              type="text" 
              placeholder="Your Name" 
              required
              className="w-full h-12 px-4 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary outline-none transition-colors"
              {...register('name')}
            />
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none border-r border-gray-300 pr-2">
                <span className="text-gray-500 text-sm font-medium">+91</span>
              </div>
              <input 
                type="tel" 
                placeholder="Phone Number" 
                required
                className="w-full h-12 pl-16 pr-4 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary outline-none transition-colors"
                {...register('phone')}
              />
            </div>
            <Button type="submit" size="lg" className="w-full mt-2">
              Claim Free Assessment
            </Button>
          </form>

          <Dialog.Close asChild>
            <button
              className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-primary data-[state=open]:text-muted"
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
