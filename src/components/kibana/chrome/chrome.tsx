import React from 'react';

import { EuiHeaderLogo, Breadcrumb, EuiHeader } from '@elastic/eui';

import { user } from './data';

import {
  KibanaHeaderUpdates,
  KibanaHeaderUserMenu,
  KibanaHeaderSpacesMenu,
} from './header';

import { KibanaNav } from './nav';
import { KibanaChromeSearch } from './search';
import { navigate } from 'gatsby';

export type KibanaChromeProps = {
  breadcrumbs?: Breadcrumb[];
};

export const KibanaChrome: React.FunctionComponent<KibanaChromeProps> = ({
  breadcrumbs,
}) => {
  function renderLogo() {
    return (
      <EuiHeaderLogo iconType="logoElastic" href="/" aria-label="Goes to home">
        {!breadcrumbs && 'Elastic'}
      </EuiHeaderLogo>
    );
  }

  const renderBreadcrumbs = () => {
    if (!breadcrumbs) return;
    const breadcrumbList: Breadcrumb[] = [
      {
        text: 'Home',
        onClick: () => {
          navigate('/');
        },
      },
    ];
    return breadcrumbList.concat(breadcrumbs);
  };

  const leftSectionItems = [
    <KibanaNav
      currentRoute={breadcrumbs ? String(breadcrumbs[0].text) : 'Home'}
    />,
    renderLogo(),
  ];

  return (
    <EuiHeader
      position="fixed"
      sections={[
        {
          items: leftSectionItems,
          borders: 'none',
          breadcrumbs: renderBreadcrumbs(),
        },
        {
          items: [<KibanaChromeSearch />],
          borders: 'none',
        },
        {
          items: [
            <KibanaHeaderUpdates />,
            <KibanaHeaderSpacesMenu />,
            <KibanaHeaderUserMenu {...user} />,
          ],
          borders: 'none',
        },
      ]}
    />
  );
};
