import React, { useContext } from "react";
import styled, { withTheme } from "styled-components";
import PropTypes from "prop-types";

const WidgetContainer = styled.div`
  padding: 1rem;
  margin-bottom: 1rem;
  border: solid 1px ${(props) => props.theme.colors.border};
  color: ${(props) => props.sx.textColor || props.theme.colors.text};
  background-color: ${(props) =>
    props.sx.backgroundColor || props.theme.colors.background};
`;

const Widget = ({ description, showMonkey, sx }) => {
  console.log(sx);
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
};

Widget.defaultProps = {
  showMonkey: false,
  sx: {
    backgroundColor: null,
    textColor: null,
  },
};

export default withTheme(Widget);
