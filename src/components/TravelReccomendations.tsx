import Image from 'next/image';
import React from 'react';

import type { TravelData } from '@/content/travel-content';

const lightColors = [
  'bg-blue-50',
  'bg-green-50',
  'bg-yellow-50',
  'bg-pink-50',
  'bg-purple-50',
  'bg-indigo-50',
];

const TravelItem = ({ item, index }: { item: TravelData; index: number }) => {
  const bgColor = lightColors[index % lightColors.length];
  return (
    <div
      className={`mb-12 flex flex-col gap-8 rounded-lg p-8 shadow-lg shadow-gray-500 ${bgColor}`}
    >
      <div className="w-full">
        <Image
          src={item.image}
          alt={item.name}
          width={400}
          height={400}
          className="h-[300px] w-full object-cover shadow-lg shadow-gray-500"
        />
      </div>
      <div className="flex w-full flex-col justify-center">
        <h2 className="mb-4 border-b-2 border-gray-500 pb-2 text-3xl font-bold capitalize tracking-wider">
          {item.name}
        </h2>
        <p className="text-lg font-light tracking-wide text-gray-700">
          {item.description}
        </p>
      </div>
    </div>
  );
};

const TravelReccomendations = ({
  content,
}: {
  content: Record<string, TravelData>;
}) => {
  return (
    <div>
      {Object.entries(content).map(([key, item], index) => (
        <TravelItem key={key} item={item} index={index} />
      ))}
    </div>
  );
};

export default TravelReccomendations;
