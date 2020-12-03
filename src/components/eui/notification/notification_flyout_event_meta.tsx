import React, { FunctionComponent } from 'react';
import { EuiButtonIcon, EuiIcon, EuiBadge } from '@elastic/eui';
import classNames from 'classnames';

type euiNotificationFlyoutEventMetaHealthStatus = {
  title: string;
  type: 'success' | 'warning' | 'danger';
};

export type EuiNotificationFlyoutEventMetaProps = {
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
  healthStatus?: euiNotificationFlyoutEventMetaHealthStatus;

  /**
   * The icon used to visually represent this data type. Accepts any `EuiIcon IconType`.
   */
  iconType?: string;

  onRead?: () => void;
};

export const EuiNotificationFlyoutEventMeta: FunctionComponent<EuiNotificationFlyoutEventMetaProps> = ({
  isRead,
  iconType,
  type,
  healthStatus,
  onRead,
}) => {
  const classesReadState = classNames(
    'euiNotificationFlyoutEventMeta__readState',
    {
      'euiNotificationFlyoutEventMeta__readState--isRead': isRead === true,
      'euiNotificationFlyoutEventMeta__readState--isUnread': isRead === false,
    }
  );

  return (
    <div className="euiNotificationFlyoutEventMeta">
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
        <span className="euiNotificationFlyoutEventMeta__time">12 min ago</span>
        <EuiButtonIcon
          iconType="boxesVertical"
          color="subdued"
          className="euiNotificationFlyoutEventMeta__secondaryAction"
        />
      </div>
    </div>
  );
};
