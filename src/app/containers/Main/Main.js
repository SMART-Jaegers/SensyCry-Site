import React from "react";
import { ContainerIncedent, ContentLabel, ContentStyled } from "./Main.styled";
import CardIncedent from "../../components/Card/IncedentCard";

const Main = () => {
  return (
    <ContentStyled>
      <ContentLabel>Останні сигнали</ContentLabel>
      <ContainerIncedent>
        <CardIncedent />
        <CardIncedent />
        <CardIncedent />
        <CardIncedent />
        <CardIncedent />
      </ContainerIncedent>
    </ContentStyled>
  );
};

export default Main;
