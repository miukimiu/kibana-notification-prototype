import React, { FunctionComponent, Fragment, useContext } from 'react';
import { EuiPopover, EuiButton, EuiFlexItem, EuiFlexGroup } from '@elastic/eui';
import { EuiNotificationHeaderButton } from '../../../eui/notification';
import { KibanaNotificationFlyout } from '../../notification/notification_flyout';
import { NotificationContext } from '../../../../context/notification_context';

export const KibanaHeaderNotification: FunctionComponent = () => {
  const {
    showNotification,
    isFlyoutVisible,
    toggleFlyout,
    closeFlyout,
  } = useContext(NotificationContext);

  const flyout = isFlyoutVisible && (
    <KibanaNotificationFlyout id="headerNotification" onClose={closeFlyout} />
  );

  return (
    <Fragment>
      <EuiNotificationHeaderButton
        isFlyoutVisible={isFlyoutVisible}
        aria-controls="headerNotification"
        aria-expanded={isFlyoutVisible}
        aria-haspopup="true"
        aria-label="Notification"
        toggleFlyout={toggleFlyout}
        showNotification={showNotification}
      />
      {flyout}
    </Fragment>
  );
};
