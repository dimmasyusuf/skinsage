import {Belief, Blockquote, CTA, Hero, Situation} from '@/components/sections';

export default function Home() {
  return (
    <main className="flex min-h-dvh w-full flex-col">
      <Hero />
      <Blockquote />
      <Situation />
      <Belief />
      <CTA />
    </main>
  );
}
