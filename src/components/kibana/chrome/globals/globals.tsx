import React, { ReactElement, HTMLAttributes } from 'react';
import classNames from 'classnames';
import {
  CommonProps,
  EuiButton,
  EuiFieldText,
  EuiFlexGroup,
  EuiFlexItem,
} from '@elastic/eui';
import { EuiSuperDatePicker } from '../../../eui';

type Props = CommonProps & HTMLAttributes<HTMLDivElement>;

export function KibanaGlobals({ className, ...rest }: Props): ReactElement {
  const classes = classNames('kbnGlobals', className);

  return (
    <EuiFlexGroup
      gutterSize="s"
      responsive={false}
      className={classes}
      {...rest}>
      <EuiFlexItem grow={false}>
        <EuiButton size="s" iconType="filter" minWidth={0} />
      </EuiFlexItem>
      <EuiFlexItem grow={true}>
        <EuiFieldText placeholder="Filter with KQL..." compressed fullWidth />
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <EuiButton size="s" iconType="plusInCircle" color="text" minWidth={0} />
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <EuiSuperDatePicker />
      </EuiFlexItem>
    </EuiFlexGroup>
  );
}
