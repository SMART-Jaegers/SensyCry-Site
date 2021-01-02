import React from "react";
import {
  HeaderStyled,
  AskForHelp,
  TextStyled,
  ImageStyled,
  Wrapper,
  HeaderButton,
  Logo,
} from "./HomeHeader.styled";
import logo from "../../../images/logo-main.svg";
import arrow from "../../../images/ask_for_help_arrow.svg";

const HomeHeader = () => {
  return (
    <Wrapper>
      <HeaderStyled>
        <HeaderButton width="8.75rem" height="2.25rem">
          Увійти
        </HeaderButton>
        <Logo src={logo}></Logo>
        <AskForHelp
          onClick={() => {
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: "smooth",
            });
          }}
        >
          <TextStyled>Звернутись по допомогу</TextStyled>
          <ImageStyled src={arrow}></ImageStyled>
        </AskForHelp>
      </HeaderStyled>
    </Wrapper>
  );
};

export default HomeHeader;
