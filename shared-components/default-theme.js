import PropTypes from "prop-types";

// Shared default theme object
// each site's theme will get this automatically and can be overridden
// in the site's theme object

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

// Shared default theme props
// each shared component will receive this automatically,
// keeping it in line with the DefaultTheme object

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
