import React from 'react';

import {
  EuiBreadcrumb,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiTab,
  EuiTabs,
} from '@elastic/eui';
// @ts-ignore
import consoleImg from '../images/Dev Tools - Console.png';
import { KibanaPage } from '../components/kibana/page/page';

const breadcrumbs: EuiBreadcrumb[] = [
  {
    text: 'Dev Tools',
  },
];

export default () => (
  <KibanaPage breadcrumbs={breadcrumbs} pageTitle="Console | Dev Tools">
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
          src={consoleImg}
        />
      </EuiPageContentBody>
    </EuiPageContent>

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
  </KibanaPage>
);
