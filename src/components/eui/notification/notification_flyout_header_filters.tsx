import React, { FunctionComponent, useState } from 'react';
import {
  EuiPopover,
  EuiSelectable,
  EuiButtonEmpty,
  EuiPopoverTitle,
  EuiPopoverFooter,
  EuiButton,
  EuiSelectableOption,
} from '@elastic/eui';

export type EuiNotificationFlyoutHeaderFiltersProps = {
  filters: EuiSelectableOption[];
  onFiltersChange: (filters: Array<string>) => void;
};

export const EuiNotificationFlyoutHeaderFilters: FunctionComponent<EuiNotificationFlyoutHeaderFiltersProps> = ({
  filters,
  onFiltersChange,
}) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const closePopover = () => setIsPopoverOpen(false);

  const onButtonClick = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  const onChange = (newOptions: any) => {
    onFiltersChange(newOptions);
  };

  const numberOfActiveFilters = filters.filter((item) => item.checked === 'on')
    .length;

  const FilterButton = (
    <EuiButtonEmpty
      size="s"
      className="euiNotificationFlyoutHeaderFilters__button"
      onClick={onButtonClick}
      iconType="arrowDown"
      iconSide="right">
      <span className="euiNotificationFlyoutHeaderFilters__text">Filters</span>
      <span className="euiNotificationFlyoutHeaderFilters__buttonNumber">
        {numberOfActiveFilters}
      </span>
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
        options={filters}
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
