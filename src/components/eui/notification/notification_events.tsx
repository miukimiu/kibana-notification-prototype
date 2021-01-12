import React, { FunctionComponent, ReactNode } from 'react';
import classNames from 'classnames';
import { EuiTitle } from '@elastic/eui';
import {
  EuiNotificationEventName,
  EuiNotificationEventNameProps,
} from './notification_event_name';
import {
  EuiNotificationEventMeta,
  EuiNotificationEventMetaProps,
} from './notification_event_meta';

import { EuiNotificationEventNotifications } from './notification_event_notifications';

import {
  EuiNotificationEventPrimaryAction,
  EuiNotificationEventPrimaryActionProps,
} from './notification_event_primary_action';

export type EuiNotificationEventProps = {
  id: string;
  meta: EuiNotificationEventMetaProps;
  name: EuiNotificationEventNameProps;
  isRead?: boolean | undefined;
  primaryAction?: EuiNotificationEventPrimaryActionProps;
  notifications: [];
};

export type EuiNotificationEventsProps = {
  events: EuiNotificationEventProps[];

  activeFilters?: Array<string>;

  emptyStateAction: ReactNode;

  onRead?: (id: string, isRead: boolean) => void;
  onViewSimilarMessages?: (type: string) => void;

  /*
  TODO need to know how this feature is going to work. Is it just passing the `type` of notification enough? 
  */
  onDisableNotifications?: (type: string) => void;
};

export const EuiNotificationEvents: FunctionComponent<EuiNotificationEventsProps> = ({
  events,
  onRead,
  onViewSimilarMessages,
  onDisableNotifications,
  activeFilters,
  emptyStateAction,
}) => {
  // if activeFilters prop exists else just show all events
  const notificationFlyoutEventsFiltered = activeFilters
    ? events.filter((item) => activeFilters.includes(item.meta.type))
    : events;

  if (notificationFlyoutEventsFiltered.length === 0 || events.length === 0) {
    return (
      <div className="euiNotificationEvents euiNotificationEvents--emptyState">
        <EuiTitle size="s">
          <h3>There are no new messages</h3>
        </EuiTitle>

        {emptyStateAction && emptyStateAction}
      </div>
    );
  }

  const notificationFlyoutEvents = notificationFlyoutEventsFiltered.map(
    (event) => {
      const classes = classNames('euiNotificationEvents', {
        'euiNotificationEvents--withReadState':
          typeof event.isRead === 'boolean',
      });

      const onHandleRead = () => {
        onRead!(event.id, true);
      };

      const onHandleViewSimilarMessages = () => {
        onViewSimilarMessages!(event.meta.type);
      };

      const onHandleDisableNotifications = () => {
        onDisableNotifications!(event.meta.type);
      };

      return (
        <div className={classes} key={event.id}>
          <EuiNotificationEventMeta
            iconType={event.meta.iconType}
            type={event.meta.type}
            time={event.meta.time}
            healthStatus={event.meta.healthStatus}
            isRead={event.isRead}
            onRead={onRead && onHandleRead}
            onViewSimilarMessages={
              onViewSimilarMessages && onHandleViewSimilarMessages
            }
            onDisableNotifications={
              onDisableNotifications && onHandleDisableNotifications
            }
          />

          <div className="euiNotificationEvents__content">
            <EuiNotificationEventName {...event.name} isRead={event.isRead} />

            <EuiNotificationEventNotifications
              notifications={event.notifications}
            />

            {event.primaryAction && (
              <EuiNotificationEventPrimaryAction
                primaryAction={{
                  label: event.primaryAction.label,
                  ...event.primaryAction,
                }}
              />
            )}
          </div>
        </div>
      );
    }
  );

  return <>{notificationFlyoutEvents}</>;
};
