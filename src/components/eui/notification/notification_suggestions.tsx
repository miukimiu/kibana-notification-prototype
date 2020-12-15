import React, { FunctionComponent, useState } from 'react';
import {
  EuiButtonIcon,
  EuiButtonEmpty,
  EuiHorizontalRule,
  EuiPopover,
  EuiContextMenuPanel,
  EuiContextMenuItem,
} from '@elastic/eui';
import {
  EuiNotificationSuggestionsEvent,
  EuiNotificationSuggestionsEventProps,
} from './notification_suggestions_event';

export type EuiNotificationSuggestionsProps = {
  suggestions: EuiNotificationSuggestionsEventProps[];
  onDismissAll: () => void;
  onDisableAll: () => void;
  onDismiss: (id: string) => void;
  onAdd: (id: string) => void;
};

export const EuiNotificationSuggestions: FunctionComponent<EuiNotificationSuggestionsProps> = ({
  suggestions,
  onDismissAll,
  onDisableAll,
  onDismiss,
  onAdd,
}) => {
  const notificationFlyoutSuggestions = suggestions.map((suggestion) => {
    const onHandleDismiss = () => {
      onDismiss(suggestion.id);
    };

    const onHandleAdd = () => {
      onAdd(suggestion.id);
    };

    return (
      <EuiNotificationSuggestionsEvent
        key={suggestion.id}
        id={suggestion.id}
        title={suggestion.title}
        description={suggestion.description}
        iconType={suggestion.iconType}
        onAdd={onHandleAdd}
        onDismiss={onHandleDismiss}
      />
    );
  });

  const hasMoreSuggestions = notificationFlyoutSuggestions.length > 1;
  const [isOpenMoreSuggestions, setOpenMoreSuggestions] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const onClickDismissAll = () => {
    onDismissAll();
    setIsPopoverOpen(false);
  };

  const onClickDisableAll = () => {
    onDisableAll();
    setIsPopoverOpen(false);
  };

  if (notificationFlyoutSuggestions.length === 0) return null;

  return (
    <div className="euiNotificationFlyoutSuggestions">
      <div className="euiNotificationFlyoutSuggestions__inner">
        <div className="euiNotificationFlyoutSuggestions__mainActions">
          <p>You have {notificationFlyoutSuggestions.length} new suggestions</p>
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
                className="euiNotificationFlyoutSuggestions__primaryAction"
                onClick={() => setIsPopoverOpen(!isPopoverOpen)}
              />
            }
            closePopover={() => setIsPopoverOpen(false)}>
            <EuiContextMenuPanel
              items={[
                <EuiContextMenuItem key="A" onClick={onClickDismissAll}>
                  Dismiss all
                </EuiContextMenuItem>,
                <EuiContextMenuItem key="B" onClick={onClickDisableAll}>
                  Disable suggestions
                </EuiContextMenuItem>,
              ]}
            />
          </EuiPopover>
        </div>
        <div>{notificationFlyoutSuggestions[0]}</div>
        {hasMoreSuggestions && !isOpenMoreSuggestions && (
          <div className="euiNotificationFlyoutSuggestions__moreButtonSection">
            <EuiHorizontalRule margin="xs" />
            <EuiButtonEmpty
              size="s"
              onClick={() => setOpenMoreSuggestions(true)}>{`+ ${
              notificationFlyoutSuggestions.length - 1
            } more`}</EuiButtonEmpty>
          </div>
        )}
        {isOpenMoreSuggestions && (
          <div className="euiNotificationFlyoutSuggestions__moreEvents">
            {notificationFlyoutSuggestions.slice(
              1,
              notificationFlyoutSuggestions.length
            )}
          </div>
        )}
      </div>
    </div>
  );
};
