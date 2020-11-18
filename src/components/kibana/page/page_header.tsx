import React, { FunctionComponent, ReactNode } from 'react';
import {
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiButton,
  IconType,
  EuiTabsProps,
  ExclusiveUnion,
  EuiTab,
  EuiIcon,
  EuiText,
  EuiTabs,
  CommonProps,
  EuiButtonProps,
  EuiFlexGroup,
  EuiFlexItem,
} from '@elastic/eui';
import classNames from 'classnames';
import { EuiTabProps } from '@elastic/eui/src/components/tabs/tab';
import { EuiSuperDatePicker } from '../../eui/super_date_picker';

export type KibanaPageHeaderTitle = {
  /**
   * Wrapped in an `H1` so choose appropriately
   */
  pageTitle: ReactNode;
  /**
   * Optional icon to place to the left of the title
   */
  iconType?: IconType;
  /**
   * Wrapped in a subtle paragraph
   */
  description?: IconType;
};

export type KibanaPageHeaderTabs = {
  /**
   * In-app navigation
   */
  tabs: (EuiTabProps & {
    name: string;
  })[];
  /**
   * Any extras to apply to the outer tabs container
   */
  tabsProps: EuiTabsProps;
};

/**
 * The left side can either be a title with optional description and icon;
 * Or a list of tabs
 */
type KibanaPageHeaderLeft = ExclusiveUnion<
  KibanaPageHeaderTitle,
  KibanaPageHeaderTabs
>;

export type KibanaPageHeaderActions = {
  /**
   * There can only be one primary action.
   * Extends EuiButton
   */
  primary: Omit<typeof EuiButton, 'fill'>;
  secondary?: Omit<typeof EuiButton, 'fill'>;
  tertiary?: Omit<typeof EuiButton, 'fill'>;
};

export type KibanaPageHeaderTime = {
  /**
   * Would normally be EuiSuperDatePicker props, but
   * we're faking the component so just check for true
   */
  time: true;
};

/**
 * The right side can either be up to 3 buttons, one being primary
 * Or the time picker
 */
type KibanaPageHeaderRight = ExclusiveUnion<
  KibanaPageHeaderActions,
  KibanaPageHeaderTime
>;

export type KibanaPageHeaderProps = CommonProps &
  KibanaPageHeaderLeft &
  Partial<KibanaPageHeaderRight> & {
    restrictWidth?: boolean;
  };

export const KibanaPageHeader: FunctionComponent<KibanaPageHeaderProps> = ({
  pageTitle,
  iconType,
  description,
  tabs,
  tabsProps,
  className,
  restrictWidth = false,
  primary,
  secondary,
  tertiary,
  time,
}) => {
  let leftSideContent;
  if (pageTitle) {
    const icon = iconType ? (
      <EuiIcon
        type={iconType}
        size="xl"
        style={{ verticalAlign: 'baseline', marginRight: 16 }}
      />
    ) : (
      undefined
    );

    leftSideContent = (
      <EuiText>
        <h1>
          {icon}
          {pageTitle}
        </h1>
        {description && <p>{description}</p>}
      </EuiText>
    );
  } else if (tabs) {
    const renderTabs = () => {
      return tabs.map((tab, index) => {
        const { name, ...tabRest } = tab;
        return (
          <EuiTab key={index} {...tabRest}>
            {name}
          </EuiTab>
        );
      });
    };

    leftSideContent = (
      <EuiTabs {...tabsProps} display="condensed">
        {renderTabs()}
      </EuiTabs>
    );
  }

  let rightSideContent;
  if (time) {
    rightSideContent = <EuiSuperDatePicker />;
  } else if (primary || secondary || tertiary) {
    const buttonArray: typeof EuiButton[] = [];
    if (primary) buttonArray.push({ fill: true, ...primary });
    if (secondary) buttonArray.push(secondary);
    if (tertiary) buttonArray.push(tertiary);
    const renderButtons = () => {
      return buttonArray.map((button, index) => {
        const { children, ...buttonRest } = button;
        return (
          <EuiFlexItem grow={false} key={index}>
            <EuiButton {...buttonRest}>{children}</EuiButton>
          </EuiFlexItem>
        );
      });
    };

    rightSideContent = (
      <EuiFlexGroup responsive={false} direction="columnReverse">
        {renderButtons()}
      </EuiFlexGroup>
    );
  }

  const classes = classNames(
    {
      'euiPageHeader--restrictWidth': restrictWidth,
    },
    className
  );

  return (
    <EuiPageHeader className={classes}>
      <EuiPageHeaderSection>{leftSideContent}</EuiPageHeaderSection>
      {rightSideContent && (
        <EuiPageHeaderSection>{rightSideContent}</EuiPageHeaderSection>
      )}
    </EuiPageHeader>
  );
};
