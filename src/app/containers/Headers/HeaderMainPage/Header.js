import React from "react";
import { useHistory } from "react-router-dom";
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
  let history = useHistory();

  const handleClick = (e) => {
    const key = e.key;
    if (key === "main") {
      history.push("/user/main");
    } else if (key === "family") {
      history.push("/user/family");
    } else if (key === "message") {
      history.push("/user/message");
    }
  };
  return (
    <HeaderStyled>
      <UserInfo>
        <IconStyled>ПВ</IconStyled>
        <div>
          <NameStyled>Петренко Василь</NameStyled>
          <LogOutStyled>sdsf</LogOutStyled>
        </div>
      </UserInfo>
      <MenuStyled
        mode="horizontal"
        onClick={handleClick}
        defaultSelectedKeys={["main"]}
      >
        <ItemStyled key="main">Головна</ItemStyled>
        <ItemStyled key="family">Сім'я</ItemStyled>
        <ItemStyled key="message">Повідомлення</ItemStyled>
      </MenuStyled>
      <Logo src={logo}></Logo>
    </HeaderStyled>
  );
};

export default Header;
