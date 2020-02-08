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
  EuiHeader,
  EuiHeaderSection,
  EuiHeaderSectionItem,
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

import HeaderUpdates from '../kibana/header/header_updates';
// @ts-ignore
import HeaderSpacesMenu from '../header/header_spaces_menu';

// @ts-ignore
import Search from '../search/search';

import Deployment from './deployment';
import { TopLinks } from './navigation_links/top_links';
import { ObservabilityLinks } from './navigation_links/observability_links';
import { ExploreLinks } from './navigation_links/explore_links';
import { SecurityLinks } from './navigation_links/security_links';
import { SearchLinks } from './navigation_links/search_links';
import { AdminLinks } from './navigation_links/admin_links';
import { MiscLinks } from './navigation_links/misc_links';

import { EuiNavDrawerGroupListItemProps } from '../nav_drawer/nav_drawer_group_list';

import { user } from '../kibana/data/user';
import { KibanaHeaderUserMenu } from '../kibana/header/header_user_menu';

interface State {
  themeIsLoading: boolean;
  pinnedItems: EuiNavDrawerGroupListItemProps[];
  openGroups: string[];
}

export type ChromeNavGroupProps = {
  title?: string;
  iconType?: IconType;
  links: EuiNavDrawerGroupListItemProps[];
  isOpen?: boolean;
};

const Accordions = [
  ExploreLinks,
  ObservabilityLinks,
  SecurityLinks,
  SearchLinks,
  AdminLinks,
  MiscLinks,
];

export const ChromeWrapper: FunctionComponent = () => {
  return (
    <ThemeContext.Consumer>
      {/*
      // @ts-ignore */}
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
      pinnedItems:
        JSON.parse(String(localStorage.getItem('pinnedItems'))) || [],
      openGroups:
        JSON.parse(String(localStorage.getItem('openNavGroups'))) ||
        Accordions.map(object => object.title),
    };
  }

  componentDidMount() {
    if (this.props.context.navIsDocked) {
      document.body.classList.add('chrNavIsDocked');
    }
  }

  componentDidUpdate() {
    if (this.props.context.navIsDocked) {
      document.body.classList.add('chrNavIsDocked');
    } else {
      document.body.classList.remove('chrNavIsDocked');
    }
  }

  componentWillUnmount() {
    document.body.classList.remove('chrNavIsDocked');
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

  addPin = (item: any) => {
    if (!item) return;
    this.setState(
      // @ts-ignore
      prevState => {
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
      },
      () => {
        localStorage.setItem(
          'pinnedItems',
          JSON.stringify(this.state.pinnedItems)
        );
      }
    );
  };

  removePin = (item: any) => {
    this.setState(
      // @ts-ignore
      prevState => {
        if (_.find(prevState.pinnedItems, { label: item.label })) {
          item.pinned = false;
          _.remove(prevState.pinnedItems, {
            label: item.label,
          });
          return {
            pinnedItems: prevState.pinnedItems,
          };
        }
      },
      () => {
        localStorage.setItem(
          'pinnedItems',
          JSON.stringify(this.state.pinnedItems)
        );
      }
    );
  };

  // Save which groups are open and which are not with state and local store
  toggleAccordion = (isOpen: boolean, title?: string) => {
    if (!title) return;
    this.setState(
      // @ts-ignore
      prevState => {
        const itExists = prevState.openGroups.includes(title);
        if (isOpen) {
          if (itExists) return;
          prevState.openGroups.push(title);
          return {
            openGroups: prevState.openGroups,
          };
        } else {
          const index = prevState.openGroups.indexOf(title);
          if (index > -1) {
            prevState.openGroups.splice(index, 1);
          }
          return {
            openGroups: prevState.openGroups,
          };
        }
      },
      () => {
        localStorage.setItem(
          'openNavGroups',
          JSON.stringify(this.state.openGroups)
        );
      }
    );
  };

  setNavDrawerRef = (ref: any) => (this.navDrawerRef = ref);

  createNavGroups = () => {
    return Accordions.map(linksObject => {
      return (
        <EuiNavDrawerGroup
          key={linksObject.title}
          title={linksObject.title}
          iconType={linksObject.iconType}
          initialIsOpen={
            linksObject.title
              ? this.state.openGroups.includes(linksObject.title)
              : true
          }
          onToggle={(isOpen: boolean) =>
            this.toggleAccordion(isOpen, linksObject.title)
          }>
          <EuiNavDrawerGroupList
            className="chrNavGroup--noPaddingTop"
            listItems={linksObject.links}
            onPinClick={this.addPin}
          />
        </EuiNavDrawerGroup>
      );
    });
  };

  render() {
    const { context } = this.props;
    return (
      <>
        <EuiHeader
          className={`chrHeader ${
            context.navIsDocked ? 'chrHeader--navIsDocked' : null
          }`}>
          <EuiHeaderSection grow={false}>
            {!context.navIsDocked && (
              <EuiHeaderSectionItem border="none">
                {this.renderMenuTrigger()}
              </EuiHeaderSectionItem>
            )}
            <EuiHeaderSectionItem border="none">
              {this.renderLogo()}
            </EuiHeaderSectionItem>

            {this.renderBreadcrumbs()}
          </EuiHeaderSection>

          <Search />

          <EuiHeaderSection side="right">
            <EuiHeaderSectionItem border="none">
              <HeaderUpdates />
            </EuiHeaderSectionItem>
            <EuiHeaderSectionItem border="none">
              <HeaderSpacesMenu />
            </EuiHeaderSectionItem>
            <EuiHeaderSectionItem border="none">
              <KibanaHeaderUserMenu {...user} />
            </EuiHeaderSectionItem>
          </EuiHeaderSection>
        </EuiHeader>

        <EuiNavDrawer isLocked={context.navIsDocked} ref={this.setNavDrawerRef}>
          {/* TOP */}
          <EuiFlexItem grow={false}>
            <Deployment />
          </EuiFlexItem>

          {/* PINNED */}
          <EuiFlexItem grow={false}>
            {/* Extra div necessary for flex and auto-scroll to behave properly */}
            <div className="chrNavGroup--scroll chrNavGroup--inShade">
              <EuiNavDrawerGroupList listItems={TopLinks.links} />

              {this.state.pinnedItems.length > 0 && (
                <EuiNavDrawerGroupList
                  className="chrNavGroup--noPaddingTop"
                  listItems={this.state.pinnedItems}
                  onPinClick={this.removePin}
                />
              )}
            </div>
          </EuiFlexItem>

          {/* BOTTOM */}
          <EuiFlexItem className="chrNavGroup--scroll">
            {this.createNavGroups()}

            <EuiNavDrawerGroupList
              className="euiNavDrawerGroup"
              listItems={[
                {
                  label: `${
                    context.navIsDocked ? 'Undock' : 'Dock'
                  } navigation`,
                  onClick: context.toggleDockedNav,
                  iconType: context.navIsDocked ? 'lock' : 'lockOpen',
                },
              ]}
            />
          </EuiFlexItem>
        </EuiNavDrawer>
      </>
    );
  }
}
