import React, { FunctionComponent, useContext } from 'react';

import {
  EuiFlyoutProps,
  EuiHeaderAlertProps,
  htmlIdGenerator,
  EuiButton,
  EuiButtonEmpty,
} from '@elastic/eui';

import { navigate } from 'gatsby';

import {
  EuiNotificationFlyout,
  EuiNotificationFlyoutBody,
  EuiNotificationFlyoutHeader,
  EuiNotificationEvents,
  EuiNotificationSuggestions,
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
    suggestions,
    onDismissSuggestion,
    onAddSuggestion,
    onDismissAllSuggestions,
    onDisableAllSuggestions,
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
        <EuiNotificationSuggestions
          suggestions={suggestions}
          onDismiss={onDismissSuggestion}
          onAdd={onAddSuggestion}
          onDismissAll={onDismissAllSuggestions}
          onDisableAll={onDisableAllSuggestions}
        />
        <EuiNotificationEvents
          events={notifications}
          // onRead={onReadEvents}
          // onViewSimilarMessages={onViewSimilarMessages}
          // onDisableNotifications={onDisableNotifications}
          // activeFilters={activeFilters}
          emptyStateAction={
            <EuiButton onClick={goToNotificationCenter}>
              Open Notification Center
            </EuiButton>
          }
        />
      </EuiNotificationFlyoutBody>

      {flyoutShowNewNotification && (
        <EuiButton
          className="euiNotificationRefreshButton"
          iconSide="right"
          size="s"
          onClick={onAddNewNotification}
          iconType="refresh">
          You have 1 new message
        </EuiButton>
      )}

      {/* 
      <EuiNotificationFlyoutFooter
        mainAction={
          <EuiButton size="s" onClick={goToNotificationCenter}>
            Open notification center
          </EuiButton>
        }
      /> */}
    </EuiNotificationFlyout>
  );
};
