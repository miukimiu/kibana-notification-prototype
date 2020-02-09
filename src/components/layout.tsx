import React, { ReactNode, FunctionComponent } from 'react';

import { ChromeWrapper } from './chrome/chrome';

if (localStorage.getItem('theme') === 'dark') {
  require('../themes/theme_dark.scss');
} else {
  require('../themes/theme_light.scss');
}

const Layout: FunctionComponent<{ children?: ReactNode }> = ({ children }) => {
  return (
    <>
      <ChromeWrapper />
      <div className="chrWrap">{children}</div>
    </>
  );
};

export default Layout;
