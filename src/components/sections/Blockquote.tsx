import {Quote} from 'lucide-react';

export default function Blockquote() {
  return (
    <section className="w-full bg-secondary px-4 md:px-6">
      <div className="mx-auto flex max-w-screen-lg flex-col items-center justify-center gap-4 px-4 py-12 md:px-6">
        <Quote className="fill-primary text-primary" />

        <blockquote className="prose prose-sm text-center font-medium md:prose-base lg:prose-lg">
          ”I created SkinSage because everyone deserves clear and healthy skin, without worrying
          about money. Growing up in a small town, I saw how hard it was for my family to get good
          skincare advice. That&apos;s why I wanted to make it easier for everyone, no matter where
          they live”
        </blockquote>
        <cite className="prose prose-sm text-center font-medium md:prose-base lg:prose-lg">
          - Vivekananda
        </cite>
      </div>
    </section>
  );
}
