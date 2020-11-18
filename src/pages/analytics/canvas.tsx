import React from 'react';
import {
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiButton,
  EuiTab,
  EuiTabs,
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

export default () => (
  <KibanaPage pageTitle="Canvas" breadcrumbs={[{ text: 'Canvas' }]}>
    <EuiPageBody>
      <EuiPageHeader className="euiPageHeader--restrictWidth">
        <EuiPageHeaderSection>
          <EuiTabs display="condensed">
            <EuiTab isSelected>Workpads</EuiTab>
            <EuiTab>Templates</EuiTab>
          </EuiTabs>
        </EuiPageHeaderSection>
        <EuiPageHeaderSection>
          <EuiButton iconType="importAction">Import workpad</EuiButton>
          &emsp;
          <EuiButton fill iconType="plusInCircle">
            Add workpad
          </EuiButton>
        </EuiPageHeaderSection>
      </EuiPageHeader>
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
    </EuiPageBody>
  </KibanaPage>
);
