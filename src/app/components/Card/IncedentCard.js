import React from "react";
import {
  CardStyled,
  DateTextStyled,
  NumberFamily,
  VerticalTextStyled,
  HeaderStyled,
  AddressStyled,
  ResultStyled,
  CardButton,
  AddressContainer,
} from "./IncedentCard.styled";
import CardInfo from "./CardInfo/CardInfo";
import { useHistory } from "react-router-dom";

const IncedentCard = ({ incedent }) => {
  let history = useHistory();

  const goToMessage = () => {
    history.push("/user/message", incedent);
  };
  console.log(incedent);

  const translateEmotion = () => {
    if (incedent.pathRecord === "angry") {
      return "злість";
    }
    if (incedent.pathRecord === "fear") {
      return "страх";
    }
    return incedent.pathRecord;
  };

  return (
    <CardStyled hoverable>
      <VerticalTextStyled>адреса</VerticalTextStyled>
      <HeaderStyled>
        <NumberFamily>№ {incedent.familyId}</NumberFamily>
        <DateTextStyled>{incedent.dateToMinute}</DateTextStyled>
      </HeaderStyled>
      <AddressContainer>
        <AddressStyled>{incedent.address}</AddressStyled>
      </AddressContainer>
      <ResultStyled>
        <CardInfo
          color="#9C687A"
          title="протягом"
          info={incedent.duringTime}
          icon="clock"
        />
        <CardInfo
          color="#316C7A"
          title={translateEmotion()}
          info={incedent.accuracy + "%"}
          icon="settings"
        />
      </ResultStyled>
      <CardButton onClick={goToMessage}>Більше</CardButton>
    </CardStyled>
  );
};

export default IncedentCard;
