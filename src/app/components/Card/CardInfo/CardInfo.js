import React from "react";
import Icon from "../../../../app-icons/Icon";
import { InfoContainer, InfoResult, TitleResult } from "./CardInfo.styled";

const CardInfo = ({
  color = "black",
  title,
  info,
  icon,
  marginTop = "0px",
}) => {
  return (
    <InfoContainer marginTop={marginTop}>
      <Icon icon={icon} color={color} size={37} />
      <div>
        <TitleResult color={color}>{title}</TitleResult>
        <InfoResult color={color}>{info}</InfoResult>
      </div>
    </InfoContainer>
  );
};

export default CardInfo;
