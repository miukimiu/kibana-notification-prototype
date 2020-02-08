import React from 'react';
import PropTypes from 'prop-types';

import { ChromeWrapper } from './chrome/chrome';

if (localStorage.getItem('theme') === 'dark') {
  require('../themes/theme_dark.scss');
} else {
  require('../themes/theme_light.scss');
}

const Layout = ({ children }) => (
  <>
    <ChromeWrapper />
    <div className="chrWrap">{children}</div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
