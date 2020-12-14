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
  isRead: boolean | undefined;

  /**
   * healthStatus
   */
  healthStatus?: 'success' | 'warning' | 'danger';

  /**
   * The icon used to visually represent this data type. Accepts any `EuiIcon IconType`.
   */
  iconType?: string;

  badge?: euiNotificationEventMetaBadge;

  onRead?: () => void;
  onMarkAsRead?: () => void;
  onViewSimilarMessages?: () => void;
};

export const EuiNotificationEventMeta: FunctionComponent<EuiNotificationEventMetaProps> = ({
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
        <span className="euiNotificationEventMeta__time">12 min ago</span>

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
