import { Link } from "react-router-dom";
import { Button } from "../Button";
import Logo from "../../assets/logo.png";
import {
  HeaderContainer,
  NavLinks,
  Title,
  HeaderLogo,
  TitleText,
} from "./style";
import BurgerMenu from "../BurgerMenu/index";

function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <Title>
          <HeaderLogo src={Logo} />
          <TitleText>Ailleurs</TitleText>
        </Title>
      </Link>
      <NavLinks>
        <Link to="/maps">
          <Button
            type="button"
            onClick={() => console.log("You clicked on me")}
            buttonStyle="successOutline"
            buttonSize="smallMobile"
          >
            Cartes
          </Button>
        </Link>
        <Link to={"/myDestination"}>
          <Button
            type="button"
            buttonStyle="successSolid"
            buttonSize="smallMobile"
          >
            Ma Destination
          </Button>
        </Link>
      </NavLinks>
      <BurgerMenu />
    </HeaderContainer>
  );
}

export default Header;
