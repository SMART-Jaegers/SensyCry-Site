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

const IncedentCard = ({
  incedentId = 0,
  date = "0000.00.00 00:00",
  address = "вул. Героїв УА, 10/4",
  time = "00:09:45",
  rate = "75%",
}) => {
  return (
    <CardStyled hoverable>
      <VerticalTextStyled>адреса</VerticalTextStyled>
      <HeaderStyled>
        <NumberIncedent>№ {incedentId}</NumberIncedent>
        <DateTextStyled>{date}</DateTextStyled>
      </HeaderStyled>
      <AddressStyled>{address}</AddressStyled>
      <ResultStyled>
        <CardInfo color="#9C687A" title="протягом" info={time} icon="clock" />
        <CardInfo
          color="#316C7A"
          title="шкала"
          info={rate + "%"}
          icon="settings"
        />
      </ResultStyled>
      <CardButton>Більше</CardButton>
    </CardStyled>
  );
};

export default IncedentCard;
