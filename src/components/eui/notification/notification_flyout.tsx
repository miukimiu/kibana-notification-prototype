import React, { FunctionComponent } from 'react';
import { EuiFlyout, EuiFlyoutProps } from '@elastic/eui';

export const EuiNotificationFlyout: FunctionComponent<EuiFlyoutProps> = ({
  onClose,
  children,
  ...rest
}) => {
  return (
    <EuiFlyout
      ownFocus
      className="euiNotificationFlyout"
      onClose={onClose}
      size="m"
      maxWidth="540px"
      {...rest}>
      {children}
    </EuiFlyout>
  );
};
