import React, { ReactNode } from 'react';
import { navigate } from 'gatsby';

import {
  EuiBreadcrumb,
  EuiCallOut,
  EuiLink,
  EuiPageContent,
  EuiPageContentBody,
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
} from '@elastic/eui';
import { SolutionCards } from '../../components/kibana/solutions';
// @ts-ignore
// @ts-ignore
import dashboardImg from '../../images/analytics-card-dashboard.png';
// @ts-ignore
import discoverImg from '../../images/analytics-card-discover.png';
// @ts-ignore
import canvasImg from '../../images/analytics-card-Canvas.svg';
// @ts-ignore
import graphImg from '../../images/analytics-card-Graph.svg';
// @ts-ignore
import machineImg from '../../images/analytics-card-Machine Learning.svg';
// @ts-ignore
import mapsImg from '../../images/analytics-card-Maps.svg';
import { KibanaPage } from '../../components/kibana/page/page';

const PAGE_TITLE = 'Analytics';

const breadcrumbs: EuiBreadcrumb[] = [
  {
    text: PAGE_TITLE,
  },
];

const headerLinks: ReactNode = (
  <EuiHeaderLinks>
    <EuiHeaderLink href="#">App directory</EuiHeaderLink>

    <EuiHeaderLink href="#" onClick={() => navigate('dev-tools-console')}>
      Dev tools
    </EuiHeaderLink>

    <EuiHeaderLink href="#" onClick={() => navigate('management/stack')}>
      Manage stack
    </EuiHeaderLink>

    <EuiButton minWidth={0} size="s" color="secondary">
      Add data
    </EuiButton>
  </EuiHeaderLinks>
);

export default () => (
  <KibanaPage
    pageTitle={`${PAGE_TITLE} Overview`}
    breadcrumbs={breadcrumbs}
    headerLinks={headerLinks}
    pageHeader={{
      restrictWidth: true,
      pageTitle: PAGE_TITLE,
      iconType: 'logoKibana',
      actionButtons: [
        <EuiCallOut size="s" title="New in 7.10!">
          <p>
            Congratulations on upgrading! Want to see all the cool new things?{' '}
            <EuiLink>Take a tour</EuiLink>! Or read the{' '}
            <EuiLink>blog post</EuiLink> for details.
          </p>
        </EuiCallOut>,
      ],
    }}>
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
                  To get the most out of every aspect of your data. Search and
                  explore your data. Plot your geographic information. Craft
                  pixel-perfect reports. Detect anomalous events. Reveal
                  patterns and relationships.
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
                    src={dashboardImg}
                  />
                }
                title="Dashboard"
                description="Visualize all aspects of your data."
                onClick={() => {
                  navigate('analytics/dashboards');
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
                    src={discoverImg}
                  />
                }
                title="Discover"
                description="Visualize all aspects of your data."
                onClick={() => {
                  navigate('analytics/discover');
                }}
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
                  <img alt="" aria-hidden={true} src={mapsImg} />
                </div>
              }
              title="Maps"
              description="Plot your geographic information."
              onClick={() => {
                navigate('analytics/maps');
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
                  <img alt="" aria-hidden={true} src={canvasImg} />
                </div>
              }
              title="Canvas"
              description="Craft pixel-perfect reports."
              onClick={() => {
                navigate('analytics/canvas');
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
                  <img alt="" aria-hidden={true} src={machineImg} />
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
                  <img alt="" aria-hidden={true} src={graphImg} />
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
  </KibanaPage>
);
