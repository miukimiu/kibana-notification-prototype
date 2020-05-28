import React from 'react';

import {
  EuiHeaderLogo,
  Breadcrumb,
  EuiBadge,
  EuiHeaderLinks,
  EuiHeaderLink,
  EuiButton,
} from '@elastic/eui';
import theme from '@elastic/eui/dist/eui_theme_light.json';

import { user } from './data';

import {
  KibanaHeaderUpdates,
  KibanaHeaderUserMenu,
  KibanaHeaderSpacesMenu,
} from './header';

import { KibanaNav } from './nav';
// import { KibanaChromeSearch } from './search';
import { navigate } from 'gatsby';
import { EuiFixed } from '../../eui/fixed/fixed';
import { EuiHeaderShim } from '../../eui/header/header_shim';

export type KibanaChromeProps = {
  breadcrumbs?: Breadcrumb[];
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

  const renderBreadcrumbs = () => {
    if (!breadcrumbs) return;
    const breadcrumbList: Breadcrumb[] = [
      {
        text: 'Home',
        onClick: () => {
          navigate('/');
        },
      },
    ];
    return breadcrumbList.concat(breadcrumbs);
  };

  return (
    <EuiFixed className="kbnChrome">
      <EuiHeaderShim
        theme="dark"
        sections={[
          {
            items: [renderLogo()],
            borders: 'none',
          },
          {
            // items: [<KibanaChromeSearch />],
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
      <EuiHeaderShim
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
            breadcrumbs: renderBreadcrumbs(),
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
    </EuiFixed>
  );
};
