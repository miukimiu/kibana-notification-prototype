import React from 'react';
import Helmet from 'react-helmet';
import { Link, navigate } from 'gatsby';
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
    text: 'Dashboards',
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
              <h1>Dashboard</h1>
            </EuiTitle>
          </EuiPageHeaderSection>
          <EuiPageHeaderSection>
            <EuiButton fill iconType="plusInCircle">
              Add dashboard
            </EuiButton>
          </EuiPageHeaderSection>
        </EuiPageHeader>
        <EuiPageContent className="euiPageContent--restrictWidth">
          <EuiPageContentBody>
            <EuiFieldSearch
              fullWidth
              placeholder="Search for by dashboard name..."
            />
            <EuiSpacer />
            <Link to="/dashboard-logs-web-traffic">
              <img
                className="pageScreenshot pageScreenshot--responsive"
                alt="Dashboard listing page"
                width={1212}
                src={dashboard_img}
              />
            </Link>
          </EuiPageContentBody>
        </EuiPageContent>
      </EuiPageBody>
    </EuiPage>
  </Layout>
);
