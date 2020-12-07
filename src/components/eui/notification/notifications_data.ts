export const notificationsData = [
  {
    id: 'notificationA',
    meta: {
      type: 'Alert',
      iconType: 'logoObservability',
    },
    name: {
      title: '[APM 500 Server errors] is now active',
      href: '#',
    },
    primaryAction: {
      href: 'http://www.elastic.co',
      label: 'View',
    },
    notifications: [
      'The request completed at 12:32:33 GMT+4',
      'The request completed at 12:32:33 GMT+4',
      'A background request started at 12:32:33 GMT+4',
    ],
    isRead: false,
  },
  {
    id: 'notificationB',
    meta: {
      type: 'Alert',
      healthStatus: { type: 'warning', title: 'Entering boundary' },
      iconType: 'logoMaps',
    },
    name: {
      title: '[Maps] Geo Alert',
      href: '#',
    },
    notifications: [
      'The request completed at 12:32:33 GMT+4',
      'The request completed at 12:32:33 GMT+4',
      'A background request started at 12:32:33 GMT+4',
    ],
    isRead: false,
  },
  {
    id: 'notificationC',
    meta: {
      type: 'Report',
      iconType: 'logoKibana',
    },
    name: {
      title: '[Error Monitoring Report] is generated',
      href: '#',
    },
    primaryAction: {
      href: 'http://www.elastic.co',
      iconType: 'download',
      label: 'Download',
    },
    notifications: ['The reported was generated at 17:12:16 GMT+4'],
    isRead: false,
  },
  {
    id: 'notificationD',
    meta: {
      type: 'Report',
      iconType: 'logoKibana',
    },
    name: {
      title: '2020 Global Marketing Analysis',
      href: '#',
    },
    primaryAction: {
      href: 'http://www.elastic.co',
      label: 'View',
    },
    notifications: ['The request completed at 10:23:45 GMT+4'],
    isRead: false,
  },
  {
    id: 'notificationE',
    meta: {
      type: 'Cloud',
      iconType: 'logoCloud',
    },
    name: {
      title: 'ILM migration complete',
      href: '#',
    },
    primaryAction: {
      href: 'http://www.elastic.co',
      label: 'View',
    },
    notifications: ['The request completed at 10:23:45 GMT+4'],
    isRead: false,
  },
  {
    id: 'notificationF',
    meta: {
      type: 'Cloud',
      iconType: 'logoCloud',
    },
    name: {
      title: 'Your deployment has a critical error',
      href: '#',
    },
    primaryAction: {
      href: 'http://www.elastic.co',
      label: 'View',
    },
    notifications: ['The request completed at 10:23:45 GMT+4'],
    isRead: false,
  },
];
