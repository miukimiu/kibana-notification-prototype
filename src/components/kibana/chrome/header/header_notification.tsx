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
      aria-controls="headerNotificationCenter"
      aria-expanded={isFlyoutVisible}
      aria-haspopup="true"
      aria-label="Notification Center"
      notification={showNotification ? '•' : undefined}
      onClick={toggleFlyout}>
      <EuiIcon type="bell" size="m" />
    </EuiHeaderSectionItemButton>
  );

  let flyout;
  if (isFlyoutVisible) {
    flyout = (
      <EuiNotificationFlyout
        id="headerNotificationCenter"
        alerts={updates}
        version="Version 8.0"
        onClose={closeFlyout}
      />
    );
  }

  return (
    <Fragment>
      {button}
      {/* {flyout} */}

      <EuiNotificationFlyout
        id="headerNotificationCenter"
        version="Version 8.0"
        onClose={closeFlyout}
      />
    </Fragment>
  );
};
