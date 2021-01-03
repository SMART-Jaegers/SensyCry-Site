import styled from "styled-components";
import { Layout } from "antd";

const { Content } = Layout;

export const ContentStyled = styled(Content)`
  background: #efeded;
  width: 100%;
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
  /* justify-content: space-around; */
  flex-wrap: wrap;
`;

export const CircleLoaderContainer = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
