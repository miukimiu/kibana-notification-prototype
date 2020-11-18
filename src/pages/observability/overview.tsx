/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { navigate } from 'gatsby';
import {
  EuiButton,
  EuiButtonEmpty,
  EuiCard,
  EuiFlexGroup,
  EuiFlexItem,
  EuiHorizontalRule,
  EuiIcon,
  EuiPageContent,
  EuiPageContentBody,
  EuiPanel,
  EuiSpacer,
  EuiText,
} from '@elastic/eui';
import { SolutionCards } from '../../components/kibana/solutions';
// @ts-ignore
import illustration_1 from '../../images/Illustration_1.png';
import { ObservabilityPage } from './page';

export default () => (
  <ObservabilityPage pageTitle="Observability Overview" navItem="Overview">
    <EuiPageContent className="euiPageContent--restrictWidth">
      <EuiPageContentBody>
        <EuiPanel color="primary" paddingSize="l" hasShadow={false}>
          <EuiFlexGroup alignItems="center">
            <EuiFlexItem>
              <EuiText>
                <h2>Unified visibility across your entire ecosystem</h2>
                <p>
                  Monitor, analyze, and react to events happening anywhere in
                  your environment by bringing logs, metrics, and traces
                  together at scale in a single stack.
                </p>
              </EuiText>
              <EuiSpacer />
              <div>
                <EuiButton fill iconType="arrowRight" iconSide="right">
                  Get started
                </EuiButton>
                &emsp;
                <EuiButton>Manage ingest</EuiButton>
              </div>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <img
                className="pageScreenshot"
                alt=""
                aria-hidden={true}
                width={360}
                src={illustration_1}
              />
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiPanel>

        <EuiSpacer size="xl" />
        <EuiSpacer size="xl" />

        <EuiFlexGroup>
          <EuiFlexItem>
            <EuiCard
              className="euiCard--primaryTitle"
              display="plain"
              layout="horizontal"
              titleSize="xs"
              icon={<EuiIcon type="logsApp" color="primary" size="l" />}
              title="Logs"
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
              icon={<EuiIcon type="apmApp" color="primary" size="l" />}
              title="APM"
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
              icon={<EuiIcon type="metricsApp" color="primary" size="l" />}
              title="Metrics"
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
              icon={<EuiIcon type="uptimeApp" color="primary" size="l" />}
              title="Uptime"
              description="Attach a policy to automate when and how to transition an index through its lifecycle."
              onClick={() => {}}
            />
          </EuiFlexItem>
        </EuiFlexGroup>

        <EuiSpacer size="xxl" />
        <EuiSpacer size="xxl" />

        <EuiFlexGroup justifyContent="center">
          <EuiFlexItem style={{ maxWidth: 600 }}>
            <EuiCard
              title="Have you seen our new Ingest Manager"
              description="The Elastic Agent provides a simple, unified way to add monitoring for logs, metrics, and other types of data to your hosts. You no longer need to install multiple Beats and other agents, making it easier and faster to deploy configurations across your infrastructure"
              onClick={() => {
                navigate('management/fleet');
              }}
              betaBadgeLabel="Beta"
              footer={<EuiButtonEmpty>Try Ingest Manager Beta</EuiButtonEmpty>}
            />
          </EuiFlexItem>
        </EuiFlexGroup>

        <EuiSpacer size="xl" />

        <EuiHorizontalRule />

        <EuiText textAlign="center">
          <h2>Do more with Elastic</h2>
        </EuiText>

        <EuiSpacer />

        <SolutionCards current="Observability" />
      </EuiPageContentBody>
    </EuiPageContent>
  </ObservabilityPage>
);
