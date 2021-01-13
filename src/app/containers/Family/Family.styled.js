import styled from "styled-components";
import { Layout, Image } from "antd";
// import CircleLoader from "react-spinners/CircleLoader";
import {
  ContentLabel,
  ContentWrapper,
} from "../../components/ContentLabel/ContentLabel.styled";
// import { Paragraph } from "../../components/Text/Text.styled";

const { Content } = Layout;

export const ContentStyled = styled(Content)`
  background: #efeded;
  width: 100%;
`;

export const ContentLabelFamily = styled(ContentLabel)`
  margin: auto 0;
  color: #316c7a;
`;

export const ContentLabelFamilySignal = styled(ContentLabelFamily)`
  user-select: none;
`;

export const ContentWrapperFamily = styled(ContentWrapper)``;

export const ContentWrapperSignals = styled(ContentWrapper)`
  margin-top: 0px;
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 18vw;
  min-width: 14vw;
  margin: auto 0px auto 50px;
`;

export const FamilyInfoWrapper = styled.div`
  background-color: #efeded;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: flex-start;
  height: 20vh;
`;

export const DocumentAddressWraper = styled.div`
  margin-left: 50px;
  display: flex;
  max-width: 40vw;
`;

export const ImageStyled = styled.img`
  margin: auto 0;
  user-select: none;
`;

export const ConclusionImageStyled = styled(ImageStyled)`
  cursor: pointer;
`;

export const DocumentName = styled(ContentLabelFamily)`
  font-size: 15px;
  color: #316c7a;
  margin-left: 10px;
  cursor: pointer;
  user-select: none;
`;

export const AddressName = styled(ContentLabelFamily)`
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  margin-left: 10px;
  color: #000;
`;
