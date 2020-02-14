/* eslint react/no-multi-comp: 0 */

import React, { FunctionComponent } from 'react';
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

type Props = {
  breadcrumbs?: Breadcrumb[];
};

interface State {
  themeIsLoading: boolean;
}

function renderLogo() {
  return (
    <EuiHeaderLogo iconType="logoElastic" href="/#" aria-label="Goes to home" />
  );
}

export const KibanaChrome: React.FunctionComponent<Props> = ({
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

  const renderBreadcrumbs = () => {
    const elasticLogo = [
      {
        text: 'Elastic',
        href: '#',
      },
    ];

    return <EuiHeaderBreadcrumbs breadcrumbs={breadcrumbs || elasticLogo} />;
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
