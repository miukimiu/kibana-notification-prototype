import React, { ReactNode } from 'react';

import {
  EuiFlexGroup,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageHeader,
  EuiPageHeaderSection,
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
  EuiHeaderLink,
  EuiBreadcrumb,
} from '@elastic/eui';
import { EuiSuperDatePicker } from '../../components/eui/super_date_picker';
import { ObservabilityPage } from '../../components/observability/page';

const breadcrumbs: EuiBreadcrumb[] = [
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

const headerLinks: ReactNode = <EuiHeaderLink href="#">Alerts</EuiHeaderLink>;

export default () => (
  <ObservabilityPage
    pageTitle="Finch Trace"
    navItem="Traces"
    headerLinks={headerLinks}
    breadcrumbs={breadcrumbs}>
    <EuiPageHeader>
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
            <EuiFieldSearch fullWidth placeholder="Search transactions..." />
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
  </ObservabilityPage>
);
