import React, { FunctionComponent, ReactNode } from 'react';

export type EuiNotificationFlyoutFooterProps = {
  mainAction: ReactNode;
  secondaryAction: ReactNode;
  hasNewEvents: boolean;
};

export const EuiNotificationFlyoutFooter: FunctionComponent<EuiNotificationFlyoutFooterProps> = ({
  mainAction,
  hasNewEvents,
  secondaryAction,
}) => {
  return (
    <div className="euiNotificationFlyoutFooter">
      <div>{mainAction}</div>
      <div className="euiNotificationFlyoutFooter__secondaryActions">
        {hasNewEvents && <p>You have new messages</p>}
        {secondaryAction}
      </div>
    </div>
  );
};
