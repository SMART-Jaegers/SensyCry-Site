import React from "react";
import {
  HeaderStyled,
  AskForHelp,
  TextStyled,
  ImageStyled,
  Wrapper,
  HeaderButton,
  Logo,
} from "./Header.styled";
import logo from "../../images/logo-main.svg";
import arrow from "../../images/ask_for_help_arrow.svg";

const Header = () => {
  return (
    <Wrapper>
      <HeaderStyled>
        <HeaderButton width="8.75rem" height="2.25rem">
          Увійти
        </HeaderButton>
        <Logo src={logo}></Logo>
        <AskForHelp>
          <TextStyled>Звернутись по допомогу</TextStyled>
          <ImageStyled src={arrow} style={{ marginLeft: "3px" }}></ImageStyled>
        </AskForHelp>
      </HeaderStyled>
    </Wrapper>
  );
};

export default Header;
