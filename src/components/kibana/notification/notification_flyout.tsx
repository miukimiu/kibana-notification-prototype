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
  EuiNotificationFlyoutFooter,
  EuiNotificationFlyoutHeaderFilters,
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
    onReadEvents,
    onViewSimilarMessages,
    onDisableNotifications,
    onDismissSuggestion,
    onAddSuggestion,
    onMarkAllAsRead,
    onDismissAllSuggestions,
    onDisableAllSuggestions,
    onFiltersChange,
    activeFilters,
    currentFilters,
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
      <EuiNotificationFlyoutHeader
        title={title}
        actions={
          <>
            <EuiNotificationFlyoutHeaderFilters
              filters={currentFilters}
              onFiltersChange={onFiltersChange}
            />
            <EuiButtonEmpty size="s" onClick={onMarkAllAsRead}>
              Mark all as read
            </EuiButtonEmpty>
          </>
        }
      />
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
          onRead={onReadEvents}
          onViewSimilarMessages={onViewSimilarMessages}
          onDisableNotifications={onDisableNotifications}
          activeFilters={activeFilters}
          emptyStateAction={
            <EuiButton onClick={goToNotificationCenter}>
              Open Notification Center
            </EuiButton>
          }
        />
      </EuiNotificationFlyoutBody>

      <EuiNotificationFlyoutFooter
        mainAction={
          <EuiButton size="s" onClick={goToNotificationCenter}>
            Open notification center
          </EuiButton>
        }
      />
    </EuiNotificationFlyout>
  );
};
