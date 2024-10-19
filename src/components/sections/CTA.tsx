import {Button} from '@/components/ui';
import {MoveRight} from 'lucide-react';

export default function CTA() {
  return (
    <section className="px-4 py-8 md:px-6">
      <div className="bg-primary mx-auto flex max-w-screen-xl flex-col items-center justify-center gap-8 rounded-2xl px-6 py-12">
        <div className="flex flex-col">
          <h2 className="prose prose-xl md:prose-2xl text-primary-foreground text-center font-bold">
            Your Skin Deserves Better. Don&apos;t wait!
          </h2>
          <p className="prose prose-sm md:prose-base text-primary-foreground text-center">
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
