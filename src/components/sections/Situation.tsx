import {DollarSignIcon, FrownIcon, Hourglass, RotateCw} from 'lucide-react';
import Image from 'next/image';

export default function Situation() {
  return (
    <section id="about" className="px-4 py-8 md:px-6">
      <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-8 md:grid-cols-2">
        <div className="order-2 flex w-full flex-col md:order-1">
          <div className="flex flex-col">
            <h2 className="prose prose-xl font-bold md:prose-2xl">
              Are You Tired of Trying Everything with No Results?
            </h2>
          </div>

          <div className="mt-4 flex flex-col gap-4">
            <div className="flex items-center gap-4 rounded-lg bg-secondary p-4">
              <RotateCw size="24" className="text-primary" />
              <p className="prose prose-sm md:prose-base">
                You&apos;ve tried creams, oils, and home remedies.
              </p>
            </div>
            <div className="flex items-center gap-4 rounded-lg bg-secondary p-4">
              <DollarSignIcon size="24" className="text-primary" />
              <p className="prose prose-sm md:prose-base">
                You&apos;re spending money on products that don&apos;t work.
              </p>
            </div>
            <div className="flex items-center gap-4 rounded-lg bg-secondary p-4">
              <Hourglass size="24" className="text-primary" />
              <p className="prose prose-sm md:prose-base">
                You wait in long lines or travel far for appointments.
              </p>
            </div>
            <div className="flex items-center gap-4 rounded-lg bg-secondary p-4">
              <FrownIcon size="24" className="text-primary" />
              <p className="prose prose-sm md:prose-base">
                You feel disappointed when the results don&apos;t last.
              </p>
            </div>
          </div>
        </div>

        <div className="relative order-1 flex aspect-[1/1] h-full w-full items-center justify-center rounded-2xl sm:aspect-[4/3] md:order-2">
          <Image
            src="/images/situation.webp"
            alt="Are You Tired of Trying Everything with No Results?"
            fill
            sizes="100vw"
            loading="lazy"
            className="rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
