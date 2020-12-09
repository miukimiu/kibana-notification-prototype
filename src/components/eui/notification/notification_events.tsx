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
  /**
   * The title of the
   */
  meta: EuiNotificationEventMetaProps;
  /**
   * The title of the
   */
  name: EuiNotificationEventNameProps;
  /**
   * If readState exists an icon appears.
   */
  isRead?: boolean | undefined;

  /**
   * Button ...
   */
  primaryAction?: EuiNotificationEventPrimaryActionProps;
  /**
   * A string or an array of strings.
   */
  notifications: [];
};

export type EuiNotificationEventsProps = {
  /**
   * The title of the
   */
  events: EuiNotificationEventProps[];

  activeFilters: Array<string>;

  emptyStateAction: ReactNode;

  onRead?: (id: string, isRead: boolean) => void;
  onViewSimilarMessages?: (type: string) => void;
};

export const EuiNotificationEvents: FunctionComponent<EuiNotificationEventsProps> = ({
  events,
  onRead,
  onViewSimilarMessages,
  activeFilters,
  emptyStateAction,
}) => {
  const notificationFlyoutEventsFiltered = events.filter((item) =>
    activeFilters.includes(item.meta.type)
  );

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

      return (
        <div className={classes} key={event.id}>
          <EuiNotificationEventMeta
            iconType={event.meta.iconType}
            type={event.meta.type}
            healthStatus={event.meta.healthStatus}
            isRead={event.isRead}
            onRead={onHandleRead}
            onViewSimilarMessages={onHandleViewSimilarMessages}
          />

          <div className="euiNotificationEvents__content">
            <EuiNotificationEventName {...event.name} isRead={event.isRead} />

            <EuiNotificationEventNotifications
              notifications={event.notifications}
            />

            <EuiNotificationEventPrimaryAction {...event.primaryAction} />
          </div>
        </div>
      );
    }
  );

  return <>{notificationFlyoutEvents}</>;
};
