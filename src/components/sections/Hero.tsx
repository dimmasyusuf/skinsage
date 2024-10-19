import Image from 'next/image';
import {Button} from '@/components/ui';
import {CheckCircle} from 'lucide-react';

export default function Hero() {
  return (
    <section className="px-4 py-8 md:px-6">
      <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-8 md:grid-cols-2">
        <Image
          src="/images/hero.webp"
          alt="hero"
          width={1024}
          height={1024}
          className="w- rounded-2xl"
        />

        <div className="flex w-full flex-col">
          <div className="flex flex-col">
            <h1 className="prose prose-xl md:prose-2xl font-bold">
              Struggling With Skin Issues That Just Won&apos;t Go Away?
            </h1>
            <p className="prose prose-base md:prose-lg font-medium">
              Feel confident again with SkinSage - Your personalized skin expert!
            </p>
          </div>

          <div className="mt-4 flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <CheckCircle size="24" className="text-primary shrink-0 grow-0" />
              <p className="prose prose-sm md:prose-base">
                No more hiding from family events because of acne or dark spots.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <CheckCircle size="24" className="text-primary shrink-0 grow-0" />
              <p className="prose prose-sm md:prose-base">
                Know exactly what your skin needs—whether it&apos;s an affordable product or expert
                medical advice.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <CheckCircle size="24" className="text-primary shrink-0 grow-0" />
              <p className="prose prose-sm md:prose-base">
                Wake up to clear, glowing skin and newfound confidence—without costly doctor visits.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <CheckCircle size="24" className="text-primary shrink-0 grow-0" />
              <p className="prose prose-sm md:prose-base">
                Get results from the comfort of your home!
              </p>
            </div>
          </div>

          <Button size="lg" className="mt-8 w-full md:w-auto">
            Yes, I Want Clear Skin!
          </Button>
        </div>
      </div>
    </section>
  );
}
