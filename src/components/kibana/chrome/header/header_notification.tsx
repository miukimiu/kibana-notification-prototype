import React, {
  FunctionComponent,
  Fragment,
  useState,
  useEffect,
  useContext,
} from 'react';

import {
  EuiNotificationFlyout,
  EuiNotificationHeaderButton,
} from '../../../eui/notification';
import { updates } from '../data';
import { NotificationContext } from '../../../../context/notification_context';

export const KibanaHeaderNotification: FunctionComponent = () => {
  const {
    showNotification,
    isFlyoutVisible,
    toggleFlyout,
    closeFlyout,
  } = useContext(NotificationContext);

  const button = (
    <EuiNotificationHeaderButton
      isFlyoutVisible={isFlyoutVisible}
      aria-controls="headerNotification"
      aria-expanded={isFlyoutVisible}
      aria-haspopup="true"
      aria-label="Notification"
      toggleFlyout={toggleFlyout}
      showNotification={showNotification}
    />
  );

  const flyout = isFlyoutVisible && (
    <EuiNotificationFlyout
      id="headerNotification"
      alerts={updates}
      onClose={closeFlyout}
    />
  );

  return (
    <Fragment>
      {button}
      {flyout}
    </Fragment>
  );
};
