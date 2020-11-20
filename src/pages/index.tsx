/* eslint-disable @typescript-eslint/no-empty-function */
import React, { ReactNode } from 'react';
import { navigate } from 'gatsby';

import {
  EuiBreadcrumb,
  EuiHeaderLinks,
  EuiPageContent,
  EuiPageContentBody,
  EuiHeaderLink,
  EuiButton,
  EuiSpacer,
  EuiPanel,
  EuiFlexGroup,
  EuiFlexItem,
  EuiText,
  EuiButtonEmpty,
  EuiCard,
  EuiIcon,
  EuiHorizontalRule,
  EuiTitle,
  EuiBetaBadge,
} from '@elastic/eui';
// @ts-ignore
import illustrationImg from '../images/Illustration_3.svg';
import { SolutionCards } from '../components/kibana/solutions';
import { KibanaPage } from '../components/kibana/page/page';

const PAGE_TITLE = 'Home';

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
    pageTitle={PAGE_TITLE}
    breadcrumbs={breadcrumbs}
    headerLinks={headerLinks}
    pageHeader={{
      restrictWidth: true,
      pageTitle: 'Welcome to the Elastic stack!',
    }}>
    <EuiPageContent className="euiPageContent--restrictWidth">
      <EuiPageContentBody>
        <SolutionCards />
        <EuiSpacer size="xl" />
        <EuiPanel hasShadow={false} paddingSize="l" color="subdued">
          <EuiFlexGroup alignItems="center">
            <EuiFlexItem grow={2}>
              <EuiText>
                <h3>Add your data</h3>
                <p>
                  To get the most out of every aspect of your data. Search and
                  explore your data. Plot your geographic information. Craft
                  pixel-perfect reports. Detect anomalous events. Reveal
                  patterns and relationships.
                </p>
              </EuiText>
              <EuiSpacer />
              <EuiFlexGroup responsive={false} wrap>
                <EuiFlexItem grow={false}>
                  <EuiButton fill href="/management/ingest">
                    Add an integration
                  </EuiButton>
                </EuiFlexItem>
                <EuiFlexItem grow={false}>
                  <EuiButton>Upload a file</EuiButton>
                </EuiFlexItem>
                <EuiFlexItem grow={false} style={{ position: 'relative' }}>
                  <EuiButton href="/management/agents">Fleet</EuiButton>
                  <EuiBetaBadge
                    label="Beta"
                    style={{
                      position: 'relative',
                      right: -24,
                      top: -48,
                      alignSelf: 'flex-end',
                      background: 'white',
                    }}
                  />
                </EuiFlexItem>
                <EuiFlexItem grow={false}>
                  <EuiButtonEmpty>Try sample data</EuiButtonEmpty>
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiFlexItem>
            <EuiFlexItem grow={1}>
              <img
                className="pageScreenshot pageScreenshot--fullWidth"
                alt=""
                aria-hidden={true}
                width={320}
                src={illustrationImg}
              />
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiPanel>
        <EuiSpacer size="xl" />
        <EuiHorizontalRule />
        <EuiSpacer size="xl" />
        <EuiTitle>
          <h2>Management</h2>
        </EuiTitle>
        <EuiSpacer size="xl" />
        <EuiFlexGroup>
          <EuiFlexItem>
            <EuiCard
              className="euiCard--primaryTitle"
              display="plain"
              layout="horizontal"
              titleSize="xs"
              icon={<EuiIcon type="securityApp" color="primary" size="l" />}
              title="Protect your data"
              description="Protect your data and easily manage who has access to what with users and roles."
              onClick={() => {}}
            />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiCard
              className="euiCard--primaryTitle"
              display="plain"
              layout="horizontal"
              titleSize="xs"
              icon={<EuiIcon type="monitoringApp" color="primary" size="l" />}
              title="Monitor this cluster"
              description="Track the real-time health and performance of your Elastic Stack."
              onClick={() => {
                navigate('observability/trace');
              }}
            />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiCard
              className="euiCard--primaryTitle"
              display="plain"
              layout="horizontal"
              titleSize="xs"
              icon={<EuiIcon type="database" color="primary" size="l" />}
              title="Store & recover backups"
              description="Use repositories to snapshot and restore Elasticsearch indices and clusters."
              onClick={() => {}}
            />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiCard
              className="euiCard--primaryTitle"
              display="plain"
              layout="horizontal"
              titleSize="xs"
              icon={<EuiIcon type="indexRollupApp" color="primary" size="l" />}
              title="Manage index lifecycles"
              description="Attach a policy to automate when and how to transition an index through its lifecycle."
              onClick={() => {}}
            />
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiPageContentBody>
    </EuiPageContent>
  </KibanaPage>
);
