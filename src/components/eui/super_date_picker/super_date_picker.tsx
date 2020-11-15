import React, { ReactElement, HTMLAttributes } from 'react';
import classNames from 'classnames';
import {
  CommonProps,
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
} from '@elastic/eui';

type Props = CommonProps & HTMLAttributes<HTMLDivElement>;

export function EuiSuperDatePicker({
  className,
  ...rest
}: Props): ReactElement {
  const classes = classNames('euiSuperDatePicker_shim', className);

  return (
    <EuiFlexGroup
      gutterSize="s"
      responsive={false}
      className={classes}
      {...rest}>
      <EuiFlexItem grow={false}>
        <EuiButton size="s" iconType="calendar">
          Last 15 min
        </EuiButton>
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <EuiButton size="s" iconType="refresh" minWidth={0} />
      </EuiFlexItem>
    </EuiFlexGroup>
  );
}
