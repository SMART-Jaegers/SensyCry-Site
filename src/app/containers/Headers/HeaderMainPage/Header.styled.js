import styled from "styled-components";
import { Layout, Menu } from "antd";
import LogOut from "../../../images/Log-out.svg";

const { Header } = Layout;

export const HeaderStyled = styled(Header)`
  background: #316c7a;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0;
  height: 86px;
  .ant-menu {
    line-height: 50px;
  }
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item:hover,
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu:hover,
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-active,
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-active,
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-open,
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-open,
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-selected,
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-selected {
    color: white;
    font-weight: normal;
    border-bottom: 2px solid #ffffff;
  }
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item,
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu {
    margin: 0;
  }
`;

export const UserInfo = styled.div`
  display: flex;
`;

export const IconStyled = styled.div`
  background: #b3e1d1;
  box-shadow: 4px 0px 10px rgba(0, 0, 0, 0.1);
  width: 50px;
  height: 50px;
  border-radius: 50px;
  /* text-align: center; */
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 50px;
  color: #316c7a;
  z-index: 2;
  user-select: none;
`;

export const NameStyled = styled.p`
  background: #b3e1d1;
  border-radius: 17px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #316c7a;
  text-align: right;

  width: 157px;
  height: 27px;
  margin-left: -45px;
  margin-top: 3px;
  padding: 6px 12px;
  /* z-index: -1; */
`;

export const LogOutStyled = styled.div`
  background: #79a3ad;
  border-radius: 25px 0px 40px 17px;
  width: 71px;
  height: 20px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  margin-left: -35px;
  display: flex;
  content: url(${LogOut});
  justify-content: end;
  padding: 4px 0;
  padding-left: 25px;
  user-select: none;
`;

export const MenuStyled = styled(Menu)`
  background: transparent;
  line-height: 50px;
`;

export const ItemStyled = styled(Menu.Item)`
  width: 20vw;
  text-align: center;
  font-family: Roboto;
  font-weight: 300;
  font-size: 16px;
  color: #ffffff;
  user-select: none;
`;

export const Logo = styled.img`
  alt: "Header image";
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding-top: 3px;
  margin-left: 10px;
  user-select: none;
`;
