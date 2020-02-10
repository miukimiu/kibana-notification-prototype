/**
 * Chrome component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */
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

// @ts-ignore
import { hamburger } from '../../../images/hamburger';

// @ts-ignore
import Search from './search/search';

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

export class KibanaChrome extends React.Component<any, State> {
  navDrawerRef: any;

  constructor(props: any) {
    super(props);
    this.state = {
      themeIsLoading: false,
    };
  }

  renderLogo() {
    return (
      <EuiHeaderLogo
        iconType="logoKibana"
        href="/#"
        aria-label="Goes to home"
      />
    );
  }

  renderMenuTrigger() {
    return (
      <EuiHeaderSectionItemButton
        aria-label="Open nav"
        onClick={() => this.navDrawerRef.toggleOpen()}>
        <EuiIcon type={hamburger} size="m" />
      </EuiHeaderSectionItemButton>
    );
  }

  renderBreadcrumbs() {
    const breadcrumbs = [
      {
        text: 'Kibana',
        href: '#',
      },
    ];

    return <EuiHeaderBreadcrumbs breadcrumbs={breadcrumbs} />;
  }

  setNavDrawerRef = (ref: any) => (this.navDrawerRef = ref);

  render() {
    const { context } = this.props;

    const leftSectionItems = [
      { children: this.renderLogo() },
      { children: this.renderBreadcrumbs() },
    ];
    if (!context.navIsDocked) {
      leftSectionItems.unshift({ children: this.renderMenuTrigger() });
    }

    return (
      <>
        <EuiHeaderShim
          className="kibanaChrome__header"
          leftSectionItems={leftSectionItems}
          centerSectionItems={[{ children: <Search /> }]}
          rightSectionItems={[
            { children: <KibanaHeaderUpdates /> },
            { children: <KibanaHeaderSpacesMenu /> },
            { children: <KibanaHeaderUserMenu {...user} /> },
          ]}
        />

        <KibanaNav
          toggleDockedNav={context.toggleDockedNav}
          navIsDocked={context.navIsDocked}
          ref={this.setNavDrawerRef}
        />
      </>
    );
  }
}
