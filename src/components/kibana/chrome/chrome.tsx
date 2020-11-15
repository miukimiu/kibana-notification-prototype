import React from 'react';

import {
  EuiHeaderLogo,
  EuiBreadcrumb,
  EuiBadge,
  EuiHeaderLinks,
  EuiHeaderLink,
  EuiButton,
  EuiHeader,
} from '@elastic/eui';
import theme from '@elastic/eui/dist/eui_theme_light.json';

import { user } from './data';

import {
  KibanaHeaderUpdates,
  KibanaHeaderUserMenu,
  KibanaHeaderSpacesMenu,
} from './header';

import { KibanaNav } from './nav';
import { KibanaChromeSearch } from './search';

export type KibanaChromeProps = {
  breadcrumbs?: EuiBreadcrumb[];
};

export const KibanaChrome: React.FunctionComponent<KibanaChromeProps> = ({
  breadcrumbs,
}) => {
  function renderLogo() {
    return (
      <EuiHeaderLogo iconType="logoElastic" href="/" aria-label="Goes to home">
        Elastic
      </EuiHeaderLogo>
    );
  }

  return (
    <>
      <EuiHeader
        position="fixed"
        theme="dark"
        sections={[
          {
            items: [renderLogo()],
            borders: 'none',
          },
          {
            items: [<KibanaChromeSearch />],
            borders: 'none',
          },
          {
            items: [
              <EuiBadge
                color={theme.euiColorDarkestShade}
                iconType="arrowDown"
                iconSide="right">
                Production logs
              </EuiBadge>,
              <KibanaHeaderUpdates />,
              <KibanaHeaderUserMenu {...user} />,
            ],
            borders: 'none',
          },
        ]}
      />
      <EuiHeader
        position="fixed"
        sections={[
          {
            items: [
              <KibanaNav
                currentRoute={
                  breadcrumbs ? String(breadcrumbs[0].text) : 'Home'
                }
              />,
              <KibanaHeaderSpacesMenu />,
            ],
            borders: 'none',
            breadcrumbs,
          },
          {
            borders: 'none',
            items: [
              <EuiHeaderLinks>
                <EuiHeaderLink href="#">Full screen</EuiHeaderLink>

                <EuiHeaderLink href="#">Share</EuiHeaderLink>

                <EuiHeaderLink>Clone</EuiHeaderLink>

                <EuiButton
                  iconType="pencil"
                  style={{ minWidth: 80 }}
                  size="s"
                  color="secondary">
                  Edit
                </EuiButton>
              </EuiHeaderLinks>,
            ],
          },
        ]}
      />
    </>
  );
};
