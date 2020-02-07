import React from 'react';

const defaultState = {
  navIsDocked: false,
  theme: 'light',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleDark: () => {},
};

const ThemeContext = React.createContext(defaultState);

// Getting dark mode information from OS!
// You need macOS Mojave + Safari Technology Preview Release 68 to test this currently.
const supportsDarkMode = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches === true;

class ThemeProvider extends React.Component {
  constructor(props) {
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
      navIsDocked: JSON.parse(localStorage.getItem('navIsDocked') || 'false'),
    };
  }

  toggleDark = () => {
    const theme = this.state.theme === 'dark' ? 'light' : 'dark';
    this.setState({ theme }, () => {
      localStorage.setItem('theme', theme);
      window.location.reload();
    });
  };

  toggleDockedNav = () => {
    const navIsDocked = !this.state.navIsDocked;
    this.setState({ navIsDocked }, () => {
      localStorage.setItem('navIsDocked', navIsDocked);
    });
  };

  render() {
    const { children } = this.props;
    const { theme, navIsDocked } = this.state;
    return (
      <ThemeContext.Provider
        value={{
          theme,
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
