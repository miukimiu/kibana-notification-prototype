import React, { FunctionComponent, useContext } from 'react';

import {
  EuiFlyout,
  EuiFlyoutBody,
  EuiFlyoutHeader,
  EuiFlyoutFooter,
  EuiFlyoutProps,
  EuiHeaderAlertProps,
  htmlIdGenerator,
  EuiButton,
  EuiButtonEmpty,
} from '@elastic/eui';

import { navigate } from 'gatsby';

import {
  EuiNotificationFlyoutHeader,
  EuiNotificationFlyoutFooter,
  EuiNotificationFlyoutHeaderFilters,
  EuiNotificationEvents,
  EuiNotificationSuggestions,
} from '../../eui/notification/';

import { NotificationContext } from '../../../context/notification_context';

export type EuiNotificationFlyoutProps = {
  alerts?: EuiHeaderAlertProps[];
  title?: string;
  version?: string;
} & EuiFlyoutProps;

export const EuiNotificationFlyout: FunctionComponent<EuiNotificationFlyoutProps> = ({
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
    <EuiFlyout
      ownFocus
      className="euiNotificationFlyout"
      onClose={onClose}
      size="m"
      maxWidth="540px"
      aria-labelledby={headerId}
      {...rest}>
      <EuiFlyoutHeader hasBorder>
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
      </EuiFlyoutHeader>
      <EuiFlyoutBody>
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
      </EuiFlyoutBody>
      <EuiFlyoutFooter>
        <EuiNotificationFlyoutFooter
          mainAction={
            <EuiButton size="s" onClick={goToNotificationCenter}>
              Open notification center
            </EuiButton>
          }
        />
      </EuiFlyoutFooter>
    </EuiFlyout>
  );
};
