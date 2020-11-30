import React, { useState } from 'react';
import { navigate } from 'gatsby';

import {
  EuiBreadcrumb,
  EuiPageContent,
  EuiPageContentBody,
  EuiSpacer,
  EuiFieldSearch,
  EuiHealth,
  EuiFlexGroup,
  EuiFlexItem,
} from '@elastic/eui';
import { KibanaPage } from '../../components/kibana/page/page';
import { KibanaNotificationCenterTable } from '../../components/kibana/notification/notification-center-table';
import { KibanaNotificationCenterFilters } from '../../components/kibana/notification/notification-center-filters';

const PAGE_TITLE = 'Notifications';

const breadcrumbs: EuiBreadcrumb[] = [
  {
    text: 'Notification',
    onClick: () => {
      navigate('notification/center');
    },
  },
  {
    text: PAGE_TITLE,
  },
];

export default () => {
  return (
    <KibanaPage
      pageTitle={PAGE_TITLE}
      breadcrumbs={breadcrumbs}
      pageHeader={{
        restrictWidth: false,
        pageTitle: PAGE_TITLE,
        actionButtons: [
          <EuiHealth color="primary">You have new notifications</EuiHealth>,
        ],
      }}>
      <EuiPageContent className="euiPageContent">
        <EuiPageContentBody>
          <EuiFieldSearch fullWidth placeholder="Search for a by map name..." />
          <EuiSpacer />
          <EuiFlexGroup>
            <EuiFlexItem grow={false}>
              <KibanaNotificationCenterFilters />
            </EuiFlexItem>
            <EuiFlexItem>
              <KibanaNotificationCenterTable />
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiPageContentBody>
      </EuiPageContent>
    </KibanaPage>
  );
};
