import React, { ReactNode } from 'react';
import Helmet from 'react-helmet';
import { navigate } from 'gatsby';

import {
  EuiBreadcrumb,
  EuiHeaderLinks,
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiTitle,
  EuiHeaderLink,
  EuiButton,
} from '@elastic/eui';
import Layout from '../components/layout';
// @ts-ignore
import home_img from '../images/home.png';

const breadcrumbs: EuiBreadcrumb[] = [
  {
    text: 'Home',
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
      <title>Kibana 8 Prototype</title>
    </Helmet>
    <EuiPage>
      <EuiPageBody>
        <EuiPageHeader
          className="euiPageHeader--restrictWidth"
          style={{ padding: 32 }}>
          <EuiPageHeaderSection>
            <EuiTitle size="l">
              <h1>Welcome to the Elastic stack!</h1>
            </EuiTitle>
          </EuiPageHeaderSection>
        </EuiPageHeader>
        <EuiPageContent className="euiPageContent--restrictWidth">
          <EuiPageContentBody>
            <img
              className="pageScreenshot pageScreenshot--responsive"
              alt="Elastic home page"
              width={1212}
              src={home_img}
            />
          </EuiPageContentBody>
        </EuiPageContent>
      </EuiPageBody>
    </EuiPage>
  </Layout>
);
