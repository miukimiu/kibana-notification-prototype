import React from 'react';

import {
  EuiCollapsibleNavGroup,
  EuiListGroupProps,
  EuiListGroup,
  EuiButton,
  EuiSpacer,
} from '@elastic/eui';

const deploymentsList: EuiListGroupProps['listItems'] = [
  {
    label: 'combining-binaries',
    iconType: 'logoAzureMono',
    size: 's',
  },
  {
    label: 'stack-monitoring',
    iconType: 'logoAWSMono',
    size: 's',
  },
];

export const DocsMissionNav = () => (
  <EuiCollapsibleNavGroup
    title={
      <span>
        <small style={{ fontWeight: 'normal' }}>Deployment</small> <br />
        <strong>personal-databoard</strong>
      </span>
    }
    iconType="logoGCPMono"
    iconSize="xl"
    isCollapsible={true}
    initialIsOpen={false}
    background="dark">
    <div role="group" className="kibanaNavDeployment__content">
      <EuiListGroup listItems={deploymentsList} flush />
      <EuiSpacer size="s" />
      <EuiButton color="ghost" fullWidth>
        Manage deployments
      </EuiButton>
    </div>
  </EuiCollapsibleNavGroup>
);
