import styled from "styled-components";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import colors from "../../utils/styles/colors";

const HeaderContainer = styled.header`
  height: 5rem;
  margin: 0 auto;
  padding: 1rem 5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const NavLinks = styled.nav`
  display: flex;
  flex-direction: row;
  padding: 15px;
  align-items: center;
`;

const HeaderLogo = styled.img`
  max-height: 40px;
  padding: 15px 2px 15px 15px;
`;

const TitleText = styled.h1`
  font-family: "Bubbler One", sans-serif;
  font-size: 2.4rem;
  padding: 5px;
  margin: 0;
  color: ${colors.success};
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-3px);
    color: ${colors.dark};
  }
`;

const Title = styled.span`
  line-height: 2rem;
  margin: 0;
  display: flex;
  align-items: center;
`;

function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <Title>
          <HeaderLogo src={Logo} />
          <TitleText>AILLEURS EN FRANCE</TitleText>
        </Title>
      </Link>
      <NavLinks>
        <Link to="/maps">
          <Button
            type="button"
            onClick={() => console.log("You clicked on me")}
            buttonStyle="successOutline"
            buttonSize="small"
          >
            Cartes
          </Button>
        </Link>
        <Link to={"/myDestination"}>
          <Button
            type="button"
            onClick={() => console.log("You clicked on me")}
            buttonStyle="successSolid"
            buttonSize="small"
          >
            Ma Destination
          </Button>
        </Link>
      </NavLinks>
    </HeaderContainer>
  );
}

export default Header;
