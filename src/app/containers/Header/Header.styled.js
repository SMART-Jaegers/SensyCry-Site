import styled from "styled-components";
import { ButtonStyled } from "../../components/Buttons/MainButton.styled";

export const Wrapper = styled.div`
  /* width: 100vw; */
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
  align-items: center;
`;

export const TextStyled = styled.p`
  user-select: none;
`;

export const ImageStyled = styled.img`
  alt: "Header image";
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding-top: 3px;
  margin-left: 10px;
  user-select: none;
`;

export const Logo = styled(ImageStyled)`
  /* padding: 0 20vw; */
  user-select: none;
`;

export const HeaderButton = styled(ButtonStyled)`
  margin: auto 0;
  background: rgba(255, 255, 255, 0);
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;
