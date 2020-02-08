// label: string required Must be unique across items if key is not passed
// key?: string Must be unique across items
// checked?: 'on' | 'off' Leave off to indicate not selected, 'on' to indicate inclusion and 'off' to indicate exclusion
// disabled?: boolean
// isGroupLabel?: boolean Set to true to indicate object is just a grouping label, not a selectable item
// prepend?: React.ReactNode Node to add between the selection icon and the label
// append?: React.ReactNode Node to add to the far right of the item
// ref?: () => void

export const recents = [
  {
    title: 'Welcome dashboards',
    type: {
      title: 'Saved dashboard',
      iconType: 'dashboardApp',
    },
  },
  {
    title: '[Flights] Flight Count and Average Ticket Price',
    type: {
      title: 'Saved visualization',
      iconType: 'visualizeApp',
    },
  },
  {
    title: '[Flights] Global Flight Dashboard',
    type: {
      title: 'Saved dashboard',
      iconType: 'dashboardApp',
    },
  },
  {
    title: '[Logs] Web Traffic',
    type: {
      title: 'Saved dashboard',
      iconType: 'dashboardApp',
    },
  },
  {
    title: '[Azure Monitor] Alerts',
    type: {
      title: 'Saved dashboard',
      iconType: 'dashboardApp',
    },
  },
];

export const searchData = [
  {
    title: 'Dashboards',
    type: {
      title: 'Stack application',
      iconType: 'logoElasticsearch',
    },
  },
  {
    title: 'Sample flight dashboard',
    type: {
      title: 'Saved dashboard',
      iconType: 'dashboardApp',
    },
  },
  {
    title: 'Databoard analytics',
    type: {
      title: 'Saved discover',
      iconType: 'discoverApp',
    },
  },
  {
    title: 'Primary logs',
    type: {
      title: 'personal-databoard',
      iconType: 'logstashInput',
    },
  },
  {
    title: 'SIEM',
    type: {
      title: 'personal-databoard',
      iconType: 'logoSecurity',
    },
  },
];
