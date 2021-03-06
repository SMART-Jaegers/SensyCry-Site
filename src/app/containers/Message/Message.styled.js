import styled from "styled-components";

import { Layout, Image } from "antd";
import {
  ContentLabel,
  ContentWrapper,
} from "../../components/ContentLabel/ContentLabel.styled";
import AudioPlayer from "../../components/AudioPlayer/AudioPlayer";

const { Content } = Layout;

export const ContentStyled = styled(Content)`
  background: #efeded;
  width: 100%;
`;

export const ContentLabelMessage = styled(ContentLabel)`
  margin: auto 0;
  color: #316c7a;
`;

export const ContentLabelConclusion = styled(ContentLabelMessage)`
  margin: auto 15px auto 40px;
`;

export const ContentWrapperMessage = styled(ContentWrapper)``;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 18vw;
  min-width: 14vw;
  margin: auto 0px auto 50px;
`;

export const MessageInfoWrapper = styled.div`
  background-color: #efeded;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: flex-start;
  height: 30vh;
`;

export const ConclusionInfoWrapper = styled(MessageInfoWrapper)`
  height: 10vh;
  user-select: none;
`;

export const GreenWrapper = styled(ContentWrapper)`
  margin-top: 0;
  display: flex;
  padding-left: 10px;
  align-items: center;
  background: #afdccd;
  user-select: none;
`;

export const DocumentAddressWraper = styled.div`
  margin-left: 50px;
  display: flex;
  max-width: 40vw;
`;

export const ImageStyled = styled.img`
  margin: 0, auto;
  user-select: none;
`;

export const DocumentName = styled(ContentLabelMessage)`
  font-size: 15px;
  color: #316c7a;
  margin-left: 10px;
`;

export const DateTimeWrapper = styled(TextWrapper)`
  width: 17vw;
  margin: auto 0px auto 40px;
`;

export const MessageInnerWrapper = styled.div`
  display: flex;
  margin-left: 50px;
  justify-content: space-between;
  align-items: center;
  width: ${({ width }) => width};
  user-select: none;
`;

export const AudioPlayerWrapper = styled.div`
  margin-left: 50px;
  max-width: 17vw;
  display: flex;
  justify-content: space-between;
`;

export const AudioPlayerStyled = styled(AudioPlayer)``;

export const MessageInnerParagraph = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.06em;

  color: ${({ color }) => color};
`;

export const MessageInnerTime = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.06em;
  color: ${({ color }) => color};
`;
