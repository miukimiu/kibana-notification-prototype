import React from 'react';
import { EuiPage, EuiImage } from '@elastic/eui';

import home_img from './assets/Home.png';
import { EuiFlexGroup } from '@elastic/eui';
import { EuiFlexItem } from '@elastic/eui';

export default () => (
  <EuiPage>
    <EuiFlexGroup justifyContent="center">
      <EuiFlexItem grow={false}>
        <img width={1175} src={home_img} />
      </EuiFlexItem>
    </EuiFlexGroup>
  </EuiPage>
);
