import React from "react";
import SignalHeader from "./SignalHeader/SignalHeader";
import SignalCard from "./SignalCard/SignalCard";
import { SignalsWrapper, Wrapper } from "./Signal.styled";

const Signal = ({ date = "2020.10.26", source = [] }) => {
  return (
    <Wrapper>
      <SignalHeader date={date}></SignalHeader>
      <SignalsWrapper>
        {source.map((element) => {
          return (
            <SignalCard
              key={element.incidentId}
              incedent={element}
            ></SignalCard>
          );
        })}
      </SignalsWrapper>
    </Wrapper>
  );
};

export default Signal;
