import React, { FunctionComponent, HtmlHTMLAttributes } from 'react';

import {
  EuiHeaderAlert,
  EuiFlyout,
  EuiFlyoutBody,
  EuiFlyoutHeader,
  EuiTitle,
  EuiFlyoutFooter,
  EuiFlexGroup,
  EuiFlexItem,
  EuiButtonEmpty,
  EuiText,
  EuiFlyoutProps,
  EuiHeaderAlertProps,
  htmlIdGenerator,
  // EuiIcon,
} from '@elastic/eui';

export type EuiHeaderAlertFlyoutProps = {
  alerts?: EuiHeaderAlertProps[];
  title?: string;
  version?: string;
  // TODO: Fix EuiFlyoutProps needs to extend HTMLDivElement
} & EuiFlyoutProps &
  HtmlHTMLAttributes<HTMLDivElement>;

export const EuiHeaderAlertFlyout: FunctionComponent<EuiHeaderAlertFlyoutProps> = ({
  onClose,
  alerts,
  title = "What's new",
  version,
  ...rest
}) => {
  const createId = htmlIdGenerator('euiHeaderAlertFlyout');
  const headerId = `${createId()}__header`;

  return (
    <EuiFlyout size="s" aria-labelledby={headerId} {...rest}>
      <EuiFlyoutHeader hasBorder>
        <EuiTitle size="s">
          <h2 id={headerId}>{title}</h2>
        </EuiTitle>
      </EuiFlyoutHeader>

      <EuiFlyoutBody>
        {alerts ? (
          alerts.map((alert, i) => (
            <EuiHeaderAlert key={`alert-${i}`} {...alert} />
          ))
        ) : (
          <EuiText color="subdued" textAlign="center">
            {/* TODO: Figure out why cheer icon isn't displaying */}
            {/* <EuiIcon type="cheer" size="l" /> */}
            <h3>All caught up!</h3>
          </EuiText>
        )}
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
