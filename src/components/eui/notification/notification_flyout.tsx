import React, { FunctionComponent, useState, useEffect } from 'react';

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
  EuiSelectableOption,
} from '@elastic/eui';

import { navigate } from 'gatsby';

import { EuiNotificationFlyoutFooter } from './notification_flyout_footer';
import { EuiNotificationFlyoutHeader } from './notification_flyout_header';
import { EuiNotificationFlyoutHeaderFilters } from './notification_flyout_header_filters';
import { EuiNotificationEvents } from './notification_events';
import { EuiNotificationFlyoutSuggestions } from './notification_flyout_suggestions';

import {
  notificationEventsData,
  notificationSuggestionsData,
  filtersData,
} from '../../kibana/notification/notification_data';

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
  const createId = htmlIdGenerator('euiHeaderAlertFlyout');
  const headerId = `${createId()}__header`;

  const [currentFilters, setCurrentFilters] = useState(filtersData);
  const [notifications, setNotifications] = useState(notificationEventsData);
  const [suggestions, setSuggestions] = useState(notificationSuggestionsData);
  const [newEvents, setNewEvents] = useState(false);

  const activeFilters = currentFilters
    .filter((item) => item.checked === 'on')
    .map((item) => item.label);

  const onFiltersChange = (filters: EuiSelectableOption[]) => {
    setCurrentFilters(filters);
  };

  const onRead = (id: string, isRead: boolean) => {
    const nextState = notifications.map((item) =>
      item.id === id ? { ...item, isRead: isRead } : item
    );

    setNotifications(nextState);
  };

  const onViewSimilarMessages = (type: string) => {
    const nextState = notifications.filter((item) => item.meta.type === type);

    setTimeout(() => {
      setNotifications(nextState);
    }, 200);
  };

  const onDismissSuggestion = (id: string) => {
    const nextState = suggestions.filter((item) => item.id !== id);

    setSuggestions(nextState);
  };

  const onAddSuggestion = (id: string) => {
    const nextState = suggestions.filter((item) => item.id !== id);

    setSuggestions(nextState);
  };

  const onMarkAllAsRead = () => {
    const nextState = notifications.map((item) => {
      return { ...item, isRead: true };
    });

    setNotifications(nextState);
  };

  const onDismissAllSuggestions = () => {
    setSuggestions([]);
  };

  const onDisableAllSuggestions = () => {
    setSuggestions([]);
  };

  const onRefresh = () => {
    setNotifications(notificationEventsData);
    setSuggestions(notificationSuggestionsData);
    setCurrentFilters(filtersData);
  };

  useEffect(() => {
    setTimeout(() => {
      setNewEvents(true);
    }, 30000);
  });

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
        <EuiNotificationFlyoutSuggestions
          suggestions={suggestions}
          onDismiss={onDismissSuggestion}
          onAdd={onAddSuggestion}
          onDismissAll={onDismissAllSuggestions}
          onDisableAll={onDisableAllSuggestions}
        />
        <EuiNotificationEvents
          events={notifications}
          onRead={onRead}
          onViewSimilarMessages={onViewSimilarMessages}
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
            <EuiButtonEmpty onClick={goToNotificationCenter}>
              Open notification center
            </EuiButtonEmpty>
          }
          hasNewEvents={newEvents}
          secondaryAction={
            <EuiButton size="s" onClick={onRefresh}>
              Refresh
            </EuiButton>
          }
        />
      </EuiFlyoutFooter>
    </EuiFlyout>
  );
};
