import styled from "styled-components";
import { Card } from "antd";
import { RobotoText } from "../../Card/IncedentCard.styled";
import CardInfo from "../../Card/CardInfo/CardInfo";

export const CardStyled = styled(Card)`
  width: 300px;
  height: 70px;
  border: none;
  border-radius: 11px;
  background: #9c687a;
  margin: 20px;
  .ant-card-body {
    padding: 0;
    height: 100%;
    display: flex;
    flex-direction: row;
  }
`;

export const CardInner = styled.div`
  background: #ffffff;
  box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 90%;
  height: 100%;
  padding: 5px 15px;
  border: #9c687a 2px solid;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
`;

export const StartTimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -5px;
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

export const CardInfoStyled = styled(CardInfo)`
  margin-top: 0px;
`;

export const ArrowStyled = styled.img`
  margin: auto 0 auto 4px;
  user-select: none;
`;
