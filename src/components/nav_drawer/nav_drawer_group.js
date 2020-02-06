import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { EuiListGroup } from '@elastic/eui';

export const ATTR_SELECTOR = 'data-name';

export const pinExtraAction = {
  color: 'primary',
  iconType: 'pinFilled',
  iconSize: 's',
  className: 'euiNavDrawerGroup__itemExtraAction',
  'aria-label': 'Pin to top',
  title: 'Pin to top',
};

export const pinnedExtraAction = {
  color: 'subdued',
  iconType: 'pinFilled',
  iconSize: 's',
  className:
    'euiNavDrawerGroup__itemExtraAction euiNavDrawerGroup__itemExtraAction-pinned',
  'aria-label': 'Unpin item',
  title: 'Unpin item',
  alwaysShow: true,
};

export const EuiNavDrawerGroup = ({
  className,
  onPinClick,
  listItems,
  ...rest
}) => {
  const classes = classNames('euiNavDrawerGroup', className);

  const listItemsExists = listItems && !!listItems.length;

  // Alter listItems object with extra props
  const newListItems =
    listItemsExists &&
    listItems.map(item => {
      const { pinned, ...itemProps } = item;
      // Make some declarations of props for the side nav implementation
      itemProps.className = classNames(
        'euiNavDrawerGroup__item',
        item.className
      );
      itemProps.size = item.size || 's';
      // itemProps[ATTR_SELECTOR] = item.label; // Not sure what this does
      // itemProps['aria-label'] = item['aria-label'] || item.label; // unnecessary

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

EuiNavDrawerGroup.propTypes = {
  listItems: PropTypes.arrayOf(
    PropTypes.shape({
      ...EuiListGroup.propTypes.listItems[0],
      pinned: PropTypes.bool,
    })
  ),
  /**
   * Adds the pinning icon and calls this function on click
   */
  onPinClick: PropTypes.func,
};
