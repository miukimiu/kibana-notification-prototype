import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';

import { EuiFlexGroup, EuiFlexItem, Breadcrumb } from '@elastic/eui';
// @ts-ignore
import console_img from '../images/Dev Tools - Console.png';

const breadcrumbs: Breadcrumb[] = [
  {
    text: 'Dev Tools',
  },
];

export default () => (
  <Layout chrome={{ breadcrumbs }}>
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
