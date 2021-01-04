import React from "react";
import {
  CardInner,
  CardStyled,
  TitleStartTime,
  InfoStartTime,
  StartTimeWrapper,
  ArrowStyled,
} from "./SignalCard.styled";
import CardInfo from "../../Card/CardInfo/CardInfo";
import arrow from "../../../images/arrow.jpg";

const SignalCard = ({ period = "00:09:45", startTime = "19:38:47" }) => {
  return (
    <CardStyled hoverable>
      <CardInner>
        <StartTimeWrapper>
          <TitleStartTime>Початок</TitleStartTime>
          <InfoStartTime>{startTime}</InfoStartTime>
        </StartTimeWrapper>
        <CardInfo color="#9C687A" title="протягом" info={period} icon="clock" />
      </CardInner>
      <ArrowStyled src={arrow} />
    </CardStyled>
  );
};

export default SignalCard;
