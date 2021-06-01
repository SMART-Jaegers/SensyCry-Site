import React from "react";
import {
  ContentStyled,
  ContentLabelMessage,
  ContentWrapperMessage,
  TextWrapper,
  MessageInfoWrapper,
  GreenWrapper,
  ImageStyled,
  DocumentAddressWraper,
  DocumentName,
  ContentLabelConclusion,
  ConclusionInfoWrapper,
  MessageInnerWrapper,
  MessageInnerParagraph,
  MessageInnerTime,
  DateTimeWrapper,
  AudioPlayerStyled,
  AudioPlayerWrapper,
} from "./Message.styled";
import document from "../../images/document.svg";
import plus from "../../images/plus.svg";
import calendar from "../../images/calendar.svg";
import pink_clock from "../../images/pink-clock.svg";
import scale_blue from "../../images/scale-blue.svg";
import audio from "../../images/audio.svg";
import { useLocation } from "react-router-dom";

const MessageInfoInner = ({
  info = "00:09:45",
  color = "#9c687a",
  picture,
  text = "протягом",
  width = "15vw",
  type,
}) => {
  return (
    <MessageInnerWrapper width={width}>
      <ImageStyled src={picture} />
      <MessageInnerParagraph color={color}>{text}</MessageInnerParagraph>
      <MessageInnerTime color={color}>
        {info}
        {type === "scale" ? "%" : ""}
      </MessageInnerTime>
    </MessageInnerWrapper>
  );
};

const MessageInfo = ({
  date = "2020.10.26",
  time = "19:38:47",
  period = "00:09:45",
  scale = "75",
  audioPath,
  emotion,
}) => {
  const translateEmotion = () => {
    if (emotion === "angry") {
      return "злість";
    }
    if (emotion === "fear") {
      return "страх";
    }
    return emotion;
  };
  return (
    <ContentStyled>
      <GreenWrapper>
        <DateTimeWrapper>
          <ImageStyled src={calendar} />
          <ContentLabelMessage>{date}</ContentLabelMessage>
          <ContentLabelMessage>{time}</ContentLabelMessage>
        </DateTimeWrapper>
      </GreenWrapper>
      <MessageInfoWrapper>
        <MessageInfoInner info={period} picture={pink_clock} type="period" />
        <AudioPlayerWrapper>
          <ImageStyled src={audio} />
          <AudioPlayerStyled source={audioPath} />
        </AudioPlayerWrapper>

        <MessageInfoInner
          info={scale}
          picture={scale_blue}
          color="#316C7A"
          text={translateEmotion()}
          width="10vw"
          type="scale"
        />
      </MessageInfoWrapper>
    </ContentStyled>
  );
};

const Message = () => {
  let location = useLocation();
  const data = location.state;
  console.log(data);
  return (
    <ContentStyled>
      <ContentWrapperMessage>
        <TextWrapper>
          <ContentLabelMessage>№ {data.apartment.familyId}</ContentLabelMessage>
          <ContentLabelMessage>-</ContentLabelMessage>
          <ContentLabelMessage>{data.surname}</ContentLabelMessage>
        </TextWrapper>
      </ContentWrapperMessage>
      <MessageInfo
        date={data.dateIncedent}
        time={data.timeIncedent}
        period={data.duringTime}
        scale={data.accuracy}
        audioPath={data.nameRecord}
        emotion={data.pathRecord}
      />
      <GreenWrapper>
        <ContentLabelConclusion>Висновок</ContentLabelConclusion>
        <ImageStyled src={plus} />
      </GreenWrapper>
      <ConclusionInfoWrapper>
        <DocumentAddressWraper>
          <ImageStyled src={document} />
          <DocumentName> Висновок.docx</DocumentName>
        </DocumentAddressWraper>
      </ConclusionInfoWrapper>
    </ContentStyled>
  );
};

export default Message;
