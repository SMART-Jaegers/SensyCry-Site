import React from "react";
import {
  CardInfo,
  CardStyled,
  FamilyName,
  NumberIncedent,
  AddressStyled,
} from "./SiderCard.styled";
import { Space } from "antd";

const SiderCard = () => {
  return (
    <CardStyled hoverable>
      <CardInfo>
        <Space size={50}>
          <NumberIncedent>№123456789</NumberIncedent>
          <FamilyName>Петренович</FamilyName>
        </Space>
        <AddressStyled>вул.Героїв УПА, 10/4</AddressStyled>
      </CardInfo>
    </CardStyled>
  );
};

export default SiderCard;
