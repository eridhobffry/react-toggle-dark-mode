import React from "react";
import useDarkMode from "../hooks";
import { lightTheme, darkTheme } from "../../styled_fragments/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../styled_fragments/styled_global";
import Toggle from "../../components/toggle";

const App = () => {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <div>
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <h1>Its a {theme === "light" ? "light theme" : "dark theme"} !</h1>
        <footer>
          <small>Sun</small>
          <small>Moon</small>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default App;
