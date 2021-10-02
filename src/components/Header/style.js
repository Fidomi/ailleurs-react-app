import colors from "../../utils/styles/colors";
import device from "../../utils/styles/device";
import { fontSizes } from "../../utils/styles/fonts";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: relative;
  z-index: 1000;
  height: 2rem;
  margin: 0 auto;
  padding: 0.5rem 0.62rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media ${device.tablet} {
    height: 4rem;
    padding: 1rem 1.2rem;
  }
`;

export const NavLinks = styled.nav`
  display: none;

  @media ${device.tablet} {
    display: flex;
    flex-direction: row;
    padding: 1rem;
    align-items: center;
  }
`;

export const HeaderLogo = styled.img`
  max-height: 1.25rem;
  padding: 1rem 0.1rem 1rem 1rem;

  @media ${device.tablet} {
    max-height: 2.2rem;
    padding: 1rem 0.5rem 1rem 2rem;
  }
`;

export const TitleText = styled.h1`
  font-size: ${fontSizes.fontM};
  padding: 5px;
  margin: 0;
  color: ${colors.success};
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-3px);
    color: ${colors.dark};
  }
  @media ${device.tablet} {
    font-size: ${fontSizes.fontXL};
    padding: 0px;
  }
`;

export const Title = styled.span`
  line-height: 2rem;
  margin: 0;
  display: flex;
  align-items: center;
`;