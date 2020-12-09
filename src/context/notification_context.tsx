import React, {
  createContext,
  FunctionComponent,
  useState,
  useEffect,
} from 'react';

export const themes = {};

type NotificationContext = {
  showNotification: boolean;
  closeFlyout: () => void;
  isFlyoutVisible: boolean;
  toggleFlyout: () => void;
};

export const NotificationContext = createContext<NotificationContext>({});

export const NotificationProvider: FunctionComponent = ({ children }) => {
  const [isFlyoutVisible, setIsFlyoutVisible] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

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
      value={{ showNotification, isFlyoutVisible, toggleFlyout, closeFlyout }}>
      {children}
    </NotificationContext.Provider>
  );
};
