import React, { FunctionComponent } from 'react';
import { EuiButtonIcon } from '@elastic/eui';
import classNames from 'classnames';

export type EuiNotificationEventReadButtonProps = {
  markAsRead: () => void;
  isRead: boolean;
};

export const EuiNotificationEventReadButton: FunctionComponent<EuiNotificationEventReadButtonProps> = ({
  isRead,
  markAsRead,
}) => {
  const classesReadState = classNames('euiNotificationEventReadButton', {
    'euiNotificationEventReadButton--isRead': isRead === true,
    'euiNotificationEventReadButton--isUnread': isRead === false,
  });

  return (
    <EuiButtonIcon
      aria-label="Mark as read"
      iconType="dot"
      className={classesReadState}
      disabled={isRead}
      onClick={markAsRead}
    />
  );
};
