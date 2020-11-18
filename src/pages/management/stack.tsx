import React from 'react';

import {
  EuiPageBody,
  EuiPageContent,
  EuiEmptyPrompt,
  EuiHorizontalRule,
} from '@elastic/eui';

import { ManagementPage } from './page';

export default () => (
  <>
    <ManagementPage pageTitle="Management Overview" sideNavItem="Overview">
      <EuiPageBody>
        <EuiPageContent verticalPosition="center" horizontalPosition="center">
          <EuiEmptyPrompt
            iconType="managementApp"
            // @ts-ignore
            iconColor={null}
            title={
              <h1>
                Welcome to <br />
                Stack Management 7.9.1
              </h1>
            }
            body={
              <>
                <p>
                  Manage your indices, index patterns, saved objects, Kibana
                  settings, and more.
                </p>
                <EuiHorizontalRule size="quarter" />
                <p>A complete list of apps is in the menu on the left.</p>
              </>
            }
          />
        </EuiPageContent>
      </EuiPageBody>
    </ManagementPage>
  </>
);
