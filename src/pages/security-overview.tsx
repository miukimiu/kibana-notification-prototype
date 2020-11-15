import React, { ReactNode } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
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
} from '@elastic/eui';
import Layout from '../components/layout';
import { SecurityNav } from '../components/kibana/chrome/nav';
// @ts-ignore
import security_overview_img from '../images/Security - overview.png';

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
            <Link to="/security-event">
              <img
                className="pageScreenshot pageScreenshot--responsive"
                alt="Security overview"
                width={1212}
                src={security_overview_img}
              />
            </Link>
          </EuiPageContentBody>
        </EuiPageContent>
      </EuiPageBody>
    </EuiPage>
  </Layout>
);
