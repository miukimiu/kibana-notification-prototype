import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import { EuiListGroup, CommonProps } from '@elastic/eui';
import { EuiListGroupProps, EuiListGroupItemProps } from '../../eui_types_shim';

const pinExtraAction: EuiListGroupItemProps['extraAction'] = {
  color: 'primary',
  iconType: 'pinFilled',
  iconSize: 's',
  className: 'euiNavDrawerGroupList__itemExtraAction',
  'aria-label': 'Pin to top',
  title: 'Pin to top',
};

const pinnedExtraAction: EuiListGroupItemProps['extraAction'] = {
  color: 'primary',
  iconType: 'pinFilled',
  iconSize: 's',
  className:
    'euiNavDrawerGroupList__itemExtraAction euiNavDrawerGroupList__itemExtraAction-pinned',
  'aria-label': 'Unpin item',
  title: 'Unpin item',
  alwaysShow: true,
};

export type EuiNavDrawerGroupListItemProps = EuiListGroupItemProps & {
  pinned?: boolean;
};

export interface EuiNavDrawerGroupListProps
  extends CommonProps,
    EuiListGroupProps {
  listItems: EuiNavDrawerGroupListItemProps[];
  /**
   * Adds the pinning icon and calls this function on click
   */
  onPinClick?: (item: EuiNavDrawerGroupListItemProps) => void;
}

export const EuiNavDrawerGroupList: FunctionComponent<EuiNavDrawerGroupListProps> = ({
  className,
  listItems,
  onPinClick,
  ...rest
}) => {
  const classes = classNames('euiNavDrawerGroupList', className);

  // Alter listItems object with extra props
  const newListItems = listItems.map(item => {
    const { pinned, ...itemProps } = item;
    // Make some declarations of props for the side nav implementation
    itemProps.className = classNames(
      'euiNavDrawerGroupList__item',
      item.className
    );
    itemProps.size = item.size || 's';

    // Add the pinning action
    if (onPinClick) {
      // Different displays for pinned vs unpinned
      if (pinned) {
        itemProps.extraAction = { ...pinnedExtraAction };
      } else {
        itemProps.extraAction = { ...pinExtraAction };
      }
      // Return the item on click
      itemProps.extraAction.onClick = () => onPinClick({ ...item });
    }

    return { ...itemProps };
  });

  return (
    <EuiListGroup className={classes} listItems={newListItems} {...rest} />
  );
};
