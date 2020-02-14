import React from 'react';
import Helmet from 'react-helmet';
// import { Link } from 'gatsby';
import Layout from '../components/layout';

import { EuiPage, EuiFlexGroup, EuiFlexItem } from '@elastic/eui';
// @ts-ignore
import maps_img from '../images/Maps - Listing.png';

export default () => (
  <Layout>
    <Helmet>
      <title>Maps | Kibana 8 Prototype</title>
    </Helmet>
    <EuiPage>
      <EuiFlexGroup justifyContent="center">
        <EuiFlexItem grow={false} style={{ position: 'relative' }}>
          <img
            className="pageScreenshot"
            alt="Dashboard listing page"
            width={978}
            src={maps_img}
          />
          {/* <Link
            className="fake-logs-dashboard-link"
            to="/dashboard-logs-web-traffic">
            [Logs] Web traffic
          </Link> */}
        </EuiFlexItem>
      </EuiFlexGroup>
    </EuiPage>
  </Layout>
);
