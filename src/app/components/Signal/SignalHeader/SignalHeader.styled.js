import styled from "styled-components";
import { Image } from "antd";
import { ContentWrapper } from "../../ContentLabel/ContentLabel.styled";

export const SignalDateWrapper = styled(ContentWrapper)`
  background: #afdccd;
  margin-top: 0;
`;

export const SignalDate = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20vw;
  margin: auto 0px auto 50px;
`;

export const ImageStyled = styled(Image)`
  margin: auto 0;
`;
