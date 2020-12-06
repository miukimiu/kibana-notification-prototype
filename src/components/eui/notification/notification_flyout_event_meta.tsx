import React, { FunctionComponent, useState } from 'react';
import {
  EuiButtonIcon,
  EuiIcon,
  EuiBadge,
  EuiPopover,
  EuiContextMenuPanel,
  EuiContextMenuItem,
} from '@elastic/eui';
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
  onMarkAsRead?: () => void;
  onViewSimilarMessages?: () => void;
  onIgnoreNotify?: () => void;
};

export const EuiNotificationFlyoutEventMeta: FunctionComponent<EuiNotificationFlyoutEventMetaProps> = ({
  isRead,
  iconType,
  type,
  healthStatus,
  onRead,
  onMarkAsRead,
  onViewSimilarMessages,
  onIgnoreNotify,
}) => {
  const classesReadState = classNames(
    'euiNotificationFlyoutEventMeta__readState',
    {
      'euiNotificationFlyoutEventMeta__readState--isRead': isRead === true,
      'euiNotificationFlyoutEventMeta__readState--isUnread': isRead === false,
    }
  );

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const markAsRead = () => {
    if (onRead) {
      onRead();
    }
  };

  const onPopoverMarkAsRead = () => {
    if (onRead) {
      onRead();
    }
    setIsPopoverOpen(false);
  };

  const onPopoverViewSimilarMessages = () => {
    setIsPopoverOpen(false);
  };

  const onPopoverNoNotify = () => {
    setIsPopoverOpen(false);
  };

  return (
    <div className="euiNotificationFlyoutEventMeta">
      <div>
        {typeof isRead === 'boolean' && (
          <EuiButtonIcon
            iconType="dot"
            className={classesReadState}
            disabled={isRead}
            onClick={markAsRead}
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

        {onPopoverMarkAsRead && (
          <EuiPopover
            isOpen={isPopoverOpen}
            panelPaddingSize="s"
            anchorPosition="upCenter"
            button={
              <EuiButtonIcon
                iconType="boxesVertical"
                color="subdued"
                className="euiNotificationFlyoutEventMeta__secondaryAction"
                onClick={() => setIsPopoverOpen(!isPopoverOpen)}
              />
            }
            closePopover={() => setIsPopoverOpen(false)}
            ownFocus={true}>
            <EuiContextMenuPanel
              items={[
                <EuiContextMenuItem
                  key="A"
                  icon="dot"
                  onClick={onPopoverMarkAsRead}>
                  Mark as read
                </EuiContextMenuItem>,
                <EuiContextMenuItem
                  key="B"
                  icon="filter"
                  onClick={onPopoverViewSimilarMessages}>
                  View messages like this
                </EuiContextMenuItem>,
                <EuiContextMenuItem
                  key="C"
                  icon="eyeClosed"
                  onClick={onPopoverNoNotify}>
                  Don’t notify me about this
                </EuiContextMenuItem>,
              ]}
            />
          </EuiPopover>
        )}
      </div>
    </div>
  );
};
