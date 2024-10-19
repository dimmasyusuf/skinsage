import Image from 'next/image';

export default function Situation() {
  return (
    <section className="px-4 py-8 md:px-6">
      <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-8 md:grid-cols-2">
        <div className="order-2 flex w-full flex-col md:order-1">
          <div className="flex flex-col">
            <h2 className="prose prose-xl md:prose-2xl font-bold">
              Are You Tired of Trying Everything with No Results?
            </h2>
          </div>

          <div className="mt-4 flex flex-col gap-2">
            <div className="bg-secondary flex items-center gap-4 rounded-lg p-4">
              <p className="prose prose-sm md:prose-base">
                You&apos;ve tried creams, oils, and home remedies.
              </p>
            </div>
            <div className="bg-secondary flex items-center gap-4 rounded-lg p-4">
              <p className="prose prose-sm md:prose-base">
                You&apos;re spending money on products that don&apos;t work.
              </p>
            </div>
            <div className="bg-secondary flex items-center gap-4 rounded-lg p-4">
              <p className="prose prose-sm md:prose-base">
                You wait in long lines or travel far for appointments.
              </p>
            </div>
            <div className="bg-secondary flex items-center gap-4 rounded-lg p-4">
              <p className="prose prose-sm md:prose-base">
                You feel disappointed when the results don&apos;t last.
              </p>
            </div>
          </div>
        </div>

        <Image
          src="/images/situation.jpeg"
          alt="hero"
          width={1024}
          height={1024}
          className="order-1 rounded-2xl md:order-2"
        />
      </div>
    </section>
  );
}
