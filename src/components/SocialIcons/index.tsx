import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { socialIconConfig } from '@/constants/config.navigation';

const SocialIcons = () => {
  return (
    <div className="max-w-128 px-5 md:px-20 mx-auto ">
      <div className="flex gap-4 lg:pb-[150px] pb-[100px] lg:pt-[0] pt-[100px] ">
        {Object.keys(socialIconConfig).map((socialKey) => {
          const socialIcon = socialIconConfig[socialKey];
          return (
            <Link
              key={socialKey}
              href={socialIcon.link}
              rel="canonical"
              target="_blank"
              className="social_icon"
            >
              <Image
                alt={`${socialKey} icon`}
                src={socialIcon.icon}
                width={24}
                height={24}
                className="object-contain"
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SocialIcons;
