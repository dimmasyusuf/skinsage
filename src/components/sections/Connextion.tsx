import Image from 'next/image';

export default function Connextion() {
  return (
    <section className="px-4 py-8 md:px-6">
      <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-8 md:grid-cols-2">
        <div className="relative flex aspect-[1/1] h-full w-full items-center justify-center rounded-2xl sm:aspect-[4/3]">
          <Image
            src="/images/connextion.webp"
            alt="From Struggle to Solution: My Family's Story"
            fill
            sizes="100vw"
            loading="lazy"
            className="rounded-2xl object-cover"
          />
        </div>

        <div className="flex w-full flex-col gap-4">
          <h2 className="prose prose-xl font-bold md:prose-2xl">
            From Struggle to Solution: My Family&apos;s Story
          </h2>

          <p className="prose prose-sm md:prose-base">
            I&apos;ve seen my family struggle with hyperpigmentation, trying everything from
            turmeric and aloe vera to drastic diet changes. Their hopes were high every time, but
            nothing seemed to work, and their disappointment grew. That&apos;s why I worked with
            dermatologists to create SkinSage. I want to help you find the proper support early on
            so you can finally feel confident in your skin and end the endless cycle of frustration.
          </p>

          <p className="prose prose-sm md:prose-base">
            We&apos;re not just another skincare brand. We&apos;re about giving you the confidence
            to love your skin again with confirmed solutions that work.
          </p>
        </div>
      </div>
    </section>
  );
}
