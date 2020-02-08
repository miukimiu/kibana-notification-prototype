import React, { useState } from 'react';

import {
  EuiAvatar,
  EuiFlexGroup,
  EuiFlexItem,
  EuiHeaderSectionItemButton,
  EuiLink,
  EuiText,
  EuiSpacer,
  EuiPopover,
  htmlIdGenerator,
} from '@elastic/eui';

import ThemeButton from './header_theme_button';

export type KibanaUserProps = {
  username: string;
};

type Props = KibanaUserProps &
  React.ComponentProps<typeof EuiHeaderSectionItemButton>;

export const KibanaHeaderUserMenu: React.FunctionComponent<Props> = ({
  username,
  ...rest
}) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const onMenuButtonClick = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  const closeMenu = () => {
    setMenuIsOpen(false);
  };

  const createMenuId = htmlIdGenerator('KibanaUserMenu');
  const menuId = createMenuId();

  const button = (
    <EuiHeaderSectionItemButton
      aria-controls={menuId}
      aria-expanded={menuIsOpen}
      aria-haspopup="true"
      aria-label="User menu"
      onClick={onMenuButtonClick}
      {...rest}>
      <EuiAvatar name={username} size="s" />
    </EuiHeaderSectionItemButton>
  );

  return (
    <EuiPopover
      ownFocus
      anchorPosition="downRight"
      panelPaddingSize="m"
      button={button}
      id={menuId}
      isOpen={menuIsOpen}
      closePopover={closeMenu}>
      <EuiFlexGroup gutterSize="m" responsive={false}>
        <EuiFlexItem grow={false}>
          <EuiAvatar name={username} size="xl" />
        </EuiFlexItem>

        <EuiFlexItem>
          <EuiText>
            <p>{username}</p>
          </EuiText>

          <EuiSpacer size="m" />

          <EuiFlexGroup justifyContent="spaceBetween" responsive={false}>
            <EuiFlexItem grow={false}>
              <EuiLink href="">Edit profile</EuiLink>
            </EuiFlexItem>

            <EuiFlexItem grow={false}>
              <EuiLink href="">Log out</EuiLink>
            </EuiFlexItem>
          </EuiFlexGroup>

          <EuiSpacer size="m" />

          <ThemeButton />
        </EuiFlexItem>
      </EuiFlexGroup>
    </EuiPopover>
  );
};
