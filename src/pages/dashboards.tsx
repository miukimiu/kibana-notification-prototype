import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import Layout from '../components/layout';

import { EuiPage, EuiFlexGroup, EuiFlexItem } from '@elastic/eui';
// @ts-ignore
import dashboard_img from '../images/Dashboard - Listing.png';

export default () => (
  <Layout>
    <Helmet>
      <title>Dashboards | Kibana 8 Prototype</title>
    </Helmet>
    <EuiPage>
      <EuiFlexGroup justifyContent="center">
        <EuiFlexItem grow={false} style={{ position: 'relative' }}>
          <img alt="Dashboard listing page" width={990} src={dashboard_img} />
          <Link
            className="fake-logs-dashboard-link"
            to="/dashboard-logs-web-traffic">
            [Logs] Web traffic
          </Link>
        </EuiFlexItem>
      </EuiFlexGroup>
    </EuiPage>
  </Layout>
);
