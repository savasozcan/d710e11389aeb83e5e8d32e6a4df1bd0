import React from "react";
import PropTypes from "prop-types";

import { StyledButton } from "./styles";

const Button = ({ use, children, hasChild, ...rest }) => {
  return (
    <StyledButton type="text" {...rest} use={use} hasChild={!!children}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  use: "primary",
};

Button.propTypes = {
  use: PropTypes.oneOf(["primary", "secondary"]),
  children: PropTypes.any,
};

export default Button;
