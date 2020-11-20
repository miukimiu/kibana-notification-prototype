import React, {
  ReactNode,
  FunctionComponent,
  createContext,
  useState,
} from 'react';

import { DocsChrome, DocsChromeProps } from './chrome/chrome';

const localStorageIsDefined: boolean = typeof localStorage !== 'undefined';

if (localStorageIsDefined && localStorage.getItem('theme') === 'dark') {
  require('../../themes/theme_dark.scss');
} else {
  require('../../themes/theme_light.scss');
}

interface DocsChromeContextShape {
  chrome?: DocsChromeProps;
  setChrome: React.Dispatch<
    React.SetStateAction<DocsChromeContextShape['chrome']>
  >;
}

export const DocsChromeContext = createContext<DocsChromeContextShape>({
  chrome: {
    breadcrumbs: [
      {
        text: 'Documentation',
      },
    ],
  },

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setChrome: () => {},
});

const DocsLayout: FunctionComponent<{
  children?: ReactNode;
}> = ({ children }) => {
  const [chromeOptions, setChromeOptions] = useState({
    breadcrumbs: [
      {
        text: 'Documentation',
      },
    ],
  });

  return (
    <DocsChromeContext.Provider
      // @ts-ignore
      value={{ chrome: chromeOptions, setChrome: setChromeOptions }}>
      <div>
        <DocsChrome {...chromeOptions} />
        <div className="chrWrap">{children}</div>
      </div>
    </DocsChromeContext.Provider>
  );
};

export default DocsLayout;
