import React, { FunctionComponent, ReactNode } from 'react';
import { EuiButtonEmpty, EuiButtonEmptyProps } from '@elastic/eui';

export interface EuiNotificationEventButtonProps
  extends Omit<EuiButtonEmptyProps, 'size' | 'flush'> {
  label: ReactNode;
}

export type EuiNotificationEventPrimaryActionProps = {
  /**
   * Button ...
   */
  primaryAction?: EuiNotificationEventButtonProps;
};

export const EuiNotificationEventPrimaryAction: FunctionComponent<EuiNotificationEventPrimaryActionProps> = ({
  primaryAction,
}) => {
  return (
    <div className="euiNotificationEvent__primaryAction">
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
