/**
 * Chrome component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */
import React, { HTMLAttributes, useState, FunctionComponent } from 'react';
import _ from 'lodash';
import { navigate } from 'gatsby';

import {
  IconType,
  EuiFlexItem,
  EuiFlyoutProps,
  EuiPinnableListGroup,
  EuiIcon,
  EuiCollapsibleNavGroup,
  EuiHeaderSectionItemButton,
  EuiShowFor,
  EuiListGroupItem,
  EuiHorizontalRule,
  EuiCollapsibleNav,
  EuiPinnableListGroupItemProps,
  EuiButtonIcon,
  EuiLink,
  EuiText,
} from '@elastic/eui';

import { KibanaNavDeployment } from './deployment';
import {
  KibanaNavLinksFirst,
  KibanaNavLinksLast,
  KibanaNavTopLinks,
} from '../data/nav_links';

import ThemeContext from '../../../../themes/ThemeContext';

interface Props
  extends Omit<EuiFlyoutProps, 'onClose'>,
    HTMLAttributes<HTMLDivElement> {
  currentRoute?: string;
}

type ChromNavListItem = EuiPinnableListGroupItemProps & {
  url?: string;
};

export type ChromeNavGroupProps = {
  title: string;
  iconType?: IconType;
  links: ChromNavListItem[];
  isOpen?: boolean;
};

export const KibanaNav: FunctionComponent<Props> = ({
  currentRoute = 'Home',
}) => {
  const context = React.useContext(ThemeContext);
  const [navIsOpen, setNavIsOpen] = useState(context.navIsDocked);

  const [pinnedItems, setPinnedItems] = useState<
    EuiPinnableListGroupItemProps[]
  >(JSON.parse(String(localStorage.getItem('pinnedItems'))) || []);

  const [openGroups, setOpenGroups] = useState(
    JSON.parse(String(localStorage.getItem('openNavGroups'))) ||
      KibanaNavLinksFirst.map(object => object.title)
  );

  const addPin = (item: any) => {
    if (!item || _.find(pinnedItems, { label: item.label })) {
      return;
    }
    item.pinned = true;
    const newPinnedItems = pinnedItems ? pinnedItems.concat(item) : [item];
    setPinnedItems(newPinnedItems);
    localStorage.setItem('pinnedItems', JSON.stringify(newPinnedItems));
  };

  const removePin = (item: any) => {
    const pinIndex = _.findIndex(pinnedItems, { label: item.label });
    if (pinIndex > -1) {
      item.pinned = false;
      const newPinnedItems = pinnedItems;
      newPinnedItems.splice(pinIndex, 1);
      setPinnedItems([...newPinnedItems]);
      localStorage.setItem('pinnedItems', JSON.stringify(newPinnedItems));
    }
  };

  // Save which groups are open and which are not with state and local store
  const toggleAccordion = (isOpen: boolean, title?: string) => {
    if (!title) return;
    const itExists = openGroups.includes(title);
    if (isOpen) {
      if (itExists) return;
      openGroups.push(title);
    } else {
      const index = openGroups.indexOf(title);
      if (index > -1) {
        openGroups.splice(index, 1);
      }
    }
    setOpenGroups([...openGroups]);
    localStorage.setItem('openNavGroups', JSON.stringify(openGroups));
  };

  function alterLinksWithCurrentStateAndLinks(
    links: ChromNavListItem[],
    showPinned = false
  ): EuiPinnableListGroupItemProps[] {
    // @ts-ignore
    return links.map(link => {
      const { url, onClick, pinned, isActive, href, ...rest } = link;
      return {
        onClick: url
          ? () => navigate(url)
          : () => {
              return null;
            },
        pinned: showPinned ? pinned : false,
        isActive: link.label === currentRoute ? true : false,
        'aria-current': link.label === currentRoute ? true : false,
        isDisabled: !url && !href,
        href,
        url,
        ...rest,
      };
    });
  }

  const createNavGroups = (links: ChromeNavGroupProps[]) => {
    return links.map(linksObject => {
      return (
        <EuiCollapsibleNavGroup
          key={linksObject.title}
          title={linksObject.title}
          iconType={linksObject.iconType}
          isCollapsible={true}
          initialIsOpen={
            linksObject.title ? openGroups.includes(linksObject.title) : true
          }
          onToggle={(isOpen: boolean) =>
            toggleAccordion(isOpen, linksObject.title)
          }>
          <EuiPinnableListGroup
            aria-label={linksObject.title} // A11y : EuiCollapsibleNavGroup can't correctly pass the `title` as the `aria-label` to the right HTML element, so it must be added manually
            listItems={alterLinksWithCurrentStateAndLinks(linksObject.links)}
            onPinClick={addPin}
            maxWidth="none"
            color="subdued"
            gutterSize="none"
            size="s"
          />
        </EuiCollapsibleNavGroup>
      );
    });
  };

  return (
    <EuiCollapsibleNav
      id="kbnCollapsibleNav"
      aria-label="Main navigation"
      isOpen={navIsOpen}
      isDocked={context.navIsDocked}
      button={
        <EuiHeaderSectionItemButton
          aria-label="Toggle main navigation"
          onClick={() => setNavIsOpen(!navIsOpen)}>
          <EuiIcon type={'menu'} size="m" aria-hidden="true" />
        </EuiHeaderSectionItemButton>
      }
      onClose={() => setNavIsOpen(false)}>
      {/* Dark deployments section */}
      <EuiFlexItem grow={false} style={{ flexShrink: 0 }}>
        <KibanaNavDeployment />
      </EuiFlexItem>

      {/* Shaded pinned section always with a home item */}
      <EuiFlexItem grow={false} style={{ flexShrink: 0 }}>
        <EuiCollapsibleNavGroup
          background="light"
          className="eui-yScroll"
          style={{ maxHeight: '40vh' }}>
          <EuiPinnableListGroup
            aria-label="Pinned links" // A11y : Since this group doesn't have a visible `title` it should be provided an accessible description
            listItems={alterLinksWithCurrentStateAndLinks(
              KibanaNavTopLinks.links
            ).concat(alterLinksWithCurrentStateAndLinks(pinnedItems, true))}
            onPinClick={removePin}
            maxWidth="none"
            color="text"
            gutterSize="none"
            size="s"
          />
        </EuiCollapsibleNavGroup>
      </EuiFlexItem>

      <EuiHorizontalRule margin="none" />

      {/* BOTTOM */}
      <EuiFlexItem className="eui-yScroll">
        {createNavGroups(KibanaNavLinksFirst)}

        <EuiCollapsibleNavGroup
          background="light"
          iconType="logoWorkplaceSearch"
          title="Enterprise Search"
          isCollapsible={true}
          initialIsOpen={true}
          arrowDisplay="none"
          extraAction={
            <EuiButtonIcon
              aria-label="Hide and never show again"
              title="Hide and never show again"
              iconType="cross"
            />
          }>
          <EuiText size="s" color="subdued" style={{ padding: '0 8px 8px' }}>
            <p>
              Quickly add pretuned search to your website, app, or workplace.
              Search it all, simply.
              <br />
              <EuiLink
                onClick={() => {
                  navigate('enterprise-search/overview');
                }}>
                Learn more
              </EuiLink>
            </p>
          </EuiText>
        </EuiCollapsibleNavGroup>
        {createNavGroups(KibanaNavLinksLast)}

        {/* Docking button only for larger screens that can support it*/}
        <EuiShowFor sizes={['l', 'xl']}>
          <EuiCollapsibleNavGroup>
            <EuiListGroupItem
              size="xs"
              color="subdued"
              label={`${context.navIsDocked ? 'Undock' : 'Dock'} navigation`}
              onClick={() => {
                context.toggleDockedNav();
              }}
              iconType={context.navIsDocked ? 'lock' : 'lockOpen'}
            />
          </EuiCollapsibleNavGroup>
        </EuiShowFor>
      </EuiFlexItem>
    </EuiCollapsibleNav>
  );
};
