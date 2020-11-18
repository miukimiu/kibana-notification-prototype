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
  EuiPanel,
  EuiHeaderLink,
  EuiHeaderLinks,
  EuiPageContentBody,
  EuiTab,
  EuiTabs,
  EuiFieldSearch,
  EuiFilterButton,
  EuiFilterGroup,
  EuiFlexGroup,
  EuiStat,
} from '@elastic/eui';

import { ManagementPage } from './page';
// @ts-ignore
import table_img from '../../images/Agents - table.png';

const breadcrumbs: EuiBreadcrumb[] = [
  {
    text: 'Agents',
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
    pageTitle="Agents"
    sideNavItem="Agents"
    headerLinks={headerLinks}
    breadcrumbs={breadcrumbs}>
    <EuiPageHeader className="euiPageHeader--restrictWidth">
      <EuiPageHeaderSection>
        <EuiTabs display="condensed">
          <EuiTab isSelected>Agents</EuiTab>
          <EuiTab>Policies</EuiTab>
          <EuiTab>Enrollment tokens</EuiTab>
          <EuiTab>Data streams</EuiTab>
        </EuiTabs>
      </EuiPageHeaderSection>
      <EuiPageHeaderSection>
        <EuiButton fill iconType="plusInCircle">
          Add agent
        </EuiButton>
      </EuiPageHeaderSection>
    </EuiPageHeader>
    <EuiPageContent
      className="euiPageContent--restrictWidth"
      style={{ flexGrow: 0 }}>
      <EuiPageContentBody>
        <EuiFlexGroup>
          <EuiFlexItem>
            <EuiStat title="0" description="Agents" titleColor="subdued" />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiStat title="0" description="Online" titleColor="subdued" />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiStat title="0" description="Offline" titleColor="subdued" />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiStat title="0" description="Error" titleColor="subdued" />
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiPageContentBody>
    </EuiPageContent>
    <EuiPageContent className="euiPageContent--restrictWidth">
      <EuiPageContentBody>
        <EuiPanel hasShadow={false} color="subdued">
          <EuiText size="s">
            <p>
              Manage and deploy policy updates to a group of agents of any size.
            </p>
          </EuiText>
        </EuiPanel>
        <EuiSpacer />
        <EuiPageContentBody>
          <EuiFlexGroup>
            <EuiFlexItem grow={3}>
              <EuiFieldSearch
                fullWidth
                placeholder="Search for by workpad name..."
              />
            </EuiFlexItem>
            <EuiFlexItem grow={1}>
              <EuiFilterGroup>
                <EuiFilterButton iconType="arrowDown" numFilters={5}>
                  Filters
                </EuiFilterButton>
              </EuiFilterGroup>
            </EuiFlexItem>
          </EuiFlexGroup>
          <EuiSpacer />
          <img
            className="pageScreenshot pageScreenshot--responsive"
            alt="Blank table"
            width={1168}
            src={table_img}
          />
        </EuiPageContentBody>
      </EuiPageContentBody>
    </EuiPageContent>
  </ManagementPage>
);
