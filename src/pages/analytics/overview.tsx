import React, { ReactNode } from 'react';
import Helmet from 'react-helmet';
import { navigate } from 'gatsby';

import {
  EuiBreadcrumb,
  EuiCallOut,
  EuiIcon,
  EuiLink,
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiTitle,
  EuiHeaderLinks,
  EuiHeaderLink,
  EuiButton,
  EuiHorizontalRule,
  EuiText,
  EuiSpacer,
  EuiPanel,
  EuiFlexGroup,
  EuiFlexItem,
  EuiCard,
  EuiFlexGrid,
} from '@elastic/eui';
import Layout from '../../components/layout';
import { SolutionCards } from '../../components/kibana/solutions';
// @ts-ignore
import analytics_overview_img from '../../images/analytics_overview.png';
// @ts-ignore
import dashboard_img from '../../images/analytics-card-dashboard.png';
// @ts-ignore
import discover_img from '../../images/analytics-card-discover.png';
// @ts-ignore
import canvas_img from '../../images/analytics-card-Canvas.svg';
// @ts-ignore
import graph_img from '../../images/analytics-card-Graph.svg';
// @ts-ignore
import machine_img from '../../images/analytics-card-Machine Learning.svg';
// @ts-ignore
import maps_img from '../../images/analytics-card-Maps.svg';

const breadcrumbs: EuiBreadcrumb[] = [
  {
    text: 'Analytics',
  },
];

const headerLinks: ReactNode = (
  <EuiHeaderLinks>
    <EuiHeaderLink href="#">App directory</EuiHeaderLink>

    <EuiHeaderLink href="#" onClick={() => navigate('dev-tools-console')}>
      Dev tools
    </EuiHeaderLink>

    <EuiHeaderLink href="#" onClick={() => navigate('stack-management')}>
      Manage stack
    </EuiHeaderLink>

    <EuiButton minWidth={0} size="s" color="secondary">
      Add data
    </EuiButton>
  </EuiHeaderLinks>
);

export default () => (
  <Layout chrome={{ breadcrumbs, headerLinks }}>
    <Helmet>
      <title>Analytics | Kibana 8 Prototype</title>
    </Helmet>
    <EuiPage>
      <EuiPageBody>
        <EuiPageHeader
          className="euiPageHeader--restrictWidth"
          style={{ padding: 32 }}>
          <EuiPageHeaderSection>
            <EuiTitle size="l">
              <h1>
                <EuiIcon
                  type="logoKibana"
                  size="xl"
                  style={{ verticalAlign: 'baseline' }}
                />{' '}
                Analytics
              </h1>
            </EuiTitle>
          </EuiPageHeaderSection>
          <EuiPageHeaderSection>
            <EuiCallOut size="s" title="New in 7.10!">
              <p>
                Congratulations on upgrading! Want to see all the cool new
                things? <EuiLink>Take a tour</EuiLink>! Or read the{' '}
                <EuiLink>blog post</EuiLink> for details.
              </p>
            </EuiCallOut>
          </EuiPageHeaderSection>
        </EuiPageHeader>
        <EuiPageContent className="euiPageContent--restrictWidth">
          <EuiPageContentBody>
            <EuiPanel
              hasShadow={false}
              color="primary"
              paddingSize="l"
              style={{ marginBottom: 120 }}>
              <EuiFlexGroup>
                <EuiFlexItem>
                  <EuiTitle size="m">
                    <h2>Visualize & analyze</h2>
                  </EuiTitle>
                  <EuiSpacer size="s" />
                  <EuiText>
                    <p>
                      To get the most out of every aspect of your data. Search
                      and explore your data. Plot your geographic information.
                      Craft pixel-perfect reports. Detect anomalous events.
                      Reveal patterns and relationships.
                    </p>
                  </EuiText>
                </EuiFlexItem>
                <EuiFlexItem grow={false}>
                  <EuiCard
                    // @ts-ignore
                    style={{
                      width: 320,
                      background: 'white',
                      marginBottom: -120,
                    }}
                    image={
                      <img
                        alt=""
                        aria-hidden={true}
                        height={170}
                        src={dashboard_img}
                      />
                    }
                    title="Dashboard"
                    description="Visualize all aspects of your data."
                    onClick={() => {
                      navigate('dashboards');
                    }}
                  />
                </EuiFlexItem>
                <EuiFlexItem grow={false}>
                  <EuiCard
                    // @ts-ignore
                    style={{
                      width: 320,
                      background: 'white',
                      marginBottom: -120,
                    }}
                    image={
                      <img
                        alt=""
                        aria-hidden={true}
                        height={170}
                        src={discover_img}
                      />
                    }
                    title="Discover"
                    description="Visualize all aspects of your data."
                    onClick={() => {}}
                  />
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiPanel>

            <EuiSpacer size="xl" />

            <EuiFlexGroup>
              <EuiFlexItem grow={false}>
                <EuiCard
                  display="plain"
                  // @ts-ignore
                  style={{
                    border: '1px solid #D3DAE6',
                  }}
                  image={
                    <div>
                      <img alt="" aria-hidden={true} src={maps_img} />
                    </div>
                  }
                  title="Maps"
                  description="Plot your geographic information."
                  onClick={() => {
                    navigate('maps');
                  }}
                />
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiCard
                  display="plain"
                  // @ts-ignore
                  style={{
                    border: '1px solid #D3DAE6',
                  }}
                  image={
                    <div>
                      <img alt="" aria-hidden={true} src={canvas_img} />
                    </div>
                  }
                  title="Canvas"
                  description="Craft pixel-perfect reports."
                  onClick={() => {
                    navigate('canvas');
                  }}
                />
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiCard
                  display="plain"
                  // @ts-ignore
                  style={{
                    border: '1px solid #D3DAE6',
                  }}
                  image={
                    <div>
                      <img alt="" aria-hidden={true} src={machine_img} />
                    </div>
                  }
                  title="Machine Learning"
                  description="Compute anomalous events."
                  isDisabled
                />
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiCard
                  display="plain"
                  // @ts-ignore
                  style={{
                    border: '1px solid #D3DAE6',
                  }}
                  image={
                    <div>
                      <img alt="" aria-hidden={true} src={graph_img} />
                    </div>
                  }
                  title="Graph"
                  description="Reveal patterns and relationships."
                  isDisabled
                />
              </EuiFlexItem>
            </EuiFlexGroup>

            <EuiSpacer size="xl" />

            <EuiHorizontalRule />

            <EuiText textAlign="center">
              <h2>Do more with Elastic</h2>
            </EuiText>

            <EuiSpacer />

            <SolutionCards current="Analytics" />
          </EuiPageContentBody>
        </EuiPageContent>
      </EuiPageBody>
    </EuiPage>
  </Layout>
);
