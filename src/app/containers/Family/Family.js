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
  SignalDateWrapper,
  SignalDate,
} from "./Family.styled";
import useFetchData from "../../Utils/FetchHook";
import CircleLoader from "react-spinners/CircleLoader";
import document from "../../images/document.jpg";
import location from "../../images/location.jpg";
import Signal from "../../components/Signal/Signal";

const Main = () => {
  const { data, isLoading, error } = useFetchData();
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
      <Signal date="2020.10.26"></Signal>
    </ContentStyled>
  );
};

export default Main;
