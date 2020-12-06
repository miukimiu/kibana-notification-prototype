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
  EuiNotificationFlyoutSuggestionsEvent,
  EuiNotificationFlyoutSuggestionsEventProps,
} from './notification_flyout_suggestions_event';

export type EuiNotificationFlyoutSuggestionsProps = {
  suggestions: EuiNotificationFlyoutSuggestionsEventProps[];
  onDismissAll: () => void;
  onDisableAll: () => void;
};

export const EuiNotificationFlyoutSuggestions: FunctionComponent<EuiNotificationFlyoutSuggestionsProps> = ({
  suggestions,
  onDismissAll,
  onDisableAll,
}) => {
  const notificationFlyoutSuggestions = suggestions.map((suggestion) => {
    return (
      <EuiNotificationFlyoutSuggestionsEvent
        id={suggestion.id}
        title={suggestion.title}
        description={suggestion.description}
        iconType={suggestion.iconType}
        onAdd={suggestion.onAdd}
        onDismiss={suggestion.onDismiss}
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

  return (
    <div className="euiNotificationFlyoutSuggestions">
      <div className="euiNotificationFlyoutSuggestions__inner">
        <div className="euiNotificationFlyoutSuggestions__mainActions">
          <p>You have {notificationFlyoutSuggestions.length} new suggestions</p>
          <EuiPopover
            isOpen={isPopoverOpen}
            panelPaddingSize="s"
            anchorPosition="upCenter"
            button={
              <EuiButtonIcon
                iconType="boxesVertical"
                color="subdued"
                className="euiNotificationFlyoutSuggestions__primaryAction"
                onClick={() => setIsPopoverOpen(!isPopoverOpen)}
              />
            }
            closePopover={() => setIsPopoverOpen(false)}
            ownFocus={true}>
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
            <EuiButtonEmpty onClick={() => setOpenMoreSuggestions(true)}>{`+ ${
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
