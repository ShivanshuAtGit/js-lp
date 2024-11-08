'use client';
import Image from 'next/image';

import { socialIconConfig } from '@/constants/config.navigation';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/containers/AboutSection';
import VideosSection from '@/containers/VideosSection';
import ContactSection from '@/containers/ContactSection';
import LineDraw from '@/components/DrawLineComponent';
import SocialIcons from '@/components/SocialIcons';
import ContactButtons from '@/components/ContactButtons';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <link href="/favicon.png" rel="shortcut icon" type="image/x-icon" />
      </Head>
      <main>
        <Navbar />
        <HeroSection />
        <section className="common__container">
          <div>
            <AboutSection />
            <LineDraw renderOn="dWeb" />
            <LineDraw renderOn="mWeb" />
            <VideosSection />
            <LineDraw renderOn="dWeb" />
            <LineDraw renderOn="mWeb" />
            <ContactSection />
            <SocialIcons />
            <ContactButtons />
          </div>
        </section>
      </main>
    </>
  );
}
