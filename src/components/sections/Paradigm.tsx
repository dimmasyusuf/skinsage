import {Button} from '@/components/ui';

export default function Paradigm() {
  return (
    <section className="px-4 py-8 md:px-6">
      <div className="bg-primary mx-auto flex max-w-screen-lg flex-col items-center justify-center gap-8 rounded-2xl px-6 py-12">
        <h2 className="prose prose-xl md:prose-2xl text-primary-foreground text-center font-bold">
          Introducing SkinSage,
          <br />a New Way to Solve Your Skin Problems
        </h2>
        <p className="prose prose-sm md:prose-base text-primary-foreground">
          SkinSage is free and different from anything you&apos;ve tried before. Our smart skin tool
          quickly checks your skin issue and tells you if you need to see a doctor or if a simple
          product can help. This isn&apos;t guesswork - it&apos;s based on science and tailored to
          your skin type.
        </p>
        <p className="prose prose-sm md:prose-base text-primary-foreground">
          SkinSage gives you a clear answer. If you need medical attention, we&apos;ll set up a
          video consultation with a doctor. If not, you&apos;ll get product recommendations designed
          to fix your issue, and you can buy them with a single click.
        </p>

        <Button size="lg" variant="secondary">
          Yes, I want to try SkinSage
        </Button>
      </div>
    </section>
  );
}
