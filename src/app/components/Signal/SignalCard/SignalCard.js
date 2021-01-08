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
import { useHistory } from "react-router-dom";

const SignalCard = ({ incedent }) => {
  let history = useHistory();

  const goToMessage = () => {
    history.push("/user/message", incedent);
  };

  return (
    <CardStyled hoverable onClick={goToMessage}>
      <CardInner>
        <StartTimeWrapper>
          <TitleStartTime>Початок</TitleStartTime>
          <InfoStartTime>{incedent.timeIncedent}</InfoStartTime>
        </StartTimeWrapper>
        <CardInfoStyled
          color="#9C687A"
          title="протягом"
          info={incedent.duringTime}
          icon="clock"
          marginTop="0px"
        />
      </CardInner>
      <ArrowStyled src={arrow} />
    </CardStyled>
  );
};

export default SignalCard;
