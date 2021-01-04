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
import { generateFamilyInfo } from "../../Utils/GeneratorWord";

const Main = () => {
  const { data, isLoading, error } = useFetchData("incedent/apartment/1");
  const {
    data: family,
    isLoading: isFamilyLoading,
    error: errorInFamily,
  } = useFetchData("apartment/1", false);
  console.log(family, isFamilyLoading, errorInFamily);
  // console.log(data, isLoading, error);
  return (
    <ContentStyled>
      <ContentWrapperFamily>
        <TextWrapper>
          <ContentLabelFamily>№{family.familyId}</ContentLabelFamily>
          <ContentLabelFamily>-</ContentLabelFamily>
          <ContentLabelFamily>{family.surname}</ContentLabelFamily>
        </TextWrapper>
      </ContentWrapperFamily>
      <FamilyInfoWrapper>
        <DocumentAddressWraper>
          <ImageStyled
            src={document}
            onClick={() => {
              generateFamilyInfo(family);
            }}
          />
          <DocumentName> {family.surname}.docx</DocumentName>
        </DocumentAddressWraper>
        <DocumentAddressWraper>
          <ImageStyled src={location} />
          <AddressName> {family.address}</AddressName>
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
