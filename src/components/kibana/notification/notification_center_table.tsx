import React, { useState, useContext, FunctionComponent } from 'react';

import { EuiBasicTable, EuiHealth } from '@elastic/eui';
import { Comparators } from '@elastic/eui/es/services/sort';
import { times } from '@elastic/eui/es/services/utils';

// @ts-ignore
import { formatDate } from '@elastic/eui/es/services/format';
// @ts-ignore

import { NotificationContext } from '../../../context/notification_context';

export const KibanaNotificationCenterTable: FunctionComponent = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [sortField, setSortField] = useState('message');
  const [sortDirection, setSortDirection] = useState('asc');

  const { notifications } = useContext(NotificationContext);

  const createMessages = () => {
    return times(6, (index) => {
      return {
        id: index,
        messages: notifications && notifications[index].name.title,

        dateCreated: dob,
        readState: index % 2 === 0,
      };
    });
  };

  const dob = new Date(2020, 1, 12);

  const createDataStore = () => {
    const messages = createMessages();

    return {
      messages,

      findMessages: (pageIndex, pageSize, sortField, sortDirection) => {
        let items;

        if (sortField) {
          items = messages
            .slice(0)
            .sort(
              Comparators.property(
                sortField,
                Comparators.default(sortDirection)
              )
            );
        } else {
          items = messages;
        }

        let pageOfItems;

        if (!pageIndex && !pageSize) {
          pageOfItems = items;
        } else {
          const startIndex = pageIndex * pageSize;
          pageOfItems = items.slice(
            startIndex,
            Math.min(startIndex + pageSize, items.length)
          );
        }

        return {
          pageOfItems,
          totalItemCount: items.length,
        };
      },
    };
  };

  const store = createDataStore();

  const onTableChange = ({ page = {}, sort = {} }) => {
    const { index: pageIndex, size: pageSize } = page;

    const { field: sortField, direction: sortDirection } = sort;

    setPageIndex(pageIndex);
    setPageSize(pageSize);
    setSortField(sortField);
    setSortDirection(sortDirection);
  };

  const { pageOfItems, totalItemCount } = store.findMessages(
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
      field: 'dateCreated',
      name: 'Date Created',
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
