import React, { useState } from 'react';
import { navigate } from 'gatsby';

import { EuiIcon, EuiSideNav } from '@elastic/eui';

export const KibanaManagementNav = () => {
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
    createItem('Overview', { url: 'stack-management' }),
    createItem('Elasticsearch', {
      icon: <EuiIcon type="logoElasticsearch" />,
      items: [
        createItem('Data sources', { disabled: true }), // TODO: Allow side nav items to be disabled
        createItem('Users'),
        createItem('Roles'),
        createItem('Watches'),
        createItem(
          'Extremely long title will become truncated when the browser is narrow enough'
        ),
      ],
    }),
    createItem('Kibana', {
      icon: <EuiIcon type="logoKibana" />,
      items: [
        createItem('Advanced settings', {
          items: [createItem('General'), createItem('Visualizations')],
        }),
        createItem('Index Patterns'),
        createItem('Saved Objects'),
        createItem('Reporting'),
      ],
    }),
    createItem('Logstash', {
      icon: <EuiIcon type="logoLogstash" />,
      items: [createItem('Pipeline viewer')],
    }),
    createItem('Ingest Manager', { url: 'ingest-manager' }),
  ];

  return (
    <EuiSideNav
      mobileTitle="Navigate within $APP_NAME"
      toggleOpenOnMobile={toggleOpenOnMobile}
      isOpenOnMobile={isSideNavOpenOnMobile}
      items={sideNav}
      style={{ width: 192 }}
    />
  );
};
