import React from 'react';
import { EuiButtonProps, EuiButton } from '@elastic/eui';
import ThemeContext from '../../../../themes/ThemeContext';

// @ts-ignore
import { sun } from '../../../../images/sun';

export const KibanaHeaderThemeButton: React.FunctionComponent<EuiButtonProps> = ({
  ...props
}) => {
  return (
    <ThemeContext.Consumer>
      {(context) => (
        <EuiButton
          size="s"
          iconType={context.theme === 'dark' ? sun : 'moon'}
          onClick={context.toggleDark}
          isLoading={context.themeIsLoading}
          {...props}>
          Switch theme
        </EuiButton>
      )}
    </ThemeContext.Consumer>
  );
};
