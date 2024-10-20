import {Button} from '@/components/ui';
import {MoveRight} from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="px-4 py-8 md:px-6">
      <div className="mx-auto flex max-w-screen-lg flex-col items-center justify-center gap-8 rounded-2xl bg-primary px-6 py-12">
        <div className="flex flex-col">
          <h2 className="prose prose-xl text-center font-bold text-primary-foreground md:prose-2xl">
            Your Skin Deserves Better. Don&apos;t wait!
          </h2>
          <p className="prose prose-sm text-center text-primary-foreground md:prose-base">
            Join the waiting list now and get free access as soon as it&apos;s ready!
          </p>
        </div>

        <Button variant="secondary" size="lg" className="flex items-center font-semibold">
          Join the waiting list
          <MoveRight className="ml-1 h-6 w-6" />
        </Button>
      </div>
    </section>
  );
}
