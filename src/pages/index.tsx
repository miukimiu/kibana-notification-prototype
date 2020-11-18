import React, { ReactNode } from 'react';
import { navigate } from 'gatsby';

import {
  EuiBreadcrumb,
  EuiHeaderLinks,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiTitle,
  EuiHeaderLink,
  EuiButton,
  EuiSpacer,
} from '@elastic/eui';
// @ts-ignore
import home_img from '../images/home.png';
import { SolutionCards } from '../components/kibana/solutions';
import { KibanaPage } from '../components/kibana/page/page';

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
    pageTitle="Home"
    breadcrumbs={breadcrumbs}
    headerLinks={headerLinks}>
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
        <SolutionCards />
        <EuiSpacer size="xl" />
        <img
          className="pageScreenshot pageScreenshot--fullWidth"
          alt="Elastic home page"
          width={1175}
          src={home_img}
        />
      </EuiPageContentBody>
    </EuiPageContent>
  </KibanaPage>
);
