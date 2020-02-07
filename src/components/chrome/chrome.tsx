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
  IconType,
} from '@elastic/eui';

import {
  EuiNavDrawer,
  EuiNavDrawerGroup,
  EuiNavDrawerGroupList,
  // @ts-ignore
} from '../nav_drawer';

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

import { EuiNavDrawerGroupListItemProps } from '../nav_drawer/nav_drawer_group_list';

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
  pinnedItems: EuiNavDrawerGroupListItemProps[];
}

export type ChromeNavGroupProps = {
  title?: string;
  iconType?: IconType;
  links: EuiNavDrawerGroupListItemProps[];
};

export default class Chrome extends React.Component<any, State> {
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
        localStorage.setItem(
          'navIsDocked',
          JSON.stringify(this.state.navIsDocked)
        );
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
    if (!item) return;
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

  createNavGroup = (linksObject: any) => {
    return (
      <EuiNavDrawerGroup
        title={linksObject.title}
        iconType={linksObject.iconType}
        initialIsOpen={true}>
        <EuiNavDrawerGroupList
          className="chrNavGroup--noPaddingTop"
          listItems={linksObject.links}
          onPinClick={this.addPin}
        />
      </EuiNavDrawerGroup>
    );
  };

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
                isDarkTheme={this.state.theme === 'dark'}
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

          <EuiNavDrawerGroupList
            className="chrNavGroup--inShade"
            listItems={TopLinks.links}
          />

          {this.state.pinnedItems.length > 0 && (
            <EuiNavDrawerGroupList
              className="chrNavGroup--noPaddingTop chrNavGroup--inShade"
              listItems={this.state.pinnedItems}
              onPinClick={this.removePin}
            />
          )}

          <EuiHorizontalRule margin="none" />

          {ExploreLinks && this.createNavGroup(ExploreLinks)}

          <EuiHorizontalRule margin="none" />

          {ObservabilityLinks && this.createNavGroup(ObservabilityLinks)}

          <EuiHorizontalRule margin="none" />

          {SecurityLinks && this.createNavGroup(SecurityLinks)}

          <EuiHorizontalRule margin="none" />

          {SearchLinks && this.createNavGroup(SearchLinks)}

          <EuiHorizontalRule margin="none" />

          {AdminLinks && this.createNavGroup(AdminLinks)}

          <EuiHorizontalRule margin="none" />

          {MiscLinks && this.createNavGroup(MiscLinks)}

          <EuiHorizontalRule margin="none" />

          <EuiNavDrawerGroupList listItems={LockLink} />
        </EuiNavDrawer>
        <div className="chrWrap">{this.props.children}</div>
      </ThemeContext.Provider>
    );
  }
}
