import {Quote} from 'lucide-react';

export default function Blockquote() {
  return (
    <section className="bg-secondary w-full">
      <div className="mx-auto flex max-w-screen-lg flex-col items-center justify-center gap-4 px-4 py-8 md:px-6">
        <Quote className="text-primary fill-primary" />

        <blockquote className="prose prose-sm md:prose-base lg:prose-lg text-center font-medium">
          ”I created SkinSage because everyone deserves clear and healthy skin, without worrying
          about money. Growing up in a small town, I saw how hard it was for my family to get good
          skincare advice. That&apos;s why I wanted to make it easier for everyone, no matter where
          they live”
        </blockquote>
        <cite className="prose prose-sm md:prose-base lg:prose-lg text-center font-medium">
          - Vivekananda
        </cite>
      </div>
    </section>
  );
}
