/**
 * This file adds an auto render based on an object of items passed to EuiHeader.
 * TODO: To be added directly to EuiHeader.
 */
import React, { useEffect } from 'react';
import {
  EuiHeaderSectionItem,
  EuiHeader,
  EuiHeaderSection,
} from '@elastic/eui';

type EuiHeaderProps = React.ComponentProps<typeof EuiHeader>;

type EuiHeaderShimItemProps = React.ComponentProps<
  typeof EuiHeaderSectionItem
> & {};

interface EuiHeaderShimProps extends EuiHeaderProps {
  leftSectionItems: EuiHeaderShimItemProps[];
  centerSectionItems?: EuiHeaderShimItemProps[];
  rightSectionItems?: EuiHeaderShimItemProps[];
  position?: 'static' | 'fixed';
}

function createHeaderSection(sections: EuiHeaderShimItemProps[]) {
  return sections.map((section, index) => {
    // NOTE: border should only be applied for Amsterdam theme
    return <EuiHeaderSectionItem key={index} border="none" {...section} />;
  });
}

export const EuiHeaderShim: React.FunctionComponent<EuiHeaderShimProps> = ({
  leftSectionItems,
  centerSectionItems,
  rightSectionItems,
  position = 'static',
  className,
  ...rest
}) => {
  const positionClass = `euiHeader--${position} ${className}`;

  useEffect(() => {
    if (position === 'fixed') {
      document.body.classList.add('euiBody--headerIsFixed');
    }
    return () => {
      document.body.classList.remove('euiBody--headerIsFixed');
    };
  }, [position]);

  const leftSection = (
    <EuiHeaderSection grow={centerSectionItems ? false : undefined}>
      {createHeaderSection(leftSectionItems)}
    </EuiHeaderSection>
  );
  const centerSection = centerSectionItems && (
    <EuiHeaderSection grow={false}>
      {createHeaderSection(centerSectionItems)}
    </EuiHeaderSection>
  );
  const rightSection = rightSectionItems && (
    <EuiHeaderSection side="right">
      {createHeaderSection(rightSectionItems)}
    </EuiHeaderSection>
  );

  return (
    <EuiHeader className={positionClass} {...rest}>
      {leftSection}
      {centerSection}
      {rightSection}
    </EuiHeader>
  );
};
