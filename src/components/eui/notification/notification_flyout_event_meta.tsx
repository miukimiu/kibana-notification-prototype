import React, { FunctionComponent, ReactElement, useState } from 'react';
import {
  EuiButtonIcon,
  EuiIcon,
  EuiBadge,
  EuiPopover,
  EuiContextMenuPanel,
  EuiContextMenuItem,
} from '@elastic/eui';
import { EuiNotificationFlyoutReadButton } from './notification_flyout_read_button';

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
};

export const EuiNotificationFlyoutEventMeta: FunctionComponent<EuiNotificationFlyoutEventMetaProps> = ({
  isRead,
  iconType,
  type,
  healthStatus,
  onRead,
  onViewSimilarMessages,
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

  const contextMenuItems = [
    onRead && (
      <EuiContextMenuItem key="A" onClick={onPopoverMarkAsRead}>
        Mark as read
      </EuiContextMenuItem>
    ),
    onViewSimilarMessages && (
      <EuiContextMenuItem key="B" onClick={onPopoverViewSimilarMessages}>
        View messages like this
      </EuiContextMenuItem>
    ),
  ];

  return (
    <div className="euiNotificationFlyoutEventMeta">
      <div>
        {typeof isRead === 'boolean' && (
          <EuiNotificationFlyoutReadButton
            isRead={isRead}
            markAsRead={markAsRead}
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
                className="euiNotificationFlyoutEventMeta__secondaryAction"
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
