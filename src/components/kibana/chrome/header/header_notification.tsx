import React, { FunctionComponent, Fragment, useContext } from 'react';

import { EuiNotificationHeaderButton } from '../../../eui/notification';
import { EuiNotificationFlyout } from '../../notification/notification_flyout';
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
    <EuiNotificationFlyout id="headerNotification" onClose={closeFlyout} />
  );

  return (
    <Fragment>
      {button}
      {flyout}
    </Fragment>
  );
};
