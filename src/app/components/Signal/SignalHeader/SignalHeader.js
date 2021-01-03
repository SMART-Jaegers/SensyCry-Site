import React from "react";
import calendar from "../../../images/calendar.jpg";
import {
  SignalDateWrapper,
  SignalDate,
  ImageStyled,
} from "./SignalHeader.styled";
import { ContentLabel } from "../../ContentLabel/ContentLabel.styled";

const SignalHeader = ({ date = "2020.10.26" }) => {
  return (
    <SignalDateWrapper>
      <SignalDate>
        <ImageStyled src={calendar} />
        <ContentLabel>{date}</ContentLabel>
      </SignalDate>
    </SignalDateWrapper>
  );
};

export default SignalHeader;
