import styled from "styled-components";
import { Button } from "../../components/Buttons/MainButton.styled";

export const Wrapper = styled.div`
  width: 100vw;
  height: 13vh;
  background-color: #316c7a;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-around;
  p {
    font: "Roboto";
    font-style: normal;
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.2rem;
    letter-spacing: 6%;
    color: #ffffff;
  }
`;

export const AskForHelp = styled.div`
  width: 16vw;
  display: flex;
  justify-content: flex-start;
`;

export const TextStyled = styled.p``;

export const ImageStyled = styled.img`
  margin: auto 0;
  alt: "Header image";
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

export const Logo = styled(ImageStyled)`
  padding: 0 20vw;
`;

export const HeaderButton = styled(Button)`
  margin: auto 0;
  background: rgba(255, 255, 255, 0);
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;
