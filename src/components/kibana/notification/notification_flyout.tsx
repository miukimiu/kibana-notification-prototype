import React, { FunctionComponent, useState, useContext } from 'react';

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

import { EuiNotificationFlyoutFooter } from '../../eui/notification/notification_flyout_footer';
import { EuiNotificationFlyoutHeader } from '../../eui/notification/notification_flyout_header';
import { EuiNotificationFlyoutHeaderFilters } from '../../eui/notification/notification_flyout_header_filters';
import { EuiNotificationEvents } from '../../eui/notification/notification_events';
import { EuiNotificationFlyoutSuggestions } from '../../eui/notification/notification_flyout_suggestions';

import { filtersData } from './notification_data';

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
    hasNewEvents,
    onReadEvents,
    onViewSimilarMessages,
    onDismissSuggestion,
    onAddSuggestion,
    onMarkAllAsRead,
    onDismissAllSuggestions,
    onDisableAllSuggestions,
    onRefresh,
  } = useContext(NotificationContext);

  const createId = htmlIdGenerator('euiHeaderAlertFlyout');
  const headerId = `${createId()}__header`;
  const [currentFilters, setCurrentFilters] = useState(filtersData);

  const activeFilters = currentFilters
    .filter((item) => item.checked === 'on')
    .map((item) => item.label);

  const onFiltersChange = (filters: EuiSelectableOption[]) => {
    setCurrentFilters(filters);
  };

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
          onRead={onReadEvents}
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
          hasNewEvents={hasNewEvents}
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
