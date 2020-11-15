import React, { useState } from 'react';
import { navigate } from 'gatsby';

import { EuiIcon, EuiSideNav } from '@elastic/eui';

export const ObservabilityNav = () => {
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
    createItem('Overview', { url: 'observability-overview' }),
    createItem('Logs', {
      items: [
        createItem('Stream', { disabled: true }), // TODO: Allow side nav items to be disabled
        createItem('Log rage'),
        createItem('Categories'),
        createItem('Settings'),
      ],
    }),
    createItem('Metrics'),
    createItem('APM', {
      items: [
        createItem('Services'),
        createItem('Traces', { url: 'observability-trace' }),
        createItem('Settings'),
      ],
    }),
    createItem('Uptime'),
  ];

  return (
    <EuiSideNav
      mobileTitle="Navigate within Observability"
      toggleOpenOnMobile={toggleOpenOnMobile}
      isOpenOnMobile={isSideNavOpenOnMobile}
      items={sideNav}
      style={{ width: 192 }}
    />
  );
};
