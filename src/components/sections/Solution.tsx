import Image from 'next/image';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui';

export default function Solution() {
  return (
    <section id="solution" className="px-4 py-8 md:px-6">
      <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-8 md:grid-cols-2">
        <div className="order-2 flex w-full flex-col md:order-1">
          <div className="flex flex-col">
            <h2 className="prose prose-xl font-bold md:prose-2xl">How does it work?</h2>
          </div>

          <Accordion type="single" defaultValue="step-1" collapsible>
            <AccordionItem value="step-1">
              <AccordionTrigger className="h-20 text-base font-semibold hover:no-underline">
                Step 1: Share Your Skin Concern
              </AccordionTrigger>
              <AccordionContent>
                Tell us about your skin issue – answer a few quick questions and upload a picture of
                your skin.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="step-2">
              <AccordionTrigger className="h-20 text-base font-semibold hover:no-underline">
                Step 2: Instant Advice
              </AccordionTrigger>
              <AccordionContent>
                SkinSage analyses your problem and gives you immediate feedback—whether it&apos;s a
                simple fix or requires a doctor&apos;s help.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="step-3">
              <AccordionTrigger className="h-20 text-base font-semibold hover:no-underline">
                Step 3: Get Help or Shop for Solutions
              </AccordionTrigger>
              <AccordionContent>
                If you need a doctor, we&apos;ll schedule a video consultation. If not, we&apos;ll
                recommend affordable products you can buy immediately.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="relative order-1 flex aspect-[1/1] h-full w-full items-center justify-center rounded-2xl sm:aspect-[4/3] md:order-2">
          <Image
            src="/images/solution.webp"
            alt="How does it work?"
            fill
            sizes="100vw"
            loading="lazy"
            className="rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
