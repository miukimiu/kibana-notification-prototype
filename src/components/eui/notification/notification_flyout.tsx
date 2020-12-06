import React, { FunctionComponent, useState, useEffect } from 'react';

import {
  EuiFlyout,
  EuiFlyoutBody,
  EuiFlyoutHeader,
  EuiFlyoutFooter,
  EuiFlexGroup,
  EuiFlexItem,
  EuiFlyoutProps,
  EuiHeaderAlertProps,
  htmlIdGenerator,
  EuiButton,
  EuiButtonEmpty,
  EuiContextMenuPanel,
  EuiContextMenuItem,
} from '@elastic/eui';

import { navigate } from 'gatsby';

import { EuiNotificationFlyoutHeader } from './notification_flyout_header';
import { EuiNotificationFlyoutHeaderFilters } from './notification_flyout_header_filters';
import { EuiNotificationFlyoutEvents } from './notification_flyout_events';
import { EuiNotificationFlyoutSuggestions } from './notification_flyout_suggestions';

import { notificationsData } from './notifications_data';

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
  const [notifications, setNotifications] = useState(notificationsData);

  const onRead = (id: string, isRead: boolean) => {
    const nextState = notifications.map((item) =>
      item.id === id ? { ...item, isRead: isRead } : item
    );

    console.log('nextState', nextState);

    setNotifications(nextState);
  };

  const onDismissAllSuggestions = () => {
    console.log('onDismissAllSuggestions');
  };

  const onDisableAllSuggestions = () => {
    console.log('onDisableAllSuggestions');
  };

  return (
    <EuiFlyout
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
              <EuiButtonEmpty size="s" onClick={() => {}}>
                <EuiNotificationFlyoutHeaderFilters />
              </EuiButtonEmpty>{' '}
              <EuiButtonEmpty size="s" onClick={() => {}}>
                Mark all as read
              </EuiButtonEmpty>
            </>
          }
        />
      </EuiFlyoutHeader>
      <EuiFlyoutBody>
        <EuiNotificationFlyoutSuggestions
          onDismissAll={onDismissAllSuggestions}
          onDisableAll={onDisableAllSuggestions}
          suggestions={[
            {
              id: 'a',
              title: 'Connect Nginx!',
              description:
                'We’ve noticed several of your agents detected Nginx on your hosts.',
              iconType: 'logoNginx',
              onAdd: () => console.log('onAdd'),
              onDismiss: () => console.log('onDismiss'),
            },
            {
              id: 'b',
              title: 'Connect workplace sources',
              description:
                'Create a single place to search through documents and data across your entire organization.',
              iconType: 'logoWorkplaceSearch',
              onAdd: () => console.log('onAdd'),
              onDismiss: () => console.log('onDismiss'),
            },
            {
              id: 'c',
              title: 'Explore Elastic Security',
              description:
                'With the data you’ve already ingested into Elastic, you could protect what looks like your entire network. ',
              iconType: 'logoSecurity',
              onAdd: () => console.log('onAdd'),
              onDismiss: () => console.log('onDismiss'),
            },
          ]}
        />
        <EuiNotificationFlyoutEvents events={notifications} onRead={onRead} />
      </EuiFlyoutBody>
      <EuiFlyoutFooter>
        <EuiFlexGroup
          justifyContent="spaceBetween"
          alignItems="center"
          responsive={false}>
          <EuiFlexItem grow={false}>
            <EuiButtonEmpty
              onClick={() => {
                navigate('notification/center');
              }}>
              Open notification center
            </EuiButtonEmpty>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiButton size="s">Refresh</EuiButton>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiFlyoutFooter>
    </EuiFlyout>
  );
};
