import styled from "styled-components";
import { colors } from "../../utils/styles/colors";

export const StyledSideMenu = styled.div`
  height: auto;
  width: 100vw;
  top: 3rem;
  position: absolute;
  left: 0;
  display: ${({ open }) => (open ? "block" : "none")};
  z-index: ${({ open }) => (open ? "1001" : "-100")};
  background: ${colors.secondary};
`;
