import React from "react";
import { useHistory } from "react-router-dom";
import {
  CardInfo,
  CardStyled,
  FamilyName,
  FamilyId,
  AddressStyled,
  FamilyInfo,
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
        <AddressStyled>{family.address}</AddressStyled>
      </CardInfo>
    </CardStyled>
  );
};

export default SiderCard;
