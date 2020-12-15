import React, { FunctionComponent, ReactNode } from 'react';
import { EuiTitle } from '@elastic/eui';

export type EuiNotificationFlyoutHeaderProps = {
  title: string;
  actions: ReactNode;
};

export const EuiNotificationFlyoutHeader: FunctionComponent<EuiNotificationFlyoutHeaderProps> = ({
  actions,
  title,
}) => {
  return (
    <div className="euiNotificationFlyoutHeader">
      <EuiTitle size="s">
        <h2>{title}</h2>
      </EuiTitle>
      <div className="euiNotificationFlyoutHeader__actions">{actions}</div>
    </div>
  );
};
