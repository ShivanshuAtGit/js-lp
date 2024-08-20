import React from 'react';
import Image from 'next/image';

import {
  navLinksToRoutes,
  socialIconConfig
} from '@/constants/config.navigation';

import LOGO from '../LOGO';

import JSIcon from '../../Images/JS.svg';
import crossIcon from '../../Images/cross.svg';

interface Props {
  closeModal: () => void;
  showModal: boolean;
  currentSection: string;
  handleScrollToSection: (e: any, section: string) => void;
}

const NavModal = ({
  closeModal,
  showModal,
  currentSection,
  handleScrollToSection
}: Props) => {
  const navKeys = Object.keys(navLinksToRoutes);

  return (
    <div
      className={`fixed inset-0 h-full w-full bg-white px-5 py-4 nav_modal${showModal ? ' open' : ''}`}
    >
      <div className="nav__js-icon">
        <Image alt="JS" src={JSIcon} />
      </div>
      <div className="relative w-full">
        <div className="absolute flex w-full justify-between ">
          <LOGO className="mWeb" />
          <Image alt="menu" src={crossIcon} onClick={closeModal} />
        </div>
      </div>

      <div className="flex flex-col h-full w-full justify-center items-center">
        {navKeys.map((navKey) => (
          <a
            className={`nav-text cursor-pointer mWeb ${currentSection === navKey.toLowerCase() ? 'current' : ''}`}
            key={navKey}
            onClick={(e) => handleScrollToSection(e, navKey)}
          >
            {navLinksToRoutes[navKey]}
          </a>
        ))}
      </div>

      <div className="relative">
        <div className="absolute bottom-5 flex flex-col items-center gap-4 left-2/4 translate-x-[-50%]">
          <p>Follow us to know more</p>
          <div className="flex gap-4">
            {Object.keys(socialIconConfig).map((socialKey) => {
              const socialIcon = socialIconConfig[socialKey];
              return (
                <a
                  className="social_icon"
                  href={socialIcon.link}
                  key={socialKey}
                >
                  <Image alt={socialKey} src={socialIcon.icon} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavModal;
