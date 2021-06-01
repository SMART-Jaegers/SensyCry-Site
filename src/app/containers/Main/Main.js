import React from "react";
import {
  CircleLoaderContainer,
  ContainerIncedent,
  ContentLabelMain,
  ContentWrapperMain,
  ContentStyled,
} from "./Main.styled";
import CardIncedent from "../../components/Card/IncedentCard";
import useFetchData from "../../Utils/FetchHook";
import CircleLoader from "react-spinners/CircleLoader";
import { Scrollbars } from "react-custom-scrollbars";

const Main = () => {
  const { data, isLoading, error } = useFetchData("incedent/all/10");
  return (
    <ContentStyled>
      <Scrollbars autoHide>
        <ContentWrapperMain>
          <ContentLabelMain>Останні сигнали</ContentLabelMain>
        </ContentWrapperMain>
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
                  incedent={element}
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
      </Scrollbars>
    </ContentStyled>
  );
};

export default Main;
