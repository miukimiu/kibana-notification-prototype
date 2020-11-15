import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';

import {
  EuiPage,
  EuiBreadcrumb,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiTab,
  EuiTabs,
} from '@elastic/eui';
// @ts-ignore
import tsvb_img from '../images/TSVB.png';
import { EuiSuperDatePicker } from '../components/eui/super_date_picker';

const breadcrumbs: EuiBreadcrumb[] = [
  {
    text: 'Visualize',
  },
  {
    text: 'TSVB',
  },
];
export default () => (
  <Layout chrome={{ breadcrumbs }}>
    <Helmet>
      <title>TSVB | Kibana 8 Prototype</title>
    </Helmet>
    <EuiPage>
      <EuiPageBody>
        <EuiPageHeader>
          <EuiPageHeaderSection>
            <EuiTabs display="condensed">
              <EuiTab>Time series</EuiTab>
              <EuiTab>Metric</EuiTab>
              <EuiTab>Top N</EuiTab>
              <EuiTab isSelected>Gauge</EuiTab>
              <EuiTab>Markdown</EuiTab>
              <EuiTab>Table</EuiTab>
            </EuiTabs>
          </EuiPageHeaderSection>
          <EuiPageHeaderSection>
            <EuiSuperDatePicker />
          </EuiPageHeaderSection>
        </EuiPageHeader>
        <EuiPageContent>
          <EuiPageContentBody>
            <img
              className="pageScreenshot pageScreenshot--responsive"
              alt="TSVB Gauge chart"
              width={1400}
              src={tsvb_img}
            />
          </EuiPageContentBody>
        </EuiPageContent>
      </EuiPageBody>
    </EuiPage>
  </Layout>
);
