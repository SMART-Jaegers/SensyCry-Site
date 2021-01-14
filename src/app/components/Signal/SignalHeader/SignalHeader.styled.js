import styled from "styled-components";
import { ContentWrapper } from "../../ContentLabel/ContentLabel.styled";
import { ContentLabel } from "../../ContentLabel/ContentLabel.styled";

export const SignalDateWrapper = styled(ContentWrapper)`
  background: #afdccd;
  margin-top: 0;
  height: 40px;
  user-select: none;
`;

export const SignalDate = styled.div`
  display: flex;
  justify-content: space-between;
  width: 10vw;
  height: 40px;
  margin: auto 0px auto 50px;
`;

export const ContentLabelStyled = styled(ContentLabel)`
  margin: auto 0;
`;

export const ImageStyled = styled.img`
  margin: auto 0;
`;
