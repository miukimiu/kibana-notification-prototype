import React, { FunctionComponent, ReactNode } from 'react';
import classNames from 'classnames';
import { EuiTitle } from '@elastic/eui';
import {
  EuiNotificationFlyoutEventName,
  EuiNotificationFlyoutEventNameProps,
} from './notification_flyout_event_name';
import {
  EuiNotificationFlyoutEventMeta,
  EuiNotificationFlyoutEventMetaProps,
} from './notification_flyout_event_meta';

import { EuiNotificationFlyoutEventNotifications } from './notification_flyout_event_notifications';

import {
  EuiNotificationFlyoutEventPrimaryAction,
  EuiNotificationFlyoutEventPrimaryActionProps,
} from './notification_flyout_event_primary_action';

export type EuiNotificationFlyoutEventProps = {
  id: string;
  /**
   * The title of the
   */
  meta: EuiNotificationFlyoutEventMetaProps;
  /**
   * The title of the
   */
  name: EuiNotificationFlyoutEventNameProps;
  /**
   * If readState exists an icon appears.
   */
  isRead?: boolean | undefined;

  /**
   * Button ...
   */
  primaryAction?: EuiNotificationFlyoutEventPrimaryActionProps;
  /**
   * A string or an array of strings.
   */
  notifications: [];
};

export type EuiNotificationFlyoutEventsProps = {
  /**
   * The title of the
   */
  events: EuiNotificationFlyoutEventProps[];

  activeFilters: Array<string>;

  emptyStateAction: ReactNode;

  onRead?: (id: string, isRead: boolean) => void;
  onViewSimilarMessages?: (type: string) => void;
};

export const EuiNotificationFlyoutEvents: FunctionComponent<EuiNotificationFlyoutEventsProps> = ({
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
      <div className="euiNotificationFlyoutEvents euiNotificationFlyoutEvents--emptyState">
        <EuiTitle size="s">
          <h3>There are no new messages</h3>
        </EuiTitle>

        {emptyStateAction && emptyStateAction}
      </div>
    );
  }

  const notificationFlyoutEvents = notificationFlyoutEventsFiltered.map(
    (event) => {
      const classes = classNames('euiNotificationFlyoutEvents', {
        'euiNotificationFlyoutEvents--withReadState':
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
          <EuiNotificationFlyoutEventMeta
            iconType={event.meta.iconType}
            type={event.meta.type}
            healthStatus={event.meta.healthStatus}
            isRead={event.isRead}
            onRead={onHandleRead}
            onViewSimilarMessages={onHandleViewSimilarMessages}
          />

          <div className="euiNotificationFlyoutEvents__content">
            <EuiNotificationFlyoutEventName
              {...event.name}
              isRead={event.isRead}
            />

            <EuiNotificationFlyoutEventNotifications
              notifications={event.notifications}
            />

            <EuiNotificationFlyoutEventPrimaryAction {...event.primaryAction} />
          </div>
        </div>
      );
    }
  );

  return <>{notificationFlyoutEvents}</>;
};
