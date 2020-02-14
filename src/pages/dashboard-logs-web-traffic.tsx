import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';

import { EuiPage, EuiFlexGroup, EuiFlexItem } from '@elastic/eui';
// @ts-ignore
import logs_dashboard_img from '../images/[Logs] Web Traffic.png';

export default () => (
  <Layout>
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
