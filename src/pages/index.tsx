import React from 'react';
import { EuiPage, EuiFlexGroup, EuiFlexItem } from '@elastic/eui';
// @ts-ignore
import Layout from '../components/layout';

// @ts-ignore
import home_img from '../images/home.png';

export default () => (
  <Layout>
    <EuiPage>
      <EuiFlexGroup justifyContent="center">
        <EuiFlexItem grow={false}>
          <img
            className="pageScreenshot"
            alt="Kibana home page"
            width={1175}
            src={home_img}
          />
        </EuiFlexItem>
      </EuiFlexGroup>
    </EuiPage>
  </Layout>
);
