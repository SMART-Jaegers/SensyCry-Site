import styled from "styled-components";
import { ButtonStyled } from "../../../components/Buttons/MainButton.styled";
import { Button } from "antd";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-around;
  z-index: 1;
  height: 13vh;
  background-color: rgba(49, 108, 122, 0.75);
  p {
    font: "Roboto";
    font-style: normal;
    font-size: 1.1rem;
    font-weight: normal;
    line-height: 1.2rem;
    letter-spacing: 6%;
    color: #ffffff;
  }
`;

export const AskForHelp = styled.button`
  width: 16vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  :focus,
  :hover,
  :active {
    border: none;
    background: none;
    outline: none;
    cursor: pointer;
  }
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
