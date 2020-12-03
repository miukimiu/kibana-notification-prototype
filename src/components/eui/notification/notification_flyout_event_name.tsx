import React, { FunctionComponent } from 'react';
import { EuiLink, EuiLinkProps } from '@elastic/eui';
import classNames from 'classnames';

export type EuiNotificationFlyoutEventNameProps = EuiLinkProps & {
  title: string;
  isRead?: boolean;
};

export const EuiNotificationFlyoutEventName: FunctionComponent<EuiNotificationFlyoutEventNameProps> = ({
  title,
  isRead,
  ...rest
}) => {
  const classes = classNames('euiNotificationFlyoutEventName', {
    'euiNotificationFlyoutEventName--isRead': isRead,
  });

  return (
    <EuiLink {...rest} className={classes}>
      {title}
    </EuiLink>
  );
};
