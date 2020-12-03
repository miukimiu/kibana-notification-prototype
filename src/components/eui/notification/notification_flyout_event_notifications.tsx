import React, { FunctionComponent, ReactElement } from 'react';
import { EuiAccordion, htmlIdGenerator } from '@elastic/eui';

export type EuiNotificationFlyoutEventNotificationsProps = {
  /**
   * A string or an array of strings.
   */
  notifications: ReactElement[];
};

export const EuiNotificationFlyoutEventNotifications: FunctionComponent<EuiNotificationFlyoutEventNotificationsProps> = ({
  notifications,
}) => {
  return (
    <div className="euiNotificationFlyoutEventNotifications">
      {notifications && notifications.length === 1 ? (
        notifications
      ) : (
        <EuiAccordion
          id={htmlIdGenerator()()}
          className="euiNotificationFlyoutEventNotifications__accordion"
          buttonContent={`+ ${notifications.length} notifications`}
          arrowDisplay="none">
          <div className="euiNotificationFlyoutEventNotifications__accordionContent">
            {notifications}
          </div>
        </EuiAccordion>
      )}
    </div>
  );
};
