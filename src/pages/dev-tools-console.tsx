import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';

import {
  EuiBreadcrumb,
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiTab,
  EuiTabs,
  EuiBottomBar,
  EuiButton,
} from '@elastic/eui';
// @ts-ignore
import console_img from '../images/Dev Tools - Console.png';

const breadcrumbs: EuiBreadcrumb[] = [
  {
    text: 'Dev Tools',
  },
];

export default () => (
  <Layout chrome={{ breadcrumbs }}>
    <Helmet>
      <title>Console | Dev Tools | Kibana 8 Prototype</title>
    </Helmet>
    <EuiPage>
      <EuiPageBody>
        <EuiPageHeader>
          <EuiPageHeaderSection>
            <EuiTabs display="condensed">
              <EuiTab isSelected>Console</EuiTab>
              <EuiTab>Search profiler</EuiTab>
              <EuiTab>Grok debugger</EuiTab>
              <EuiTab>Painless lab</EuiTab>
            </EuiTabs>
          </EuiPageHeaderSection>
        </EuiPageHeader>
        {/** TODO: How to afford for bottom bar displacement outside of body */}
        <EuiPageContent style={{ paddingBottom: 72 }}>
          <EuiPageContentBody>
            <img
              className="pageScreenshot pageScreenshot--fullWidth"
              alt="Dev Tools / Console"
              width={1341}
              src={console_img}
            />
          </EuiPageContentBody>
        </EuiPageContent>
      </EuiPageBody>
    </EuiPage>
    {/* {typeof document !== 'undefined' && (
      <EuiBottomBar affordForDisplacement={false} paddingSize="s">
        <EuiButton size="s" color="ghost" minWidth={0}>
          History
        </EuiButton>
        &emsp;
        <EuiButton size="s" color="ghost" minWidth={0}>
          Settings
        </EuiButton>
        &emsp;
        <EuiButton size="s" color="ghost" minWidth={0}>
          Help
        </EuiButton>
      </EuiBottomBar>
    )} */}
  </Layout>
);
