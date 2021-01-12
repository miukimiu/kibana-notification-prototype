import React, { createContext, FunctionComponent, useState } from 'react';

import { EuiSelectableOption } from '@elastic/eui';

import { navigate } from 'gatsby';

type NotificationContext = {
  isFlyoutVisible: boolean;
  notifications: Array<any>;
  suggestions: Array<any>;
  showNotification: boolean;
  onShowStandardNotification: () => void;
  closeFlyout: () => void;
  toggleFlyout: () => void;
  onReadEvents: (id: string, isRead: boolean) => void;
  onViewSimilarMessages: (type: string) => void;
  onDisableNotifications: (type: string) => void;
  onDismissSuggestion: (id: string) => void;
  onAddSuggestion: (id: string) => void;
  onMarkAllAsRead: () => void;
  onDismissAllSuggestions: () => void;
  onDisableAllSuggestions: () => void;
  onRefresh: () => void;
  onFiltersChange: (filters: EuiSelectableOption[]) => void;
  activeFilters: string[];
  currentFilters: EuiSelectableOption[];
  onNotificationCenterFiltersChange: (filters: EuiSelectableOption[]) => void;
  notificationCenterFilters: EuiSelectableOption[];
  toastIsVisible: boolean;
  closeToast: () => void;
  headerNotificationPopoverIsVisible: boolean;
  onCloseHeaderNotificationPopover: () => void;
  flyoutShowNewNotification: boolean;
  onAddNewNotification: () => void;
};

export const NotificationContext = createContext<NotificationContext>({});

export const NotificationProvider: FunctionComponent = ({ children }) => {
  const notificationEventsData = [
    {
      id: 'notificationA',
      meta: {
        type: 'Alert',
        iconType: 'logoObservability',
        time: '3 min ago',
      },
      name: {
        title: '[APM 500 Server errors] is now active',
        href: '#',
      },
      primaryAction: {
        onClick: () => {
          navigate('notification/center');
        },
        label: 'View and go',
      },
      notifications: [
        'The request completed at 12:32:33 GMT+4',
        'The request completed at 12:32:33 GMT+4',
        'A background request started at 12:32:33 GMT+4',
      ],
    },
    {
      id: 'notificationB',
      meta: {
        type: 'Alert',
        healthStatus: 'warning',
        iconType: 'logoMaps',
        time: '5 min ago',
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
    },
    {
      id: 'notificationC',
      meta: {
        type: 'Report',
        iconType: 'logoKibana',
        time: '7 min ago',
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
    },
    {
      id: 'notificationD',
      meta: {
        type: 'Report',
        iconType: 'logoKibana',
        time: '10 min ago',
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
    },
    {
      id: 'notificationE',
      meta: {
        type: 'Cloud',
        iconType: 'logoCloud',
        time: '22 min ago',
      },
      name: {
        title: 'ILM migration complete',
        href: '#',
      },
      notifications: ['The request completed at 10:23:45 GMT+4'],
    },
    {
      id: 'notificationF',
      meta: {
        type: 'Cloud',
        healthStatus: 'danger',
        iconType: 'logoCloud',
        time: '22 min ago',
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
    },
  ];

  const notificationSuggestionsData = [
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

  const filtersData: EuiSelectableOption[] = [
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

  const [isFlyoutVisible, setIsFlyoutVisible] = useState(false);
  const [notifications, setNotifications] = useState(notificationEventsData);
  const [suggestions, setSuggestions] = useState(notificationSuggestionsData);
  const [showNotification, setShowNotification] = useState(false);
  const [flyoutShowNewNotification, setFlyoutShowNewNotification] = useState(
    false
  );
  const [currentFilters, setCurrentFilters] = useState(filtersData);
  const [toastIsVisible, setToastIsVisible] = useState(true);
  const [
    headerNotificationPopoverIsVisible,
    setHeaderNotificationPopoverIsVisible,
  ] = useState(false);
  const [notificationCenterFilters, setNotificationCenterFilters] = useState(
    filtersData
  );

  const activeFilters = currentFilters
    .filter((item) => item.checked === 'on')
    .map((item) => item.label);

  const onFiltersChange = (filters: EuiSelectableOption[]) => {
    setCurrentFilters(filters);
  };

  const onNotificationCenterFiltersChange = (
    filters: EuiSelectableOption[]
  ) => {
    setNotificationCenterFilters(filters);
  };

  const onReadEvents = (id: string, isRead: boolean) => {
    const nextState = notifications.map((item) =>
      item.id === id ? { ...item, isRead: isRead } : item
    );

    setNotifications(nextState);
  };

  const onViewSimilarMessages = (type: string) => {
    const nextState = notifications.filter((item) => item.meta.type === type);

    setTimeout(() => {
      setNotifications(nextState);
    }, 200);
  };

  const onDisableNotifications = (type: string) => {
    const nextState = notifications.filter((item) => item.meta.type !== type);

    setTimeout(() => {
      setNotifications(nextState);
    }, 200);
  };

  const onDismissSuggestion = (id: string) => {
    const nextState = suggestions.filter((item) => item.id !== id);

    setSuggestions(nextState);
  };

  const onAddSuggestion = (id: string) => {
    const nextState = suggestions.filter((item) => item.id !== id);

    setSuggestions(nextState);
  };

  const onMarkAllAsRead = () => {
    const nextState = notifications.map((item) => {
      return { ...item, isRead: true };
    });

    setNotifications(nextState);
  };

  const onDismissAllSuggestions = () => {
    setSuggestions([]);
  };

  const onDisableAllSuggestions = () => {
    setSuggestions([]);
  };

  const onRefresh = () => {
    setNotifications(notificationEventsData);
    setSuggestions(notificationSuggestionsData);
    setCurrentFilters(filtersData);
  };

  const closeFlyout = () => {
    setIsFlyoutVisible(false);
    setShowNotification(false);
  };

  const toggleFlyout = () => {
    setIsFlyoutVisible(!isFlyoutVisible);
    setShowNotification(false);
    setHeaderNotificationPopoverIsVisible(false);
  };

  const onShowStandardNotification = () => {
    setShowNotification(true);

    if (isFlyoutVisible) {
      setHeaderNotificationPopoverIsVisible(true);
      setFlyoutShowNewNotification(true);
    }
  };

  const closeToast = () => {
    setToastIsVisible(false);
  };

  const onAddNewNotification = () => {
    const newNotification = {
      id: 'notificationX',
      meta: {
        type: 'Cloud',
        iconType: 'logoCloud',
        healthStatus: 'danger',
        time: '1 min ago',
      },
      name: {
        title: '[APM 500 Server errors] is now active',
        href: '#',
      },
      primaryAction: {
        onClick: () => {
          console.log('ops');
        },
        label: 'Go to notification',
      },
      notifications: ['The request completed at 12:32:33 GMT+4'],
    };

    setFlyoutShowNewNotification(!flyoutShowNewNotification);
    setNotifications([newNotification, ...notifications]);
  };

  return (
    <NotificationContext.Provider
      value={{
        isFlyoutVisible,
        notifications,
        suggestions,
        showNotification,
        onShowStandardNotification,
        closeFlyout,
        toggleFlyout,
        onReadEvents,
        onViewSimilarMessages,
        onDisableNotifications,
        onDismissSuggestion,
        onAddSuggestion,
        onMarkAllAsRead,
        onDismissAllSuggestions,
        onDisableAllSuggestions,
        onRefresh,
        activeFilters,
        onFiltersChange,
        currentFilters,
        onNotificationCenterFiltersChange,
        notificationCenterFilters,
        toastIsVisible,
        closeToast,
        headerNotificationPopoverIsVisible,
        flyoutShowNewNotification,
        onAddNewNotification,
      }}>
      {children}
    </NotificationContext.Provider>
  );
};
