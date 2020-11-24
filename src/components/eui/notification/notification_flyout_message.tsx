import React, { FunctionComponent, ReactElement, ReactNode } from 'react';
import {
  EuiTitle,
  EuiButtonIcon,
  EuiIcon,
  EuiBadge,
  EuiIconProps,
} from '@elastic/eui';
// import { EuiAvatarProps } from '@elastic/eui/lib/components/avatar/avatar';
import classNames from 'classnames';

type EuiNotificationFlyoutMessageHealthStatus = {
  title: string;
  type: 'success' | 'warning' | 'danger';
};

export type EuiNotificationFlyoutMessageProps = {
  /**
   * The name of the
   */
  type: string;
  /**
   * The title of the
   */
  title: ReactElement;
  /**
   * readState
   */
  readState: 'seen' | 'unseen';
  /**
   * The icon used to visually represent this data type. Accepts any `EuiIcon IconType`.
   */
  icon?: EuiIconProps | 'EuiAvatarProps';
  /**
   * healthStatus
   */
  healthStatus?: EuiNotificationFlyoutMessageHealthStatus;
  /**
   * Button ...
   */
  primaryAction?: ReactNode;
};

export const EuiNotificationFlyoutMessage: FunctionComponent<EuiNotificationFlyoutMessageProps> = ({
  type,
  icon,
  title,
  readState,
  healthStatus,
  primaryAction,
}) => {
  const classesReadState = classNames(
    'euiNotificationFlyoutMessage__readState',
    {
      'euiNotificationFlyoutMessage__readState--isSeen': readState === 'seen',
      'euiNotificationFlyoutMessage__readState--isUnseen':
        readState === 'unseen',
    }
  );

  return (
    <div className="euiNotificationFlyoutMessage">
      <div className="euiNotificationFlyoutMessage__meta">
        <div>
          <EuiIcon type="dot" className={classesReadState} />
          {icon && <EuiIcon type="logoCloud" />}
          <EuiBadge color="hollow">{type}</EuiBadge>

          {healthStatus && (
            <EuiBadge color={healthStatus.type}>{healthStatus.title}</EuiBadge>
          )}
        </div>

        <div>
          <span>12 min ago</span>
          <EuiButtonIcon
            iconType="boxesVertical"
            color="subdued"
            className="euiNotificationFlyoutMessage__secondaryAction"
          />
        </div>
      </div>

      <div className="euiNotificationFlyoutMessage__content">
        <EuiTitle size="xxs">{title}</EuiTitle>
        <div>+3 more messages</div>

        <div className="euiNotificationFlyoutMessage__primaryAction">
          {primaryAction && primaryAction}
        </div>
      </div>
    </div>
  );
};
