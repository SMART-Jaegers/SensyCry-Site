import styled from "styled-components";
import { Card } from "antd";
import { RobotoText } from "../Card/IncedentCard.styled";

export const CardStyled = styled(Card)`
  width: 290px;
  height: 85px;
  border: none;
  border-radius: 10px;
  background: #b3e1d1;
  margin: 20px;
  .ant-card-body {
    padding: 0;
    height: 100%;
  }
`;

export const CardInfo = styled.div`
  background: #efeded;
  box-shadow: 2px 0px 14px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 94%;
  height: 100%;
  padding: 10px 20px;
`;

export const FamilyInfo = styled.div`
  display: flex;
  justify-content: space-between;
  user-select: none;
`;

export const FamilyId = styled(RobotoText)`
  font-size: 16px;
  line-height: 19px;
  color: #316c7a;
`;

export const FamilyName = styled(RobotoText)`
  font-size: 15px;
  line-height: 18px;
  color: #79a3ad;
`;

export const AddressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 85%;
`;

export const AddressStyled = styled(RobotoText)`
  text-align: start;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  user-select: none;
`;
