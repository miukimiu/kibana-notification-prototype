import React from 'react';
import Helmet from 'react-helmet';
import { EuiPage, EuiFlexGroup, EuiFlexItem } from '@elastic/eui';
import Layout from '../components/layout';
// @ts-ignore
import home_img from '../images/home.png';

export default () => (
  <Layout>
    <Helmet>
      <title>Kibana 8 Prototype</title>
    </Helmet>
    <EuiPage>
      <EuiFlexGroup justifyContent="center">
        <EuiFlexItem grow={false}>
          <img
            className="pageScreenshot pageScreenshot--fullWidth"
            alt="Kibana home page"
            width={1175}
            src={home_img}
          />
        </EuiFlexItem>
      </EuiFlexGroup>
    </EuiPage>
  </Layout>
);
