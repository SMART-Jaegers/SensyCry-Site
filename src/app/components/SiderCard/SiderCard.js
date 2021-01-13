import React from "react";
import { useHistory } from "react-router-dom";
import {
  CardInfo,
  CardStyled,
  FamilyName,
  FamilyId,
  AddressStyled,
  FamilyInfo,
  AddressWrapper,
} from "./SiderCard.styled";

const SiderCard = ({ family }) => {
  let history = useHistory();

  const goToFamily = () => {
    history.push(`/user/family`, family);
    // console.log(history);
  };

  return (
    <CardStyled hoverable onClick={goToFamily}>
      <CardInfo>
        <FamilyInfo>
          <FamilyId>№ {family.familyId}</FamilyId>
          <FamilyName>{family.surname}</FamilyName>
        </FamilyInfo>
        <AddressWrapper>
          <AddressStyled>{family.address}</AddressStyled>
        </AddressWrapper>
      </CardInfo>
    </CardStyled>
  );
};

export default SiderCard;
