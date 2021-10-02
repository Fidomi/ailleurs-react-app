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
  medDesktop: { fontWeight: 700, padding: "1rem 1.2rem", fontSize: "0.95rem" },
  smallDesktop: {
    fontWeight: 700,
    padding: "0.75rem 1rem",
    fontSize: "0.80rem",
  },
  medMobile: { fontWeight: 700, padding: "0.8rem 1rem", fontSize: "0.87rem" },
  smallMobile: {
    fontWeight: 700,
    padding: "0.5rem 0.5rem",
    fontSize: "0.81rem",
  },
};

export const StyledButton = styled.button`
  font-family: "Source Sans Pro", sans-serif;
  margin: 0 0.8rem 0 0;
  text-transform: uppercase;
  ${(props) => {
    if (props.buttonSize) {
      let btnSize = SIZES[props.buttonSize];
      return `
    font-weight : ${btnSize.fontWeight};
    padding: ${btnSize.padding};
    font-size: ${btnSize.fontSize};`;
    } else {
      return `
    font-weight : ${SIZES.medMobile.size};
    padding: ${SIZES.medMobile.padding};
    font-size: ${SIZES.medMobile.fontSize};`;
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
