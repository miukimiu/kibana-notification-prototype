import React from 'react';

import {
  EuiBreadcrumb,
  EuiFlexGroup,
  EuiPageContent,
  EuiPageHeader,
  EuiFlexItem,
  EuiButton,
  EuiStat,
  EuiHorizontalRule,
} from '@elastic/eui';
// @ts-ignore
import traces_img from '../../images/Traces - Explorer.png';
import { KibanaGlobals } from '../../components/kibana/chrome/globals';
import { SecurityPage } from './page';
import { KibanaPageHeader } from '../../components/kibana/page/page_header';

const breadcrumbs: EuiBreadcrumb[] = [
  {
    text: 'Hosts',
    href: '#',
  },
  {
    text: 'Events',
  },
];

export default () => (
  <SecurityPage
    pageTitle="Suspicious login"
    navItem="Events"
    breadcrumbs={breadcrumbs}>
    <EuiPageHeader style={{ padding: 16 }}>
      <KibanaGlobals />
    </EuiPageHeader>
    <KibanaPageHeader
      pageTitle="Suspcious login"
      description="This timeline is to investigate a suspicious login."
      actionButtons={[
        <EuiButton fill iconType="arrowDown" iconSide="right">
          Add to case
        </EuiButton>,
        <EuiButton iconType="starEmpty">Add to favorites</EuiButton>,
      ]}
    />
    <EuiPageContent grow={false}>
      <EuiFlexGroup>
        <EuiFlexItem>
          <EuiStat title="1" description="Default color" />
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiStat
            title="10"
            description="Subdued color"
            titleColor="subdued"
          />
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiStat
            title="100"
            description="Primary color"
            titleColor="primary"
          />
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiStat
            title="1,000"
            description="Secondary color"
            titleColor="secondary"
          />
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiStat
            title="10,000"
            description="Danger color"
            titleColor="danger"
          />
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiStat
            title="100,000"
            description="Accent color"
            titleColor="accent"
          />
        </EuiFlexItem>
      </EuiFlexGroup>
    </EuiPageContent>
    <EuiHorizontalRule margin="none" />
    <EuiPageContent style={{ padding: 0 }}>
      <img
        className="pageScreenshot pageScreenshot--fullWidth"
        alt="Traces explorer"
        width={1275}
        src={traces_img}
      />
    </EuiPageContent>
  </SecurityPage>
);
