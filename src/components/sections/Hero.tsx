import Image from 'next/image';
import {Button} from '@/components/ui';
import {CheckCircle} from 'lucide-react';

export default function Hero() {
  return (
    <section className="px-4 py-8 md:px-6">
      <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-8 md:grid-cols-2">
        <div className="relative flex aspect-[1/1] h-full w-full items-center justify-center rounded-2xl sm:aspect-[4/3]">
          <Image
            src="/images/hero.webp"
            alt="Struggling With Skin Issues That Just Won't Go Away?"
            layout="fill"
            loading="lazy"
            className="rounded-2xl object-cover"
          />
        </div>

        <div className="flex w-full flex-col">
          <div className="flex flex-col">
            <h1 className="prose prose-xl font-bold md:prose-2xl">
              Struggling With Skin Issues That Just Won&apos;t Go Away?
            </h1>
            <p className="prose prose-base font-medium md:prose-lg">
              Feel confident again with SkinSage - Your personalized skin expert!
            </p>
          </div>

          <div className="mt-4 flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <CheckCircle size="24" className="shrink-0 grow-0 text-primary" />
              <p className="prose prose-sm md:prose-base">
                No more hiding from family events because of acne or dark spots.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <CheckCircle size="24" className="shrink-0 grow-0 text-primary" />
              <p className="prose prose-sm md:prose-base">
                Know exactly what your skin needs—whether it&apos;s an affordable product or expert
                medical advice.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <CheckCircle size="24" className="shrink-0 grow-0 text-primary" />
              <p className="prose prose-sm md:prose-base">
                Wake up to clear, glowing skin and newfound confidence—without costly doctor visits.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <CheckCircle size="24" className="shrink-0 grow-0 text-primary" />
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
