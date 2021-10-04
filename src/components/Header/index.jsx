/* eslint-disable max-lines-per-function */
import BurgerMenu from '../BurgerMenu/index';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
// eslint-disable-next-line sort-imports
import {
    HeaderContainer,
    HeaderLogo,
    NavLinks,
    Title,
    TitleText
} from './style';
import { React, useState } from 'react';
import SideMenu from '../SideMenu';
import StyledLink from '../StyledLink/index';

function Header() {
    const [isHover, setHover] = useState(false);
    const [open, setOpen] = useState(false);
    const handleOver = () => {
        setHover(true);
        setOpen(true);
    };

    return (
        <HeaderContainer>
            <Link to="/">
                <Title>
                    <HeaderLogo src={Logo} />
                    <TitleText>Ailleurs</TitleText>
                </Title>
            </Link>
            <NavLinks>
                <StyledLink to="/cartes" onMouseOver={handleOver}>
                    <Button
                        type="button"
                        buttonStyle="successOutline"
                        buttonSize="smallMobile"
                    >
                        Cartes
                    </Button>
                </StyledLink>
                {isHover && <SideMenu open={open} handleOpen={setOpen} />}

                <Link to={'/ma-destination'}>
                    <Button
                        type="button"
                        buttonStyle="successSolid"
                        buttonSize="smallMobile"
                    >
                        Ma Destination
                    </Button>
                </Link>
            </NavLinks>
            <BurgerMenu open={open} handleOpen={setOpen} />
        </HeaderContainer>
    );
}

export default Header;
