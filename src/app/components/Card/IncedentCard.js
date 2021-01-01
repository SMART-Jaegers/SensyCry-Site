import React from "react";
import {
  CardStyled,
  DateTextStyled,
  NumberIncedent,
  VerticalTextStyled,
  HeaderStyled,
  AddressStyled,
  ResultStyled,
  CardButton,
} from "./IncedentCard.styled";
import CardInfo from "./CardInfo/CardInfo";

const IncedentCard = () => {
  return (
    <CardStyled hoverable>
      <VerticalTextStyled>адреса</VerticalTextStyled>
      <HeaderStyled>
        <NumberIncedent>№ 12342354</NumberIncedent>
        <DateTextStyled>2020.10.26 19:38</DateTextStyled>
      </HeaderStyled>
      <AddressStyled>вул. Героїв УПА, 10/4</AddressStyled>
      <ResultStyled>
        <CardInfo
          color="#9C687A"
          title="протягом"
          info="00:09:45"
          icon="clock"
        />
        <CardInfo color="#316C7A" title="шкала" info="75%" icon="settings" />
      </ResultStyled>
      <CardButton>Більше</CardButton>
    </CardStyled>
  );
};

export default IncedentCard;
