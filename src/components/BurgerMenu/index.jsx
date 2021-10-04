/* eslint-disable sort-imports */
import React from 'react';
import { BurgerMenuWrapper, BurgerLine, MenuWrapper } from './style';
import PropTypes from 'prop-types';
import SideMenu from '../SideMenu/index';

const BurgerMenu = (props) => (
    <MenuWrapper>
        <BurgerMenuWrapper
            open={props.open}
            onClick={() => props.handleOpen(!props.open)}
        >
            <BurgerLine open={props.open}></BurgerLine>
            <BurgerLine open={props.open}></BurgerLine>
            <BurgerLine open={props.open}></BurgerLine>
        </BurgerMenuWrapper>
        <SideMenu open={props.open} />
    </MenuWrapper>
);

export default BurgerMenu;

BurgerMenu.propTypes = {
    handleOpen: PropTypes.func,
    open: PropTypes.bool.isRequired
};
