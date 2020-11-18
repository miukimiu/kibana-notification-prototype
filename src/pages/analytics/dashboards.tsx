import React from 'react';
import { Link, navigate } from 'gatsby';

import {
  EuiBreadcrumb,
  EuiPageContent,
  EuiPageContentBody,
  EuiSpacer,
  EuiFieldSearch,
  EuiButton,
} from '@elastic/eui';
// @ts-ignore
import dashboard_img from '../../images/Dashboard - Listing.png';
import { KibanaPage } from '../../components/kibana/page/page';
import { KibanaPageHeaderProps } from '../../components/kibana/page/page_header';

const PAGE_TITLE = 'Dashboards';

const breadcrumbs: EuiBreadcrumb[] = [
  {
    text: 'Analytics',
    href: '#',
    onClick: () => {
      navigate('analytics/overview');
    },
  },
  {
    text: PAGE_TITLE,
  },
];

const pageHeader: KibanaPageHeaderProps = {
  pageTitle: PAGE_TITLE,
  restrictWidth: true,
  primary: {
    children: 'Add dashboard',
    iconType: 'plusInCircle',
  },
};

export default () => (
  <KibanaPage
    pageTitle={PAGE_TITLE}
    breadcrumbs={breadcrumbs}
    pageHeader={pageHeader}>
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
