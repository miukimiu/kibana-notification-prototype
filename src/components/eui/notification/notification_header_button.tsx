import React, { FunctionComponent } from 'react';
import { EuiIcon, EuiHeaderSectionItemButton } from '@elastic/eui';
import classNames from 'classnames';

export type EuiNotificationHeaderButtonProps = {
  showNotification: boolean;
  isFlyoutVisible: boolean;
  toggleFlyout: boolean;
  rest: any;
};

export const EuiNotificationHeaderButton: FunctionComponent<EuiNotificationHeaderButtonProps> = ({
  showNotification,
  isFlyoutVisible,
  toggleFlyout,
  rest,
}) => {
  const classesBell = classNames('euiNotificationHeaderButton__bell', {
    'euiNotificationHeaderButton__bell--isAnimating': showNotification,
  });

  return (
    <EuiHeaderSectionItemButton
      className="euiNotificationHeaderButton"
      isFlyoutVisible={isFlyoutVisible}
      aria-controls="headerNotification"
      aria-expanded={isFlyoutVisible}
      aria-haspopup="true"
      aria-label="Notification"
      onClick={toggleFlyout}
      showNotification={showNotification}
      {...rest}>
      <span className="euiNotificationHeaderButton__inner">
        {showNotification && (
          <EuiIcon
            className="euiNotificationHeaderButton__dot"
            type="dot"
            color="accent"
          />
        )}
        {/* when injecting the css class directly into the EuiIcon it makes  the component to reload so I'm wrapping the icon with a span */}
        <span className={classesBell}>
          <EuiIcon type="bell" size="m" />
        </span>
      </span>
    </EuiHeaderSectionItemButton>
  );
};
