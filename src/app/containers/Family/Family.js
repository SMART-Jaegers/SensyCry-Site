import React from "react";
import {
  ContentStyled,
  ContentLabelFamily,
  ContentWrapperFamily,
  TextWrapper,
  FamilyInfoWrapper,
  DocumentAddressWraper,
  ImageStyled,
  DocumentName,
  AddressName,
  ContentWrapperSignals,
} from "./Family.styled";
import useFetchData from "../../Utils/FetchHook";
import CircleLoader from "react-spinners/CircleLoader";
import document from "../../images/document.jpg";
import location from "../../images/location.jpg";
import Signal from "../../components/Signal/Signal";
import { CircleLoaderContainer } from "../Main/Main.styled";

const Main = () => {
  const { data, isLoading, error } = useFetchData("incedent/apartment/1");

  return (
    <ContentStyled>
      <ContentWrapperFamily>
        <TextWrapper>
          <ContentLabelFamily>№12345</ContentLabelFamily>
          <ContentLabelFamily>-</ContentLabelFamily>
          <ContentLabelFamily>Петренович</ContentLabelFamily>
        </TextWrapper>
      </ContentWrapperFamily>
      <FamilyInfoWrapper>
        <DocumentAddressWraper>
          <ImageStyled src={document} />
          <DocumentName> Петренович.docx</DocumentName>
        </DocumentAddressWraper>
        <DocumentAddressWraper>
          <ImageStyled src={location} />
          <AddressName> м. Львів, вул. Героїв УПА, 10/4</AddressName>
        </DocumentAddressWraper>
      </FamilyInfoWrapper>
      <ContentWrapperSignals>
        <TextWrapper>
          <ContentLabelFamily>Сигнали</ContentLabelFamily>
        </TextWrapper>
      </ContentWrapperSignals>
      <CircleLoaderContainer>
        <CircleLoader color="#79a3ad" loading={isLoading} size={400} />
      </CircleLoaderContainer>
      {isLoading ? (
        <div />
      ) : error === null ? (
        Object.keys(data).map((dayOfIncedent) => {
          return (
            <Signal
              key={dayOfIncedent}
              date={dayOfIncedent}
              source={data[dayOfIncedent]}
            />
          );
        })
      ) : (
        <p>
          No connection to server
          <br /> Please try again later
        </p>
      )}
    </ContentStyled>
  );
};

export default Main;
