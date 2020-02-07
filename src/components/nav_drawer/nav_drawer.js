import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// import { throttle } from '@elastic/eui/src/components/color_picker/utils';
import { EuiFlyout } from '@elastic/eui';

export class EuiNavDrawer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLocked: props.isLocked,
      isExpanded: props.isLocked,
    };
  }

  componentDidMount() {
    if (this.props.isLocked) {
      // window.addEventListener('resize', this.functionToCallOnWindowResize);
    }
  }

  componentWillUnmount() {
    // window.removeEventListener('resize', this.functionToCallOnWindowResize);
  }

  functionToCallOnWindowResize = () => {
    if (window.innerWidth < 1200) {
      this.collapseDrawer();
    }
    // reacts every 50ms to resize changes and always gets the final update
  };

  // Although not used in `src/`, this method is available to and used in `src-docs/`
  // for implementation-specific nav menu toggling via `ref` reference
  toggleOpen = () => {
    this.setState(({ isExpanded }) => ({
      isExpanded: !isExpanded,
    }));
  };

  collapseDrawer = () => {
    this.setState({
      isExpanded: false,
      isLocked: false,
    });

    // In case it was locked before, remove the window resize listener
    // window.removeEventListener('resize', this.functionToCallOnWindowResize);
  };

  closeBoth = () => {
    if (!this.props.isLocked) this.collapseDrawer();
  };

  render() {
    const { children, className, isLocked, ...rest } = this.props;

    const classes = classNames(
      'euiNavDrawer2',
      { 'euiNavDrawer2--isLocked': isLocked },
      className
    );

    return (
      this.state.isExpanded && (
        <EuiFlyout
          ownFocus={!isLocked}
          onClose={this.closeBoth}
          size="s"
          id="mainNav"
          className={classes}
          {...rest}>
          {/* TODO: Add a "skip navigation" keyboard only button */}
          {children}
        </EuiFlyout>
      )
    );
  }
}

EuiNavDrawer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  /**
   * Keep drawer locked open
   */
  isLocked: PropTypes.bool,
};
