import React, { ReactNode, FunctionComponent } from 'react';

import { KibanaChrome, KibanaChromeProps } from './kibana/chrome/chrome';

if (localStorage.getItem('theme') === 'dark') {
  require('../themes/theme_dark.scss');
} else {
  require('../themes/theme_light.scss');
}

const Layout: FunctionComponent<{
  children?: ReactNode;
  chrome?: KibanaChromeProps;
}> = ({ children, chrome }) => {
  return (
    <>
      <KibanaChrome {...chrome} />
      <div className="chrWrap">{children}</div>
    </>
  );
};

export default Layout;
