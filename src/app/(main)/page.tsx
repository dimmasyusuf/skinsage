import {Belief, Blockquote, CTA, Hero, Outcome, Situation} from '@/components/sections';

export default function Home() {
  return (
    <main className="flex min-h-dvh w-full flex-col">
      <Hero />
      <Blockquote />
      <Situation />
      <Belief />
      <Outcome />
      <CTA />
    </main>
  );
}
