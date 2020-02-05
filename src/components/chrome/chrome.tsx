/**
 * Chrome component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';

// @ts-ignore
import { hamburger } from './assets/hamburger';

import {
  EuiButton,
  // @ts-ignore
  EuiHeader,
  // @ts-ignore
  EuiHeaderSection,
  // @ts-ignore
  EuiHeaderSectionItem,
  // @ts-ignore
  EuiHeaderSectionItemButton,
  // @ts-ignore
  EuiHeaderBreadcrumbs,
  EuiHeaderLogo,
  EuiIcon,
  EuiHorizontalRule,
  // @ts-ignore
  EuiShowFor,
} from '@elastic/eui';

// @ts-ignore
import { EuiNavDrawer, EuiNavDrawerGroup } from '../nav_drawer';

// @ts-ignore
import HeaderUpdates from '../header/header_updates';
// @ts-ignore
import HeaderSpacesMenu from '../header/header_spaces_menu';
// @ts-ignore
import HeaderUserMenu from '../header/header_user_menu';

import { TopLinks } from '../navigation_links/top_links';
import { SolutionLinks } from '../navigation_links/solution_links';
import { ExploreLinks } from '../navigation_links/explore_links';
// import { AdminLinks } from '../navigation_links/admin_links';

export const ThemeContext = React.createContext('dark');

if (localStorage.getItem('theme') === 'dark') {
  require('../../themes/theme_dark.scss');
} else {
  require('../../themes/theme_light.scss');
}

export default class Chrome extends React.Component<any, any> {
  navDrawerRef: any;
  initialTheme = localStorage.getItem('theme') === 'light' ? 'light' : 'dark';

  constructor(props: any) {
    super(props);
    this.state = {
      navIsDocked: JSON.parse(localStorage.getItem('navIsDocked') || 'false'),
      theme: this.initialTheme,
      themeIsLoading: false,
    };
  }

  handleChangeTheme = () => {
    this.setState(
      {
        theme: this.state.theme === 'dark' ? 'light' : 'dark',
        themeIsLoading: true,
      },
      () => {
        localStorage.setItem('theme', this.state.theme);
        window.location.reload();
      }
    );
  };

  handleNavDocking = () => {
    this.setState(
      {
        navIsDocked: !this.state.navIsDocked,
      },
      () => {
        localStorage.setItem('navIsDocked', this.state.navIsDocked);
      }
    );
  };

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
        onClick: (e: { preventDefault: () => void }) => {
          e.preventDefault();
          console.log('You clicked home');
        },
        'data-test-subj': 'breadcrumbsAnimals',
        className: 'customClass',
      },
    ];

    return <EuiHeaderBreadcrumbs breadcrumbs={breadcrumbs} />;
  }

  setNavDrawerRef = (ref: any) => (this.navDrawerRef = ref);

  render() {
    const AdminLinks = [
      {
        label: 'Admin',
        iconType: 'managementApp',
      },
      {
        label: `${this.state.navIsDocked ? 'Undock' : 'Dock'} navigation`,
        onClick: this.handleNavDocking,
        iconType: this.state.navIsDocked ? 'lock' : 'lockOpen',
      },
    ];

    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <div>
            <EuiHeader className="chrHeader">
              <EuiHeaderSection grow={false}>
                {!this.state.navIsDocked && (
                  <EuiHeaderSectionItem border="none">
                    {this.renderMenuTrigger()}
                  </EuiHeaderSectionItem>
                )}
                <EuiHeaderSectionItem border="none">
                  {this.renderLogo()}
                </EuiHeaderSectionItem>
              </EuiHeaderSection>

              {this.renderBreadcrumbs()}

              <EuiHeaderSection side="right">
                <EuiHeaderSectionItem border="none">
                  <HeaderUpdates />
                </EuiHeaderSectionItem>
                <EuiHeaderSectionItem border="none">
                  <HeaderSpacesMenu />
                </EuiHeaderSectionItem>
                <EuiHeaderSectionItem border="none">
                  <HeaderUserMenu
                    isDarkTheme={this.state.isDarkTheme}
                    handleChangeTheme={() => this.handleChangeTheme()}
                    themeIsLoading={this.state.themeIsLoading}
                  />
                </EuiHeaderSectionItem>
              </EuiHeaderSection>
            </EuiHeader>

            <EuiNavDrawer
              isLocked={this.state.navIsDocked}
              showExpandButton={false}
              ref={this.setNavDrawerRef}>
              <EuiNavDrawerGroup listItems={TopLinks} />
              <EuiHorizontalRule margin="none" />
              <EuiNavDrawerGroup listItems={ExploreLinks} />
              <EuiHorizontalRule margin="none" />
              <EuiNavDrawerGroup listItems={SolutionLinks} />
              <EuiHorizontalRule margin="none" />
              <EuiNavDrawerGroup listItems={AdminLinks} />
            </EuiNavDrawer>
            <div className="chrWrap">{this.props.children}</div>
          </div>
        </ThemeContext.Provider>
      </div>
    );
  }
}
