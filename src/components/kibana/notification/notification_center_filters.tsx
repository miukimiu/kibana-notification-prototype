import React, { useContext } from 'react';
import {
  EuiFacetGroup,
  EuiFacetButton,
  EuiTitle,
  EuiSelectable,
} from '@elastic/eui';

import { NotificationContext } from '../../../context/notification_context';

export const KibanaNotificationCenterFilters = () => {
  const {
    onNotificationCenterFiltersChange,
    notificationCenterFilters,
  } = useContext(NotificationContext);

  console.log('notificationsCenterFilters', notificationCenterFilters);

  return (
    <div style={{ maxWidth: 200 }}>
      <EuiTitle size="xxs">
        <h4>Message Types</h4>
      </EuiTitle>

      <EuiSelectable
        aria-label="Searchable example"
        searchable
        searchProps={{
          'data-test-subj': 'selectableSearchHere',
        }}
        options={notificationCenterFilters}
        onChange={onNotificationCenterFiltersChange}>
        {(list, search) => (
          <>
            {search}
            {list}
          </>
        )}
      </EuiSelectable>
    </div>
  );
};
