import React from "react";
import {
  FooterStyled,
  AskForHelp,
  HotLine,
  HotLines,
  HotLineHeaderPhone,
  FooterParagraph,
  FooterHotLineHeader,
  FooterHotLinePhone,
  FooterMainHeader,
  FooterBottom,
  ButtonChoice,
} from "./Footer.styled";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

const menu = (
  <Menu>
    <Menu.Item>Львів</Menu.Item>
    <Menu.Item>Жидачів</Menu.Item>
    <Menu.Item>Київ</Menu.Item>
  </Menu>
);

const Footer = () => {
  return (
    <FooterStyled>
      <AskForHelp>
        <FooterMainHeader>Звернутись по допомогу</FooterMainHeader>
        <Dropdown overlay={menu}>
          <ButtonChoice>
            виберіть місто
            <DownOutlined twoToneColor="#316C7A" />
          </ButtonChoice>
        </Dropdown>
      </AskForHelp>
      <HotLines>
        <HotLine>
          <HotLineHeaderPhone>
            <FooterHotLineHeader>Гаряча лінія</FooterHotLineHeader>
            <FooterHotLinePhone>+38 098 765 4321</FooterHotLinePhone>
          </HotLineHeaderPhone>
          <FooterParagraph>
            Працює цілодобово. Дзвінки з мережі фіксованого зв’язку Укртелекому,
            телефонів мобільних операторів Київстар, Vodafone Україна, Лайфселл
            для заявників безкоштовні
          </FooterParagraph>
        </HotLine>
      </HotLines>
      <FooterBottom></FooterBottom>
    </FooterStyled>
  );
};

export default Footer;
