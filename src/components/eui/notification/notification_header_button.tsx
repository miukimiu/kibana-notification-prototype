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
        <svg
          width={16}
          height={16}
          viewBox="0 0 16 16"
          className={classesBell}
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M2.316 12h10.368c-.188-.704-.28-1.691-.348-3.037-.07-1.382-.103-1.888-.19-2.612-.028-.236-.06-.462-.096-.68-.31-1.892-1.506-2.923-3.708-3.131a1 1 0 10-1.684 0c-2.202.208-3.397 1.24-3.708 3.13a16.01 16.01 0 00-.096.68c-.087.725-.12 1.23-.19 2.613-.068 1.346-.16 2.333-.348 3.037zm10.843 1H1.84c-.308.353-.737.5-1.341.5a.5.5 0 110-1c.786 0 1.024-.783 1.166-3.587.07-1.407.105-1.926.196-2.681.03-.25.063-.49.102-.724.334-2.041 1.546-3.313 3.556-3.792a2 2 0 013.96 0c2.01.479 3.222 1.75 3.557 3.792a17 17 0 01.102.724c.09.755.125 1.274.196 2.681.14 2.804.379 3.587 1.165 3.587a.5.5 0 110 1c-.604 0-1.033-.147-1.341-.5zM5.5 14h4a2 2 0 11-4 0z"
          />
        </svg>
        {/* when injecting the css class to animate the EuiIcon it makes  the component to reload for this reason I'm using the above SVG inline */}
        {/* <EuiIcon
          className={classesBell}
          type="bell"
          size="m"
        /> */}
      </span>
    </EuiHeaderSectionItemButton>
  );
};