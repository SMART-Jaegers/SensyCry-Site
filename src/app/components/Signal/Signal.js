import React from "react";
import SignalHeader from "./SignalHeader/SignalHeader";
import SignalCard from "./SignalCard/SignalCard";
import { SignalsWrapper } from "./Signal.styled";

const Signal = ({ date = "2020.10.26" }) => {
  return (
    <React.Fragment>
      <SignalHeader date={date}></SignalHeader>
      <SignalsWrapper>
        <SignalCard startTime="19:37:47" period="00:09:45"></SignalCard>
        <SignalCard startTime="19:37:47" period="00:09:45"></SignalCard>
        <SignalCard startTime="19:37:47" period="00:09:45"></SignalCard>
        <SignalCard startTime="19:37:47" period="00:09:45"></SignalCard>
      </SignalsWrapper>
    </React.Fragment>
  );
};

export default Signal;
