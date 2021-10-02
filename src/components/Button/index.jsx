import React from "react";
import { StyledButton } from "./style";

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      type={type}
      buttonSize={buttonSize}
      buttonStyle={buttonStyle}
    >
      {children}
    </StyledButton>
  );
};
