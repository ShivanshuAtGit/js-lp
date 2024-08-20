import React from 'react';
import Image from 'next/image';

import DeviceRenderer from '@/components/DeviceRenderer';

import topLineSVG from '@/Assets/Images/Icons/line-and-number/top-line.svg';
import pageMarkSVG from '@/Assets/Images/Icons/line-and-number/page-mark.svg';
import mWebTopLineSVG from '@/Assets/Images/Icons/line-and-number/top-line-mweb.svg';
import mWebPageMarkSVG from '@/Assets/Images/Icons/line-and-number/page-mark-mweb.svg';

const LineDraw = ({ renderOn }: { renderOn: 'dWeb' | 'mWeb' }) => {
  if (renderOn === 'dWeb')
    return (
      <DeviceRenderer renderOn={['desktop', 'tablet']}>
        <Image alt="top-line" src={topLineSVG} />
      </DeviceRenderer>
    );
  return (
    <DeviceRenderer renderOn={'phone'}>
      <Image alt="top-line" src={mWebTopLineSVG} />
    </DeviceRenderer>
  );
};

export default LineDraw;
