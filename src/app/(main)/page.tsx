import {Blockquote, CTA, Hero} from '@/components/sections';

export default function Home() {
  return (
    <main className="flex min-h-dvh w-full flex-col">
      <Hero />
      <Blockquote />
      <CTA />
    </main>
  );
}
