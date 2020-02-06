import React from 'react';

import {
  EuiAccordion,
  EuiText,
  EuiIcon,
  EuiFlexGroup,
  EuiFlexItem,
  EuiListGroup,
  EuiButton,
  EuiSpacer,
} from '@elastic/eui';

type EuiListGroupProps = React.ComponentProps<typeof EuiListGroup>;

const buttonContent = (
  <EuiFlexGroup gutterSize="s" alignItems="center" responsive={false}>
    <EuiFlexItem grow={false}>
      <EuiIcon type="logoGCPMono" color="ghost" size="xl" />
    </EuiFlexItem>

    <EuiFlexItem>
      <EuiText color="ghost" size="s" className="chrDeployment__buttonTitle">
        <p>
          <small>Deployment</small> <br />
          <strong>personal-databoard</strong>
        </p>
      </EuiText>
    </EuiFlexItem>
  </EuiFlexGroup>
);

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

const content = (
  <div className="chrDeployment__content">
    <EuiListGroup listItems={deploymentsList} flush />
    <EuiSpacer size="s" />
    <EuiButton fullWidth>Manage deployments</EuiButton>
  </div>
);

export default () => (
  <EuiAccordion
    id="accordionForm1"
    className="euiAccordionForm chrDeployment"
    buttonClassName="euiAccordionForm__button chrDeployment__button"
    buttonContent={buttonContent}>
    {content}
  </EuiAccordion>
);
