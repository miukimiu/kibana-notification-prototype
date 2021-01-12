import React, { FunctionComponent, ReactNode } from 'react';
import { EuiFlyoutFooter } from '@elastic/eui';

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
      <div className="euiNotificationFlyoutFooter">
        {mainAction && mainAction}
        {secondaryAction && secondaryAction}
      </div>
    </EuiFlyoutFooter>
  );
};
