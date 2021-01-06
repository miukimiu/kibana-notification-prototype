import React, { FunctionComponent, ReactNode } from 'react';
import { EuiFlyoutFooter } from '@elastic/eui';

export type EuiNotificationFlyoutFooterProps = {
  mainAction?: ReactNode;
};

export const EuiNotificationFlyoutFooter: FunctionComponent<EuiNotificationFlyoutFooterProps> = ({
  mainAction,
}) => {
  return (
    <EuiFlyoutFooter>
      <div className="euiNotificationFlyoutFooter">
        {mainAction && mainAction}
      </div>
    </EuiFlyoutFooter>
  );
};
