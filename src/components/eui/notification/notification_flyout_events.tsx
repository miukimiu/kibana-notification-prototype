import React, { FunctionComponent, useState } from 'react';
import classNames from 'classnames';
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

  onRead?: () => void;
  onViewSimilarMessages?: () => void;
  onIgnoreNotify?: () => void;
};

export type EuiNotificationFlyoutEventsProps = {
  /**
   * The title of the
   */
  events: EuiNotificationFlyoutEventProps[];
};

export const EuiNotificationFlyoutEvents: FunctionComponent<EuiNotificationFlyoutEventsProps> = ({
  events,
  onRead,
}) => {
  const notificationFlyoutEvents = events.map((event) => {
    const classes = classNames('euiNotificationFlyoutEvent', {
      'euiNotificationFlyoutEvent--withReadState':
        typeof event.isRead === 'boolean',
    });

    const [isRead, setIsRead] = useState(event.isRead && event.isRead);

    const onHandleRead = () => {
      setIsRead(true);

      onRead(event.id, true);
    };

    return (
      <div className={classes} key={event.id}>
        <EuiNotificationFlyoutEventMeta
          iconType={event.meta.iconType}
          type={event.meta.type}
          healthStatus={event.meta.healthStatus}
          isRead={isRead}
          onRead={onHandleRead}
          onViewSimilarMessages={event.onViewSimilarMessages}
          onIgnoreNotify={event.onIgnoreNotify}
        />

        <div className="euiNotificationFlyoutEvent__content">
          <EuiNotificationFlyoutEventName {...event.name} isRead={isRead} />

          <EuiNotificationFlyoutEventNotifications
            notifications={event.notifications}
          />

          <EuiNotificationFlyoutEventPrimaryAction {...event.primaryAction} />
        </div>
      </div>
    );
  });

  return <>{notificationFlyoutEvents}</>;
};
