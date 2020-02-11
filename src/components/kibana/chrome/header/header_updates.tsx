import React, { FunctionComponent, Fragment, useState } from 'react';

import {
  EuiIcon,
  EuiHeaderSectionItemButton,
  EuiNotificationBadge,
} from '@elastic/eui';

import { EuiHeaderAlertFlyout } from '../../../eui/header';
import { updates } from '../data';

export const KibanaHeaderUpdates: FunctionComponent = () => {
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
      aria-controls="headerNewsFeed"
      aria-expanded={isFlyoutVisible}
      aria-haspopup="true"
      aria-label="News feed"
      onClick={toggleFlyout}>
      <EuiIcon type="email" size="m" />

      {showNotification ? (
        /** TODO: Add this as an option directly to EuiHeaderSectionItemButton */
        <EuiNotificationBadge className="euiHeaderNotification">
          &#9642;
        </EuiNotificationBadge>
      ) : null}
    </EuiHeaderSectionItemButton>
  );

  let flyout;
  if (isFlyoutVisible) {
    flyout = (
      <EuiHeaderAlertFlyout
        id="headerNewsFeed"
        alerts={updates}
        version="Version 8.0"
        onClose={closeFlyout}
      />
    );
  }

  return (
    <Fragment>
      {button}
      {flyout}
    </Fragment>
  );
};
