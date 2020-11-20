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
  EuiCollapsibleNav,
  EuiPinnableListGroupItemProps,
} from '@elastic/eui';

import { DocsMissionNav } from './mission_nav';
import { DocsNavLinksFirst } from '../data';

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

export const DocsNav: FunctionComponent<Props> = ({}) => {
  const context = React.useContext(ThemeContext);
  const [navIsOpen, setNavIsOpen] = useState(context.navIsDocked);

  const [pinnedItems, setPinnedItems] = useState<
    EuiPinnableListGroupItemProps[]
  >(JSON.parse(String(localStorage.getItem('pinnedItems'))) || []);

  const [openGroups, setOpenGroups] = useState(
    JSON.parse(String(localStorage.getItem('openNavGroups'))) ||
      DocsNavLinksFirst.map((object) => object.title)
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
    return links.map((link) => {
      const { url, onClick, pinned, isActive, href, ...rest } = link;
      return {
        onClick: url
          ? () => navigate(url)
          : () => {
              return null;
            },
        pinned: showPinned ? pinned : false,
        'aria-current': isActive,
        color: isActive ? 'primary' : undefined,
        isDisabled: !url && !href && !onClick,
        isActive,
        href,
        url,
        ...rest,
      };
    });
  }

  const createNavGroups = (links: ChromeNavGroupProps[]) => {
    return links.map((linksObject) => {
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
      maskProps={{
        className: 'kbnCollapsibleNav__overlay',
      }}
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
        <DocsMissionNav />
      </EuiFlexItem>

      {/* BOTTOM */}
      <EuiFlexItem className="eui-yScroll">
        {createNavGroups(DocsNavLinksFirst)}
      </EuiFlexItem>
      {/* NO -- Docking button only for larger screens that can support it*/}
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
    </EuiCollapsibleNav>
  );
};
