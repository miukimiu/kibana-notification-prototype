import React, { ReactNode } from 'react';

import {
  EuiBreadcrumb,
  EuiPageHeader,
  EuiButton,
  EuiHeaderLink,
  EuiHeaderLinks,
  EuiPageSideBar,
  EuiPageContent,
  EuiFlexGroup,
  EuiFlexItem,
} from '@elastic/eui';
// @ts-ignore
import sidebar_img from '../../images/Discover - sidebar.svg';
// @ts-ignore
import table_img from '../../images/Discover - table.svg';

import { KibanaGlobals } from '../../components/kibana/chrome/globals';
import { KibanaPage } from '../../components/kibana/page/page';

const breadcrumbs: EuiBreadcrumb[] = [
  {
    text: 'Analytics',
    href: '/analytics/overview',
  },
  {
    text: 'Discover',
  },
];

const headerLinks: ReactNode = (
  <EuiHeaderLinks>
    <EuiHeaderLink href="#">New</EuiHeaderLink>

    <EuiHeaderLink href="#">Open</EuiHeaderLink>

    <EuiHeaderLink>Share</EuiHeaderLink>

    <EuiHeaderLink>Inspect</EuiHeaderLink>

    <EuiButton
      iconType="save"
      style={{ minWidth: 80 }}
      size="s"
      color="secondary">
      Save
    </EuiButton>
  </EuiHeaderLinks>
);

export default () => (
  <KibanaPage
    pageTitle="Discover"
    breadcrumbs={breadcrumbs}
    headerLinks={headerLinks}>
    <EuiPageHeader style={{ padding: 16 }}>
      <KibanaGlobals />
    </EuiPageHeader>
    <EuiFlexGroup gutterSize="none" responsive={false}>
      <EuiFlexItem grow={false}>
        <EuiPageSideBar style={{ backgroundColor: '#F5F7FA' }}>
          <img
            className="pageScreenshot"
            alt="Discover sidebar"
            width={288}
            src={sidebar_img}
          />
        </EuiPageSideBar>
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiPageContent>
          <img
            className="pageScreenshot pageScreenshot--fullWidth"
            alt="Discover table"
            src={table_img}
          />
        </EuiPageContent>
      </EuiFlexItem>
    </EuiFlexGroup>
  </KibanaPage>
);
