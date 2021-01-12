import React, { FunctionComponent, ReactElement, useState } from 'react';
import {
  EuiButtonIcon,
  EuiIcon,
  EuiBadge,
  EuiPopover,
  EuiContextMenuPanel,
  EuiContextMenuItem,
} from '@elastic/eui';
import { EuiNotificationEventReadButton } from './notification_event_read_button';

export type EuiNotificationEventMetaProps = {
  /**
   * The name of the
   */
  type: string;
  /**
   * readState
   */
  isRead?: boolean | undefined;

  /**
   * healthStatus
   */
  healthStatus?: 'success' | 'warning' | 'danger';

  /**
   * The icon used to visually represent this data type. Accepts any `EuiIcon IconType`.
   */
  iconType?: string;

  time: string;

  onRead?: () => void;
  onMarkAsRead?: () => void;
  onViewSimilarMessages?: () => void;
  onDisableNotifications?: () => void;
};

export const EuiNotificationEventMeta: FunctionComponent<EuiNotificationEventMetaProps> = ({
  isRead,
  iconType,
  type,
  time,
  healthStatus,
  onRead,
  onViewSimilarMessages,
  onDisableNotifications,
}) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const markAsRead = () => {
    onRead && onRead();
  };

  const onPopoverMarkAsRead = () => {
    onRead && onRead();

    setIsPopoverOpen(false);
  };

  const onPopoverViewSimilarMessages = () => {
    onViewSimilarMessages && onViewSimilarMessages();
    setIsPopoverOpen(false);
  };

  const onPopoverDisableNotifications = () => {
    onDisableNotifications && onDisableNotifications();
    setIsPopoverOpen(false);
  };

  const contextMenuItems = [];

  if (onRead) {
    contextMenuItems.push(
      <EuiContextMenuItem key="A" onClick={onPopoverMarkAsRead}>
        Mark as read
      </EuiContextMenuItem>
    );
  }

  if (onViewSimilarMessages) {
    contextMenuItems.push(
      <EuiContextMenuItem key="B" onClick={onPopoverViewSimilarMessages}>
        View messages like this
      </EuiContextMenuItem>
    );
  }

  if (onDisableNotifications) {
    contextMenuItems.push(
      <EuiContextMenuItem key="B" onClick={onPopoverDisableNotifications}>
        Don’t notify me about this
      </EuiContextMenuItem>
    );
  }

  return (
    <div className="euiNotificationEventMeta">
      <div>
        {typeof isRead === 'boolean' && (
          <EuiNotificationEventReadButton
            isRead={isRead}
            markAsRead={markAsRead}
          />
        )}

        {iconType && <EuiIcon type={iconType} />}

        {type && (
          <EuiBadge color={healthStatus ? healthStatus : 'hollow'}>
            {type}
          </EuiBadge>
        )}
      </div>

      <div>
        <span className="euiNotificationEventMeta__time">{time}</span>

        {contextMenuItems.length > 0 && (
          <EuiPopover
            ownFocus
            repositionOnScroll
            isOpen={isPopoverOpen}
            panelPaddingSize="s"
            anchorPosition="upCenter"
            button={
              <EuiButtonIcon
                aria-label="Open actions"
                iconType="boxesVertical"
                color="subdued"
                className="euiNotificationEventMeta__secondaryAction"
                onClick={() => setIsPopoverOpen(!isPopoverOpen)}
              />
            }
            closePopover={() => setIsPopoverOpen(false)}>
            <EuiContextMenuPanel items={contextMenuItems as ReactElement[]} />
          </EuiPopover>
        )}
      </div>
    </div>
  );
};
