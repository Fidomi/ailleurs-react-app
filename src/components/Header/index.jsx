import styled from "styled-components";
import Logo from "../../assets/logoipsum-logo-38.svg";

const HeaderContainer = styled.header`
  width: 100vw;
  height: 3rem;
  margin: o auto;
  padding: 1rem 2rem;
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
  padding: 15px 2px 15px 15px;
`;

const TitleText = styled.h1`
  font-family: "Bubbler One", sans-serif;
  font-size: 2rem;
  padding: 5px;
  margin: 0;
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
      <Title>
        <HeaderLogo src={Logo} />
        <TitleText>AILLEURS</TitleText>
      </Title>
      <NavLinks></NavLinks>
    </HeaderContainer>
  );
}

export default Header;
