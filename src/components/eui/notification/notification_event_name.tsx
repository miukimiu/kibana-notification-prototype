import React, { FunctionComponent } from 'react';
import { EuiLink, EuiLinkProps } from '@elastic/eui';
import classNames from 'classnames';

export type EuiNotificationEventNameProps = EuiLinkProps & {
  title: string;
  isRead?: boolean;
};

export const EuiNotificationEventName: FunctionComponent<EuiNotificationEventNameProps> = ({
  title,
  isRead,
  ...rest
}) => {
  const classes = classNames('euiNotificationEventName', {
    'euiNotificationEventName--isRead': isRead,
  });

  return (
    <EuiLink {...rest} className={classes}>
      {title}
    </EuiLink>
  );
};
