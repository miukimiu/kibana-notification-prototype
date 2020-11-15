import React, { ReactNode } from 'react';
import Helmet from 'react-helmet';
import { navigate } from 'gatsby';
import Layout from '../components/layout';

import {
  EuiPage,
  EuiBreadcrumb,
  EuiPageBody,
  EuiPageHeader,
  EuiButton,
  EuiHeaderLink,
  EuiHeaderLinks,
} from '@elastic/eui';
// @ts-ignore
import logs_dashboard_img from '../images/[Logs] Web Traffic.png';
import { KibanaGlobals } from '../components/kibana/chrome/globals';

const breadcrumbs: EuiBreadcrumb[] = [
  {
    text: 'Analytics',
    href: '#',
    onClick: () => {
      navigate('analytics-overview');
    },
  },
  {
    text: 'Dashboards',
    href: '#',
    onClick: () => {
      navigate('dashboards');
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
  <Layout chrome={{ breadcrumbs, headerLinks }}>
    <Helmet>
      <title>[Logs] Web Traffic | Dashboards | Kibana 8 Prototype</title>
    </Helmet>
    <EuiPage>
      <EuiPageBody>
        <EuiPageHeader style={{ padding: 16 }}>
          <KibanaGlobals />
        </EuiPageHeader>
        <img
          className="pageScreenshot pageScreenshot--fullWidth"
          alt="[Logs] Web Traffic dashboard"
          width={1175}
          src={logs_dashboard_img}
        />
      </EuiPageBody>
    </EuiPage>
  </Layout>
);
