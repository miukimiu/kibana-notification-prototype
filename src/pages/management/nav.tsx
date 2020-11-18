import React, { useState } from 'react';
import { navigate } from 'gatsby';

import { EuiIcon, EuiSideNav, EuiSpacer, EuiTitle } from '@elastic/eui';

type Props = {
  currentItem?: string;
};

export function KibanaManagementNav({
  currentItem = 'management/stack',
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
      isSelected: name === currentItem,
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
    createItem('Overview', { url: 'management/stack' }),
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
    createItem('Fleet', {
      items: [
        createItem('Agents', { url: 'management/agents' }),
        createItem('Integrations', { url: 'management/ingest' }),
        // createItem('Fleet'),
        // createItem('Datasets'),
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
