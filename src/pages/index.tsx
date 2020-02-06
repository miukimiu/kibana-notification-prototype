import React from 'react';
import { EuiPage, EuiFlexGroup, EuiFlexItem } from '@elastic/eui';

// @ts-ignore
import home_img from '../images/home.png';

export default () => (
  <EuiPage>
    <EuiFlexGroup justifyContent="center">
      <EuiFlexItem grow={false}>
        <img alt="Kibana home page" width={1175} src={home_img} />
      </EuiFlexItem>
    </EuiFlexGroup>
  </EuiPage>
);
