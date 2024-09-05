'use client';
import React, { useEffect, useState } from 'react';

import { navLinksToRoutes } from '@/constants/config.navigation';

import DeviceRenderer from '../DeviceRenderer';
import NavModal from './components/NavModal';
import LOGO from './components/LOGO';

import HamburgerSVG from './Images/hamburger';

export default function Navbar() {
  const [currentSection, setCurrentSection] = useState<string>(
    navLinksToRoutes.HOME
  );
  const [showModal, setModal] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.NAV_SECTION');
      let current = '';
      sections.forEach((section: any) => {
        const sectionTop = section.offsetTop;

        const scrollWindowTop =
          window.pageYOffset || document.documentElement.scrollTop;
        setIsScrolled(scrollWindowTop > 10); // Update state based on scroll position

        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          current = section.id;
        }
      });

      setCurrentSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navKeys = Object.keys(navLinksToRoutes);

  const toggleModal = () => {
    setModal((prevState) => !prevState);
  };

  const handleScrollToSection = (e: any, section: string) => {
    e.preventDefault();
    setModal(false);

    const targetSection = document.getElementById(section.toLowerCase());

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth' // Smooth scrolling
      });
    }
  };

  return (
    <div
      className={`fixed z-10 w-full nav__bg${isScrolled ? ' nav__bg-white' : ''}`}
    >
      <header className="max-w-128 px-5 md:px-20 mx-auto">
        <nav className="flex justify-between items-center py-4 md:py-5">
          <LOGO />
          <DeviceRenderer renderOn={['desktop', 'tablet']}>
            <div className="flex gap-x-5">
              {navKeys.map((key) => (
                <h3
                  key={key}
                  className={`nav-text cursor-pointer ${currentSection === key.toLowerCase() ? 'current' : ''}`}
                  onClick={(e) => handleScrollToSection(e, key)}
                >
                  {navLinksToRoutes[key]}
                </h3>
              ))}
            </div>
          </DeviceRenderer>
          <DeviceRenderer renderOn={'phone'}>
            <div onClick={toggleModal}>
              <HamburgerSVG alt="menu" color={isScrolled ? 'black' : 'white'} />
            </div>
            <NavModal
              closeModal={toggleModal}
              showModal={showModal}
              handleScrollToSection={handleScrollToSection}
              currentSection={currentSection}
            />
          </DeviceRenderer>
        </nav>
      </header>
    </div>
  );
}
