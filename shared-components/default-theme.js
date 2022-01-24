import PropTypes from "prop-types";

// shared default theme
// each site's theme will be subset of this shared default theme
// each shared component will us this as it's default theme props

const DefaultTheme = {
  colors: {
    background: "#f5f5f5",
    border: "#e0e0e0",
    brand: "#333",
    highlight: "#ffc107",
    muted: "#999",
    text: "#333",
  },
};

const DefaultThemeProps = PropTypes.shape({
  colors: PropTypes.shape({
    background: PropTypes.string,
    border: PropTypes.string,
    brand: PropTypes.string,
    highlight: PropTypes.string,
    muted: PropTypes.string,
    text: PropTypes.string,
  }),
});

export { DefaultTheme, DefaultThemeProps };
