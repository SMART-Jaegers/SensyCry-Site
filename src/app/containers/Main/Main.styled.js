import styled from "styled-components";
import { Layout } from "antd";
import {
  ContentLabel,
  ContentWrapper,
} from "../../components/ContentLabel/ContentLabel.styled";
import AudioPlayer from "react-h5-audio-player";

const { Content } = Layout;

export const AudioPlayerStyled = styled(AudioPlayer)`
  background: #ffffff;
  box-shadow: 0px 2px 7px rgba(49, 108, 122, 0.15);
  border-radius: 15.5px;
  width: 202px;
  height: 28px;
  padding: 0 0 0 17px;
`;

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
