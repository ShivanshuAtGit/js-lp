'use client';
import React, { useEffect, useState } from 'react';

import { navLinksToRoutes } from '@/constants/config.navigation';

import DeviceRenderer from '../DeviceRenderer';
import NavModal from './components/NavModal';
import LOGO from './components/LOGO';

import HamburgerSVG from './Images/hamburger';
import './styles.css';

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
      for (const section of sections) {
        const sectionTop = section.offsetTop;
        const scrollWindowTop =
          window.pageYOffset || document.documentElement.scrollTop;
        setIsScrolled(scrollWindowTop > 10);

        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          current = section.id;
        }
      }

      setCurrentSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navKeys = Object.keys(navLinksToRoutes);

  const toggleModal = () => {
    if (showModal) {
      // Start closing animation
      const modal = document.querySelector('.nav_modal');
      if (modal) {
        modal.classList.remove('open');
        // Wait for animation to complete before hiding
        setTimeout(() => {
          setModal(false);
        }, 300); // Match this with the transition duration
      }
    } else {
      setModal(true);
      // Small delay to ensure the modal is in the DOM before adding the open class
      setTimeout(() => {
        const modal = document.querySelector('.nav_modal');
        if (modal) {
          modal.classList.add('open');
        }
      }, 10);
    }
  };

  const handleScrollToSection = (e: React.MouseEvent, section: string) => {
    e.preventDefault();
    setModal(false);

    const targetSection = document.getElementById(section.toLowerCase());
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth'
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
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      handleScrollToSection(e as unknown as React.MouseEvent, key);
                    }
                  }}
                  tabIndex={0}
                >
                  {navLinksToRoutes[key]}
                </h3>
              ))}
            </div>
          </DeviceRenderer>
          <DeviceRenderer renderOn={'phone'}>
            <div
              onClick={toggleModal}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  toggleModal();
                }
              }}
              tabIndex={0}
              role="button"
              aria-label="Toggle menu"
            >
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
