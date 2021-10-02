import React, { useState } from "react";
import { BurgerMenuWrapper, BurgerLine, MenuWrapper } from "./style";
import SideMenu from "../SideMenu/index";

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <MenuWrapper>
      <BurgerMenuWrapper open={open} onClick={() => setOpen(!open)}>
        <BurgerLine open={open}></BurgerLine>
        <BurgerLine open={open}></BurgerLine>
        <BurgerLine open={open}></BurgerLine>
      </BurgerMenuWrapper>
      <SideMenu open={open} />
    </MenuWrapper>
  );
};

export default BurgerMenu;
