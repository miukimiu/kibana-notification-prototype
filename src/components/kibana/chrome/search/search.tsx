import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { navigate } from 'gatsby';

import {
  EuiIcon,
  EuiHighlight,
  EuiTextColor,
  EuiBadge,
  EuiSelectable,
  EuiFlexGroup,
  EuiFlexItem,
  EuiLink,
  EuiText,
  EuiPopover,
} from '@elastic/eui';
import {
  EuiSelectableOptionsProps,
  EuiSelectableOptionProps,
} from '../../../../eui_types_shim';

import { searchData, recents } from '../data';

const allSearches = searchData.concat(recents);
const data: EuiSelectableOptionsProps = allSearches.map(item => {
  return {
    key: item.title,
    label: `${item.title} ${item.type.title}`,
    prepend: <EuiIcon type={item.type.iconType} size="l" color="subdued" />,
  };
});

const recentData: EuiSelectableOptionsProps = recents.map(item => {
  return {
    key: item.title,
    label: `${item.title} ${item.type.title}`,
    prepend: <EuiIcon type={item.type.iconType} size="l" color="subdued" />,
    append: <EuiIcon type="clock" size="s" color="subdued" />,
  };
});

export const KibanaChromeSearch = () => {
  const options = data;
  const [inputHasFocus, setInputHasFocus] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const searchValueExists = searchValue && searchValue !== '';

  let inputRef: HTMLInputElement;

  useEffect(() => {
    window.addEventListener('keydown', onWindowKeyDown);

    return function cleanup() {
      window.removeEventListener('resize', onWindowKeyDown);
    };
  });

  const onWindowKeyDown = (e: any) => {
    if (e.metaKey && e.key.toLowerCase() === 'k') {
      window.addEventListener('keyup', onWindowKeyUp);
    }
  };

  const onWindowKeyUp = () => {
    inputRef && inputRef.focus();
    window.removeEventListener('keyup', onWindowKeyUp);
  };

  const onChange = (updatedOptions: EuiSelectableOptionProps[]) => {
    const clickedItem = _.find(updatedOptions, { checked: 'on' });
    if (!clickedItem) return;
    const searchItem = _.find(allSearches, { title: clickedItem.key });
    if (searchItem && searchItem.url) navigate(searchItem.url);
  };

  const renderOption = (
    option: EuiSelectableOptionProps,
    searchValue: string
  ) => {
    const moreInfo = _.find(allSearches, { title: option.key });
    if (!moreInfo) return 'Missing info';

    return (
      <>
        <EuiHighlight search={searchValue}>{moreInfo.title}</EuiHighlight>
        <EuiTextColor
          color="subdued"
          className="eui-displayBlock kibanaChromeSearch__itemLinkSubtext">
          <small>
            <EuiHighlight search={searchValue}>
              {moreInfo.type.title}
            </EuiHighlight>
          </small>
        </EuiTextColor>
      </>
    );
  };

  return (
    <EuiSelectable
      className="kibanaChromeSearch"
      searchable
      options={searchValueExists ? options : recentData}
      onChange={onChange}
      renderOption={renderOption}
      height={300}
      singleSelection={true}
      searchProps={{
        className: 'kbnSearch__darkTheme',
        compressed: true,
        placeholder: 'Search for anything...',
        onFocus: () => setInputHasFocus(true),
        onKeyUpCapture: (e: any) => setSearchValue(e.currentTarget.value),
        // TODO: Allow pre/appends on search inputs
        append: '⌘K',
        inputRef: (ref: HTMLInputElement) => (inputRef = ref),
        // TODO: `isClearable` doesn't seem to work or is not passed down
        isClearable: true,
      }}
      listProps={{
        rowHeight: 68,
        showIcons: false,
        className: 'kibanaChromeSearch__list',
      }}>
      {(list, search) => (
        <EuiPopover
          id="popover"
          button={search}
          isOpen={inputHasFocus}
          closePopover={() => setInputHasFocus(false)}
          panelPaddingSize="none">
          <div style={{ width: '600px' }}>
            {list}
            <EuiText className="kibanaChromeSearch__popoverFooter" size="xs">
              <EuiFlexGroup
                alignItems="center"
                gutterSize="s"
                responsive={false}>
                <EuiFlexItem grow={false}>
                  <EuiLink>View more results</EuiLink>
                </EuiFlexItem>
                <EuiFlexItem />
                <EuiFlexItem grow={false}>Quickly search using</EuiFlexItem>
                <EuiFlexItem grow={false}>
                  <EuiBadge>Command + K</EuiBadge>
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiText>
          </div>
        </EuiPopover>
      )}
    </EuiSelectable>
  );
};
