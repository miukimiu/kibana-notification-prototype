import { EuiSelectableOption } from '@elastic/eui';

export const notificationEventsData = [
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
      label: 'Download',
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

export const notificationSuggestionsData = [
  {
    id: 'a',
    title: 'Connect Nginx!',
    description:
      'We’ve noticed several of your agents detected Nginx on your hosts.',
    iconType: 'logoNginx',
    isDismissed: false,
    href: '#',
  },
  {
    id: 'b',
    title: 'Connect workplace sources',
    description:
      'Create a single place to search through documents and data across your entire organization.',
    iconType: 'logoWorkplaceSearch',
    isDismissed: false,
    href: '#',
  },
  {
    id: 'c',
    title: 'Explore Elastic Security',
    description:
      'With the data you’ve already ingested into Elastic, you could protect what looks like your entire network. ',
    iconType: 'logoSecurity',
    isDismissed: false,
    href: '#',
  },
];

export const filtersData: EuiSelectableOption[] = [
  {
    label: 'Alert',
    checked: 'on',
  },
  {
    label: 'Report',
    checked: 'on',
  },
  {
    label: 'Cloud',
    checked: 'on',
  },
];
