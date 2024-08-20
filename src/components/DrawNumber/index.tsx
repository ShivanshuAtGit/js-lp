import React from 'react';
import { playFlairFont } from '@/utils/fonts';

const DrawNumber = ({ number }: { number: string }) => {
  return (
    <div className="absolute right-0 bottom-0 w-full flex items-center justify-end gap-4 py-5">
      <h4 className={`${playFlairFont.className} line-number`}>{number}</h4>
      <div className="w-1/3 h-px bg-[#460B2F]" />
    </div>
  );
};

export default DrawNumber;
