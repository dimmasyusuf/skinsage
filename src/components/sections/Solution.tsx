import Image from 'next/image';

export default function Solution() {
  return (
    <section className="px-4 py-8 md:px-6">
      <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-8 md:grid-cols-2">
        <div className="order-2 flex w-full flex-col md:order-1">
          <div className="flex flex-col">
            <h2 className="prose prose-xl md:prose-2xl font-bold">How does it work?</h2>
          </div>

          <div className="mt-4 flex flex-col gap-4">
            <div className="bg-secondary flex flex-col rounded-lg p-4">
              <p className="prose prose-sm md:prose-base font-semibold">
                Step 1: Share Your Skin Concern
              </p>
              <p className="prose prose-sm md:prose-base">
                Tell us about your skin issue – answer a few quick questions and upload a picture of
                your skin.
              </p>
            </div>
            <div className="bg-secondary flex flex-col rounded-lg p-4">
              <p className="prose prose-sm md:prose-base font-semibold">Step 2: Instant Advice</p>
              <p className="prose prose-sm md:prose-base">
                SkinSage analyses your problem and gives you immediate feedback—whether it&apos;s a
                simple fix or requires a doctor&apos;s help.
              </p>
            </div>
            <div className="bg-secondary flex flex-col rounded-lg p-4">
              <p className="prose prose-sm md:prose-base font-semibold">
                Step 3: Get Help or Shop for Solutions
              </p>
              <p className="prose prose-sm md:prose-base">
                If you need a doctor, we&apos;ll schedule a video consultation. If not, we&apos;ll
                recommend affordable products you can buy immediately.
              </p>
            </div>
          </div>
        </div>

        <Image
          src="/images/solution.jpeg"
          alt="hero"
          width={1024}
          height={1024}
          className="order-1 rounded-2xl md:order-2"
        />
      </div>
    </section>
  );
}
