import React, { FunctionComponent } from 'react';
import { EuiLink, EuiLinkProps } from '@elastic/eui';
import classNames from 'classnames';

export type EuiNotificationFlyoutMessageLinkProps = EuiLinkProps & {
  title: string;
  visited?: boolean;
};

export const EuiNotificationFlyoutMessageLink: FunctionComponent<EuiNotificationFlyoutMessageLinkProps> = ({
  title,
  visited,
  ...rest
}) => {
  const classes = classNames('euiNotificationFlyoutMessageLink', {
    'euiNotificationFlyoutMessageLink--isSeen': visited,
  });

  return (
    <EuiLink {...rest} className={classes}>
      {title}
    </EuiLink>
  );
};
