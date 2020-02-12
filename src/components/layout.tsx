import React, { ReactNode, FunctionComponent } from 'react';
import Helmet from 'react-helmet';

import { KibanaChromeWrapper } from './kibana/chrome/chrome';

if (localStorage.getItem('theme') === 'dark') {
  require('../themes/theme_dark.scss');
} else {
  require('../themes/theme_light.scss');
}

const Layout: FunctionComponent<{ children?: ReactNode }> = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>Kibana 8 Prototype</title>
      </Helmet>
      <KibanaChromeWrapper />
      <div className="chrWrap">{children}</div>
    </>
  );
};

export default Layout;
