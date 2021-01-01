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
  CitiesLabel,
  FooterBottom,
  CitiesSelect,
} from "./Footer.styled";

const Footer = () => {
  return (
    <FooterStyled>
      <AskForHelp>
        <FooterMainHeader>Звернутись по допомогу</FooterMainHeader>
        <CitiesLabel>
          <CitiesSelect name="Cities" id="city-select">
            <option value="Lviv">Львів</option>
            <option value="Zhydachiv">Жидачів</option>
          </CitiesSelect>
        </CitiesLabel>
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
      <FooterBottom>1</FooterBottom>
    </FooterStyled>
  );
};

export default Footer;
