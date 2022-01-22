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

const Widget = ({ description, sx }) => {
  return (
    <>
      <WidgetContainer sx={sx}>
        <h1>Widget component</h1>
        <div className="widget-body">{description}</div>
      </WidgetContainer>
    </>
  );
};

Widget.propTypes = {
  description: PropTypes.node.isRequired,
  sx: PropTypes.shape({
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
  }),
};

Widget.defaultProps = {
  sx: {
    backgroundColor: null,
    textColor: null,
  },
};

export default withTheme(Widget);
