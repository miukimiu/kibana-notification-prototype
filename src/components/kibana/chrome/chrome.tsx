/* eslint react/no-multi-comp: 0 */

import React, { FunctionComponent } from 'react';
import ThemeContext from '../../../themes/ThemeContext';

import {
  EuiHeaderSectionItemButton,
  EuiHeaderBreadcrumbs,
  EuiHeaderLogo,
  EuiIcon,
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

interface State {
  themeIsLoading: boolean;
}

export const KibanaChromeWrapper: FunctionComponent = () => {
  return (
    <ThemeContext.Consumer>
      {context => <KibanaChrome context={context} />}
    </ThemeContext.Consumer>
  );
};

function renderLogo() {
  return (
    <EuiHeaderLogo iconType="logoKibana" href="/#" aria-label="Goes to home" />
  );
}

function renderBreadcrumbs() {
  const breadcrumbs = [
    {
      text: 'Kibana',
      href: '#',
    },
  ];

  return <EuiHeaderBreadcrumbs breadcrumbs={breadcrumbs} />;
}

export const KibanaChrome: React.FunctionComponent<any> = ({ context }) => {
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
