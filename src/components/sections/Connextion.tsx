import Image from 'next/image';

export default function Connextion() {
  return (
    <section className="px-4 py-8 md:px-6">
      <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-8 md:grid-cols-2">
        <Image
          src="/images/connextion.jpeg"
          alt="hero"
          width={1024}
          height={1024}
          className="rounded-2xl"
        />

        <div className="flex w-full flex-col gap-4">
          <h2 className="prose prose-xl md:prose-2xl font-bold">
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
