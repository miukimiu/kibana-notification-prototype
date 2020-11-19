import React, { Fragment, useState } from 'react';
import { find } from 'lodash';

import {
  EuiHeaderSectionItemButton,
  EuiPopover,
  EuiButton,
  EuiSelectable,
  EuiPopoverTitle,
  EuiPopoverFooter,
  EuiAvatar,
  EuiIcon,
  htmlIdGenerator,
} from '@elastic/eui';
import {
  EuiSelectableOptionProps,
  EuiSelectableOptionsProps,
} from '../../../../eui_types_shim';

import { spaces, additionalSpaces } from '../data/spaces';

function createOptionFromSpace(
  space: KibanaSpaceProps
): EuiSelectableOptionProps {
  return {
    label: space.title,
    prepend: <EuiAvatar name={space.title} type="space" size="s" />,
    checked: space.active ? 'on' : undefined,
  };
}

export type KibanaSpaceProps = {
  title: string;
  active?: boolean;
};

type Props = React.ComponentProps<typeof EuiHeaderSectionItemButton>;

export const KibanaHeaderSpacesMenu: React.FunctionComponent<Props> = ({
  ...props
}) => {
  const spacesList: EuiSelectableOptionsProps = spaces.map((space) =>
    createOptionFromSpace(space)
  );
  const additionalSpacesList: EuiSelectableOptionsProps = additionalSpaces.map(
    (space) => createOptionFromSpace(space)
  );

  const [options, setOptions] = useState(spacesList);
  const [selectedSpace, setSelectedSpace] = useState(
    find(spacesList, { checked: 'on' })
  );
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [isListExtended, setIsListExtended] = useState(false);

  const onMenuButtonClick = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  const closeMenu = () => {
    setMenuIsOpen(false);
  };

  const onSpaceSelect = (options: EuiSelectableOptionsProps) => {
    setOptions(options);
    setMenuIsOpen(false);
    setSelectedSpace(find(options, { checked: 'on' }));
  };

  const addMoreSpaces = () => {
    setOptions(options.concat(additionalSpacesList));
    setIsListExtended(true);
  };

  const createMenuId = htmlIdGenerator('KibanaSpacesMenu');
  const menuId = createMenuId();

  const button = (
    <EuiHeaderSectionItemButton
      aria-controls={menuId}
      aria-expanded={menuIsOpen}
      aria-haspopup="true"
      aria-label="User menu"
      onClick={onMenuButtonClick}
      {...props}>
      {(selectedSpace && selectedSpace.prepend) || <EuiIcon type="user" />}
    </EuiHeaderSectionItemButton>
  );

  return (
    <EuiPopover
      id={menuId}
      button={button}
      isOpen={menuIsOpen}
      closePopover={closeMenu}
      ownFocus
      anchorPosition="downLeft"
      panelPaddingSize="none">
      <EuiSelectable
        // TODO: searchable is not of type boolean only true | undefined
        searchable={isListExtended ? true : undefined}
        options={options}
        onChange={onSpaceSelect}
        singleSelection="always"
        style={{ width: 300 }}
        searchProps={{
          placeholder: 'Find a space',
          compressed: true,
        }}
        listProps={{
          rowHeight: 40,
          showIcons: false,
        }}>
        {(list, search) => (
          <Fragment>
            <EuiPopoverTitle>{search || 'Your spaces'}</EuiPopoverTitle>
            {list}
            <EuiPopoverFooter>
              <EuiButton
                size="s"
                fullWidth
                onClick={addMoreSpaces}
                disabled={isListExtended}>
                Add more spaces
              </EuiButton>
            </EuiPopoverFooter>
          </Fragment>
        )}
      </EuiSelectable>
    </EuiPopover>
  );
};
