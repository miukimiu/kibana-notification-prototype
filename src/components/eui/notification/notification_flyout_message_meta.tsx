import React, { FunctionComponent } from 'react';
import { EuiButtonIcon, EuiIcon, EuiBadge, EuiIconProps } from '@elastic/eui';
import classNames from 'classnames';

type EuiNotificationFlyoutMessageHealthStatus = {
  title: string;
  type: 'success' | 'warning' | 'danger';
};

export type EuiNotificationFlyoutMessageMetaProps = {
  /**
   * The name of the
   */
  type: string;
  /**
   * readState
   */
  isRead: boolean;

  /**
   * healthStatus
   */
  healthStatus?: EuiNotificationFlyoutMessageHealthStatus;

  /**
   * The icon used to visually represent this data type. Accepts any `EuiIcon IconType`.
   */
  iconType?: string;
};

export const EuiNotificationFlyoutMessageMeta: FunctionComponent<EuiNotificationFlyoutMessageMetaProps> = ({
  isRead,
  iconType,
  type,
  healthStatus,
}) => {
  const classesReadState = classNames(
    'euiNotificationFlyoutMessage__readState',
    {
      'euiNotificationFlyoutMessage__readState--isSeen': isRead,
      'euiNotificationFlyoutMessage__readState--isUnseen': !isRead,
    }
  );

  return (
    <div className="euiNotificationFlyoutMessage__meta">
      <div>
        <EuiIcon type="dot" className={classesReadState} />
        {iconType && <EuiIcon type={iconType} />}
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
  );
};
