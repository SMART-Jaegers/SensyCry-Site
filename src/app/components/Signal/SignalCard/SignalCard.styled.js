import styled from "styled-components";
import { Card, Image } from "antd";
import { RobotoText } from "../../Card/IncedentCard.styled";

export const CardStyled = styled(Card)`
  width: 290px;
  height: 70px;
  border: none;
  border-radius: 11px;
  background: #9c687a;
  margin: 20px;
  display: flex;
  .ant-card-body {
    padding: 0;
    height: 100%;
  }
`;

export const CardInner = styled.div`
  background: #ffffff;
  box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 94%;
  height: 100%;
  padding: 10px 20px;
  display: flex;
  justify-content: space-around;
`;

export const StartTimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleStartTime = styled(RobotoText)`
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
  color: #79a3ad;
  user-select: none;
`;

export const InfoStartTime = styled(RobotoText)`
  font-size: 16px;
  line-height: 19px;
  color: #79a3ad;
  user-select: none;
`;

export const ArrowStyled = styled(Image)`
  margin: auto 0;
`;
