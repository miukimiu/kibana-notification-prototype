import React, { FunctionComponent } from 'react';
import { EuiButtonIcon, EuiIcon, EuiBadge } from '@elastic/eui';
import classNames from 'classnames';

type euiNotificationFlyoutMessageMetaHealthStatus = {
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
  isRead: boolean | undefined;

  /**
   * healthStatus
   */
  healthStatus?: euiNotificationFlyoutMessageMetaHealthStatus;

  /**
   * The icon used to visually represent this data type. Accepts any `EuiIcon IconType`.
   */
  iconType?: string;

  onRead?: () => void;
};

export const EuiNotificationFlyoutMessageMeta: FunctionComponent<EuiNotificationFlyoutMessageMetaProps> = ({
  isRead,
  iconType,
  type,
  healthStatus,
  onRead,
}) => {
  const classesReadState = classNames(
    'euiNotificationFlyoutMessageMeta__readState',
    {
      'euiNotificationFlyoutMessageMeta__readState--isRead': isRead === true,
      'euiNotificationFlyoutMessageMeta__readState--isUnread': isRead === false,
    }
  );

  return (
    <div className="euiNotificationFlyoutMessageMeta">
      <div>
        {typeof isRead === 'boolean' && (
          <EuiButtonIcon
            iconType="dot"
            className={classesReadState}
            disabled={isRead}
            onClick={() => {
              if (onRead) {
                onRead();
              }
            }}
          />
        )}

        {iconType && <EuiIcon type={iconType} />}
        <EuiBadge color="hollow">{type}</EuiBadge>

        {healthStatus && (
          <EuiBadge color={healthStatus.type}>{healthStatus.title}</EuiBadge>
        )}
      </div>

      <div>
        <span className="euiNotificationFlyoutMessageMeta__time">
          12 min ago
        </span>
        <EuiButtonIcon
          iconType="boxesVertical"
          color="subdued"
          className="euiNotificationFlyoutMessageMeta__secondaryAction"
        />
      </div>
    </div>
  );
};
