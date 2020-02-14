import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';

import { EuiFlexGroup, EuiFlexItem } from '@elastic/eui';
// @ts-ignore
import console_img from '../images/Dev Tools - Console.png';

export default () => (
  <Layout>
    <Helmet>
      <title>Console | Dev Tools | Kibana 8 Prototype</title>
    </Helmet>

    <EuiFlexGroup justifyContent="center" gutterSize="none">
      <EuiFlexItem grow={false}>
        <img
          className="pageScreenshot pageScreenshot--fullWidth"
          alt="Dev Tools / Console"
          width={1175}
          src={console_img}
        />
      </EuiFlexItem>
    </EuiFlexGroup>
  </Layout>
);
