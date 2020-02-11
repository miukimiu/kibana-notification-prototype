import React, { ReactElement, ReactNode, HTMLAttributes } from 'react';
import classNames from 'classnames';
import { CommonProps } from '@elastic/eui';

type Props = {
  size: 'xs' | 's' | 'm' | 'l' | 'xl' | 'default';
  children?: ReactNode;
} & CommonProps &
  HTMLAttributes<HTMLDivElement>;

export function EuiPadding({
  size = 'default',
  children,
  className,
  ...rest
}: Props): ReactElement {
  const classes = classNames('euiPadding', [`euiPadding--${size}`], className);

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}
