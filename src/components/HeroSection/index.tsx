'use client';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

import { playFlairFont } from '@/utils/fonts';

import DeviceRenderer from '@/components/DeviceRenderer';

import topLineSVG from './Images/top-line.svg';
import pageMarkSVG from './Images/page-mark.svg';
import mWebTopLineSVG from './Images/top-line-mweb.svg';
import mWebPageMarkSVG from './Images/page-mark-mweb.svg';

export default function HeroSection() {
  return (
    <section id="home" className="hero__container NAV_SECTION">
      <div className="pt-[227px] sm:pt-[60vh]">
        <DeviceRenderer renderOn={['desktop', 'tablet']}>
          <Image alt="top-line" src={topLineSVG} />
        </DeviceRenderer>
        <DeviceRenderer renderOn={'phone'}>
          <Image alt="top-line" src={mWebTopLineSVG} />
        </DeviceRenderer>
        <div className="max-w-128 px-5 md:px-20 mx-auto py-10">
          <h1 className={`${playFlairFont.className} hero_primary_title`}>
            {' '}
            Jagran Samrat
          </h1>
          <h2
            className={`${playFlairFont.className} hero_secondary_title pt-2 sm:pt-4`}
          >
            {' '}
            Dharmendra Pandey
          </h2>
        </div>
        <DeviceRenderer renderOn={['desktop', 'tablet']}>
          <Image className="ml-auto" alt="page-mark" src={pageMarkSVG} />
        </DeviceRenderer>
        <DeviceRenderer renderOn={'phone'}>
          <Image className="ml-auto" alt="page-mark" src={mWebPageMarkSVG} />
        </DeviceRenderer>
      </div>
    </section>
  );
}
