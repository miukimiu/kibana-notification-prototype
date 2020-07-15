import React from 'react';
import Helmet from 'react-helmet';
import { navigate } from 'gatsby';
import Layout from '../components/layout';

import {
  EuiPage,
  EuiFlexGroup,
  EuiFlexItem,
  EuiBreadcrumb,
} from '@elastic/eui';
// @ts-ignore
import logs_dashboard_img from '../images/[Logs] Web Traffic.png';

const breadcrumbs: EuiBreadcrumb[] = [
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

export default () => (
  <Layout chrome={{ breadcrumbs }}>
    <Helmet>
      <title>[Logs] Web Traffic | Dashboards | Kibana 8 Prototype</title>
    </Helmet>
    <EuiPage>
      <EuiFlexGroup justifyContent="center">
        <EuiFlexItem grow={false}>
          <img
            className="pageScreenshot pageScreenshot--fullWidth"
            alt="[Logs] Web Traffic dashboard"
            width={1175}
            src={logs_dashboard_img}
          />
        </EuiFlexItem>
      </EuiFlexGroup>
    </EuiPage>
  </Layout>
);
