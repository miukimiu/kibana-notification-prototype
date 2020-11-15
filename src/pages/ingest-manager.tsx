import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import { navigate } from 'gatsby';

import {
  EuiPage,
  EuiBreadcrumb,
  EuiPageBody,
  EuiPageContent,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiTitle,
  EuiPageSideBar,
  EuiButton,
  EuiText,
  EuiSpacer,
  EuiFlexGrid,
  EuiFlexItem,
  EuiPanel,
} from '@elastic/eui';

import { KibanaManagementNav } from '../components/kibana/chrome/nav';

const breadcrumbs: EuiBreadcrumb[] = [
  {
    text: 'Management',
    href: '#',
    onClick: () => {
      navigate('stack-management');
    },
  },
  {
    text: 'Ingest Manager',
  },
];

export default () => (
  <Layout chrome={{ breadcrumbs }}>
    <Helmet>
      <title>Ingest Manager | Kibana 8 Prototype</title>
    </Helmet>
    <EuiPage>
      <EuiPageSideBar>
        <KibanaManagementNav />
      </EuiPageSideBar>
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
    </EuiPage>
  </Layout>
);
