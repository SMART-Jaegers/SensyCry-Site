import styled from "styled-components";
import { Button } from "../../components/Buttons/MainButton.styled";
import { Header, Paragraph } from "../../components/Text/Text.styled";
import MainBackground from "../../images/main_background_main_page.png";
import SecondaryBackground from "../../images/secondary_background_main_page.png";

export const HomeMain = styled.div`
  width: 100vw;
  height: 87vh;
  background: url(${MainBackground}) no-repeat;
  -webkit-background-size: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
`;

// export const StopViolenceWrapper= styled.div`

// `;

export const MainButton = styled(Button)`
  background: rgba(255, 255, 255, 0);
  align-self: center;
`;

export const MainHeader = styled(Header)`
  font-weight: 70;
  font-size: 2.5rem;
  line-height: 2.93rem;
`;

export const Headings = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  margin-top: 5vh;
`;

export const Heading = styled.div`
  width: 100vw;
  background: #f0f9f6;
  display: flex;
  height: 35vh;
  margin-top: 5vh;
  /* justify-content: space-around; */
`;

export const HeadingParagraph = styled(Paragraph)`
  width: 30vw;
  margin-left: 15vw;
  align-self: center;
`;

export const ImageWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.15);
`;

export const HeadingImage = styled.div`
  align-self: center;
  margin-left: 15vw;
  width: 20vw;
  height: 28vh;
  /* opacity: 0.8;
  -moz-opacity: 0.8;
  filter: alpha(opacity=80) black;
  -khtml-opacity: 0.8;
  background-color: #000; */
`;
