import React, { FunctionComponent, Fragment, useState } from 'react';

import { EuiIcon, EuiHeaderSectionItemButton } from '@elastic/eui';

import { EuiNotificationFlyout } from '../../../eui/notification';
import { updates } from '../data';

export const KibanaHeaderNotification: FunctionComponent = () => {
  const [isFlyoutVisible, setIsFlyoutVisible] = useState(false);
  const [showNotification, setShowNotification] = useState(true);

  const closeFlyout = () => {
    setIsFlyoutVisible(false);
  };

  const toggleFlyout = () => {
    setIsFlyoutVisible(!isFlyoutVisible);
    setShowNotification(false);
  };

  const button = (
    <EuiHeaderSectionItemButton
      aria-controls="headerNotification"
      aria-expanded={isFlyoutVisible}
      aria-haspopup="true"
      aria-label="Notification"
      notification={showNotification ? '•' : undefined}
      onClick={toggleFlyout}>
      <EuiIcon type="bell" size="m" />
    </EuiHeaderSectionItemButton>
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
