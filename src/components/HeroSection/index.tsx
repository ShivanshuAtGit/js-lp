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
    <section
      id="home"
      className="hero__container NAV_SECTION"
      aria-label="Hero Section"
    >
      <div className="md:-mx-10">
        <div className="pt-[220px] sm:pt-[380px] w-full">
          <DeviceRenderer renderOn={['desktop', 'tablet']}>
            <Image
              alt="Decorative top line"
              src={topLineSVG}
              priority
              loading="eager"
            />
          </DeviceRenderer>
          <DeviceRenderer renderOn={'phone'}>
            <Image
              alt="Decorative top line for mobile"
              src={mWebTopLineSVG}
              priority
              loading="eager"
            />
          </DeviceRenderer>
          <div className="max-w-128 px-5 md:px-20 mx-auto py-10">
            <h1 className={`${playFlairFont.className} hero_primary_title`}>
              Jagran Samrat
            </h1>
            <h2
              className={`${playFlairFont.className} hero_secondary_title pt-4 sm:pt-4`}
            >
              Dharmendra Pandey
            </h2>
          </div>
          <DeviceRenderer renderOn={['desktop', 'tablet']}>
            <Image
              className="ml-auto"
              alt="Decorative page mark"
              src={pageMarkSVG}
              priority
              loading="eager"
            />
          </DeviceRenderer>
          <DeviceRenderer renderOn={'phone'}>
            <Image
              className="ml-auto"
              alt="Decorative page mark for mobile"
              src={mWebPageMarkSVG}
              priority
              loading="eager"
            />
          </DeviceRenderer>
        </div>
      </div>
    </section>
  );
}
