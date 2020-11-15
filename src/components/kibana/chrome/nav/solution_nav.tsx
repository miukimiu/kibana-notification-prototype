import React, { useState } from 'react';
import { navigate } from 'gatsby';

import { EuiIcon, EuiSideNav, EuiSpacer, EuiTitle } from '@elastic/eui';

type Props = {
  currentUrl?: string;
};

export function KibanaSolutionNav({ currentUrl = 'stack-management' }: Props) {
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
    createItem('Overview', { url: 'stack-management' }),
    createItem('Console', {
      items: [
        createItem('Index Patterns'),
        createItem('Saved Objects'),
        createItem('Spaces'),
        createItem('Reporting'),
        createItem('Advanced settings', {
          items: [createItem('General'), createItem('Visualizations')],
        }),
      ],
    }),
    createItem('Security', {
      items: [
        createItem('Users'),
        createItem('Roles'),
        createItem('API Keys'),
        createItem('Role Mappings'),
      ],
    }),
    createItem('Elasticsearch', {
      items: [
        createItem('Index Management'),
        createItem('Index Lifecycle Policies'),
        createItem('Rolllup Jobs'),
        createItem('Transforms'),
        createItem('Watcher'),
        createItem('Snapshot and Restore'),
        createItem('8.0 Upgrade Assistant'),
      ],
    }),
    createItem('Ingest Manager', {
      url: 'ingest-manager',
      items: [
        createItem('Integrations'),
        createItem('Configuration'),
        createItem('Fleet'),
        createItem('Datasets'),
      ],
    }),
  ];

  return (
    <>
      <EuiTitle size="xs">
        <h2>
          <EuiIcon size="l" type="managementApp" /> &ensp; Management
        </h2>
      </EuiTitle>
      <EuiSpacer />
      <EuiSideNav
        mobileTitle="Navigate within $APP_NAME"
        toggleOpenOnMobile={toggleOpenOnMobile}
        isOpenOnMobile={isSideNavOpenOnMobile}
        items={sideNav}
      />
    </>
  );
}
