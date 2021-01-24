import React, { FunctionComponent, ReactNode } from 'react';
import { EuiFlyoutFooter, EuiFlexGroup, EuiFlexItem } from '@elastic/eui';

export type EuiNotificationFlyoutFooterProps = {
  mainAction?: ReactNode;
  secondaryAction?: ReactNode;
};

export const EuiNotificationFlyoutFooter: FunctionComponent<EuiNotificationFlyoutFooterProps> = ({
  mainAction,
  secondaryAction,
}) => {
  return (
    <EuiFlyoutFooter>
      <EuiFlexGroup className="euiNotificationFlyoutFooter">
        <EuiFlexItem>{secondaryAction && secondaryAction}</EuiFlexItem>
        <EuiFlexItem grow={false}> {mainAction && mainAction}</EuiFlexItem>
      </EuiFlexGroup>
    </EuiFlyoutFooter>
  );
};
