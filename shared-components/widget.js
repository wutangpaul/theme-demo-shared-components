import React, { useContext } from "react";
import styled, { withTheme } from "styled-components";
import PropTypes from "prop-types";
import { DefaultTheme, DefaultThemeProps } from "./default-theme";

const WidgetContainer = styled.div`
  padding: 1rem;
  margin-bottom: 1rem;
  border: solid 1px ${(props) => props.theme.colors.border}; // didn't destructure on purpose, please don't moan
  color: ${(props) =>
    props.sx.textColor ||
    props.theme.colors
      .text}; // 1. sx override -> 2. inherit from site theme -> 3. inherit from default shared theme
  background-color: ${(props) =>
    props.sx.backgroundColor || props.theme.colors.background};
`;

const Widget = ({ description, showMonkey, sx }) => {
  /* Component automatically receives 'theme' prop 
    from the shared theme provider context. */

  /* sx is an optional prop that can be used to override the values passed by the site theme. */

  /* If, for some reason a theme's value is not defined in the site theme, 
    it will automatically fallback to the shared default theme. */

  return (
    <>
      <WidgetContainer sx={sx}>
        <h1>Widget component</h1>
        <p>{description}</p>
        {showMonkey && (
          <img
            src="https://i.giphy.com/media/5Zesu5VPNGJlm/giphy.webp"
            alt="monkey"
          />
        )}
      </WidgetContainer>
    </>
  );
};

Widget.propTypes = {
  description: PropTypes.node.isRequired,
  showMonkey: PropTypes.bool,
  sx: PropTypes.shape({
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
  }),
  theme: DefaultThemeProps,
};

Widget.defaultProps = {
  showMonkey: false,
  sx: {
    backgroundColor: null,
    textColor: null,
  },
  theme: DefaultTheme,
};

export default withTheme(Widget);
