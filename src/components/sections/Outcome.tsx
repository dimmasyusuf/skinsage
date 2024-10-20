import Image from 'next/image';

export default function Outcome() {
  return (
    <section id="vision" className="px-4 py-8 md:px-6">
      <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-8 md:grid-cols-2">
        <div className="relative flex aspect-[1/1] h-full w-full items-center justify-center rounded-2xl sm:aspect-[4/3]">
          <Image
            src="/images/outcome.webp"
            alt="Now Imagine..."
            fill
            sizes="100vw"
            loading="lazy"
            className="rounded-2xl object-cover"
          />
        </div>

        <div className="flex w-full flex-col">
          <h2 className="prose prose-xl font-bold md:prose-2xl">Now Imagine...</h2>

          <div className="mt-4 flex flex-col gap-4">
            <div className="flex items-center gap-4 rounded-lg bg-secondary p-4">
              <p className="prose prose-sm md:prose-base">
                You wake up in the morning, and your skin looks and feels fresh. No more feeling
                self-conscious or avoiding family gatherings because of skin issues. You feel proud
                and confident, ready to face the day with a smile.
              </p>
            </div>
            <div className="flex items-center gap-4 rounded-lg bg-secondary p-4">
              <p className="prose prose-sm md:prose-base">
                You don&apos;t need to travel far or spend hours in a doctor&apos;s office. You get
                the right advice from the comfort of your home, saving time and money.
              </p>
            </div>
            <div className="flex items-center gap-4 rounded-lg bg-secondary p-4">
              <p className="prose prose-sm md:prose-base">
                Your skincare routine is simple, affordable, and actually works. You no longer worry
                about acne or skin irritation – just healthy, glowing skin.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
