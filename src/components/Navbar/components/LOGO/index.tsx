import React from 'react';
import { Italiana } from 'next/font/google';

const inter = Italiana({
  subsets: ['latin'],
  weight: ['400']
});

interface Props {
  className?: string;
}

const LOGO = ({ className }: Props) => {
  return (
    <h3 className={`${inter.className} nav-logo cursor-pointer ${className}`}>
      <strong>JS</strong>
    </h3>
  );
};

export default LOGO;
