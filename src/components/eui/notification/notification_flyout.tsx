import React, { FunctionComponent, useState } from 'react';

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
} from '@elastic/eui';

import { navigate } from 'gatsby';

import { EuiNotificationFlyoutHeader } from './index';

import { EuiNotificationFlyoutEvents } from './notification_flyout_events';

import { EuiNotificationFlyoutSuggestions } from './notification_flyout_suggestions';

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
  const [isRead, setIsRead] = useState(false);
  const createId = htmlIdGenerator('euiHeaderAlertFlyout');
  const headerId = `${createId()}__header`;

  const multipleNotifications = [
    <p>The request completed at 12:32:33 GMT+4</p>,
    <p>The request completed at 12:32:33 GMT+4</p>,
    <p>A background request started at 12:32:33 GMT+4</p>,
  ];

  const onRead = () => setIsRead(true);

  return (
    <EuiFlyout
      className="euiNotificationFlyout"
      onClose={onClose}
      size="s"
      aria-labelledby={headerId}
      {...rest}>
      <EuiFlyoutHeader hasBorder>
        <EuiNotificationFlyoutHeader
          title={title}
          actions={
            <>
              <span>Filters</span> <span>Mark all as read</span>
            </>
          }
        />
      </EuiFlyoutHeader>
      <EuiFlyoutBody>
        <EuiNotificationFlyoutSuggestions
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
        <EuiNotificationFlyoutEvents
          events={[
            {
              id: 'a',
              meta: {
                type: 'Alert',
                iconType: 'logoCloud',
              },
              name: {
                title: '[APM 500 Server errors] is now active',
                href: '#',
              },
              primaryAction: {
                href: 'http://www.elastic.co',
                label: 'View',
              },
              notifications: [<p>The request completed at 12:32:33 GMT+4</p>],
              onRead: onRead,
              isRead: isRead,
            },
            {
              id: 'a',
              meta: {
                type: 'Alert',
                healthStatus: { type: 'warning', title: 'Entering boundary' },
                iconType: 'logoMaps',
              },
              name: {
                title: '[Maps] Geo Alert',
                href: '#',
              },
              primaryAction: {
                href: 'http://www.elastic.co',
                iconType: 'download',
                label: 'Download',
              },
              notifications: multipleNotifications,
            },
          ]}
        />
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
