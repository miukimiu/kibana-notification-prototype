/**
 * Chrome component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */
/* eslint react/no-multi-comp: 0 */

import React, { HTMLAttributes, useState, useEffect, forwardRef } from 'react';
import _ from 'lodash';

import { IconType, EuiFlexItem, EuiFlyoutProps } from '@elastic/eui';

import {
  EuiNavDrawer,
  EuiNavDrawerGroup,
  // @ts-ignore
} from '../../nav_drawer';

import Deployment from '../../chrome/deployment';
import { KibanaNavLinks, KibanaNavTopLinks } from './nav_links';

import {
  EuiNavDrawerGroupListItemProps,
  EuiNavDrawerGroupList,
} from '../../nav_drawer/nav_drawer_group_list';

interface Props
  extends Omit<EuiFlyoutProps, 'onClose'>,
    HTMLAttributes<HTMLDivElement> {
  toggleDockedNav: () => void;
  navIsDocked: boolean;
  toggleNav?: () => void;
}

interface State {
  pinnedItems: EuiNavDrawerGroupListItemProps[];
  openGroups: string[];
}

export type ChromeNavGroupProps = {
  title?: string;
  iconType?: IconType;
  links: EuiNavDrawerGroupListItemProps[];
  isOpen?: boolean;
};

export const KibanaNav = forwardRef<EuiNavDrawer, Props>((props, ref) => {
  const { toggleDockedNav, navIsDocked, ...rest } = props;

  const [pinnedItems, setPinnedItems] = useState<
    EuiNavDrawerGroupListItemProps[]
  >(JSON.parse(String(localStorage.getItem('pinnedItems'))) || []);

  useEffect(() => {
    if (navIsDocked) {
      document.body.classList.add('chrNavIsDocked');
    } else {
      document.body.classList.remove('chrNavIsDocked');
    }

    return function cleanup() {
      document.body.classList.remove('chrNavIsDocked');
    };
  });

  const [openGroups, setOpenGroups] = useState(
    JSON.parse(String(localStorage.getItem('openNavGroups'))) ||
      KibanaNavLinks.map(object => object.title)
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

  const createNavGroups = () => {
    return KibanaNavLinks.map(linksObject => {
      return (
        <EuiNavDrawerGroup
          key={linksObject.title}
          title={linksObject.title}
          iconType={linksObject.iconType}
          initialIsOpen={
            linksObject.title ? openGroups.includes(linksObject.title) : true
          }
          onToggle={(isOpen: boolean) =>
            toggleAccordion(isOpen, linksObject.title)
          }>
          <EuiNavDrawerGroupList
            className="chrNavGroup--noPaddingTop"
            listItems={linksObject.links}
            onPinClick={addPin}
          />
        </EuiNavDrawerGroup>
      );
    });
  };

  return (
    <EuiNavDrawer isLocked={navIsDocked} ref={ref} {...rest}>
      {/* TOP */}
      <EuiFlexItem grow={false}>
        <Deployment />
      </EuiFlexItem>

      {/* PINNED */}
      <EuiFlexItem grow={false}>
        {/* Extra div necessary for flex and auto-scroll to behave properly */}
        <div className="chrNavGroup--scroll chrNavGroup--inShade">
          <EuiNavDrawerGroupList listItems={KibanaNavTopLinks.links} />

          {pinnedItems.length > 0 && (
            <EuiNavDrawerGroupList
              className="chrNavGroup--noPaddingTop"
              listItems={pinnedItems}
              onPinClick={removePin}
            />
          )}
        </div>
      </EuiFlexItem>

      {/* BOTTOM */}
      <EuiFlexItem className="chrNavGroup--scroll">
        {createNavGroups()}

        <EuiNavDrawerGroupList
          className="euiNavDrawerGroup"
          listItems={[
            {
              label: `${navIsDocked ? 'Undock' : 'Dock'} navigation`,
              onClick: toggleDockedNav,
              iconType: navIsDocked ? 'lock' : 'lockOpen',
            },
          ]}
        />
      </EuiFlexItem>
    </EuiNavDrawer>
  );
});
