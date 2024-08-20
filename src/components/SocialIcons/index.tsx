import React from 'react';
import Image from 'next/image';

import { socialIconConfig } from '@/constants/config.navigation';

const SocialIcons = () => {
  return (
    <div className="max-w-128 px-5 md:px-20 mx-auto ">
      <div className="flex gap-4 lg:pb-[150px] pb-[100px] lg:pt-[0] pt-[100px] ">
        {Object.keys(socialIconConfig).map((socialKey) => {
          const socialIcon = socialIconConfig[socialKey];
          return (
            <a className="social_icon" href={socialIcon.link} key={socialKey}>
              <Image alt={socialKey} src={socialIcon.icon} />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SocialIcons;
