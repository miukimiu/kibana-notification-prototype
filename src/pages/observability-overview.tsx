import React, { ReactNode } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import {
  EuiBreadcrumb,
  EuiButton,
  EuiHeaderLinks,
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageSideBar,
} from '@elastic/eui';
import Layout from '../components/layout';
import { ObservabilityNav } from '../components/kibana/chrome/nav';
// @ts-ignore
import observability_overview_img from '../images/Observability - overview.png';

const breadcrumbs: EuiBreadcrumb[] = [
  {
    text: 'Observability',
  },
];

const headerLinks: ReactNode = (
  <EuiHeaderLinks>
    <EuiButton iconType="plusInCircle" minWidth={0} size="s">
      Add data
    </EuiButton>
  </EuiHeaderLinks>
);

export default () => (
  <Layout chrome={{ breadcrumbs, headerLinks }}>
    <Helmet>
      <title>Observability Overview | Kibana 8 Prototype</title>
    </Helmet>
    <EuiPage>
      <EuiPageSideBar>
        <ObservabilityNav />
      </EuiPageSideBar>
      <EuiPageBody>
        <EuiPageContent className="euiPageContent--restrictWidth">
          <EuiPageContentBody>
            <Link to="/observability-trace">
              <img
                className="pageScreenshot pageScreenshot--responsive"
                alt="Observability overview"
                width={1212}
                src={observability_overview_img}
              />
            </Link>
          </EuiPageContentBody>
        </EuiPageContent>
      </EuiPageBody>
    </EuiPage>
  </Layout>
);
