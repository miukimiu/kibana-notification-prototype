import React, { ReactNode } from 'react';

import {
  EuiBreadcrumb,
  EuiPageBody,
  EuiPageContent,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiTitle,
  EuiButton,
  EuiText,
  EuiSpacer,
  EuiFlexGrid,
  EuiFlexItem,
  EuiPanel,
  EuiHeaderLink,
  EuiHeaderLinks,
} from '@elastic/eui';

import { ManagementPage } from './page';

const breadcrumbs: EuiBreadcrumb[] = [
  {
    text: 'Ingest Manager',
  },
];

const headerLinks: ReactNode = (
  <EuiHeaderLinks>
    <EuiHeaderLink href="#">Send feedback</EuiHeaderLink>

    <EuiButton minWidth={0} size="s">
      Settings
    </EuiButton>
  </EuiHeaderLinks>
);

export default () => (
  <ManagementPage
    pageTitle="Ingest Manager"
    sideNavItem="Ingest Manager"
    headerLinks={headerLinks}
    breadcrumbs={breadcrumbs}>
    <EuiPageBody>
      <EuiPageHeader>
        <EuiPageHeaderSection>
          <EuiTitle size="l">
            <h1>Ingest Manager</h1>
          </EuiTitle>
          <EuiSpacer />
          <EuiText color="subdued">
            <p>
              Central management for Elastic Agents and agent configurations.
            </p>
          </EuiText>
        </EuiPageHeaderSection>
        <EuiPageHeaderSection>
          <EuiButton fill iconType="plusInCircle">
            Add agent
          </EuiButton>
        </EuiPageHeaderSection>
      </EuiPageHeader>
      <EuiPageContent>
        <EuiFlexGrid columns={2}>
          <EuiFlexItem>
            <EuiPanel style={{ minHeight: 200 }} />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiPanel style={{ minHeight: 200 }} />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiPanel style={{ minHeight: 200 }} />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiPanel style={{ minHeight: 200 }} />
          </EuiFlexItem>
        </EuiFlexGrid>
      </EuiPageContent>
    </EuiPageBody>
  </ManagementPage>
);
