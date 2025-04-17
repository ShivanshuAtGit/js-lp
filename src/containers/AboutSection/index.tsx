import React from 'react';
import Image from 'next/image';
import { playFlairFont } from '@/utils/fonts';

import DrawNumber from '@/components/DrawNumber';

import aboutPic from '@/Assets/Images/about-pic.png';
import './styles.modules.css';

const AboutSection = () => {
  return (
    <section id="about" className="NAV_SECTION">
      <div className="max-w-128 px-5 md:px-20 mx-auto">
        <div className="section-grid_child">
          <h2 className={`${playFlairFont.className} t-ternary`}>About</h2>
          <h3
            className={`${playFlairFont.className} t-secondary t-gradient pt-2 sm:pt-4`}
          >
            Jagran Samrat
          </h3>
          <p className="t-para pt-2 sm:pt-4">
            A distinguished artist who uses soulful music to{' '}
            <strong>Sanskritik Virasat</strong> and <strong>Sanskar</strong>{' '}
            into society while bridging Bharat&apos;s rich cultural heritage and
            values.
          </p>
          <div className="about-img-wrap relative aspect-[4/3]">
            <Image
              alt="Jagran Samrat Dharmendra Pandey"
              src={aboutPic}
              width={500}
              height={375}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover rounded-lg"
              priority
              quality={90}
            />
          </div>
        </div>
        <div className="section-grid_child">
          <p className="t-para">
            Dharmendra Pandey, also known as Jagran Samrat, is a musician and a
            cultural enthusiast who beautifully blends Bharat&apos;s rich
            Sanskar and Shiksha with music. He uses music as a medium to convey
            powerful messages to society. Working for Sanatan Dharma, his
            purpose is to deliver eye-opening performances that inspire and
            uplift the Samaj. He is dedicated to offering his musical services
            to achieve this noble goal.
            <br />
            <br />
            <strong>
              With a deep passion for preserving and promoting Indian cultural
              heritage, Dharmendra has dedicated his life to spreading awareness
              about the values of Sanatan Dharma through his music.
            </strong>
            <br />
            <br />
            <span
              className={`${playFlairFont.className} t-highlight t-gradient`}
            >
              My goal is not only to entertain but to enlighten, using his
              performances as a tool to awaken the spiritual consciousness of
              his audience.
            </span>{' '}
            <br />
            <br />I strives to create a lasting impact by encouraging people to
            reconnect with their roots and embrace the timeless wisdom of our
            traditions. Dharmendra is committed to offering his musical services
            to fulfill this noble mission, ensuring that the rich cultural
            legacy of Bharat is passed down to future generations.
          </p>
          <DrawNumber number={'02'} />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
