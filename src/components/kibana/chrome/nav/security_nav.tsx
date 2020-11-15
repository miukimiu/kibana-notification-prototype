import React, { useState } from 'react';
import { navigate } from 'gatsby';

import { EuiSideNav } from '@elastic/eui';

export const SecurityNav = () => {
  const [isSideNavOpenOnMobile, setIsSideNavOpenOnMobile] = useState(false);
  const [selectedItemName, setSelectedItem] = useState('Overview');

  const toggleOpenOnMobile = () => {
    setIsSideNavOpenOnMobile(!isSideNavOpenOnMobile);
  };

  const selectItem = (name: string) => {
    setSelectedItem(name);
  };

  const createItem = (name: string, data = {}) => {
    return {
      ...data,
      id: name,
      name,
      isSelected: selectedItemName === name,
      // @ts-ignore
      onClick: data.url
        ? () => {
            // @ts-ignore
            navigate(data.url);
            selectItem(name);
          }
        : () => selectItem(name),
    };
  };

  const sideNav = [
    createItem('Overview', { url: 'security-overview' }),
    createItem('Alerts'),
    createItem('Hosts', {
      items: [
        createItem('All hosts', { disabled: true }), // TODO: Allow side nav items to be disabled
        createItem('Anamolies'),
        createItem('Authentication list'),
        createItem('Events', { url: 'security-event' }),
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
    <EuiSideNav
      mobileTitle="Navigate within security"
      toggleOpenOnMobile={toggleOpenOnMobile}
      isOpenOnMobile={isSideNavOpenOnMobile}
      items={sideNav}
      style={{ width: 192 }}
    />
  );
};
