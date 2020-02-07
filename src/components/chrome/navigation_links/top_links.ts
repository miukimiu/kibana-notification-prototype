// @ts-ignore
import { home } from '../assets/home';
import { ChromeNavGroupProps } from '../chrome';

export const TopLinks: ChromeNavGroupProps = {
  links: [
    {
      label: 'Home',
      iconType: home,
      isActive: true,
    },
    {
      label: 'Settings',
      iconType: 'gear',
    },
  ],
};
