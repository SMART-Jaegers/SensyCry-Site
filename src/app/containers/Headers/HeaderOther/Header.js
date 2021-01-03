import React from "react";
import {
  UserInfo,
  LogOutStyled,
  NameStyled,
  IconStyled,
  HeaderStyled,
  ItemStyled,
  MenuStyled,
  Logo,
} from "./Header.styled";
import logo from "../../../images/logo.svg";

const Header = () => {
  return (
    <HeaderStyled>
      <UserInfo>
        <IconStyled>ПВ</IconStyled>
        <div>
          <NameStyled>Петренко Василь</NameStyled>
          <LogOutStyled>sdsf</LogOutStyled>
        </div>
      </UserInfo>
      <MenuStyled mode="horizontal" defaultSelectedKeys={["1"]}>
        <ItemStyled key="1">Головна</ItemStyled>
        <ItemStyled key="2">Сім'я</ItemStyled>
        <ItemStyled key="3">Повідомлення</ItemStyled>
      </MenuStyled>
      <Logo src={logo}></Logo>
    </HeaderStyled>
  );
};

export default Header;
