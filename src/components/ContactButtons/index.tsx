import React from 'react';
import Image from 'next/image';
import phoneIcon from '@/Assets/Images/Icons/Social/phone.svg';
import Link from 'next/link';

const ContactButtons = () => {
  return (
    <Link
      href="tel:+917897217118"
      className="fixed bottom-4 right-4 bg-white p-4 rounded-full rounded-br-3xl shadow-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center"
      aria-label="Call us"
      rel="canonical"
      target="_blank"
    >
      <div className="relative h-10 w-10 text-green-500">
        <Image
          alt="Phone icon"
          src={phoneIcon}
          fill
          sizes="40px"
          className="object-contain"
        />
      </div>
    </Link>
  );
};

export default ContactButtons;
