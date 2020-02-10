/**
 * Chrome component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */
/* eslint react/no-multi-comp: 0 */

import React, { FunctionComponent } from 'react';
import _ from 'lodash';

// @ts-ignore
import ThemeContext from '../../themes/ThemeContext';

// @ts-ignore
import { hamburger } from './assets/hamburger';

import {
  EuiHeaderSectionItemButton,
  EuiHeaderBreadcrumbs,
  EuiHeaderLogo,
  EuiIcon,
  IconType,
  EuiFlexItem,
} from '@elastic/eui';

import {
  EuiNavDrawer,
  EuiNavDrawerGroup,
  EuiNavDrawerGroupList,
  // @ts-ignore
} from '../nav_drawer';

import { user } from '../kibana/data/user';
import {
  KibanaHeaderUpdates,
  KibanaHeaderUserMenu,
  KibanaHeaderSpacesMenu,
} from '../kibana/header';

// @ts-ignore
import Search from '../search/search';

import { EuiHeaderShim } from '../eui/header';
import classNames from 'classnames';
import { KibanaNav } from '../kibana/nav';

interface State {
  themeIsLoading: boolean;
}

export const ChromeWrapper: FunctionComponent = () => {
  return (
    <ThemeContext.Consumer>
      {context => <Chrome context={context} />}
    </ThemeContext.Consumer>
  );
};

export class Chrome extends React.Component<any, State> {
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

    const headerClasses = classNames('chrHeader', {
      'chrHeader--navIsDocked': context.navIsDocked,
    });

    return (
      <>
        <EuiHeaderShim
          className={headerClasses}
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
