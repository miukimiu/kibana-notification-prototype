import React, { useState, useRef, FunctionComponent } from 'react';

import {
  EuiBasicTable,
  EuiLink,
  EuiHealth,
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
  EuiSpacer,
} from '@elastic/eui';

// @ts-ignore
import { formatDate } from '@elastic/eui/es/services/format';
// @ts-ignore
import { createDataStore } from './data-store';

const store = createDataStore();

export const KibanaNotificationCenterTable: FunctionComponent = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [sortField, setSortField] = useState('message');
  const [sortDirection, setSortDirection] = useState('asc');
  const [selectedItems, setSelectedItems] = useState([]);
  const [customHeader, setCustomHeader] = useState(true);

  const onTableChange = ({ page = {}, sort = {} }) => {
    const { index: pageIndex, size: pageSize } = page;

    const { field: sortField, direction: sortDirection } = sort;

    setPageIndex(pageIndex);
    setPageSize(pageSize);
    setSortField(sortField);
    setSortDirection(sortDirection);
  };

  const onSelectionChange = (selectedItems) => {
    setSelectedItems(selectedItems);
  };

  const toggleHeader = () => {
    setCustomHeader(!customHeader);
  };

  const toggleResponsive = () => {
    setIsResponsive(!isResponsive);
  };

  const { pageOfItems, totalItemCount } = store.findUsers(
    pageIndex,
    pageSize,
    sortField,
    sortDirection
  );

  const actions = [
    {
      name: 'Open',
      description: 'View this report',
      icon: 'inspect',
      type: 'icon',
      isPrimary: true,
      onClick: () => {},
      'data-test-subj': 'action-open',
    },
    {
      name: 'Download',
      description: 'Download this report',
      icon: 'download',
      type: 'icon',
      isPrimary: true,
      onClick: () => {},
      'data-test-subj': 'action-download',
    },
    {
      name: 'Save',
      description: 'save this report',
      icon: 'save',
      onClick: () => {},
      'data-test-subj': 'action-save',
    },
  ];

  const columns = [
    {
      field: 'messages',
      name: 'Messages',
      truncateText: true,
      sortable: true,
    },
    {
      field: 'github',
      name: 'Github',
      render: (username) => (
        <EuiLink href={`https://github.com/${username}`} target="_blank">
          {username}
        </EuiLink>
      ),
    },
    {
      field: 'dateOfBirth',
      name: 'Date of Birth',
      dataType: 'date',
      render: (date) => formatDate(date, 'dobLong'),
      sortable: true,
    },
    {
      field: 'nationality',
      name: 'Nationality',
      render: (countryCode) => {
        const country = store.getCountry(countryCode);
        return `${country.flag} ${country.name}`;
      },
    },
    {
      field: 'readState',
      name: 'Read State',
      dataType: 'boolean',
      render: (readState) => {
        const color = readState ? 'subdued' : 'primary';
        const label = readState ? 'Read' : 'Unread';
        return <EuiHealth color={color}>{label}</EuiHealth>;
      },
      sortable: true,
    },
    {
      name: 'Actions',
      actions,
    },
  ];

  const pagination = {
    pageIndex: pageIndex,
    pageSize: pageSize,
    totalItemCount: totalItemCount,
    pageSizeOptions: [3, 5, 8],
  };

  const sorting = {
    sort: {
      field: sortField,
      direction: sortDirection,
    },
  };

  const selection = {
    selectable: (user) => user.readState,
    selectableMessage: (selectable) =>
      !selectable ? 'User is currently offline' : undefined,
    onSelectionChange: onSelectionChange,
  };

  return (
    <EuiBasicTable
      items={pageOfItems}
      itemId="id"
      columns={columns}
      pagination={pagination}
      sorting={sorting}
      selection={selection}
      isSelectable={true}
      hasActions={true}
      responsive={true}
      onChange={onTableChange}
    />
  );
};
