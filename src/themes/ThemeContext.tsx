import React from 'react';

const defaultState = {
  navIsDocked: false,
  theme: 'light',
  themeIsLoading: false,
  toggleDark: () => {
    defaultState.theme === 'dark' ? 'light' : 'dark';
  },
  toggleDockedNav: () => {
    !defaultState.navIsDocked;
  },
};

interface State {
  navIsDocked: boolean;
  theme: string;
  themeIsLoading: boolean;
}

const ThemeContext = React.createContext(defaultState);

// Getting dark mode information from OS!
// You need macOS Mojave + Safari Technology Preview Release 68 to test this currently.
const supportsDarkMode = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches === true;

class ThemeProvider extends React.Component<object, State> {
  constructor(props: object) {
    super(props);

    let theme;
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      theme = storedTheme;
    } else if (supportsDarkMode()) {
      theme = 'dark';
    } else {
      theme = 'light';
    }

    this.state = {
      theme,
      themeIsLoading: false,
      navIsDocked: JSON.parse(localStorage.getItem('navIsDocked') || 'false'),
    };
  }

  toggleDark = () => {
    const theme = this.state.theme === 'dark' ? 'light' : 'dark';
    this.setState({ theme, themeIsLoading: true }, () => {
      localStorage.setItem('theme', theme);
      window.location.reload();
    });
  };

  toggleDockedNav = () => {
    const navIsDocked = !this.state.navIsDocked;
    this.setState({ navIsDocked }, () => {
      localStorage.setItem('navIsDocked', JSON.stringify(navIsDocked));
    });
  };

  render() {
    const { children } = this.props;
    const { theme, navIsDocked, themeIsLoading } = this.state;
    return (
      <ThemeContext.Provider
        value={{
          theme,
          themeIsLoading,
          toggleDark: this.toggleDark,
          navIsDocked,
          toggleDockedNav: this.toggleDockedNav,
        }}>
        {children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContext;

export { ThemeProvider };
