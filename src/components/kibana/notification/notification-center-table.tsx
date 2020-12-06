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

  const columns = [
    {
      field: 'messages',
      name: 'Messages',
      truncateText: true,
    },
    {
      field: 'dateOfBirth',
      name: 'Date of Birth',
      dataType: 'date',
      render: (date) => formatDate(date, 'dobLong'),
      sortable: true,
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

  return (
    <EuiBasicTable
      items={pageOfItems}
      itemId="id"
      columns={columns}
      pagination={pagination}
      sorting={sorting}
      isSelectable={true}
      hasActions={true}
      responsive={true}
      onChange={onTableChange}
    />
  );
};
