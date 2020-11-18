import React from 'react';

import {
  EuiBreadcrumb,
  EuiIcon,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiTitle,
  EuiButton,
  EuiHorizontalRule,
  EuiText,
  EuiSpacer,
  EuiFlexGroup,
  EuiFlexItem,
  EuiCard,
} from '@elastic/eui';
import { SolutionCards } from '../../components/kibana/solutions';
// @ts-ignore
import app_img from '../../images/App_Search.png';
// @ts-ignore
import workplace_img from '../../images/Workplace_Search.png';
import { KibanaPage } from '../../components/kibana/page/page';

const breadcrumbs: EuiBreadcrumb[] = [
  {
    text: 'Enterprise search',
  },
];

export default () => (
  <KibanaPage pageTitle="Enterprise search" breadcrumbs={breadcrumbs}>
    <EuiPageHeader
      className="euiPageHeader--restrictWidth"
      style={{ padding: 32 }}>
      <EuiPageHeaderSection>
        <EuiTitle size="l">
          <h1>
            <EuiIcon
              type="logoWorkplaceSearch"
              size="xl"
              style={{ verticalAlign: 'baseline' }}
            />{' '}
            Enterprise search
          </h1>
        </EuiTitle>
      </EuiPageHeaderSection>
    </EuiPageHeader>
    <EuiPageContent className="euiPageContent--restrictWidth">
      <EuiPageContentBody>
        <EuiFlexGroup>
          <EuiFlexItem grow={false}>
            <EuiCard
              image={<img alt="" aria-hidden={true} src={app_img} />}
              title="Elastic App Search"
              description="Provides user-friendly tools to design a deploy a powerful search to your websites or web/mobile applications."
              footer={<EuiButton>Launch App Search</EuiButton>}
              betaBadgeLabel="Platinum"
            />
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiCard
              image={<img alt="" aria-hidden={true} src={workplace_img} />}
              title="Elastic Workplace Search"
              description="Unify all your team's content in one place, with instance connectivity to popular productivity nd collaboration tools."
              footer={<EuiButton>Launch Workplace Search</EuiButton>}
              betaBadgeLabel="Platinum"
            />
          </EuiFlexItem>
        </EuiFlexGroup>

        <EuiSpacer size="xl" />

        <EuiHorizontalRule />

        <EuiText textAlign="center">
          <h2>Do more with Elastic</h2>
        </EuiText>

        <EuiSpacer />

        <SolutionCards current="Enterprise search" />
      </EuiPageContentBody>
    </EuiPageContent>
  </KibanaPage>
);
