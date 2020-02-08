import React, { Component, Fragment } from 'react';

import {
  EuiIcon,
  EuiHeaderSectionItemButton,
  EuiNotificationBadge,
} from '@elastic/eui';

import { EuiHeaderAlertFlyout } from '../eui/header';
import { updates } from '../kibana/data';

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFlyoutVisible: false,
      showBadge: true,
    };
  }

  closeFlyout = () => {
    this.setState({ isFlyoutVisible: false });
  };

  showFlyout = () => {
    this.setState({ showBadge: false });
    this.setState(prevState => ({
      isFlyoutVisible: !prevState.isFlyoutVisible,
    }));
  };

  render() {
    const button = (
      <EuiHeaderSectionItemButton
        aria-controls="headerNewsFeed"
        aria-expanded={this.state.isFlyoutVisible}
        aria-haspopup="true"
        aria-label="News feed"
        onClick={this.showFlyout}>
        <EuiIcon type="email" size="m" />

        {this.state.showBadge ? (
          /** TODO: Add this as an option directly to EuiHeaderSectionItemButton */
          <EuiNotificationBadge className="euiHeaderNotification">
            &#9642;
          </EuiNotificationBadge>
        ) : null}
      </EuiHeaderSectionItemButton>
    );

    let flyout;
    if (this.state.isFlyoutVisible) {
      flyout = (
        <EuiHeaderAlertFlyout
          id="headerNewsFeed"
          alerts={updates}
          version="Version 8.0"
          onClose={this.closeFlyout}
        />
      );
    }

    return (
      <Fragment>
        {button}
        {flyout}
      </Fragment>
    );
  }
}
