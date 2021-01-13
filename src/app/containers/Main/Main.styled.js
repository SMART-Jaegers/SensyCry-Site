import styled from "styled-components";
import { Layout } from "antd";
import {
  ContentLabel,
  ContentWrapper,
} from "../../components/ContentLabel/ContentLabel.styled";

const { Content } = Layout;

export const ContentStyled = styled(Content)`
  background: #efeded;
  width: 100%;
`;

export const ContentWrapperMain = styled(ContentWrapper)``;

export const ContentLabelMain = styled(ContentLabel)`
  margin-left: 50px;
`;

export const ContainerIncedent = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const CircleLoaderContainer = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;
