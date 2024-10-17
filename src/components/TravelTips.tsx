import Image from 'next/image';

import Accordion from '@/components/Accordion';
import type { ContentData } from '@/content/slug-content';

export const TravelTips = ({ content }: { content: ContentData }) => {
  return (
    <div className="flex flex-col gap-8 p-4 md:flex-row">
      <div className="w-full md:w-1/2">
        <Image
          src={content.image}
          alt={content.name}
          width={800}
          height={600}
        />
      </div>
      <div className="flex-1">
        {/* eslint-disable-next-line tailwindcss/enforces-shorthand */}
        <h2 className="mb-5 mt-5 text-3xl">{content.description}</h2>
        <div className="space-y-4">
          {content.tips.map((tip, index) => (
            <Accordion key={index} title={tip.title}>
              <p>{tip.content}</p>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};
