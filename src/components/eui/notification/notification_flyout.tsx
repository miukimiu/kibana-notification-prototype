import React, { Fragment, FunctionComponent } from 'react';

import {
  EuiFlyout,
  EuiFlyoutBody,
  EuiFlyoutHeader,
  EuiFlyoutFooter,
  EuiFlexGroup,
  EuiFlexItem,
  EuiText,
  EuiFlyoutProps,
  EuiHeaderAlertProps,
  htmlIdGenerator,
  EuiButton,
  EuiButtonEmpty,
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
          type="Alert"
          healthStatus={{ type: 'danger', title: 'Critical' }}
          title={<h4>[APM 500 Server errors] is now active</h4>}
          readState="seen"
          primaryAction={
            <EuiButton href="http://www.elastic.co">
              Link to elastic.co
            </EuiButton>
          }
        />
        <EuiNotificationFlyoutMessage
          type="Alert"
          title={<h4>[APM 500 Server errors] is now active</h4>}
          readState="seen"
        />
        <EuiNotificationFlyoutMessage
          type="Alert"
          healthStatus={{ type: 'danger', title: 'Entering' }}
          title={<h4>[APM 500 Server errors] is now active</h4>}
          readState="unseen"
          primaryAction={
            <EuiButtonEmpty size="s" onClick={() => {}}>
              small
            </EuiButtonEmpty>
          }
        />
      </EuiFlyoutBody>
      <EuiFlyoutFooter>
        <EuiFlexGroup
          justifyContent="spaceBetween"
          alignItems="center"
          responsive={false}>
          <EuiFlexItem grow={false}>
            <EuiButtonEmpty iconType="cross" onClick={onClose} flush="left">
              Close
            </EuiButtonEmpty>
          </EuiFlexItem>
          {version && (
            <EuiFlexItem grow={false}>
              <EuiText color="subdued" size="s">
                <p>{version}</p>
              </EuiText>
            </EuiFlexItem>
          )}
        </EuiFlexGroup>
      </EuiFlyoutFooter>
    </EuiFlyout>
  );
};
