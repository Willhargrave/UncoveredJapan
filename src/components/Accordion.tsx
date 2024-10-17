'use client';

import { useState } from 'react';

type AccordionProps = {
  title: string;
  children: React.ReactNode;
};
const Accordion = ({ title, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 overflow-hidden rounded-lg shadow-md">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between bg-gray-100 px-4 py-3 text-left text-lg font-semibold text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
      >
        {title}
      </button>
      {isOpen && (
        <div className="mt-2 rounded-lg border border-gray-300 bg-gradient-to-br from-white to-gray-100 p-4 shadow-inner">
          <div className="text-center font-serif text-gray-700">{children}</div>
          <div className="mt-3 text-right text-sm text-gray-500">
            Japan Alternative Guide
          </div>
        </div>
      )}
    </div>
  );
};

export default Accordion;
