import React, { Fragment, FunctionComponent } from 'react';

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
  EuiIcon,
} from '@elastic/eui';

import {
  EuiNotificationFlyoutHeader,
  EuiNotificationFlyoutMessage,
} from './index';
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

  const multipleMessages = [
    <p>The request completed at 12:32:33 GMT+4</p>,
    <p>The request completed at 12:32:33 GMT+4</p>,
    <p>A background request started at 12:32:33 GMT+4</p>,
  ];

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
        <EuiNotificationFlyoutMessage
          meta={{
            type: 'Alert',
            iconType: 'logoCloud',
          }}
          link={{
            title: '[APM 500 Server errors] is now active',
            href: '#',
          }}
          readState="unseen"
          button={{
            href: 'http://www.elastic.co',
            label: 'View',
          }}
          messages={[<p>The request completed at 12:32:33 GMT+4</p>]}
        />
        <EuiNotificationFlyoutMessage
          meta={{
            type: 'Alert',
            healthStatus: { type: 'danger', title: 'critical' },
          }}
          link={{
            title: '[APM 500 Server errors] is now active',
            href: '#',
          }}
          readState="seen"
          messages={multipleMessages}
        />
        <EuiNotificationFlyoutMessage
          meta={{
            type: 'Alert',
            healthStatus: { type: 'warning', title: 'Entering boundary' },
            iconType: 'logoMaps',
          }}
          link={{
            title: '[APM 500 Server errors] is now active',
            href: '#',
          }}
          readState="unseen"
          button={{
            href: 'http://www.elastic.co',
            iconType: 'download',
            label: 'Download',
          }}
          messages={[<p>The request completed at 11:35:24 GMT+4</p>]}
        />
        <EuiNotificationFlyoutMessage
          meta={{
            type: 'Alert',
          }}
          link={{
            title: '[APM 500 Server errors] is now active',
            href: '#',
          }}
          readState="unseen"
          button={{
            href: 'http://www.elastic.co',
            iconType: 'popout',
            label: 'Go to',
            iconSide: 'right',
          }}
          messages={[<p>The request completed at 10:21:12 GMT+4</p>]}
        />
      </EuiFlyoutBody>
      <EuiFlyoutFooter>
        <EuiFlexGroup
          justifyContent="spaceBetween"
          alignItems="center"
          responsive={false}>
          <EuiFlexItem grow={false}>
            <EuiButtonEmpty onClick={onClose}>
              Open notification center
            </EuiButtonEmpty>
          </EuiFlexItem>
          {version && (
            <EuiFlexItem grow={false}>
              <EuiButton size="s">Refresh</EuiButton>
            </EuiFlexItem>
          )}
        </EuiFlexGroup>
      </EuiFlyoutFooter>
    </EuiFlyout>
  );
};
