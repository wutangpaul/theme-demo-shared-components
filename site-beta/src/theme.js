import { DefaultTheme } from "../../shared-components/default-theme"

// use shared template and extend/override with custom theme values
const siteTheme = {
  colors: {
    ...DefaultTheme.colors,
    background: "#BADA55", // override shared default theme
    highlight: "#00A3C4", // override shared default theme
  },
}

export default siteTheme
