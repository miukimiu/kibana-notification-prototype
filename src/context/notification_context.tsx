import React, { createContext, FunctionComponent, useState } from 'react';

import {
  EuiSelectableOption,
  EuiToast,
  EuiFlexGroup,
  EuiFlexItem,
  EuiButton,
  EuiButtonEmpty,
} from '@elastic/eui';

import { navigate } from 'gatsby';

type NotificationContext = {
  isFlyoutVisible: boolean;
  notifications: Array<any>;
  suggestions: Array<any>;
  showNotification: boolean;
  onShowNotification: () => void;
  closeFlyout: () => void;
  toggleFlyout: () => void;
  onReadEvents: (id: string, isRead: boolean) => void;
  onViewSimilarMessages: (type: string) => void;
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
};

export const NotificationContext = createContext<NotificationContext>({});

export const NotificationProvider: FunctionComponent = ({ children }) => {
  const notificationEventsData = [
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
        onClick: () => {
          console.log('clicked');
          navigate('notification/center');
        },
        label: 'View and go',
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
  const [currentFilters, setCurrentFilters] = useState(filtersData);
  const [toastIsVisible, setToastIsVisible] = useState(true);
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
  };

  const onShowNotification = () => {
    setShowNotification(true);
  };

  const closeToast = () => {
    setToastIsVisible(false);
  };

  return (
    <NotificationContext.Provider
      value={{
        isFlyoutVisible,
        notifications,
        suggestions,
        showNotification,
        onShowNotification,
        closeFlyout,
        toggleFlyout,
        onReadEvents,
        onViewSimilarMessages,
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
      }}>
      {children}
    </NotificationContext.Provider>
  );
};