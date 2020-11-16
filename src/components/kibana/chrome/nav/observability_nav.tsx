import React, { useState } from 'react';
import { navigate } from 'gatsby';

import { EuiIcon, EuiSideNav, EuiSpacer, EuiTitle } from '@elastic/eui';

type Props = {
  currentUrl?: string;
};

export function ObservabilityNav({
  currentUrl = 'observability/overview',
}: Props) {
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
    createItem('Overview', { url: 'observability/overview' }),
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
    <>
      <EuiTitle size="xs">
        <h2>
          <EuiIcon size="l" type="logoObservability" /> &ensp; Observability
        </h2>
      </EuiTitle>
      <EuiSpacer />
      <EuiSideNav
        mobileTitle="Navigate within Observability"
        toggleOpenOnMobile={toggleOpenOnMobile}
        isOpenOnMobile={isSideNavOpenOnMobile}
        items={sideNav}
      />
    </>
  );
}
