import React, { FunctionComponent } from 'react';
import { EuiTitle, EuiButtonEmpty, EuiIcon } from '@elastic/eui';
import classNames from 'classnames';

export type EuiNotificationSuggestionsEventProps = {
  id: string;
  title: string;
  description: string;
  iconType?: string;
  onAdd: () => void;
  onDismiss: () => void;
};

export const EuiNotificationSuggestionsEvent: FunctionComponent<EuiNotificationSuggestionsEventProps> = ({
  title,
  description,
  onAdd,
  onDismiss,
  iconType,
}) => {
  const classes = classNames('euiNotificationFlyoutSuggestionsEvent', {
    'euiNotificationFlyoutSuggestionsEvent--hasIcon': iconType,
  });

  return (
    <div className={classes}>
      {iconType && (
        <div className="euiNotificationFlyoutSuggestionsEvent__icon">
          <EuiIcon type={iconType} />
        </div>
      )}

      <div className="euiNotificationFlyoutSuggestionsEvent__content">
        <EuiTitle size="xxs">
          <h3>{title}</h3>
        </EuiTitle>
        <p>{description}</p>
        <div>
          <EuiButtonEmpty flush="left" size="s" onClick={onAdd}>
            Add now
          </EuiButtonEmpty>

          <EuiButtonEmpty flush="left" size="s" onClick={onDismiss}>
            Dismiss
          </EuiButtonEmpty>
        </div>
      </div>
    </div>
  );
};
