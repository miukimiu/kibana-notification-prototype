import React from 'react';
import { Link, navigate } from 'gatsby';

import {
  EuiBreadcrumb,
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
import dashboard_img from '../../images/Dashboard - Listing.png';
import { KibanaPage } from '../../components/kibana/page/page';

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
  <KibanaPage pageTitle="Dashboards" breadcrumbs={breadcrumbs}>
    <EuiPageHeader className="euiPageHeader--restrictWidth">
      <EuiPageHeaderSection>
        <EuiTitle size="l">
          <h1>Dashboards</h1>
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
        <Link to="/analytics/dashboards/logs-web-traffic">
          <img
            className="pageScreenshot pageScreenshot--responsive"
            alt="Dashboard listing page"
            width={1212}
            src={dashboard_img}
          />
        </Link>
      </EuiPageContentBody>
    </EuiPageContent>
  </KibanaPage>
);
