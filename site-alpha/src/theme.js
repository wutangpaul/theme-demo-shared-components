import { DefaultTheme } from "../../shared-components/default-theme"

// use shared template and extend/override with custom theme values
const siteTheme = {
  colors: {
    ...DefaultTheme.colors,
    background: "#f09",
  },
}

export default siteTheme
