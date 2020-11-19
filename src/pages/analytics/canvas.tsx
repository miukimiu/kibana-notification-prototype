import React from 'react';
import {
  EuiPageContent,
  EuiPageContentBody,
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
  EuiFieldSearch,
  EuiFilterButton,
  EuiFilterGroup,
  EuiSpacer,
} from '@elastic/eui';
// @ts-ignore
import canvas_img from '../../images/Canvas - Listing.png';
import { KibanaPage } from '../../components/kibana/page/page';
import {
  KibanaPageHeaderPrimaryAddButton,
  KibanaPageHeaderTabs,
} from '../../components/kibana/page/page_header';

const PAGE_TITLE = 'Canvas';

const tabs: KibanaPageHeaderTabs['tabs'] = [
  {
    name: 'Workpads',
    isSelected: true,
  },
  {
    name: 'Templates',
  },
];

export default () => (
  <KibanaPage
    pageTitle={PAGE_TITLE}
    breadcrumbs={[{ text: PAGE_TITLE }]}
    pageHeader={{
      restrictWidth: true,
      tabs: tabs,
      actionButtons: [
        <KibanaPageHeaderPrimaryAddButton>
          Add workpad
        </KibanaPageHeaderPrimaryAddButton>,
        <EuiButton iconType="importAction">Import workpad</EuiButton>,
      ],
    }}>
    <EuiPageContent className="euiPageContent--restrictWidth">
      <EuiPageContentBody>
        <EuiFlexGroup>
          <EuiFlexItem grow={3}>
            <EuiFieldSearch
              fullWidth
              placeholder="Search for by workpad name..."
            />
          </EuiFlexItem>
          <EuiFlexItem grow={1}>
            <EuiFilterGroup>
              <EuiFilterButton iconType="arrowDown" numFilters={5}>
                Tags
              </EuiFilterButton>
            </EuiFilterGroup>
          </EuiFlexItem>
        </EuiFlexGroup>
        <EuiSpacer />
        <img
          className="pageScreenshot pageScreenshot--responsive"
          alt="Canvas listing page"
          width={1212}
          src={canvas_img}
        />
      </EuiPageContentBody>
    </EuiPageContent>
  </KibanaPage>
);
