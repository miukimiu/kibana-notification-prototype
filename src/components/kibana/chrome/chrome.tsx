import React from 'react';
import ThemeContext from '../../../themes/ThemeContext';

import {
  EuiHeaderSectionItemButton,
  EuiHeaderLogo,
  EuiIcon,
  Breadcrumb,
  EuiHeader,
} from '@elastic/eui';

import { user } from './data';

import {
  KibanaHeaderUpdates,
  KibanaHeaderUserMenu,
  KibanaHeaderSpacesMenu,
} from './header';

import { KibanaNav } from './nav';
import { KibanaChromeSearch } from './search';

// @ts-ignore
import { hamburger } from '../../../images/hamburger';

import { navigate } from 'gatsby';

export type KibanaChromeProps = {
  breadcrumbs?: Breadcrumb[];
};

export const KibanaChrome: React.FunctionComponent<KibanaChromeProps> = ({
  breadcrumbs,
}) => {
  const context = React.useContext(ThemeContext);

  let navDrawerRef: any;
  const setNavDrawerRef = (ref: any) => (navDrawerRef = ref);

  const renderMenuTrigger = () => {
    return (
      <EuiHeaderSectionItemButton
        aria-label="Open nav"
        onClick={() => navDrawerRef.toggleExpansion()}>
        <EuiIcon type={hamburger} size="m" />
      </EuiHeaderSectionItemButton>
    );
  };

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

  const leftSectionItems = [renderLogo()];

  if (!context.navIsDocked) {
    leftSectionItems.unshift(renderMenuTrigger());
  }

  return (
    <>
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

      <KibanaNav
        currentRoute={breadcrumbs ? String(breadcrumbs[0].text) : 'Home'}
        toggleDockedNav={context.toggleDockedNav}
        navIsDocked={context.navIsDocked}
        ref={setNavDrawerRef}
      />
    </>
  );
};
