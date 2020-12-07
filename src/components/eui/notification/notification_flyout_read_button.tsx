import React, { FunctionComponent } from 'react';
import { EuiButtonIcon } from '@elastic/eui';
import classNames from 'classnames';

export type EuiNotificationFlyoutReadButtonProps = {
  markAsRead: () => void;
  isRead: boolean;
};

export const EuiNotificationFlyoutReadButton: FunctionComponent<EuiNotificationFlyoutReadButtonProps> = ({
  isRead,
  markAsRead,
}) => {
  const classesReadState = classNames(
    'euiNotificationFlyoutEventMeta__readState',
    {
      'euiNotificationFlyoutEventMeta__readState--isRead': isRead === true,
      'euiNotificationFlyoutEventMeta__readState--isUnread': isRead === false,
    }
  );

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
