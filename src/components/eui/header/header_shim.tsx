import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import { EuiHeader, EuiHeaderProps } from '@elastic/eui';

export interface EuiHeaderShimProps extends EuiHeaderProps {
  theme?: 'light' | 'dark';
}

export const EuiHeaderShim: FunctionComponent<EuiHeaderShimProps> = ({
  children,
  className,
  theme = 'light',
  ...rest
}) => {
  const classes = classNames(`euiHeader--${theme}`, className);

  return (
    <EuiHeader className={classes} {...rest}>
      {children}
    </EuiHeader>
  );
};
