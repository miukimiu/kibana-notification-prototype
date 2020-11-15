import React, { useState } from 'react';
import { navigate } from 'gatsby';

import { EuiIcon, EuiSideNav, EuiSpacer, EuiTitle } from '@elastic/eui';

type Props = {
  currentUrl?: string;
};

export function SecurityNav({ currentUrl = 'security/overview' }: Props) {
  const [isSideNavOpenOnMobile, setIsSideNavOpenOnMobile] = useState(false);

  const toggleOpenOnMobile = () => {
    setIsSideNavOpenOnMobile(!isSideNavOpenOnMobile);
  };

  const createItem = (name: string, data = {}) => {
    return {
      ...data,
      id: name,
      name,
      // @ts-ignore
      isSelected: data.url && data.url === currentUrl,
      // @ts-ignore
      disabled: !data.url,
      // @ts-ignore
      onClick: data.url
        ? () => {
            // @ts-ignore
            navigate(data.url);
          }
        : () => {
            return null;
          },
    };
  };

  const sideNav = [
    createItem('Overview', { url: 'security/overview' }),
    createItem('Alerts'),
    createItem('Hosts', {
      items: [
        createItem('All hosts', { disabled: true }), // TODO: Allow side nav items to be disabled
        createItem('Anamolies'),
        createItem('Authentication list'),
        createItem('Events', { url: 'security/event' }),
      ],
    }),
    createItem('Network'),
    createItem('Investigations', {
      items: [
        createItem('Timelines'),
        createItem('Resolver'),
        createItem('Cases'),
      ],
    }),
    createItem('Management'),
  ];

  return (
    <>
      <EuiTitle size="xs">
        <h2>
          <EuiIcon size="l" type="logoSecurity" /> &ensp; Security
        </h2>
      </EuiTitle>
      <EuiSpacer />
      <EuiSideNav
        mobileTitle="Navigate within security"
        toggleOpenOnMobile={toggleOpenOnMobile}
        isOpenOnMobile={isSideNavOpenOnMobile}
        items={sideNav}
      />
    </>
  );
}
