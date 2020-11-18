import React, { ReactElement } from 'react';
import classNames from 'classnames';
import { navigate } from 'gatsby';
import {
  CommonProps,
  EuiButton,
  EuiFlexGrid,
  EuiFlexItem,
  EuiCard,
  EuiIcon,
} from '@elastic/eui';

type Props = {
  current?: string;
} & CommonProps;

export function SolutionCards({
  className,
  current,
  ...rest
}: Props): ReactElement {
  const classes = classNames(
    'kbnSolutionCards',
    {
      'kbnSolutionCards--reduced': current,
    },
    className
  );

  return (
    <EuiFlexGrid columns={current ? 3 : 4} className={classes} {...rest}>
      {current !== 'Enterprise search' && (
        <EuiFlexItem>
          <EuiCard
            display="plain"
            className="euiPanel euiPanel--success"
            icon={<EuiIcon size="xl" type="logoEnterpriseSearch" />}
            title="Enterprise search"
            description="Build a powerful website search. Search any data from any
  application. Unify searchable workplace content."
            footer={
              <EuiButton
                color="secondary"
                onClick={() => {
                  navigate('enterprise-search/overview');
                }}
                iconSide="right"
                iconType="arrowRight">
                Search everything
              </EuiButton>
            }
          />
        </EuiFlexItem>
      )}
      {current !== 'Observability' && (
        <EuiFlexItem>
          <EuiCard
            display="plain"
            className="euiPanel euiPanel--accent"
            icon={<EuiIcon size="xl" type="logoObservability" />}
            title="Observability"
            description="Monitor all infrastructure metrics. Track application performance."
            footer={
              <EuiButton
                color="danger"
                onClick={() => {
                  navigate('observability/overview');
                }}
                iconSide="right"
                iconType="arrowRight">
                Centralize & monitor
              </EuiButton>
            }
          />
        </EuiFlexItem>
      )}
      {current !== 'Security' && (
        <EuiFlexItem>
          <EuiCard
            display="plain"
            className="euiPanel euiPanel--subdued"
            icon={<EuiIcon size="xl" type="logoSecurity" />}
            title="Security"
            description="Detect critical security events. Investigate incidents and collaborate. Prevent threats autonomously."
            footer={
              <EuiButton
                color="text"
                onClick={() => {
                  navigate('security/overview');
                }}
                iconSide="right"
                iconType="arrowRight">
                Protect & prevent
              </EuiButton>
            }
          />
        </EuiFlexItem>
      )}
      {current !== 'Analytics' && (
        <EuiFlexItem>
          <EuiCard
            display="plain"
            className="euiPanel euiPanel--primary"
            icon={<EuiIcon size="xl" type="logoKibana" />}
            title="Analytics"
            description="Visualize every aspect of your data. Search and explore your data. Plot your geographic information. Craft pixel-perfect reports."
            footer={
              <EuiButton
                color="primary"
                onClick={() => {
                  navigate('analytics/overview');
                }}
                iconSide="right"
                iconType="arrowRight">
                Analyze everything
              </EuiButton>
            }
          />
        </EuiFlexItem>
      )}
    </EuiFlexGrid>
  );
}
