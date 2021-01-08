import React, { useEffect, useState } from "react";
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
import address from "../../images/location.jpg";
import Signal from "../../components/Signal/Signal";
import { CircleLoaderContainer } from "../Main/Main.styled";
import { generateFamilyInfo } from "../../Utils/GeneratorWord";
import { useLocation } from "react-router-dom";

const Main = () => {
  let location = useLocation();
  const [family, setFamily] = useState(location.state);
  const { data, isLoading, error } = useFetchData(
    `incedent/apartment/${family.familyId}`
  );

  useEffect(() => {
    setFamily(location.state);
  }, [location]);

  if (isLoading === true) {
    return (
      <CircleLoaderContainer>
        <CircleLoader color="#79a3ad" loading={isLoading} size={400} />
      </CircleLoaderContainer>
    );
  }
  return (
    <ContentStyled>
      <ContentWrapperFamily>
        <TextWrapper>
          <ContentLabelFamily>
            {family ? `№${family.familyId}` : "No info"}
          </ContentLabelFamily>
          <ContentLabelFamily>-</ContentLabelFamily>
          <ContentLabelFamily>
            {family ? `${family.surname}` : ""}
          </ContentLabelFamily>
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
          <DocumentName> {family ? `${family.surname}` : ""}.docx</DocumentName>
        </DocumentAddressWraper>
        <DocumentAddressWraper>
          <ImageStyled src={address} />
          <AddressName> {family ? `${family.address}` : ""}</AddressName>
        </DocumentAddressWraper>
      </FamilyInfoWrapper>
      <ContentWrapperSignals>
        <TextWrapper>
          <ContentLabelFamily>Сигнали</ContentLabelFamily>
        </TextWrapper>
      </ContentWrapperSignals>
      {error === null ? (
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
