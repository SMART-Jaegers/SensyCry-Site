import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
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
  let location = useLocation();
  const [selectedKey, setSelectedKey] = useState(null);

  useEffect(() => {
    setSelectedKey(location.pathname.split("/")[2]);
  }, [location]);

  const handleClick = (e) => {
    const key = e.key;
    if (key === "main") {
      history.push("/user/main");
    } else if (key === "family" && selectedKey === "message") {
      history.push("/user/family", location.state.apartment);
    }
  };

  return (
    <HeaderStyled>
      <UserInfo>
        <IconStyled>ПВ</IconStyled>
        <div>
          <NameStyled>Петренко Василь</NameStyled>
          <LogOutStyled />
        </div>
      </UserInfo>
      <MenuStyled
        mode="horizontal"
        onClick={handleClick}
        defaultSelectedKeys={"main"}
        selectedKeys={selectedKey}
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
