import React, { FunctionComponent, ReactNode } from 'react';

export type EuiNotificationFlyoutFooterProps = {
  mainAction?: ReactNode;
};

export const EuiNotificationFlyoutFooter: FunctionComponent<EuiNotificationFlyoutFooterProps> = ({
  mainAction,
}) => {
  return (
    <div className="euiNotificationFlyoutFooter">
      {mainAction && mainAction}
    </div>
  );
};
