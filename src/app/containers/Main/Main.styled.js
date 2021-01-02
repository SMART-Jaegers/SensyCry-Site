import styled from "styled-components";
import { Layout } from "antd";

const { Content } = Layout;

export const ContentStyled = styled(Content)`
  background: #efeded;
`;

export const ContentLabel = styled.p`
  background: #79a3ad;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  text-align: left;

  margin-top: 15px;
  height: 41px;
  padding: 9px 40px;

  color: #ffffff;
`;

export const ContainerIncedent = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
