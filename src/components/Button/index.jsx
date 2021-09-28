import React from "react";
import { colors } from "../../utils/styles/colors";
import styled from "styled-components";

const STYLES = {
  primarySolid: {
    backgroundColor: colors.primary,
    color: colors.white,
    border: "none",
  },
  secondarySolid: {
    backgroundColor: colors.secondary,
    color: colors.dark,
    border: "none",
  },
  warningSolid: {
    backgroundColor: colors.warning,
    color: colors.dark,
    border: "none",
  },
  successSolid: {
    backgroundColor: colors.success,
    color: colors.white,
    border: "none",
  },
  dangerSolid: {
    backgroundColor: colors.danger,
    color: colors.white,
    border: "none",
  },
  primaryOutline: {
    backgroundColor: "none",
    color: colors.primary,
    border: `1px solid ${colors.primary}`,
  },
  secondaryOutline: {
    backgroundColor: "none",
    color: colors.secondary,
    border: `1px solid ${colors.secondary}`,
  },
  warningOutline: {
    backgroundColor: "none",
    color: colors.warning,
    border: `1px solid ${colors.warning}`,
  },
  successOutline: {
    backgroundColor: "none",
    color: colors.success,
    border: `1px solid ${colors.success}`,
  },
  dangerOutline: {
    backgroundColor: "none",
    color: colors.danger,
    border: `1px solid ${colors.danger}`,
  },
};

const SIZES = {
  medium: { fontWeight: 400, padding: "12px 22px", fontSize: "24px" },
  small: { fontWeight: 300, padding: "5px 15px", fontSize: "18px" },
};

const StyledButton = styled.button`
  font-family: "Lora", serif;
  margin: 0 1rem 0 0;
  ${(props) => {
    if (props.buttonSize) {
      let btnSize = SIZES[props.buttonSize];
      return `
    font-weight : ${btnSize.fontWeight};
    padding: ${btnSize.padding};
    font-size: ${btnSize.fontSize};`;
    } else {
      return `
    font-weight : ${SIZES.medium.size};
    padding: ${SIZES.medium.padding};
    font-size: ${SIZES.medium.fontSize};`;
    }
  }}
  ${(props) => {
    if (props.buttonStyle) {
      let btnStyle = STYLES[props.buttonStyle];
      return `
    border : ${btnStyle.border};
    background-color: ${btnStyle.backgroundColor};
    color: ${btnStyle.color};`;
    } else {
      return `
    border : ${STYLES.primarySolid.border};
    background-color: ${STYLES.primarySolid.backgroundColor};
    color: ${STYLES.primarySolid.color};`;
    }
  }};
  border-radius: 25px;
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-3px);
  }
`;

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
