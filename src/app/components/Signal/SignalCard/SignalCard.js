import React from "react";
import {
  CardInner,
  CardStyled,
  TitleStartTime,
  InfoStartTime,
  StartTimeWrapper,
  ArrowStyled,
  CardInfoStyled,
} from "./SignalCard.styled";
import arrow from "../../../images/arrow.svg";

const SignalCard = ({ period = "00:09:45", startTime = "19:38:47" }) => {
  return (
    <CardStyled hoverable>
      <CardInner>
        <StartTimeWrapper>
          <TitleStartTime>Початок</TitleStartTime>
          <InfoStartTime>{startTime}</InfoStartTime>
        </StartTimeWrapper>
        <CardInfoStyled
          color="#9C687A"
          title="протягом"
          info={period}
          icon="clock"
          marginTop="0px"
        />
      </CardInner>
      <ArrowStyled src={arrow} />
    </CardStyled>
  );
};

export default SignalCard;
