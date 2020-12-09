import React, {
  createContext,
  FunctionComponent,
  useState,
  useEffect,
} from 'react';

import {
  notificationEventsData,
  notificationSuggestionsData,
  filtersData,
} from '../components/kibana/notification/notification_data';

type NotificationContext = {
  showNotification: boolean;
  isFlyoutVisible: boolean;
  notifications: Array<any>;
  suggestions: Array<any>;
  hasNewEvents: boolean;
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
};

export const NotificationContext = createContext<NotificationContext>({});

export const NotificationProvider: FunctionComponent = ({ children }) => {
  const [showNotification, setShowNotification] = useState(false);
  const [isFlyoutVisible, setIsFlyoutVisible] = useState(false);
  const [notifications, setNotifications] = useState(notificationEventsData);
  const [suggestions, setSuggestions] = useState(notificationSuggestionsData);
  const [hasNewEvents, setHasNewEvents] = useState(false);

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

  useEffect(() => {
    setTimeout(() => {
      setHasNewEvents(true);
    }, 30000);
  });

  const closeFlyout = () => {
    setIsFlyoutVisible(false);
  };

  const toggleFlyout = () => {
    setIsFlyoutVisible(!isFlyoutVisible);
    setShowNotification(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setShowNotification(true);

      // after 6 seconds we remove the class
      const timer = setTimeout(() => setShowNotification(false), 6000);
      return () => clearTimeout(timer);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <NotificationContext.Provider
      value={{
        showNotification,
        isFlyoutVisible,
        notifications,
        suggestions,
        hasNewEvents,
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
      }}>
      {children}
    </NotificationContext.Provider>
  );
};
