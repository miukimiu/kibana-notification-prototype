import React, { FunctionComponent, ReactNode } from 'react';
import { EuiButtonEmpty, EuiButtonEmptyProps } from '@elastic/eui';

export interface EuiNotificationEventButtonProps
  extends Omit<EuiButtonEmptyProps, 'size' | 'flush'> {
  label: ReactNode;
}

export type EuiNotificationEventPrimaryActionProps = {
  primaryAction: EuiNotificationEventButtonProps;
};

export const EuiNotificationEventPrimaryAction: FunctionComponent<EuiNotificationEventPrimaryActionProps> = ({
  primaryAction,
}) => {
  return (
    <div className="euiNotificationEvent__primaryAction">
      <EuiButtonEmpty flush="left" size="s" href={primaryAction.href}>
        {primaryAction.label}
      </EuiButtonEmpty>
    </div>
  );
};
