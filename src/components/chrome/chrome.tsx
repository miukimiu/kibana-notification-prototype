/**
 * Chrome component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import _ from 'lodash';

// @ts-ignore
import { hamburger } from './assets/hamburger';

import {
  EuiHeader,
  EuiHeaderSection,
  EuiHeaderSectionItem,
  EuiHeaderSectionItemButton,
  EuiHeaderBreadcrumbs,
  EuiHeaderLogo,
  EuiIcon,
  EuiHorizontalRule,
  EuiListGroup,
} from '@elastic/eui';
type EuiListGroupProps = React.ComponentProps<typeof EuiListGroup>;

// @ts-ignore
import { EuiNavDrawer, EuiNavDrawerGroup } from '../nav_drawer';

// @ts-ignore
import HeaderUpdates from '../header/header_updates';
// @ts-ignore
import HeaderSpacesMenu from '../header/header_spaces_menu';
// @ts-ignore
import HeaderUserMenu from '../header/header_user_menu';

import Deployment from './deployment';
import { TopLinks } from './navigation_links/top_links';
import { ObservabilityLinks } from './navigation_links/observability_links';
import { ExploreLinks } from './navigation_links/explore_links';
import { SecurityLinks } from './navigation_links/security_links';
import { SearchLinks } from './navigation_links/search_links';
import { AdminLinks } from './navigation_links/admin_links';
import { MiscLinks } from './navigation_links/misc_links';

export const ThemeContext = React.createContext('dark');

if (localStorage.getItem('theme') === 'dark') {
  require('../../themes/theme_dark.scss');
} else {
  require('../../themes/theme_light.scss');
}

interface State {
  navIsDocked: boolean;
  theme: string;
  themeIsLoading: boolean;
  pinnedItems: EuiListGroupProps['listItems'];
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
      pinnedItems: [],
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

  addPin = (item: any) => {
    // @ts-ignore
    this.setState(prevState => {
      // Check if item already exists and exit if so
      if (_.find(prevState.pinnedItems, { label: item.label })) {
        return;
      }
      item.pinned = true;
      return {
        pinnedItems: prevState.pinnedItems
          ? prevState.pinnedItems.concat(item)
          : [item],
      };
    });
  };

  removePin = (item: any) => {
    // @ts-ignore
    this.setState(prevState => {
      if (_.find(prevState.pinnedItems, { label: item.label })) {
        item.pinned = false;
        _.remove(prevState.pinnedItems, {
          label: item.label,
        });
        return {
          pinnedItems: prevState.pinnedItems,
        };
      }
    });
  };

  setNavDrawerRef = (ref: any) => (this.navDrawerRef = ref);

  render() {
    const LockLink = [
      {
        label: `${this.state.navIsDocked ? 'Undock' : 'Dock'} navigation`,
        onClick: this.handleNavDocking,
        iconType: this.state.navIsDocked ? 'lock' : 'lockOpen',
      },
    ];

    return (
      <ThemeContext.Provider value={this.state.theme}>
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
          <Deployment />
          <EuiNavDrawerGroup listItems={TopLinks.links} />
          {this.state.pinnedItems.length > 0 && (
            <EuiNavDrawerGroup
              listItems={this.state.pinnedItems}
              onPinClick={this.removePin}
            />
          )}
          <EuiHorizontalRule margin="none" />
          <EuiNavDrawerGroup
            listItems={ExploreLinks.links}
            onPinClick={this.addPin}
          />
          <EuiHorizontalRule margin="none" />
          <EuiNavDrawerGroup
            listItems={ObservabilityLinks.links}
            onPinClick={this.addPin}
          />
          <EuiHorizontalRule margin="none" />
          <EuiNavDrawerGroup
            listItems={SecurityLinks.links}
            onPinClick={this.addPin}
          />
          <EuiHorizontalRule margin="none" />
          <EuiNavDrawerGroup
            listItems={SearchLinks.links}
            onPinClick={this.addPin}
          />
          <EuiHorizontalRule margin="none" />
          <EuiNavDrawerGroup
            listItems={AdminLinks.links}
            onPinClick={this.addPin}
          />
          <EuiHorizontalRule margin="none" />
          <EuiNavDrawerGroup
            listItems={MiscLinks.links}
            onPinClick={this.addPin}
          />
          <EuiHorizontalRule margin="none" />
          <EuiNavDrawerGroup listItems={LockLink} />
        </EuiNavDrawer>
        <div className="chrWrap">{this.props.children}</div>
      </ThemeContext.Provider>
    );
  }
}
