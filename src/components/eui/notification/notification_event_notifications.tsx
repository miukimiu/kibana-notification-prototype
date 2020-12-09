import React, { FunctionComponent, ReactElement } from 'react';
import { EuiAccordion, htmlIdGenerator } from '@elastic/eui';

export type EuiNotificationEventNotificationsProps = {
  /**
   * A string or an array of strings.
   */
  notifications: ReactElement[];
};

export const EuiNotificationEventNotifications: FunctionComponent<EuiNotificationEventNotificationsProps> = ({
  notifications,
}) => {
  return (
    <div className="euiNotificationEventNotifications">
      {notifications && notifications.length === 1 ? (
        notifications
      ) : (
        <EuiAccordion
          id={htmlIdGenerator()()}
          className="euiNotificationEventNotifications__accordion"
          buttonContent={`+ ${notifications.length} notifications`}
          arrowDisplay="none">
          <div className="euiNotificationEventNotifications__accordionContent">
            {notifications.map((notification, index) => (
              <p key={index}>{notification}</p>
            ))}
          </div>
        </EuiAccordion>
      )}
    </div>
  );
};
