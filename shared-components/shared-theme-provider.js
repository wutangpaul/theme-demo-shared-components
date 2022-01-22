import React from "react";
import { ThemeProvider } from "styled-components";

const SharedThemeProvider = ({ theme, children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export { SharedThemeProvider };
