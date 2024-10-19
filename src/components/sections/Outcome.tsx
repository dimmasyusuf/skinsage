import Image from 'next/image';

export default function Outcome() {
  return (
    <section className="px-4 py-8 md:px-6">
      <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-8 md:grid-cols-2">
        <Image
          src="/images/outcome.jpeg"
          alt="hero"
          width={1024}
          height={1024}
          className="w- rounded-2xl"
        />

        <div className="flex w-full flex-col">
          <h2 className="prose prose-xl md:prose-2xl font-bold">Now Imagine...</h2>

          <div className="mt-4 flex flex-col gap-4">
            <div className="bg-secondary flex items-center gap-4 rounded-lg p-4">
              <p className="prose prose-sm md:prose-base">
                You wake up in the morning, and your skin looks and feels fresh. No more feeling
                self-conscious or avoiding family gatherings because of skin issues. You feel proud
                and confident, ready to face the day with a smile.
              </p>
            </div>
            <div className="bg-secondary flex items-center gap-4 rounded-lg p-4">
              <p className="prose prose-sm md:prose-base">
                You don&apos;t need to travel far or spend hours in a doctor&apos;s office. You get
                the right advice from the comfort of your home, saving time and money.
              </p>
            </div>
            <div className="bg-secondary flex items-center gap-4 rounded-lg p-4">
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
