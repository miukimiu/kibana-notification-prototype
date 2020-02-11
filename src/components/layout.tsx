import React, { ReactNode, FunctionComponent } from 'react';

import { KibanaChromeWrapper } from './kibana/chrome/chrome';

if (localStorage.getItem('theme') === 'dark') {
  require('../themes/theme_dark.scss');
} else {
  require('../themes/theme_light.scss');
}

const Layout: FunctionComponent<{ children?: ReactNode }> = ({ children }) => {
  return (
    <>
      <KibanaChromeWrapper />
      <div className="chrWrap">{children}</div>
    </>
  );
};

export default Layout;
