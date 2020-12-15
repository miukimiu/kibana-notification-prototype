import React, { FunctionComponent, Fragment, useContext } from 'react';
import {
  EuiPopover,
  EuiButton,
  EuiFlexItem,
  EuiFlexGroup,
  EuiTitle,
  EuiText,
  EuiSpacer,
} from '@elastic/eui';
import { EuiNotificationHeaderButton } from '../../../eui/notification';
import { EuiNotificationFlyout } from '../../notification/notification_flyout';
import { NotificationContext } from '../../../../context/notification_context';

export const KibanaHeaderNotification: FunctionComponent = () => {
  const {
    showNotification,
    isFlyoutVisible,
    toggleFlyout,
    closeFlyout,
    headerNotificationPopoverIsVisible,
    onCloseHeaderNotificationPopover,
    onCriticalNotificationRefresh,
    isCriticalNotification,
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
      <EuiPopover
        ownFocus
        button={button}
        isOpen={headerNotificationPopoverIsVisible}
        closePopover={onCloseHeaderNotificationPopover}
        anchorPosition="downLeft">
        <div style={{ width: 280 }}>
          <EuiFlexGroup
            justifyContent="flexEnd"
            gutterSize="s"
            alignItems="center">
            <EuiFlexItem>
              {isCriticalNotification ? (
                <p>New critical error</p>
              ) : (
                <p>New messages</p>
              )}
            </EuiFlexItem>
            {isFlyoutVisible && (
              <EuiFlexItem>
                <EuiButton
                  size="s"
                  onClick={onCriticalNotificationRefresh}
                  color={isCriticalNotification ? 'danger' : 'primary'}>
                  Refresh
                </EuiButton>
              </EuiFlexItem>
            )}
            {!isFlyoutVisible && (
              <EuiFlexItem>
                <EuiButton size="s" onClick={toggleFlyout} color="danger">
                  See notifications
                </EuiButton>
              </EuiFlexItem>
            )}
          </EuiFlexGroup>
        </div>
      </EuiPopover>
      {flyout}
    </Fragment>
  );
};
