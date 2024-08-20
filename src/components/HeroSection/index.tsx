'use client';
import Image from 'next/image';

import { playFlairFont } from '@/utils/fonts';

import DeviceRenderer from '@/components/DeviceRenderer';

import topLineSVG from '@/Assets/Images/Icons/line-and-number/top-line.svg';
import pageMarkSVG from '@/Assets/Images/Icons/line-and-number/page-mark.svg';
import mWebTopLineSVG from '@/Assets/Images/Icons/line-and-number/top-line-mweb.svg';
import mWebPageMarkSVG from '@/Assets/Images/Icons/line-and-number/page-mark-mweb.svg';

export default function HeroSection() {
  return (
    <section id="home" className="hero__container NAV_SECTION">
      <div className="">
        <div className="pt-[250px] sm:pt-[400px] w-full">
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
              className={`${playFlairFont.className} hero_secondary_title pt-4 sm:pt-4`}
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
      </div>
    </section>
  );
}
