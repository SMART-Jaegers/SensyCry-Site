import styled from "styled-components";
import { Card, Button } from "antd";
import cartBackground from "../../images/card_background.svg";

export const RobotoText = styled.p`
  font-family: Roboto;
  letter-spacing: 0.06em;
`;

export const CardStyled = styled(Card)`
  position: relative;
  width: 300px;
  height: 201.5px;
  background-image: url(${cartBackground});
  background-repeat: no-repeat;
  border: none;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  margin: 20px 40px;
  .ant-card-body {
    padding: 0;
  }
`;

export const VerticalTextStyled = styled(RobotoText)`
  position: absolute;
  width: 50.87px;
  height: 15.65px;
  left: 255px;
  top: 55px;

  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
  color: #79a3ad;

  transform: rotate(-90deg);
  user-select: none;
`;

export const HeaderStyled = styled.div`
  height: 35.57px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const NumberIncedent = styled(RobotoText)`
  display: inline;
  font-size: 16px;
  line-height: 19px;
  color: #316c7a;
`;

export const DateTextStyled = styled(RobotoText)`
  display: inline;
  font-size: 12px;
  line-height: 14px;
  color: #79a3ad;
`;

export const AddressStyled = styled(RobotoText)`
  margin-top: 22px;
  margin-left: 26px;
  text-align: start;
  font-size: 16px;
  line-height: 19px;
`;

export const ResultStyled = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const CardButton = styled(Button)`
  display: block;
  background: #9c687a;
  border-radius: 6px;
  width: 250px;
  margin: 18px auto;
  font-family: Roboto;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.06em;
  color: #ffffff;
  :hover,
  :focus {
    border: 2px solid #9c687a;
    box-sizing: border-box;
    color: #9c687a;
  }

  :hover {
    transition: 0.5s;
    transform: scale(1.03);
  }
`;
