import React, { FunctionComponent, ReactNode } from 'react';
import classNames from 'classnames';

import {
  EuiAccordion,
  EuiIcon,
  EuiFlexGroup,
  EuiFlexItem,
  CommonProps,
  IconType,
  EuiAccordionProps,
  htmlIdGenerator,
} from '@elastic/eui';

export interface EuiNavDrawerGroupProps  // TODO: paddingSize should be optional on EuiAccordion
  extends CommonProps,
    Omit<EuiAccordionProps, 'paddingSize' | 'id'> {
  children?: ReactNode;
  title: string;
  iconType?: IconType;
  id?: string;
}

export const EuiNavDrawerGroup: FunctionComponent<EuiNavDrawerGroupProps> = ({
  className,
  children,
  title,
  iconType,
  id,
  ...rest
}) => {
  const classes = classNames('euiNavDrawerGroup', className);
  const buttonClasses = classNames('euiNavDrawerGroup__button');

  const buttonContent = (
    <EuiFlexGroup gutterSize="s" alignItems="center" responsive={false}>
      {iconType && (
        <EuiFlexItem grow={false}>
          <EuiIcon type={iconType} size="l" />
        </EuiFlexItem>
      )}

      <EuiFlexItem>{title}</EuiFlexItem>
    </EuiFlexGroup>
  );

  const generateID = htmlIdGenerator(title);

  return (
    <EuiAccordion
      id={id || generateID()}
      className={classes}
      buttonClassName={buttonClasses}
      buttonContent={buttonContent}
      {...rest}>
      {children}
    </EuiAccordion>
  );
};
