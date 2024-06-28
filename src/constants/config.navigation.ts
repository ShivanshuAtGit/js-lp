import facebookIcon from '@/Assets/Images/Icons/Social/facebook.svg';
import instaIcon from '@/Assets/Images/Icons/Social/insta.svg';
import twitterIcon from '@/Assets/Images/Icons/Social/twitter.svg';
import youtubeIcon from '@/Assets/Images/Icons/Social/youtube.svg';

import { StaticImport } from 'next/dist/shared/lib/get-img-props';

type NavProps = {
  [val: string]: string
};

type SocialProps = {
  [val: string]: {
    link: string,
    icon: StaticImport
  }
}

export const navLinksToRoutes: NavProps = {
  HOME: 'Home',
  ABOUT: 'About',
  VIDEOS: 'Videos',
  EVENTS: 'Events'
};

export const socialIconConfig: SocialProps = {
  'INSTA': {
    link: '',
    icon: instaIcon
  },
  'FACEBOOK': {
    link: '',
    icon: facebookIcon
  },
  'TWITTER': {
    link: '',
    icon: twitterIcon
  },
  'YOUTUBE': {
    link: '',
    icon: youtubeIcon
  }
}