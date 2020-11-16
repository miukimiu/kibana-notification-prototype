import React from 'react';
import Helmet from 'react-helmet';
import { navigate } from 'gatsby';
import Layout from '../components/layout';

import {
  EuiPage,
  EuiBreadcrumb,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiTitle,
  EuiButton,
  EuiSpacer,
  EuiFieldSearch,
} from '@elastic/eui';
// @ts-ignore
import dashboard_img from '../images/Dashboard - Listing.png';

const breadcrumbs: EuiBreadcrumb[] = [
  {
    text: 'Analytics',
    href: '#',
    onClick: () => {
      navigate('analytics/overview');
    },
  },
  {
    text: 'Maps',
  },
];

export default () => (
  <Layout chrome={{ breadcrumbs }}>
    <Helmet>
      <title>Dashboards | Kibana 8 Prototype</title>
    </Helmet>
    <EuiPage>
      <EuiPageBody>
        <EuiPageHeader className="euiPageHeader--restrictWidth">
          <EuiPageHeaderSection>
            <EuiTitle size="l">
              <h1>Maps</h1>
            </EuiTitle>
          </EuiPageHeaderSection>
          <EuiPageHeaderSection>
            <EuiButton fill iconType="plusInCircle">
              Add map
            </EuiButton>
          </EuiPageHeaderSection>
        </EuiPageHeader>
        <EuiPageContent className="euiPageContent--restrictWidth">
          <EuiPageContentBody>
            <EuiFieldSearch
              fullWidth
              placeholder="Search for a by map name..."
            />
            <EuiSpacer />

            <img
              className="pageScreenshot pageScreenshot--responsive"
              alt="Dashboard listing page"
              width={1212}
              src={dashboard_img}
            />
          </EuiPageContentBody>
        </EuiPageContent>
      </EuiPageBody>
    </EuiPage>
  </Layout>
);
