/* eslint react/no-multi-comp: 0 */

import React from 'react';
import ThemeContext from '../../../themes/ThemeContext';

import {
  EuiHeaderSectionItemButton,
  EuiHeaderBreadcrumbs,
  EuiHeaderLogo,
  EuiIcon,
  Breadcrumb,
} from '@elastic/eui';

import { EuiHeaderShim } from '../../eui/header';

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
    return (
      <EuiHeaderBreadcrumbs breadcrumbs={breadcrumbList.concat(breadcrumbs)} />
    );
  };

  const leftSectionItems = [
    { children: renderLogo() },
    { children: renderBreadcrumbs() },
  ];

  if (!context.navIsDocked) {
    leftSectionItems.unshift({ children: renderMenuTrigger() });
  }

  return (
    <>
      <EuiHeaderShim
        position="fixed"
        className="kibanaChrome__header"
        leftSectionItems={leftSectionItems}
        centerSectionItems={[{ children: <KibanaChromeSearch /> }]}
        rightSectionItems={[
          { children: <KibanaHeaderUpdates /> },
          { children: <KibanaHeaderSpacesMenu /> },
          { children: <KibanaHeaderUserMenu {...user} /> },
        ]}
      />

      <KibanaNav
        toggleDockedNav={context.toggleDockedNav}
        navIsDocked={context.navIsDocked}
        ref={setNavDrawerRef}
      />
    </>
  );
};
