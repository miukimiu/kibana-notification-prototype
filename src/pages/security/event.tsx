import React, { ReactNode } from 'react';
import Helmet from 'react-helmet';
import { navigate } from 'gatsby';

import {
  EuiBreadcrumb,
  EuiFlexGroup,
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiPageSideBar,
  EuiTitle,
  EuiFlexItem,
  EuiSpacer,
  EuiButton,
  EuiText,
  EuiStat,
  EuiHorizontalRule,
  EuiHeaderLink,
  EuiHeaderLinks,
} from '@elastic/eui';
import Layout from '../../components/layout';
import { SecurityNav } from '../../components/kibana/chrome/nav';
// @ts-ignore
import traces_img from '../../images/Traces - Explorer.png';
import { KibanaGlobals } from '../../components/kibana/chrome/globals';

const breadcrumbs: EuiBreadcrumb[] = [
  {
    text: 'Security',
    href: '#',
    onClick: () => {
      navigate('security-overview');
    },
  },
  {
    text: 'Hosts',
    href: '#',
  },
  {
    text: 'Events',
  },
];

const headerLinks: ReactNode = (
  <EuiHeaderLinks>
    <EuiHeaderLink href="#">Settings</EuiHeaderLink>
  </EuiHeaderLinks>
);

export default () => (
  <Layout chrome={{ breadcrumbs, headerLinks }}>
    <Helmet>
      <title>Finch Trace | Kibana 8 Prototype</title>
    </Helmet>
    <EuiPage>
      <EuiPageSideBar>
        <SecurityNav currentUrl="security/event" />
      </EuiPageSideBar>
      <EuiPageBody>
        <EuiPageHeader style={{ padding: 16 }}>
          <KibanaGlobals />
        </EuiPageHeader>
        <EuiPageHeader>
          <EuiPageHeaderSection>
            <EuiTitle size="l">
              <h1>Suspicious login</h1>
            </EuiTitle>
            <EuiSpacer />
            <EuiText color="subdued">
              <p>This timeline is to investigate a suspicious login.</p>
            </EuiText>
          </EuiPageHeaderSection>
          <EuiPageHeaderSection>
            <EuiButton iconType="starEmpty">Add to favorites</EuiButton>
            &emsp;
            <EuiButton fill iconType="arrowDown" iconSide="right">
              Add to case
            </EuiButton>
          </EuiPageHeaderSection>
        </EuiPageHeader>
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
      </EuiPageBody>
    </EuiPage>
  </Layout>
);
