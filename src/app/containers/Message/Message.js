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
} from "./Message.styled";
import document from "../../images/document.jpg";
import plus from "../../images/plus.svg";
import calendar from "../../images/calendar.jpg";
import pink_clock from "../../images/pink-clock.svg";
import scale_blue from "../../images/scale-blue.svg";
import AudioPlayer from "../../components/AudioPlayer/AudioPlayer";
import { useLocation } from "react-router-dom";

const MessageInfoInnerPeriod = ({
  period = "00:09:45",
  color = "#9c687a",
  picture,
  text = "протягом",
}) => {
  return (
    <MessageInnerWrapper width="15vw">
      <ImageStyled src={picture} />
      <MessageInnerParagraph color={color}>{text}</MessageInnerParagraph>
      <MessageInnerTime color={color}>{period}</MessageInnerTime>
    </MessageInnerWrapper>
  );
};

const MessageInfoInnerScale = ({
  scale = "75",
  color = "#316C7A",
  picture,
  text = "шкала",
}) => {
  return (
    <MessageInnerWrapper width="10vw">
      <ImageStyled src={picture} />
      <MessageInnerParagraph color={color}>{text}</MessageInnerParagraph>
      <MessageInnerParagraph color={color}>{scale}%</MessageInnerParagraph>
    </MessageInnerWrapper>
  );
};

const MessageInfo = ({
  date = "2020.10.26",
  time = "19:38:47",
  period = "00:09:45",
  scale = "75",
}) => {
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
        <MessageInfoInnerPeriod period={period} picture={pink_clock} />
        <AudioPlayer />
        <MessageInfoInnerScale scale={scale} picture={scale_blue} />
      </MessageInfoWrapper>
    </ContentStyled>
  );
};

const Message = () => {
  let location = useLocation();
  const data = location.state;
  // console.log(data);
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
