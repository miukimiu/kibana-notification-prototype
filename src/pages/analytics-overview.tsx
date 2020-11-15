import React from 'react';
import Helmet from 'react-helmet';
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
} from '@elastic/eui';
import Layout from '../components/layout';
// @ts-ignore
import analytics_overview_img from '../images/analytics_overview.png';

const breadcrumbs: EuiBreadcrumb[] = [
  {
    text: 'Analytics',
  },
];

export default () => (
  <Layout chrome={{ breadcrumbs }}>
    <Helmet>
      <title>Overview | Kibana 8 Prototype</title>
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
            <img
              className="pageScreenshot pageScreenshot--responsive"
              alt="Analytics overview"
              width={1212}
              src={analytics_overview_img}
            />
          </EuiPageContentBody>
        </EuiPageContent>
      </EuiPageBody>
    </EuiPage>
  </Layout>
);
