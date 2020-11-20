import React, { ReactNode } from 'react';
import { navigate } from 'gatsby';

import {
  EuiBreadcrumb,
  EuiPageHeader,
  EuiButton,
  EuiHeaderLink,
  EuiHeaderLinks,
} from '@elastic/eui';
// @ts-ignore
import logs_dashboardImg from '../../../images/[Logs] Web Traffic.png';
import { KibanaGlobals } from '../../../components/kibana/chrome/globals';
import { KibanaPage } from '../../../components/kibana/page/page';

const breadcrumbs: EuiBreadcrumb[] = [
  {
    text: 'Analytics',
    href: '#',
    onClick: () => {
      navigate('analytics/overview');
    },
  },
  {
    text: 'Dashboards',
    href: '#',
    onClick: () => {
      navigate('analytics/dashboards');
    },
  },
  {
    text: '[Logs] Web Traffic',
  },
];

const headerLinks: ReactNode = (
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
  </EuiHeaderLinks>
);

export default () => (
  <KibanaPage
    pageTitle="[Logs] Web Traffic | Dashboards"
    breadcrumbs={breadcrumbs}
    headerLinks={headerLinks}>
    <EuiPageHeader style={{ padding: 16 }}>
      <KibanaGlobals />
    </EuiPageHeader>
    <img
      className="pageScreenshot pageScreenshot--fullWidth"
      alt="[Logs] Web Traffic dashboard"
      width={1175}
      src={logs_dashboardImg}
    />
  </KibanaPage>
);
