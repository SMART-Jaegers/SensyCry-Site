import React from "react";
import {
  CardInfo,
  CardStyled,
  FamilyName,
  FamilyId,
  AddressStyled,
  FamilyInfo,
} from "./SiderCard.styled";

const SiderCard = ({ familyId, surname, address }) => {
  return (
    <CardStyled hoverable>
      <CardInfo>
        <FamilyInfo>
          <FamilyId>№ {familyId}</FamilyId>
          <FamilyName>{surname}</FamilyName>
        </FamilyInfo>
        <AddressStyled>{address}</AddressStyled>
      </CardInfo>
    </CardStyled>
  );
};

export default SiderCard;
