import React from 'react';
// @ts-ignore
import { home } from '../assets/home';
import { ChromeNavGroupProps } from '../chrome';
import { EuiIcon } from '@elastic/eui';

export const TopLinks: ChromeNavGroupProps = {
  links: [
    {
      label: 'Home',
      // @ts-ignore - Throws an error in the console still
      icon: <EuiIcon type={home} />,
      isActive: true,
    },
    {
      label: 'Settings',
      iconType: 'gear',
    },
  ],
};
