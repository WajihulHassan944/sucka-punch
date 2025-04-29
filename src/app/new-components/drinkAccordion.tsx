'use client'; // (only needed if using Next.js App Router)
import Jar from './../../../public/images/Jar.png'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { useState } from 'react';

const accordionItems = [
  {
    id: 'item-1',
    title: 'Bold, But Never Too Much',
    number: '01',
    bgColor: 'bg-green-900',
    textColor: 'text-white',
    content: `Let's discuss flavor. No one wants to drink something that tastes like regret. Though not too strong, SUCKA PUNCH&apos;s tastes are strong. Every squeeze has character—just enough to awaken your water, not control it. These are not phony sugar tastes either. They&apos;re meant for adult taste senses looking for balance..`,
    image: Jar, 
  },
  {
    id: 'item-2',
    title: 'Fresh and Fruity.',
    number: '02',
    bgColor: 'bg-green-700',
    textColor: 'text-white',
    content: `Consider fruit-forward combinations. A little sourness. A tidy conclusion. Not sticky. Not fake. Just enough kick to keep your taste senses interested. Every drop seems deliberate, from fruit combinations to tropical tangs. These are smarter, cleaner, and made for the present rather than your childhood fruit punches.`,
    image: Jar, 
  },
  {
    id: 'item-3',
    title: 'Not Just One-Note.',
    number: '03',
    bgColor: 'bg-green-600',
    textColor: 'text-white',
    content: `Every taste's profundity guarantees its evolution with your sip. Go big with a few extra drops or add less for a delicate accent. Either way, you will receive something that seems layered and adult. Over time, that makes it more pleasurable. Not only the initial few swallows but the whole drink holds it up.`,
    image: Jar, 
  },
  {
    id: 'item-4',
    title: 'Flavors That Grow With You',
    number: '04',
    bgColor: 'bg-green-400',
    textColor: 'text-white',
    content: `The ever-changing taste selection adds to the enjoyment. A new favorite could drop at any time. Collaborations with artists, seasonal surprises, or limited editions guarantee that you will return to check what follows. Like following a favorite playlist; you love the hits but are constantly eager for the next song.`,
    image: Jar, 
  },
];

export default function DrinksAccordion() {
  const [openItem, setOpenItem] = useState<string | null>('item-3');

  const handleValueChange = (value: string) => {
    setOpenItem((prev) => (prev === value ? null : value));
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6 rounded-lg mb-7 md:mb-10 lg:mb-20">
      <div className='max-w-3xl mx-auto'>
      <h2 className="text-[#044588] text-4xl font-bold mb-2 text-center">
       Flavor Profiles That Hit Right
        </h2>
        <p className='text-center text-lg mb-12'>{"Let's"} discuss flavor. No one wants to drink something that tastes like regret. Though not too strong, SUCKA PUNCH tastes genuine and refreshing.

</p>
      </div>
     
      <Accordion
        type="single"
        value={openItem ?? undefined}
        onValueChange={handleValueChange}
        collapsible
      >
        {accordionItems.map((item) => (
          <AccordionItem
            key={item.id}
            value={item.id}
            className={`rounded-lg overflow-hidden border-none ${openItem === item.id ? 'mb-4' : 'mb-0'}`}
          >
            <AccordionTrigger className={`${item.bgColor} ${item.textColor} p-3 md:p-6 hover:no-underline`}>
              <div className="flex justify-between items-center w-full">
                <h2 className="text-xl sm:text-2xl font-bold text-left whitespace-pre-line">{item.title}</h2>
                <span className="text-xl sm:text-2xl md:text-3xl font-bold">{item.number}</span>
              </div>
            </AccordionTrigger>

            <AccordionContent className="bg-slate-50 p-6">
              <div className="flex justify-between items-baseline-last gap-6">
                <p className="text-green-900 w-full text-lg">{item.content}</p>
              
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
