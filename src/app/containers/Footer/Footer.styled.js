import styled from "styled-components";
import { Header, Paragraph } from "../../components/Text/Text.styled";

export const FooterStyled = styled.div`
  flex-direction: column;
  justify-content: space-between;
  width: 100vw;
`;

export const AskForHelp = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 5vh 10vw 0 10vw;
`;

export const HotLines = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 10vw 5vh 10vw;
`;

export const FooterBottom = styled.div`
  width: 100vw;
  background: linear-gradient(
    266.04deg,
    #316c7a 1.34%,
    rgba(49, 108, 122, 0.6) 100%
  );
  height: 12vh;
`;

export const FooterParagraph = styled(Paragraph)`
  font-weight: 200;
  font-size: 0.75rem;
  line-height: 0.875rem;
  color: rgba(0, 0, 0, 0.85);
  width: 31vw;
`;

export const HotLine = styled.div`
  display: flex;
  flex-direction: column;
  width: 31vw;
`;

export const HotLineHeaderPhone = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FooterHotLineHeader = styled(Header)`
  font-weight: 200;
  font-size: 1.375rem;
  line-height: 1.625rem;
  color: #000000;
`;

export const FooterHotLinePhone = styled(FooterHotLineHeader)`
  font-weight: 300;
  color: #316c7a;
`;

export const FooterMainHeader = styled(Header)`
  color: #316c7a;
  margin-left: -3px;
`;

export const CitiesLabel = styled.label`
  margin: auto 0 auto 10vw;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.1875rem;
  letter-spacing: 0.06rem;
  color: #000000;
`;

export const CitiesSelect = styled.select`
  border: 2px solid #316c7a;
  box-sizing: border-box;
  border-radius: 20px;
  width: 200px;
  height: 35px;
  text-align: center;
  margin-top: 3px;
  text-align-last: center;
`;
