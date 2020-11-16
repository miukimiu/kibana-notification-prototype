import React, { ReactNode } from 'react';
import Helmet from 'react-helmet';
import {
  EuiBreadcrumb,
  EuiIcon,
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiPageSideBar,
  EuiTitle,
  EuiHeaderLinks,
  EuiHeaderLink,
  EuiButton,
  EuiCard,
  EuiFlexGroup,
  EuiFlexItem,
  EuiHorizontalRule,
  EuiPanel,
  EuiSpacer,
  EuiText,
} from '@elastic/eui';
import Layout from '../../components/layout';
import { SecurityNav } from '../../components/kibana/chrome/nav';
// @ts-ignore
import illustration_2 from '../../images/Illustration_2.png';
import { SolutionCards } from '../../components/kibana/solutions';

const breadcrumbs: EuiBreadcrumb[] = [
  {
    text: 'Security',
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
      <title>Security Overview | Kibana 8 Prototype</title>
    </Helmet>
    <EuiPage>
      <EuiPageSideBar>
        <SecurityNav />
      </EuiPageSideBar>
      <EuiPageBody>
        <EuiPageHeader
          className="euiPageHeader--restrictWidth"
          style={{ padding: 32 }}>
          <EuiPageHeaderSection>
            <EuiTitle size="l">
              <h1>
                <EuiIcon
                  type="logoSecurity"
                  size="xl"
                  style={{ verticalAlign: 'baseline' }}
                />{' '}
                Security
              </h1>
            </EuiTitle>
          </EuiPageHeaderSection>
        </EuiPageHeader>
        <EuiPageContent className="euiPageContent--restrictWidth">
          <EuiPageContentBody>
            <EuiPanel color="subdued" paddingSize="l" hasShadow={false}>
              <EuiFlexGroup alignItems="center">
                <EuiFlexItem>
                  <EuiText>
                    <h2>Lets get you started</h2>
                    <p>
                      Elastic Security integrates the free and open Elastic SIEM
                      with Elastic Endpoint Security to prevent, detect, and
                      respond to threats. To begin, you’ll need to add security
                      solution related data to the Elastic Stack. For additional
                      information, you can view our getting started guide.
                    </p>
                  </EuiText>
                  <EuiSpacer />
                  <div>
                    <EuiButton fill iconType="popout" iconSide="right">
                      Getting started guide
                    </EuiButton>
                  </div>
                </EuiFlexItem>
                <EuiFlexItem grow={false}>
                  <img
                    className="pageScreenshot"
                    alt=""
                    aria-hidden={true}
                    width={254}
                    src={illustration_2}
                  />
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiPanel>

            <EuiSpacer size="xl" />
            <EuiSpacer size="xl" />

            <EuiFlexGroup>
              <EuiFlexItem>
                <EuiCard
                  title="Elastic Agent"
                  description="A simple, unified way to add monitoring to your hosts."
                  footer={<EuiButton>Add data with Elastic Agent</EuiButton>}
                />
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiCard
                  title="Beats"
                  description="Lightweight Beats can send data from hundreds or thousands of machines and systems."
                  footer={<EuiButton>Add data with Beats</EuiButton>}
                />
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiCard
                  title="Endpoint"
                  description="Protect your hosts with threat prevention, detection, and deep security data visibility."
                  footer={<EuiButton>Add Elastic Endpoint Security</EuiButton>}
                />
              </EuiFlexItem>
            </EuiFlexGroup>

            <EuiSpacer size="xxl" />

            <EuiHorizontalRule />

            <EuiText textAlign="center">
              <h2>Do more with Elastic</h2>
            </EuiText>

            <EuiSpacer />

            <SolutionCards current="Security" />
          </EuiPageContentBody>
        </EuiPageContent>
      </EuiPageBody>
    </EuiPage>
  </Layout>
);
