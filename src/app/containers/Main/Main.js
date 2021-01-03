import React from "react";
import {
  CircleLoaderContainer,
  ContainerIncedent,
  ContentLabel,
  ContentStyled,
} from "./Main.styled";
import CardIncedent from "../../components/Card/IncedentCard";
import useFetchData from "../../Utils/FetchHook";
import CircleLoader from "react-spinners/CircleLoader";

const Main = () => {
  const { data, isLoading, error } = useFetchData("incedent/all/10");

  return (
    <ContentStyled>
      <ContentLabel>Останні сигнали</ContentLabel>
      <CircleLoaderContainer>
        <CircleLoader color="#79a3ad" loading={isLoading} size={400} />
      </CircleLoaderContainer>
      <ContainerIncedent>
        {isLoading ? (
          <div />
        ) : error === null ? (
          data.map((element) => {
            return (
              <CardIncedent
                key={element.incidentId.toString()}
                incedentId={element.familyId}
                date={element.date}
                address={element.address}
                time={element.duringTime}
                rate={element.accuracy}
              />
            );
          })
        ) : (
          <p>
            No connection to server
            <br /> Please try again later
          </p>
        )}
      </ContainerIncedent>
    </ContentStyled>
  );
};

export default Main;
