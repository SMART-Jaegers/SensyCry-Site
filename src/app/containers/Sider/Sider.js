import React from "react";
import SiderCard from "../../components/SiderCard/SiderCard";
import { DistrictName, InputStyled, SiderStyled } from "./Sider.styled";

const Sider = () => {
  return (
    <SiderStyled width={340}>
      <DistrictName>Франківський район</DistrictName>
      <InputStyled placeholder="Введіть реєстровий номер сім'ї" />
      <SiderCard />
      <SiderCard />
      <SiderCard />
    </SiderStyled>
  );
};

export default Sider;
