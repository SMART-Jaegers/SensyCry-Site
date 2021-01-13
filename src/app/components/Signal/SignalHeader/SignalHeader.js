import React from "react";
import calendar from "../../../images/calendar.svg";
import {
  SignalDateWrapper,
  SignalDate,
  ImageStyled,
  ContentLabelStyled,
} from "./SignalHeader.styled";

const SignalHeader = ({ date = "2020.10.26" }) => {
  return (
    <SignalDateWrapper>
      <SignalDate>
        <ImageStyled src={calendar} />
        <ContentLabelStyled>{date}</ContentLabelStyled>
      </SignalDate>
    </SignalDateWrapper>
  );
};

export default SignalHeader;
