import React, {
  ReactNode,
  FunctionComponent,
  createContext,
  useState,
} from 'react';

import { KibanaChrome, KibanaChromeProps } from './kibana/chrome/chrome';
import { NotificationProvider } from '../context/notification_context';

const localStorageIsDefined: boolean = typeof localStorage !== 'undefined';

if (localStorageIsDefined && localStorage.getItem('theme') === 'dark') {
  require('../themes/theme_dark.scss');
} else {
  require('../themes/theme_light.scss');
}

interface KibanaChromeContextShape {
  chrome?: KibanaChromeProps;
  setChrome: React.Dispatch<
    React.SetStateAction<KibanaChromeContextShape['chrome']>
  >;
}

export const KibanaChromeContext = createContext<KibanaChromeContextShape>({
  chrome: {
    breadcrumbs: [
      {
        text: 'Home',
      },
    ],
  },

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setChrome: () => {},
});

const Layout: FunctionComponent<{
  children?: ReactNode;
}> = ({ children }) => {
  const [chromeOptions, setChromeOptions] = useState({
    breadcrumbs: [
      {
        text: 'Home',
      },
    ],
  });

  return (
    <KibanaChromeContext.Provider
      // @ts-ignore
      value={{ chrome: chromeOptions, setChrome: setChromeOptions }}>
      <NotificationProvider>
        <div>
          <KibanaChrome {...chromeOptions} />
          <div className="chrWrap">{children}</div>
        </div>
      </NotificationProvider>
    </KibanaChromeContext.Provider>
  );
};

export default Layout;
