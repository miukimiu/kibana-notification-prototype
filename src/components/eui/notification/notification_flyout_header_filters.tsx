import React, { FunctionComponent, ReactNode, useState } from 'react';
import {
  EuiPopover,
  EuiSelectable,
  EuiButtonEmpty,
  EuiPopoverTitle,
  EuiPopoverFooter,
  EuiButton,
} from '@elastic/eui';
// @ts-ignore
import { Comparators } from '@elastic/eui/es/services/sort';

import { Options } from './filters_data';

export const EuiNotificationFlyoutHeaderFilters: FunctionComponent<EuiNotificationFlyoutHeaderFiltersProps> = ({}) => {
  const [options, setOptions] = useState(Options);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const closePopover = () => setIsPopoverOpen(false);

  const onButtonClick = () => {
    setOptions(options.slice().sort(Comparators.property('checked')));
    setIsPopoverOpen(!isPopoverOpen);
  };

  const onChange = (options) => {
    setOptions(options);
  };

  const FilterButton = (
    <EuiButtonEmpty size="s" onClick={onButtonClick}>
      Filters
    </EuiButtonEmpty>
  );

  return (
    <EuiPopover
      id="popover"
      panelPaddingSize="none"
      button={FilterButton}
      isOpen={isPopoverOpen}
      closePopover={closePopover}>
      <EuiSelectable
        searchable
        searchProps={{
          placeholder: 'Filter list',
          compressed: true,
        }}
        options={options}
        onChange={onChange}>
        {(list, search) => (
          <div style={{ width: 240 }}>
            <EuiPopoverTitle paddingSize="s">{search}</EuiPopoverTitle>
            {list}
            <EuiPopoverFooter paddingSize="s">
              <EuiButton size="s" fullWidth onClick={closePopover}>
                Close
              </EuiButton>
            </EuiPopoverFooter>
          </div>
        )}
      </EuiSelectable>
    </EuiPopover>
  );
};
