import styled from "styled-components";
import { RobotoText } from "../IncedentCard.styled";

export const InfoContainer = styled.div`
  display: inline-flex;
  justify-content: space-around;
  margin-top: ${(props) => props.marginTop};
`;

export const TitleResult = styled(RobotoText)`
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
  color: ${(props) => props.color};
  margin-left: 13px;
  user-select: none;
`;

export const InfoResult = styled(RobotoText)`
  font-size: 14px;
  line-height: 16px;
  margin-left: 13px;
  color: ${(props) => props.color};
  user-select: none;
`;
