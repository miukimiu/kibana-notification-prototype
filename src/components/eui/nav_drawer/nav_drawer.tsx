import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';

// import { throttle } from '@elastic/eui/src/components/color_picker/utils';
import { EuiFlyout, EuiFlyoutProps } from '@elastic/eui';

export type EuiNavDrawerProps = Omit<EuiFlyoutProps, 'onClose'> & {
  children?: ReactNode;
  isLocked?: boolean;
};

type State = {
  isLocked: boolean;
  isExpanded: boolean;
};

export class EuiNavDrawer extends Component<EuiNavDrawerProps, State> {
  constructor(props: EuiNavDrawerProps) {
    super(props);

    this.state = {
      isLocked: props.isLocked || false,
      isExpanded: props.isLocked || false,
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
      this.collapse();
    }
    // reacts every 50ms to resize changes and always gets the final update
  };

  // Although not used in `src/`, this method is available to and used in `src-docs/`
  // for implementation-specific nav menu toggling via `ref` reference
  toggleExpansion = () => {
    this.setState(({ isExpanded }) => ({
      isExpanded: !isExpanded,
    }));
  };

  forceClosed = () => {
    this.setState({
      isExpanded: false,
      isLocked: false,
    });
    // In case it was locked before, remove the window resize listener
    // window.removeEventListener('resize', this.functionToCallOnWindowResize);
  };

  collapse = () => {
    if (!this.props.isLocked) {
      this.forceClosed();
    }
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
          onClose={this.collapse}
          size="s"
          className={classes}
          {...rest}>
          {/* TODO: Add a "skip navigation" keyboard only button */}
          {children}
        </EuiFlyout>
      )
    );
  }
}
