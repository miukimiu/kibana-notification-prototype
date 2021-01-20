import React, { FunctionComponent, useContext } from 'react';

import {
  EuiFlyoutProps,
  EuiHeaderAlertProps,
  htmlIdGenerator,
  EuiButton,
} from '@elastic/eui';

import { navigate } from 'gatsby';

import {
  EuiNotificationFlyout,
  EuiNotificationFlyoutBody,
  EuiNotificationFlyoutHeader,
  EuiNotificationEvents,
  EuiNotificationFlyoutFooter,
} from '../../eui/notification/';

import { NotificationContext } from '../../../context/notification_context';

export type KibanaNotificationFlyoutProps = {
  alerts?: EuiHeaderAlertProps[];
  title?: string;
  version?: string;
} & EuiFlyoutProps;

export const KibanaNotificationFlyout: FunctionComponent<KibanaNotificationFlyoutProps> = ({
  onClose,
  alerts,
  title = 'Notifications',
  version,
  ...rest
}) => {
  const {
    notifications,
    onAddNewNotification,
    flyoutShowNewNotification,
  } = useContext(NotificationContext);

  const createId = htmlIdGenerator('euiHeaderAlertFlyout');
  const headerId = `${createId()}__header`;

  const goToNotificationCenter = () => {
    navigate('notification/center');
    onClose();
  };

  return (
    <EuiNotificationFlyout
      onClose={onClose}
      aria-labelledby={headerId}
      {...rest}>
      <EuiNotificationFlyoutHeader title={title} />
      <EuiNotificationFlyoutBody>
        <EuiNotificationEvents
          events={notifications}
          emptyStateAction={
            <EuiButton onClick={goToNotificationCenter}>
              Open Notification Center
            </EuiButton>
          }
        />
      </EuiNotificationFlyoutBody>
      <EuiNotificationFlyoutFooter
        mainAction={
          <EuiButton
            size="s"
            onClick={onAddNewNotification}
            disabled={!flyoutShowNewNotification}>
            Refresh
          </EuiButton>
        }
        secondaryAction={
          flyoutShowNewNotification && <p> You have 1 new message</p>
        }
      />
    </EuiNotificationFlyout>
  );
};
