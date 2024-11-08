import React from 'react';
import Image from 'next/image';
import phoneIcon from '@/Assets/Images/Icons/Social/phone.svg';

const ContactButtons = () => {
  return (
    <a
      href="tel:+917897217118"
      className="fixed bottom-4 right-4 bg-white p-4 rounded-full rounded-br-3xl shadow-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center"
      aria-label="Call us"
    >
      <div className="h-10 w-10 text-green-500">
        <Image alt="phone" src={phoneIcon} />
      </div>
    </a>
  );
};

export default ContactButtons;
