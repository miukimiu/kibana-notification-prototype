import React, { ReactNode } from 'react';
import Helmet from 'react-helmet';
import { navigate } from 'gatsby';
import Layout from '../../components/layout';

import {
  EuiPage,
  EuiBreadcrumb,
  EuiPageBody,
  EuiPageHeader,
  EuiButton,
  EuiHeaderLink,
  EuiHeaderLinks,
  EuiPageSideBar,
  EuiPageContent,
  EuiFlexGroup,
  EuiFlexItem,
} from '@elastic/eui';
// @ts-ignore
import sidebar_img from '../../images/Discover - sidebar.svg';
// @ts-ignore
import table_img from '../../images/Discover - table.svg';

import { KibanaGlobals } from '../../components/kibana/chrome/globals';

const breadcrumbs: EuiBreadcrumb[] = [
  {
    text: 'Analytics',
    href: '#',
    onClick: () => {
      navigate('analytics/overview');
    },
  },
  {
    text: 'Discover',
  },
];

const headerLinks: ReactNode = (
  <EuiHeaderLinks>
    <EuiHeaderLink href="#">New</EuiHeaderLink>

    <EuiHeaderLink href="#">Open</EuiHeaderLink>

    <EuiHeaderLink>Share</EuiHeaderLink>

    <EuiHeaderLink>Inspect</EuiHeaderLink>

    <EuiButton
      iconType="save"
      style={{ minWidth: 80 }}
      size="s"
      color="secondary">
      Save
    </EuiButton>
  </EuiHeaderLinks>
);

export default () => (
  <Layout chrome={{ breadcrumbs, headerLinks }}>
    <Helmet>
      <title>[Logs] Web Traffic | Dashboards | Kibana 8 Prototype</title>
    </Helmet>
    <EuiPage>
      <EuiPageBody>
        <EuiPageHeader style={{ padding: 16 }}>
          <KibanaGlobals />
        </EuiPageHeader>
        <EuiFlexGroup gutterSize="none" responsive={false}>
          <EuiFlexItem grow={false}>
            <EuiPageSideBar style={{ backgroundColor: '#F5F7FA' }}>
              <img
                className="pageScreenshot"
                alt="Discover sidebar"
                width={288}
                src={sidebar_img}
              />
            </EuiPageSideBar>
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiPageContent>
              <img
                className="pageScreenshot pageScreenshot--fullWidth"
                alt="Discover table"
                src={table_img}
              />
            </EuiPageContent>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiPageBody>
    </EuiPage>
  </Layout>
);
