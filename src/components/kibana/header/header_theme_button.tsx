import React from 'react';
import { EuiButtonProps, EuiButton } from '@elastic/eui';
// @ts-ignore
import ThemeContext from '../../../themes/ThemeContext';

// @ts-ignore
import { sun } from './assets/sun';

const KibanaHeaderThemeButton: React.FunctionComponent<EuiButtonProps> = ({
  ...props
}) => {
  return (
    <ThemeContext.Consumer>
      {/*
      // @ts-ignore */}
      {context => (
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

export default KibanaHeaderThemeButton;
