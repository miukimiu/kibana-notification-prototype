import React from 'react';
import { navigate } from 'gatsby';

import {
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
import tsvb_img from '../../images/TSVB.png';
import { EuiSuperDatePicker } from '../../components/eui/super_date_picker';
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
    text: 'Visualize',
    href: '#',
  },
  {
    text: 'TSVB',
  },
];

export default () => (
  <KibanaPage pageTitle="TSVB" breadcrumbs={breadcrumbs}>
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
  </KibanaPage>
);
