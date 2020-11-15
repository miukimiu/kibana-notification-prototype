import React from 'react';
import Helmet from 'react-helmet';
import { navigate } from 'gatsby';

import {
  EuiBreadcrumb,
  EuiFlexGroup,
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiPageSideBar,
  EuiTitle,
  EuiFieldSearch,
  EuiFlexItem,
  EuiSpacer,
  EuiSelect,
  EuiTab,
  EuiTabs,
  EuiFacetButton,
  EuiFacetGroup,
  EuiFlexGrid,
  EuiPanel,
} from '@elastic/eui';
import Layout from '../components/layout';
import { ObservabilityNav } from '../components/kibana/chrome/nav';
// @ts-ignore
import { EuiSuperDatePicker } from '../components/eui';

const breadcrumbs: EuiBreadcrumb[] = [
  {
    text: 'Observability',
    href: '#',
    onClick: () => {
      navigate('observability-overview');
    },
  },
  {
    text: 'APM',
    href: '#',
  },
  {
    text: 'Traces',
    href: '#',
  },
  {
    text: 'Finch',
  },
];

export default () => (
  <Layout chrome={{ breadcrumbs }}>
    <Helmet>
      <title>Finch Trace | Kibana 8 Prototype</title>
    </Helmet>
    <EuiPage>
      <EuiPageSideBar>
        <ObservabilityNav />
      </EuiPageSideBar>
      <EuiPageBody>
        <EuiPageHeader style={{ padding: 32 }}>
          <EuiPageHeaderSection>
            <EuiTitle size="l">
              <h1>Finch</h1>
            </EuiTitle>
            {/* <EuiButton>Alerts</EuiButton> */}
          </EuiPageHeaderSection>
          <EuiPageHeaderSection>
            <EuiSuperDatePicker />
          </EuiPageHeaderSection>
        </EuiPageHeader>
        <EuiPageContent>
          <EuiPageContentBody>
            <EuiFlexGroup>
              <EuiFlexItem grow={3}>
                <EuiFieldSearch
                  fullWidth
                  placeholder="Search transactions..."
                />
              </EuiFlexItem>
              <EuiFlexItem grow={1}>
                <EuiSelect prepend="Environment" />
              </EuiFlexItem>
            </EuiFlexGroup>
            <EuiSpacer />
            <EuiTabs>
              <EuiTab isSelected>Transactions</EuiTab>
              <EuiTab>Errors</EuiTab>
              <EuiTab>JVMs</EuiTab>
              <EuiTab>Service Map</EuiTab>
            </EuiTabs>
            <EuiSpacer />
            <EuiFlexGroup>
              <EuiFlexItem grow={false}>
                <EuiFacetGroup>
                  <EuiFacetButton>Transaction type</EuiFacetButton>
                  <EuiFacetButton>Hose</EuiFacetButton>
                  <EuiFacetButton>Container ID</EuiFacetButton>
                </EuiFacetGroup>
              </EuiFlexItem>
              <EuiFlexItem>
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
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiPageContentBody>
        </EuiPageContent>
      </EuiPageBody>
    </EuiPage>
  </Layout>
);
