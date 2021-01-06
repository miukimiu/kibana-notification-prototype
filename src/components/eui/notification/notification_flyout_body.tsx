import React, { FunctionComponent } from 'react';
import { EuiFlyoutBody, EuiFlyoutBodyProps } from '@elastic/eui';

export const EuiNotificationFlyoutBody: FunctionComponent<EuiFlyoutBodyProps> = ({
  children,
  ...rest
}) => {
  return <EuiFlyoutBody {...rest}>{children}</EuiFlyoutBody>;
};
