import React from 'react';

import {
  EuiCollapsibleNavGroup,
  EuiListGroupProps,
  EuiListGroup,
} from '@elastic/eui';

const deploymentsList: EuiListGroupProps['listItems'] = [
  {
    label: 'Elastic Observability',
    iconType: 'logoObservability',
    size: 's',
  },
  {
    label: 'Elastic Security',
    iconType: 'logoSecurity',
    size: 's',
  },
];

export const DocsMissionNav = () => (
  <EuiCollapsibleNavGroup
    title={
      <span>
        <small style={{ fontWeight: 'normal' }}>Mission</small> <br />
        <strong>Product Design</strong>
      </span>
    }
    iconType="glasses"
    iconSize="xl"
    isCollapsible={true}
    initialIsOpen={false}
    background="dark">
    <div role="group" className="kibanaNavDeployment__content">
      <EuiListGroup listItems={deploymentsList} flush />
    </div>
  </EuiCollapsibleNavGroup>
);
