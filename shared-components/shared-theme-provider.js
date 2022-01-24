import React from "react";
import { ThemeProvider } from "styled-components";

/*  
  IMPORTANT: In order for shared components to be able to inherit the theme prop, 
  the shared and site level components need to be initialized in the same theme provider.
*/

const SharedThemeProvider = ({ theme, children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export { SharedThemeProvider };
