import React, { FunctionComponent, useState } from 'react';
import { EuiButtonIcon, EuiButtonEmpty, EuiHorizontalRule } from '@elastic/eui';
import {
  EuiNotificationFlyoutSuggestionsEvent,
  EuiNotificationFlyoutSuggestionsEventProps,
} from './notification_flyout_suggestions_event';

export type EuiNotificationFlyoutSuggestionsProps = {
  suggestions: EuiNotificationFlyoutSuggestionsEventProps[];
};

export const EuiNotificationFlyoutSuggestions: FunctionComponent<EuiNotificationFlyoutSuggestionsProps> = ({
  suggestions,
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

  return (
    <div className="euiNotificationFlyoutSuggestions">
      <div className="euiNotificationFlyoutSuggestions__inner">
        <div className="euiNotificationFlyoutSuggestions__mainActions">
          <p>You have 3 new suggestions</p>
          <EuiButtonIcon
            iconType="boxesVertical"
            color="primary"
            className="euiNotificationFlyoutSuggestions__primaryAction"
          />
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
