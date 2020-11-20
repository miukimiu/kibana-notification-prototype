import React from 'react';
import { ThemeProvider } from './src/themes/ThemeContext';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);

const Layout = require('./src/components/layout').default;
const DocsLayout = require('./src/components/documentation/layout').default;

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it

  if (props.path.includes('documentation')) {
    return <DocsLayout>{element}</DocsLayout>;
  }

  return <Layout {...props}>{element}</Layout>;
};
