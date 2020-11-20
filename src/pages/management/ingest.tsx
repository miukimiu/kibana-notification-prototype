import React, { ReactNode } from 'react';

import {
  EuiBreadcrumb,
  EuiPageContent,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiButton,
  EuiText,
  EuiSpacer,
  EuiFlexItem,
  EuiHeaderLink,
  EuiHeaderLinks,
  EuiPageContentBody,
  EuiFieldSearch,
  EuiFlexGroup,
  EuiFacetButton,
  EuiFacetGroup,
  EuiFlexGrid,
  EuiTitle,
  EuiCard,
  EuiIcon,
  EuiHorizontalRule,
  EuiCallOut,
} from '@elastic/eui';

import { ManagementPage } from '../../components/kibana/management/page';
// @ts-ignore
import illustrationImg from '../../images/Illustration_3.svg';

const breadcrumbs: EuiBreadcrumb[] = [
  {
    text: 'Integrations',
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

const Cards: ReactNode[] = [];

for (let i = 0; i < 20; i++) {
  Cards.push(
    <EuiFlexItem>
      <EuiCard
        icon={<EuiIcon type="logoElastic" size="xl" />}
        title="Elastic"
        description="Integration"
        betaBadgeLabel="Experimental"
        footer={
          <EuiCallOut
            color="success"
            iconType="checkInCircleFilled"
            size="s"
            title="Installed"
          />
        }
      />
    </EuiFlexItem>
  );
}

export default () => (
  <ManagementPage
    pageTitle="Integrations"
    sideNavItem="Integrations"
    headerLinks={headerLinks}
    breadcrumbs={breadcrumbs}>
    <EuiPageHeader>
      <EuiPageHeaderSection>
        <EuiText color="subdued">
          <h1>Integrations</h1>
          <p>Browse integrations for popular apps and services.</p>
        </EuiText>
      </EuiPageHeaderSection>
      <EuiPageHeaderSection>
        <img
          className="pageScreenshot pageScreenshot--responsive"
          style={{ marginBottom: -32 }}
          alt=""
          aria-hidden={true}
          width={320}
          src={illustrationImg}
        />
      </EuiPageHeaderSection>
    </EuiPageHeader>
    <EuiPageContent>
      <EuiPageContentBody>
        <EuiFieldSearch fullWidth placeholder="Search integrations..." />
        <EuiSpacer size="xxl" />
        <EuiFlexGroup gutterSize="xl">
          <EuiFlexItem grow={false}>
            <div>
              <EuiTitle size="xs">
                <h2>Installed</h2>
              </EuiTitle>
              <EuiSpacer size="s" />
              <EuiFacetGroup>
                <EuiFacetButton isSelected quantity={20}>
                  All
                </EuiFacetButton>
                <EuiFacetButton quantity={0}>Updates available</EuiFacetButton>
              </EuiFacetGroup>
              <EuiHorizontalRule margin="xl" />
              <EuiTitle size="xs">
                <h2>Available</h2>
              </EuiTitle>
              <EuiSpacer size="s" />
              <EuiFacetGroup>
                <EuiFacetButton quantity={35}>All</EuiFacetButton>
                <EuiFacetButton quantity={1}>Azure</EuiFacetButton>
                <EuiFacetButton quantity={2}>Cloud</EuiFacetButton>
                <EuiFacetButton quantity={1}>Config management</EuiFacetButton>
                <EuiFacetButton quantity={1}>Containers</EuiFacetButton>
                <EuiFacetButton quantity={1}>Custom</EuiFacetButton>
                <EuiFacetButton quantity={6}>Datastore</EuiFacetButton>
                <EuiFacetButton quantity={1}>Kubernetes</EuiFacetButton>
                <EuiFacetButton quantity={3}>Message Queue</EuiFacetButton>
                <EuiFacetButton quantity={2}>Monitoring</EuiFacetButton>
                <EuiFacetButton quantity={6}>Network 1</EuiFacetButton>
                <EuiFacetButton quantity={4}>OS & System</EuiFacetButton>
                <EuiFacetButton quantity={33}>Security</EuiFacetButton>
                <EuiFacetButton quantity={5}>Web</EuiFacetButton>
              </EuiFacetGroup>
            </div>
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiFlexGrid columns={3} gutterSize="xl">
              {Cards}
            </EuiFlexGrid>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiPageContentBody>
    </EuiPageContent>
  </ManagementPage>
);
