import React, { FunctionComponent, ReactNode } from 'react';
import { EuiButtonEmpty, EuiButtonEmptyProps } from '@elastic/eui';

export interface EuiNotificationFlyoutEventButtonProps
  extends Omit<EuiButtonEmptyProps, 'size' | 'flush'> {
  label: ReactNode;
}

export type EuiNotificationFlyoutEventPrimaryActionProps = {
  /**
   * Button ...
   */
  primaryAction?: EuiNotificationFlyoutEventButtonProps;
};

export const EuiNotificationFlyoutEventPrimaryAction: FunctionComponent<EuiNotificationFlyoutEventPrimaryActionProps> = ({
  primaryAction,
}) => {
  return (
    <div className="euiNotificationFlyoutEvent__primaryAction">
      {primaryAction && (
        <EuiButtonEmpty
          flush="left"
          size="s"
          {...(primaryAction as EuiButtonEmptyProps)}>
          {primaryAction.label}
        </EuiButtonEmpty>
      )}
    </div>
  );
};
