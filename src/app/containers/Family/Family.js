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
  ConclusionImageStyled,
  ContentLabelFamilySignal,
} from "./Family.styled";
import useFetchData from "../../Utils/FetchHook";
import CircleLoader from "react-spinners/CircleLoader";
import document from "../../images/document.svg";
import address from "../../images/location.svg";
import Signal from "../../components/Signal/Signal";
import { CircleLoaderContainer } from "../Main/Main.styled";
import { generateFamilyInfo } from "../../Utils/GeneratorWord";
import { useLocation } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars";

const Family = () => {
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
      <Scrollbars autoHide>
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
            <ConclusionImageStyled
              src={document}
              onClick={() => {
                generateFamilyInfo(family);
              }}
            />
            <DocumentName
              onClick={() => {
                generateFamilyInfo(family);
              }}
            >
              {" "}
              {family ? `${family.surname}` : ""}.docx
            </DocumentName>
          </DocumentAddressWraper>
          <DocumentAddressWraper>
            <ImageStyled src={address} />
            <AddressName> {family ? `${family.address}` : ""}</AddressName>
          </DocumentAddressWraper>
        </FamilyInfoWrapper>
        <ContentWrapperSignals>
          <TextWrapper>
            <ContentLabelFamilySignal>Сигнали</ContentLabelFamilySignal>
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
      </Scrollbars>
    </ContentStyled>
  );
};

export default Family;
