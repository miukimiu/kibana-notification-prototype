import React, {
  ReactElement,
  ReactNode,
  HTMLAttributes,
  useEffect,
} from 'react';
import classNames from 'classnames';
import { CommonProps } from '@elastic/eui';

type Props = {
  offsetBody?: boolean | number;
  children?: ReactNode;
} & CommonProps &
  HTMLAttributes<HTMLDivElement>;

export function EuiFixed({
  children,
  className,
  offsetBody = true,
  ...rest
}: Props): ReactElement {
  const classes = classNames('euiFixed', className);

  useEffect(() => {
    if (offsetBody) {
      document.body.classList.add(
        `euiBody--hasFixed${className ? `__${className}` : ''}`
      );
    }
    return () => {
      document.body.classList.remove(
        `euiBody--hasFixed${className ? `__${className}` : ''}`
      );
    };
  }, [offsetBody]);

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}
